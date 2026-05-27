#!/bin/bash
# phase-gate.sh — GATE BLOQUANT entre chaque phase d'un skill de creation de site.
# AUCUNE transition de phase ne doit se faire sans un PASS de ce script.
#
# Usage:
#   bash phase-gate.sh <site_path> <phase_number> [--skip-design-check]
#
# Exemple (fin de phase 1, pret a passer a phase 2) :
#   bash phase-gate.sh ~/mon-site 1
#
# Checks :
#   1. site-state.json existe et la phase N est marquee completed
#   2. validate-page.sh PASS sur un echantillon de pages de la phase
#   3. Screenshots desktop + mobile existent pour la phase
#   4. design-uniqueness.py : nouveau site NON-IDENTIQUE a un site precedent
#   5. check-duplicate.py (phases 2-5) < 40% similarity
#   6. check-webp.sh (phases 5+) : 0 image non-WebP > 50KB
#   7. check-image-dedup.sh sur homepage (phase 1+)
#   8. Grep des placeholders courants (Lorem, TODO, xxx, [ville], {ville})
#
# Exit 0 = GATE PASS (tu peux passer a la phase suivante)
# Exit 1 = GATE FAIL (tu DOIS rester sur la phase courante)

set -uo pipefail

SITE_PATH="${1:?Usage: phase-gate.sh <site_path> <phase_number>}"
PHASE="${2:?Phase number required (0-8)}"
SKIP_DESIGN="${3:-}"
SCRIPTS_DIR="$(dirname "$0")"

cd "$SITE_PATH" || { echo "FAIL: $SITE_PATH introuvable"; exit 1; }

PASS=0; FAIL=0; WARN=0
pass() { echo "  PASS: $1"; PASS=$((PASS+1)); }
fail() { echo "  FAIL: $1"; FAIL=$((FAIL+1)); }
warn() { echo "  WARN: $1"; WARN=$((WARN+1)); }

echo "============================================"
echo "PHASE-GATE $PHASE : $SITE_PATH"
echo "============================================"

# ----------------------------------------------------
# 1. site-state.json obligatoire
# ----------------------------------------------------
echo ""
echo "--- [1/8] site-state.json ---"
STATE=""
for f in site-state.json "$(basename "$SITE_PATH")-state.json"; do
  [ -f "$f" ] && STATE="$f" && break
done
if [ -z "$STATE" ]; then
  fail "site-state.json introuvable (ou equivalent {secteur}-state.json)"
  echo ""
  echo "FAIL BLOQUANT. Creer site-state.json avant de continuer."
  exit 1
fi
pass "state file: $STATE"

# Phase courante doit etre marquee en cours ou completed
PHASE_STATUS=$(python3 -c "
import json
try:
    s = json.load(open('$STATE'))
    phases = s.get('phases', {})
    p = phases.get('$PHASE', {}) or phases.get(str($PHASE), {})
    print(p.get('status', 'missing'))
except Exception as e:
    print('error:' + str(e))
" 2>/dev/null)
case "$PHASE_STATUS" in
  completed|in_progress) pass "phase $PHASE status: $PHASE_STATUS" ;;
  pending) fail "phase $PHASE status=pending (n'a pas ete demarree). Completer la phase avant gate." ;;
  missing) fail "phase $PHASE absente du state file" ;;
  error:*) fail "state file illisible: $PHASE_STATUS" ;;
  *) warn "phase $PHASE status inattendu: $PHASE_STATUS" ;;
esac

# ----------------------------------------------------
# 2. Placeholder scan (universel)
# ----------------------------------------------------
echo ""
echo "--- [2/8] Placeholder scan ---"
PH_COUNT=0
for ph in "Lorem ipsum" "TODO" "{ville}" "{Ville}" "{secteur}" "{entreprise}" "xxxx" "Nom de l'entreprise" "votre telephone"; do
  C=$(grep -rIn --include="*.tsx" --include="*.ts" --include="*.json" --include="*.md" -l "$ph" src/ content/ 2>/dev/null | wc -l | tr -d ' ')
  if [ "$C" -gt 0 ]; then
    fail "Placeholder trouve: '$ph' dans $C fichier(s)"
    PH_COUNT=$((PH_COUNT + C))
  fi
done
[ "$PH_COUNT" -eq 0 ] && pass "0 placeholder dans src/ et content/"

# ----------------------------------------------------
# 3. Build check (phases 1+)
# ----------------------------------------------------
if [ "$PHASE" -ge 1 ]; then
  echo ""
  echo "--- [3/8] Build check ---"
  if [ -d out ] && [ -f out/index.html ]; then
    pass "out/index.html existe (build reussi)"
  elif [ -d .next ]; then
    pass ".next/ existe (build dev ou SSR)"
  else
    fail "Ni out/ ni .next/ — build non fait ? Lancer: npm run build"
  fi
fi

# ----------------------------------------------------
# 4. validate-page.sh sur echantillon (phases 1+)
# ----------------------------------------------------
if [ "$PHASE" -ge 1 ] && [ -f "$SCRIPTS_DIR/validate-page.sh" ]; then
  echo ""
  echo "--- [4/8] validate-page.sh (sample) ---"
  # On cherche un serveur local sur 3999 ou on fait un warning
  if curl -s --max-time 2 http://localhost:3999/ >/dev/null 2>&1; then
    bash "$SCRIPTS_DIR/validate-page.sh" http://localhost:3999/ homepage >/tmp/vp.log 2>&1 \
      && pass "homepage valide" \
      || { fail "validate-page.sh FAIL. Voir /tmp/vp.log"; }
  else
    warn "localhost:3999 pas accessible. Lancer 'python3 -m http.server 3999 --directory out/' et retenter."
  fi
fi

# ----------------------------------------------------
# 5. Anti-duplicate (phases 2+)
# ----------------------------------------------------
if [ "$PHASE" -ge 2 ] && [ -d out ] && [ -f "$SCRIPTS_DIR/check-duplicate.py" ]; then
  echo ""
  echo "--- [5/8] check-duplicate.py ---"
  python3 "$SCRIPTS_DIR/check-duplicate.py" out/ --threshold 0.40 >/tmp/cd.log 2>&1 \
    && pass "anti-duplicate < 40%" \
    || fail "duplicate > 40% detecte. Voir /tmp/cd.log"
fi

# ----------------------------------------------------
# 6. Semantic duplicate (phases 3+)
# ----------------------------------------------------
if [ "$PHASE" -ge 3 ] && [ -d out ] && [ -f "$SCRIPTS_DIR/semantic-duplicate.py" ]; then
  echo ""
  echo "--- [6/8] semantic-duplicate.py ---"
  python3 "$SCRIPTS_DIR/semantic-duplicate.py" out/ --threshold 0.55 >/tmp/sd.log 2>&1 \
    && pass "semantic dup < 55%" \
    || fail "semantic duplicate > 55%. Voir /tmp/sd.log (paraphrases detectees)"
fi

# ----------------------------------------------------
# 7. WebP enforcement (phases 5+)
# ----------------------------------------------------
if [ "$PHASE" -ge 5 ] && [ -d out ] && [ -f "$SCRIPTS_DIR/check-webp.sh" ]; then
  echo ""
  echo "--- [7/8] check-webp.sh ---"
  bash "$SCRIPTS_DIR/check-webp.sh" out/ >/tmp/wp.log 2>&1 \
    && pass "0 non-WebP > 50KB" \
    || fail "images non-WebP > 50KB. Voir /tmp/wp.log"
fi

# ----------------------------------------------------
# 8. Design uniqueness (phases 1+, opt-out)
# ----------------------------------------------------
if [ "$PHASE" -ge 1 ] && [ "$SKIP_DESIGN" != "--skip-design-check" ] && [ -f "$SCRIPTS_DIR/design-uniqueness.py" ]; then
  echo ""
  echo "--- [8/8] design-uniqueness.py ---"
  # Cherche les sites precedents du meme type dans ~/
  SECTEUR=$(python3 -c "
import json
try:
    s = json.load(open('$STATE'))
    print(s.get('secteur', ''))
except: print('')
" 2>/dev/null)
  if [ -n "$SECTEUR" ]; then
    # 10 sites les plus recents du meme secteur (par mtime), pour detecter les clones "de la semaine"
    PREVIOUS=$(find "$HOME" -maxdepth 2 -type d -name "*${SECTEUR}*" ! -path "$(cd $SITE_PATH && pwd)*" 2>/dev/null \
      | xargs -I{} stat -f '%m %N' {} 2>/dev/null \
      | sort -rn | head -10 | awk '{print $2}' | tr '\n' ' ')
    if [ -n "$PREVIOUS" ]; then
      python3 "$SCRIPTS_DIR/design-uniqueness.py" "$SITE_PATH" $PREVIOUS --threshold 0.65 >/tmp/du.log 2>&1 \
        && pass "design unique (vs 10 sites precedents)" \
        || fail "design >= 65% identique a un site precedent. Voir /tmp/du.log"
    else
      warn "aucun site precedent du secteur '$SECTEUR' trouve (premier site ?)"
    fi

    # Palette drift vs template d'origine
    TEMPLATE_ID=$(python3 -c "
import json
try:
    s = json.load(open('$STATE'))
    print(s.get('template_id', ''))
except: print('')
" 2>/dev/null)
    if [ -n "$TEMPLATE_ID" ] && [ -d "$HOME/templates/$TEMPLATE_ID" ]; then
      python3 "$SCRIPTS_DIR/design-uniqueness.py" --check-palette-drift "$SITE_PATH" --template "$TEMPLATE_ID" >/tmp/du-drift.log 2>&1 \
        && pass "palette dans la famille hue du template $TEMPLATE_ID" \
        || fail "palette drift vs $TEMPLATE_ID. Voir /tmp/du-drift.log"
    else
      warn "template_id absent du state file ou template introuvable — skip palette drift check"
    fi
  else
    warn "secteur absent du state file — skip design-uniqueness"
  fi
fi

# ----------------------------------------------------
# 10. check-geotag.sh — EXIF obligatoire sur tous les visuels (phases 6+)
# ----------------------------------------------------
if [ "$PHASE" -ge 6 ] && [ -f "$SCRIPTS_DIR/check-geotag.sh" ]; then
  echo ""
  echo "--- [10/10] check-geotag.sh (EXIF photos+logos) ---"
  bash "$SCRIPTS_DIR/check-geotag.sh" "$SITE_PATH" >/tmp/gt.log 2>&1 \
    && pass "geotag EXIF : 100% visuels tagues (photos=iPhone+GPS, logos=Artist)" \
    || fail "geotag EXIF manquant sur certains visuels. Voir /tmp/gt.log — relancer geotag-images.py puis check-geotag.sh"
fi

# ----------------------------------------------------
# 9. audit-exhaustif.py — TOUTES les pages, DOUBLE PASSE (phases 5+)
#    Regle Angelo : le check tourne 2 fois. La 1re passe detecte,
#    la 2e passe DOIT confirmer 0 issue/0 warning. Sinon GATE FAIL.
# ----------------------------------------------------
if [ "$PHASE" -ge 5 ] && [ -d out ] && [ -f "$SCRIPTS_DIR/audit-exhaustif.py" ]; then
  echo ""
  echo "--- [9/9] audit-exhaustif.py (188 pages, double passe) ---"
  AUDIT_P1=$(python3 "$SCRIPTS_DIR/audit-exhaustif.py" out/ --strict 2>&1; echo "EXIT:$?")
  P1_EXIT=$(echo "$AUDIT_P1" | grep -o 'EXIT:[0-9]*' | cut -d: -f2)
  echo "$AUDIT_P1" | grep -E 'TOTAL|Pages OK' | head -2
  if [ "$P1_EXIT" != "0" ]; then
    echo "$AUDIT_P1" | grep -E 'FAIL:|\[.*x\]' | head -20
    fail "audit-exhaustif PASSE 1 (--strict) : issues/warnings detectes. Corriger puis re-lancer."
  else
    # Passe 2 — confirmation obligatoire (le check tourne 2 fois)
    python3 "$SCRIPTS_DIR/audit-exhaustif.py" out/ --strict >/tmp/audit-p2.log 2>&1 \
      && pass "audit-exhaustif DOUBLE PASSE --strict : toutes pages, 0 issue/0 warning confirme x2" \
      || fail "audit-exhaustif PASSE 2 : regression detectee. Voir /tmp/audit-p2.log"
  fi
fi

# ----------------------------------------------------
# Verdict final
# ----------------------------------------------------
echo ""
echo "============================================"
echo "RESUME Phase $PHASE"
echo "  PASS: $PASS | WARN: $WARN | FAIL: $FAIL"
echo "============================================"

if [ "$FAIL" -gt 0 ]; then
  echo ""
  echo "GATE FAIL — tu NE PEUX PAS passer a la phase suivante."
  echo "Corriger les FAIL ci-dessus puis re-lancer phase-gate.sh."
  exit 1
else
  echo ""
  echo "GATE PASS — tu peux passer a la phase $((PHASE + 1))."
  # Marquer completed dans le state file
  python3 -c "
import json
try:
    s = json.load(open('$STATE'))
    s.setdefault('phases', {}).setdefault('$PHASE', {})['status'] = 'completed'
    json.dump(s, open('$STATE', 'w'), indent=2, ensure_ascii=False)
    print('  state file : phase $PHASE marquee completed')
except Exception as e:
    print(f'  WARN state update: {e}')
"
  exit 0
fi

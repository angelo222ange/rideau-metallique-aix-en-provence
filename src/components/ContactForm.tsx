"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("https://lioai.app.n8n.cloud/webhook/drm-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "depannage-rideau-metallique-aix-en-provence.fr-contact-form",
          brand: "DRM Aix-en-Provence",
          city: "Aix-en-Provence",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className="bg-[#2D3F2A] text-white rounded-[12px] p-6 md:p-8">
        <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-2">Demande envoyee</h3>
        <p className="text-white/90 text-[15px]">
          Notre equipe DRM Aix-en-Provence vous recontacte sous 1 heure en horaires ouvrables.
          Pour une urgence rideau metallique, vous pouvez aussi nous appeler directement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          required
          aria-label="Nom complet"
          className="bg-[#F5F1E6] text-[#181C16] placeholder-[#4F5648] text-[15px] rounded-[8px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#C28840]/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          aria-label="Email"
          className="bg-[#F5F1E6] text-[#181C16] placeholder-[#4F5648] text-[15px] rounded-[8px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#C28840]/40"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          required
          aria-label="Telephone"
          className="bg-[#F5F1E6] text-[#181C16] placeholder-[#4F5648] text-[15px] rounded-[8px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#C28840]/40"
        />
        <select
          name="prestation"
          required
          aria-label="Prestation"
          className="bg-[#F5F1E6] text-[#181C16] text-[15px] rounded-[8px] px-4 h-12 outline-none focus:ring-2 focus:ring-[#C28840]/40"
          defaultValue=""
        >
          <option value="" disabled>Type d&apos;intervention</option>
          <option value="depannage">Depannage urgent</option>
          <option value="installation">Installation rideau neuf</option>
          <option value="reparation">Reparation</option>
          <option value="motorisation">Motorisation</option>
          <option value="deblocage">Deblocage</option>
          <option value="entretien">Entretien / contrat</option>
          <option value="fabrication">Fabrication sur-mesure</option>
          <option value="autre">Autre / devis</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={5}
        placeholder="Decrivez votre besoin (type de rideau, marque, panne constatee, adresse...)"
        required
        aria-label="Message"
        className="bg-[#F5F1E6] text-[#181C16] placeholder-[#4F5648] text-[15px] rounded-[8px] px-4 py-3 outline-none focus:ring-2 focus:ring-[#C28840]/40 resize-none"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="self-start inline-flex items-center justify-center h-12 px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px] transition-colors disabled:opacity-60"
      >
        {state === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      {state === "err" && (
        <p className="text-[#A66E2E] text-[14px]">
          Echec d&apos;envoi du formulaire. Reessayez ou ecrivez-nous directement par email.
        </p>
      )}
    </form>
  );
}

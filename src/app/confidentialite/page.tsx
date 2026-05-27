import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Politique de confidentialite - ${siteConfig.brand}`,
  description: `Politique de confidentialite et gestion des donnees personnelles du site ${siteConfig.domain}.`,
  alternates: { canonical: siteConfig.url + "/confidentialite/" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="[ DONNEES PERSONNELLES — RGPD ]"
          headlinePre="Politique de"
          headlineHighlight="confidentialite"
          body={`${siteConfig.brand} respecte vos donnees personnelles. Aucune revente, aucun cookie de tracking publicitaire.`}
          ctas={[]}
          bgImage="/images/gallery/fabrication-rideau-metallique-france.webp"
          bgAlt="Confidentialite DRM Aix-en-Provence"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Confidentialite" }]}
        />
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-[820px] mx-auto text-[#050505] text-[16px] leading-[1.8]">
              <h2 className="h2-sm mt-6 mb-3 text-[#050505]">Collecte des donnees</h2>
              <p className="text-[#050505]/75">
                Les donnees collectees via le formulaire de contact (nom, telephone, email, message) sont utilisees exclusivement pour repondre a votre demande de devis ou d&apos;intervention. Elles ne sont jamais revendues ni cedees a un tiers commercial.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Conservation</h2>
              <p className="text-[#050505]/75">
                Les donnees sont conservees pour la duree necessaire au traitement de votre demande, puis archivees pendant 3 ans a des fins de prospection commerciale (offres et conseils {siteConfig.brand}). Vous pouvez vous opposer a cet usage a tout moment.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Droits RGPD</h2>
              <p className="text-[#050505]/75">
                Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression et d&apos;opposition sur vos donnees personnelles. Adressez votre demande a : {siteConfig.email}.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Cookies</h2>
              <p className="text-[#050505]/75">
                Le site {siteConfig.domain} n&apos;utilise pas de cookies de tracking publicitaire. Seuls des cookies techniques strictement necessaires au fonctionnement du site sont deposes.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Contact</h2>
              <p className="text-[#050505]/75">
                Pour toute question relative a vos donnees personnelles, ecrivez a {siteConfig.email}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

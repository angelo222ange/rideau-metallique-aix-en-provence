import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Politique de confidentialite - DRM ${siteConfig.city}`,
  description: `Politique de confidentialite et gestion des donnees personnelles du site ${siteConfig.domain}.`,
  alternates: { canonical: siteConfig.url + "/confidentialite/" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-[#1A1F18] text-white pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-white">Politique de confidentialite</h1>
          </div>
        </section>
        <section className="py-12 md:py-16 px-5 md:px-10">
          <div className="max-w-[820px] mx-auto prose-content text-[#181C16] text-[15px] leading-[1.8]">
            <h2 className="text-[22px] font-semibold mt-6 mb-3">Collecte des donnees</h2>
            <p>
              Les donnees collectees via le formulaire de contact (nom, telephone, email, message)
              sont utilisees exclusivement pour repondre a votre demande de devis ou d&apos;intervention.
              Elles ne sont jamais revendues ni cedees a un tiers commercial.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Conservation</h2>
            <p>
              Les donnees sont conservees pour la duree necessaire au traitement de votre demande,
              puis archivees pendant 3 ans a des fins de prospection commerciale (offres et conseils
              DRM {siteConfig.city}). Vous pouvez vous opposer a cet usage a tout moment.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Droits RGPD</h2>
            <p>
              Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification,
              de suppression et d&apos;opposition sur vos donnees personnelles.
              Adressez votre demande a : {siteConfig.email}.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Cookies</h2>
            <p>
              Le site {siteConfig.domain} n&apos;utilise pas de cookies de tracking publicitaire.
              Seuls des cookies techniques strictement necessaires au fonctionnement du site sont deposes.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Contact</h2>
            <p>
              Pour toute question relative a vos donnees personnelles, ecrivez a {siteConfig.email}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Mentions legales - DRM ${siteConfig.city}`,
  description: `Mentions legales du site ${siteConfig.domain} : editeur, hebergeur, propriete intellectuelle.`,
  alternates: { canonical: siteConfig.url + "/mentions-legales/" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-[#1A1F18] text-white pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-white">Mentions legales</h1>
          </div>
        </section>
        <section className="py-12 md:py-16 px-5 md:px-10">
          <div className="max-w-[820px] mx-auto prose-content text-[#181C16] text-[15px] leading-[1.8]">
            <h2 className="text-[22px] font-semibold mt-6 mb-3">Editeur du site</h2>
            <p>
              Le site {siteConfig.domain} est edite par {siteConfig.fullName}, entreprise specialisee
              dans le depannage, l&apos;installation et la fabrication de rideaux metalliques en Pays d'Aix.
            </p>
            <p>
              Adresse : {siteConfig.address || `${siteConfig.postalCode} ${siteConfig.city}`}<br />
              Email : {siteConfig.email}<br />
              {siteConfig.phonePublic && siteConfig.phone ? `Telephone : ${siteConfig.phone}` : ""}
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Hebergement</h2>
            <p>
              Le site est heberge sur un serveur dedie operationnel en France
              (IP 176.31.163.195, OVH SAS, 2 rue Kellermann, 59100 Roubaix - France).
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Propriete intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus du site (textes, images, logos, photos d&apos;intervention) est la propriete
              de {siteConfig.fullName} ou de ses partenaires. Toute reproduction sans autorisation est interdite.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Responsabilite</h2>
            <p>
              {siteConfig.fullName} s&apos;efforce de maintenir les informations du site exactes et a jour.
              Les prix indicatifs sont susceptibles d&apos;evoluer. Seul le devis remis avant intervention
              fait foi.
            </p>

            <h2 className="text-[22px] font-semibold mt-8 mb-3">Loi applicable</h2>
            <p>
              Le present site est regi par la loi francaise. En cas de litige, et apres tentative
              de resolution amiable, competence est donnee aux tribunaux francais.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}

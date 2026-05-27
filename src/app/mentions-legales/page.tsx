import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Mentions legales - ${siteConfig.brand}`,
  description: `Mentions legales du site ${siteConfig.domain} : editeur, hebergeur, propriete intellectuelle.`,
  alternates: { canonical: siteConfig.url + "/mentions-legales/" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="[ INFORMATIONS LEGALES ]"
          headlinePre="Mentions"
          headlineHighlight="legales"
          body={`Informations sur l'editeur, l'hebergeur et la propriete intellectuelle du site ${siteConfig.domain}.`}
          ctas={[]}
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          bgAlt="Mentions legales DRM Aix-en-Provence"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Mentions legales" }]}
        />
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-[820px] mx-auto text-[#050505] text-[16px] leading-[1.8]">
              <h2 className="h2-sm mt-6 mb-3 text-[#050505]">Editeur du site</h2>
              <p className="text-[#050505]/75">
                Le site {siteConfig.domain} est edite par {siteConfig.fullName}, entreprise specialisee
                dans le depannage, l&apos;installation, la motorisation et la fabrication de rideaux metalliques en Pays d&apos;Aix.
              </p>
              <p className="text-[#050505]/75 mt-3">
                Adresse : {siteConfig.address}<br />
                Email : {siteConfig.email}<br />
                {siteConfig.phonePublic && siteConfig.phone ? `Telephone : ${siteConfig.phone}` : "Telephone : sur demande via le formulaire de contact"}
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Hebergement</h2>
              <p className="text-[#050505]/75">
                Le site est heberge sur un serveur dedie operationnel en France (IP 176.31.163.195, OVH SAS, 2 rue Kellermann, 59100 Roubaix).
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Propriete intellectuelle</h2>
              <p className="text-[#050505]/75">
                L&apos;ensemble des contenus du site (textes, images, logos, photos d&apos;intervention) est la propriete
                de {siteConfig.fullName} ou de ses partenaires. Toute reproduction sans autorisation est interdite.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Responsabilite</h2>
              <p className="text-[#050505]/75">
                {siteConfig.fullName} s&apos;efforce de maintenir les informations du site exactes et a jour.
                Les prix indicatifs sont susceptibles d&apos;evoluer. Seul le devis remis avant intervention fait foi.
              </p>

              <h2 className="h2-sm mt-10 mb-3 text-[#050505]">Loi applicable</h2>
              <p className="text-[#050505]/75">
                Le present site est regi par la loi francaise. En cas de litige, et apres tentative de resolution amiable, competence est donnee aux tribunaux francais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

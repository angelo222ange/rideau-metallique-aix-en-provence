import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/home/CtaSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact - Devis gratuit ${siteConfig.brand}`,
  description: `Demandez votre devis gratuit a ${siteConfig.brand} : depannage, installation, motorisation et fabrication de rideaux metalliques en Pays d'Aix. Reponse en moins de 24h.`,
  alternates: { canonical: siteConfig.url + "/contact/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: siteConfig.url + "/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <PageHeader
          eyebrow="[ CONTACT — DEVIS EN 24H ]"
          headlinePre="Demandez votre"
          headlineHighlight="devis gratuit"
          headlinePost={`a ${siteConfig.brand}`}
          body={`${siteConfig.brand} repond a chaque demande en moins de 24h. Devis ferme signe sur place avant intervention, garantie 2 ans pieces. Couverture complete : Aix centre, Les Milles, Gardanne, Le Tholonet, Puyricard et tout le Pays d'Aix.`}
          ctas={[]}
          bgImage="/images/gallery/depannage-rideau-metallique-drm-services.webp"
          bgAlt="Contact DRM Aix-en-Provence"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
        />

        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
              <div>
                <div className="eyebrow mb-6">[ FORMULAIRE ]</div>
                <h2 className="mb-4">Decrivez votre besoin</h2>
                <p className="text-[16px] text-[#050505]/65 mb-8 leading-[1.55]">
                  Type de fermeture, marque du moteur, urgence ou non, photos si possible. Plus vous nous donnez de details, plus notre devis est precis et rapide.
                </p>
                <ContactForm />
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#fbfbfb] rounded-[20px] p-6 lg:p-8">
                  <h3 className="h2-sm mb-4">Adresse de l&apos;atelier</h3>
                  <p className="text-[15px] text-[#050505]/70 leading-[1.55]">{siteConfig.address}</p>
                  <p className="text-[14px] text-[#050505]/55 mt-3">Couvre Aix centre, Mazarin, Vieil-Aix, Sextius-Mirabeau, Les Milles, Gardanne, Le Tholonet, Puyricard, et tout le Pays d&apos;Aix.</p>
                </div>
                <div className="bg-[#fbfbfb] rounded-[20px] p-6 lg:p-8">
                  <h3 className="h2-sm mb-4">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-[15px] text-[#C28840] font-semibold hover:underline break-all">{siteConfig.email}</a>
                  <p className="text-[14px] text-[#050505]/55 mt-3">Reponse sous 24h en jours ouvres.</p>
                </div>
                <div className="bg-[#050505] text-white rounded-[20px] p-6 lg:p-8">
                  <h3 className="h2-sm text-white mb-4">Horaires</h3>
                  <p className="text-[15px] text-white/75 leading-[1.55]">{siteConfig.openingHours}</p>
                  <p className="text-[14px] text-white/55 mt-3">Intervention sous {siteConfig.delai} min en horaires ouvrables. Sous 1h pour les urgences nuit/weekend/jour ferie.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact - Depannage rideau metallique ${siteConfig.city}`,
  description: `Demandez votre devis gratuit a DRM ${siteConfig.city} : depannage, installation, motorisation et fabrication de rideaux metalliques en Pays d'Aix. Reponse en moins de 24h.`,
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
        <section className="bg-[#1A1F18] text-white pt-16 pb-12 md:pt-24 md:pb-16 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <nav className="text-[13px] text-white/70 mb-4">
              <a href="/" className="hover:text-white">Accueil</a>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="text-white max-w-[820px]">Contact DRM {siteConfig.city}</h1>
            <p className="text-white/80 text-[17px] md:text-[18px] mt-5 max-w-[720px]">
              Demandez votre devis gratuit en moins de 24h. Notre equipe DRM {siteConfig.city} repond sous 1 heure en horaires ouvrables, 24h/24 en urgence.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block bg-[#F5F1E6] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648] mb-4">
                [ Devis gratuit ]
              </span>
              <h2 className="text-[#181C16] mb-4">Decrivez votre besoin rideau metallique</h2>
              <p className="text-[#4F5648] text-[16px] leading-relaxed mb-6">
                Un rideau metallique bloque, une motorisation a installer, un atelier a equiper en
                rideau industriel ? Remplissez le formulaire ci-dessous, notre equipe DRM {siteConfig.city} vous
                rappelle pour etablir un pre-diagnostic et programmer une intervention.
              </p>
              <ContactForm />
            </div>

            <aside className="bg-[#F5F1E6] rounded-[12px] p-6 md:p-10 flex flex-col gap-6 lg:sticky lg:top-24">
              <h3 className="text-[#181C16] text-[22px] md:text-[26px] font-semibold">
                Contact direct
              </h3>
              <ul className="flex flex-col gap-5">
                {siteConfig.phonePublic && siteConfig.phone && (
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-white text-[#C28840] inline-flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[#4F5648] text-[13px] uppercase tracking-[0.15em]">Telephone</span>
                      <a href={siteConfig.phoneLink} className="text-[#181C16] text-[17px] font-semibold hover:text-[#C28840]">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#C28840] inline-flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4F5648] text-[13px] uppercase tracking-[0.15em]">Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-[#181C16] text-[16px] font-semibold hover:text-[#C28840]">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#C28840] inline-flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4F5648] text-[13px] uppercase tracking-[0.15em]">Zone</span>
                    <span className="text-[#181C16] text-[16px] font-semibold">
                      {siteConfig.city} ({siteConfig.postalCode}) + Pays d'Aix
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-white text-[#C28840] inline-flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#4F5648] text-[13px] uppercase tracking-[0.15em]">Horaires</span>
                    <span className="text-[#181C16] text-[16px] font-semibold">{siteConfig.openingHours}</span>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}

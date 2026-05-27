import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="section bg-[#050505] text-white min-h-[80vh] flex items-center">
          <div className="container">
            <div className="max-w-[820px]">
              <div className="eyebrow on-dark mb-6">[ ERREUR 404 ]</div>
              <div className="text-[#C28840] text-[120px] md:text-[180px] font-bold leading-[0.9] mb-6">404</div>
              <h1 className="text-white mb-6">
                Page <span className="text-[#C28840]">introuvable</span>
              </h1>
              <p className="text-white/75 text-[18px] mb-10 max-w-[640px]">
                La page que vous cherchez n&apos;existe pas ou a ete deplacee. Retournez sur l&apos;accueil de {siteConfig.brand} ou contactez-nous pour votre demande rideau metallique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="btn-primary">
                  Retour a l&apos;accueil <span className="btn-arrow-square"><ArrowRight /></span>
                </Link>
                <Link href="/contact/" className="btn-white">
                  Nous contacter <span className="btn-arrow-square"><ArrowRight /></span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white py-20 md:py-24 px-5 md:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="text-[#2D3F2A] text-[72px] md:text-[96px] font-bold mb-4">404</div>
          <h1 className="text-[#181C16] mb-4">Page introuvable</h1>
          <p className="text-[#4F5648] text-[17px] mb-8">
            La page que vous cherchez n&apos;existe pas ou a ete deplacee. Retournez sur la page d&apos;accueil
            ou contactez DRM {siteConfig.city} pour votre demande rideau metallique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center justify-center h-12 px-6 bg-[#2D3F2A] hover:bg-[#1F2C1D] text-white text-[15px] font-semibold rounded-[8px]">
              Retour a l&apos;accueil
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px]">
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

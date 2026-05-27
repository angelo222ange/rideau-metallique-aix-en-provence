import Image from "next/image";
import { clientLogos } from "@/content/site";

export default function ClientLogosMarquee() {
  // Duplicate the logo set so the marquee loops seamlessly
  const loop = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];
  return (
    <section className="bg-[#fbfbfb] py-10 overflow-hidden">
      <div className="marquee-track">
        {loop.map((src, i) => (
          <div key={i} className="flex items-center justify-center w-[140px] h-[40px] opacity-60">
            <Image
              src={src}
              alt="Client logo"
              width={140}
              height={40}
              className="object-contain max-h-[40px] w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

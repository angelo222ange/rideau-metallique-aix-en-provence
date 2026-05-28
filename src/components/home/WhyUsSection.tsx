import Image from "next/image";
import { whyUs } from "@/content/site";

export default function WhyUsSection() {
  return (
    <section className="relative py-24 lg:py-32 px-6 sm:px-10 lg:px-12 overflow-hidden">
      {/* BG image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={whyUs.bg} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#050505]/55" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="eyebrow on-dark mb-6">{whyUs.eyebrow}</div>
            <h2 className="text-white">{whyUs.heading}</h2>
          </div>
          <p className="text-[16px] text-white/75 leading-[1.55] max-w-[460px] lg:pt-2">
            {whyUs.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] p-7 flex flex-col gap-3 min-h-[230px]"
            >
              <span className="w-10 h-10 flex items-center justify-center mb-3">
                <Image src={item.icon} alt="" width={38} height={38} />
              </span>
              <h3 className="text-[#050505]">{item.title}</h3>
              <p className="text-[15px] text-[#050505]/55 leading-[1.5]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

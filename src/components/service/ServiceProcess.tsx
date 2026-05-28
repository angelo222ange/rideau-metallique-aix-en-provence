interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export default function ServiceProcess({
  eyebrow,
  heading,
  steps,
  image,
  imageAlt,
}: {
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow mb-6">{eyebrow}</div>
            <h2 className="mb-8">{heading}</h2>
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
              <img src={image} alt={imageAlt} title={imageAlt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <ol className="flex flex-col gap-6">
            {steps.map((step) => (
              <li key={step.number} className="bg-[#fbfbfb] rounded-[24px] p-6 lg:p-8 flex gap-5">
                <span className="shrink-0 w-12 h-12 rounded-full bg-[#C28840] text-white flex items-center justify-center font-bold text-[18px]">
                  {step.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="h2-sm text-[#050505]">{step.title}</h3>
                  <p className="text-[15px] text-[#050505]/65 leading-[1.55]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

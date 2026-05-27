// Solvance — all site content extracted verbatim from oma-solvance.framer.website

export const nav = {
  logo: { src: "/solvance/brand/logo-dark.svg", alt: "Solvance", width: 132, height: 39 },
  logoLight: { src: "/solvance/brand/logo-light.svg", alt: "Solvance" },
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
  cta: { label: "START A PROJECT", href: "/contact" },
};

export const hero = {
  eyebrow: "EMPOWERING GREEN ENERGY SINCE 1990",
  headlinePre: "Switch to",
  headlineHighlight: "Solar",
  headlinePost: "& enjoy energy independence",
  body: "Reliable solar solutions that cut your bills and reduce your carbon footprint.",
  ctas: [
    { label: "START A PROJECT", href: "/contact", variant: "primary" as const },
    { label: "LEARN MORE", href: "/about", variant: "white" as const },
  ],
  proof: "Trusted by +500 residential homes",
  avatars: [
    "/solvance/hero/avatar-1.png",
    "/solvance/hero/avatar-2.png",
    "/solvance/hero/avatar-3.png",
  ],
  bg: "/solvance/hero/bg-solar-field.png",
};

export const clientLogos = [
  "/solvance/client-logos/client-1.svg",
  "/solvance/client-logos/client-2.svg",
  "/solvance/client-logos/client-3.svg",
  "/solvance/client-logos/client-4.svg",
  "/solvance/client-logos/client-5.svg",
  "/solvance/client-logos/client-6.svg",
];

export const aboutSection = {
  eyebrow: "ABOUT US",
  heading: "Clean Energy for Homes & Businesses",
  body: "Our mission is simple—to help you reduce energy costs, lower your carbon footprint, and gain energy independence with cutting-edge technology and expert service.",
  cta: { label: "START A PROJECT", href: "/contact" },
  testimonial: {
    customer: "Homey",
    customerLogoTone: "green",
    quote: "Solvance is helping our business save $10k yearly in our total electricity billing",
    cta: { label: "Read Testimonials", href: "/#testimonials" },
  },
  manImage: "/solvance/about/man-on-roof.jpg",
  roofImage: "/solvance/about/solar-roof.png",
};

export const whatWePower = {
  eyebrow: "WHAT WE POWER",
  heading: "We bring renewable energy to every space",
  body: "Power your home with clean, renewable energy. Our solar solutions help you cut electricity costs, reduce grid reliance, and enjoy a more sustainable lifestyle.",
  video: "/solvance/what-we-power/showcase.mp4",
  videoPoster: "/solvance/what-we-power/showcase-poster.png",
  features: [
    {
      title: "Smarter Energy",
      body: "Lower your utility bills and dramatically increase home efficiency with clean power.",
    },
    {
      title: "Eco Power",
      body: "Go green and confidently power your home with clean, renewable solar energy.",
    },
    {
      title: "Energy Independence",
      body: "Produce your own power and reliably protect against unpredictable rising costs.",
    },
  ],
};

export const services = {
  eyebrow: "SERVICES",
  heading: "We bring renewable energy to every space",
  tiles: [
    {
      title: "Solar system installation",
      body: "Generate your own clean energy. Harness the sun's power to lower electricity bills and reduce carbon emissions with our expert solar installations.",
      bullets: [
        "High-performance solar panels from trusted manufacturers",
        "Expert installation and ongoing support",
        "Grid-tied and off-grid solar system options",
        "Advanced monitoring for real-time energy tracking",
      ],
      cta: { label: "START A PROJECT", href: "/contact" },
      image: "/solvance/services/solar-install.png",
    },
    {
      title: "Battery storage solutions",
      body: "Store energy for when you need it most. Maximize your energy independence by storing excess solar power for use during peak hours or outages.",
      bullets: [
        "Reliable battery storage for homes and businesses",
        "Reduce reliance on the grid and lower energy costs",
        "Seamless integration with new or existing solar systems",
        "Backup power during outages for uninterrupted electricity",
        "Smart energy management with remote monitoring",
      ],
      cta: { label: "START A PROJECT", href: "/contact" },
      image: "/solvance/services/battery-storage.png",
    },
    {
      title: "EV charger installation",
      body: "Charge your electric vehicle with ease. Fast, efficient, and future-ready EV charging solutions for homes and businesses.",
      bullets: [
        "Home and workplace EV charging solutions",
        "Smart charging options with mobile app connectivity",
        "Fast-charging technology for quick power-ups",
        "Compatible with all major EV brands",
        "Weather-resistant and durable charger designs",
      ],
      cta: { label: "START A PROJECT", href: "/contact" },
      image: "/solvance/services/ev-charger.png",
    },
  ],
};

export const whyUs = {
  eyebrow: "WHY US",
  heading: "Why choose Solvance?",
  body: "We take pride in delivering high-quality, future-proof renewable energy solutions. With years of experience and a team of certified experts.",
  bg: "/solvance/why-us/bg-roof.png",
  items: [
    { title: "Expert installation", body: "Our team is skilled in designing and implementing energy systems for all types of properties.", icon: "/solvance/why-us/icon-expert.svg" },
    { title: "Premium technology", body: "We partner with leading manufacturers to bring you the best solar, battery, and EV charging solutions.", icon: "/solvance/why-us/icon-tech.svg" },
    { title: "Long-term savings", body: "Our energy solutions are designed to reduce electricity costs and maximize efficiency.", icon: "/solvance/why-us/icon-savings.svg" },
    { title: "End-to-end support", body: "From consultation to installation and maintenance, we provide full-service solutions tailored to your needs.", icon: "/solvance/why-us/icon-support.svg" },
    { title: "Financing options available", body: "Flexible payment plans and financing solutions to make renewable energy accessible for everyone.", icon: "/solvance/why-us/icon-financing.svg" },
    { title: "Proven track record", body: "Thousands of successful installations and satisfied customers across residential, commercial, and industrial sectors.", icon: "/solvance/why-us/icon-record.svg" },
  ],
};

export const projects = {
  eyebrow: "PROJECTS",
  heading: "We bring renewable energy to every space",
  topCta: { label: "VIEW ALL PROJECTS", href: "/projects" },
  tiles: [
    {
      title: "Amazing Textiles Manufacturing Plant",
      body: "To reduce operational costs and commit to green manufacturing, Vaibhav Textiles integrated a high-efficiency 500 kW solar array into their production facility.",
      tags: [
        { label: "Solar panels", icon: "solar" as const },
        { label: "Battery storage", icon: "battery" as const },
        { label: "EV Charger", icon: "ev" as const },
      ],
      stats: [
        { label: "POWER RATING", value: "10", unit: "KVA" },
        { label: "BATTERIES", value: "12.5", unit: "KW" },
        { label: "SOLAR PANELS", value: "20", unit: "Panels" },
        { label: "ANNUAL SAVINGS", value: "$1,500", unit: "" },
        { label: "ROI", value: "6", unit: "Years" },
        { label: "CO₂ SAVED/YR", value: "6", unit: "tons of CO₂" },
      ],
      images: [
        "/solvance/projects/p1-square.png",
        "/solvance/projects/p1-a.jpg",
        "/solvance/projects/p1-b.jpg",
        "/solvance/projects/p1-c.jpg",
      ],
      href: "/projects/amazing-textiles-manufacturing-plant",
    },
    {
      title: "Green Horizons Realty Group",
      body: "Green Horizons partnered with us to bring clean energy to their flagship eco-conscious apartment complex.",
      tags: [
        { label: "Solar panels", icon: "solar" as const },
        { label: "Battery storage", icon: "battery" as const },
        { label: "EV Charger", icon: "ev" as const },
      ],
      stats: [
        { label: "POWER RATING", value: "15", unit: "KVA" },
        { label: "BATTERIES", value: "15", unit: "KW" },
        { label: "SOLAR PANELS", value: "30", unit: "Panels" },
        { label: "ANNUAL SAVINGS", value: "$2,000", unit: "" },
        { label: "ROI", value: "5", unit: "Years" },
        { label: "CO₂ SAVED/YR", value: "9", unit: "tons of CO₂" },
      ],
      images: [
        "/solvance/projects/p2-square.png",
        "/solvance/projects/p2-a.jpg",
        "/solvance/projects/p2-b.jpg",
        "/solvance/projects/p2-c.jpg",
      ],
      href: "/projects/green-horizons-realty-group",
    },
    {
      title: "The Martinez Family Home",
      body: "Frequent blackouts and high energy bills due to rising grid costs. A 6.5kWp solar system with battery backup to provide reliable power during outages.",
      tags: [
        { label: "Solar panels", icon: "solar" as const },
        { label: "Battery storage", icon: "battery" as const },
      ],
      stats: [
        { label: "POWER RATING", value: "10", unit: "KVA" },
        { label: "BATTERIES", value: "12.5", unit: "KW" },
        { label: "SOLAR PANELS", value: "20", unit: "Panels" },
        { label: "ANNUAL SAVINGS", value: "$1,500", unit: "" },
        { label: "ROI", value: "6", unit: "Years" },
        { label: "CO₂ SAVED/YR", value: "6", unit: "tons of CO₂" },
      ],
      images: [
        "/solvance/projects/p3-square.png",
        "/solvance/projects/p3-a.jpg",
        "/solvance/projects/p3-b.jpg",
        "/solvance/projects/p3-c.jpg",
      ],
      href: "/projects/the-martinez-family-home",
    },
  ],
};

export const blog = {
  eyebrow: "BLOGS",
  heading: "Insights & updates",
  viewAll: { label: "View all blogs", href: "/blog" },
  posts: [
    {
      category: "Solar Installation",
      readTime: "8 mins read",
      title: "The future of solar energy",
      excerpt: "Discover the latest advancements in solar technology and how they're making renewable energy more accessible.",
      author: "Cheyenne Westervelt",
      authorAvatar: "/solvance/blog/author-cheyenne.png",
      date: "January 28, 2025",
      cover: "/solvance/blog/post-1-cover.png",
      href: "/blog/the-future-of-solar-energy",
    },
    {
      category: "Solar Installation",
      readTime: "5 mins read",
      title: "Understanding heat pumps",
      excerpt: "Discover the latest advancements in solar technology and how they're making renewable energy more accessible.",
      author: "Craig Septimus",
      authorAvatar: "/solvance/blog/author-craig.png",
      date: "January 28, 2025",
      cover: "/solvance/blog/post-2-cover.png",
      href: "/blog/understanding-heat-pumps",
    },
    {
      category: "Solar Energy",
      readTime: "6 mins read",
      title: "Government incentives for solar",
      excerpt: "Discover the latest advancements in solar technology and how they're making renewable energy more accessible.",
      author: "Cheyenne Westervelt",
      authorAvatar: "/solvance/blog/author-cheyenne.png",
      date: "December 24, 2024",
      cover: "/solvance/blog/post-3-cover.png",
      href: "/blog/government-incentives-for-solar",
    },
  ],
};

export const testimonials = {
  eyebrow: "TESTIMONIALS",
  heading: "Reviews from our clients",
  badges: [
    { name: "Trustpilot", src: "/solvance/testimonials/trustpilot.svg", href: "https://www.trustpilot.com/" },
    { name: "Google review", src: "/solvance/testimonials/google.svg", href: "https://www.google.com/" },
  ],
  items: [
    {
      type: "text" as const,
      quote: "Solvance made the switch to solar effortless. The team was professional, and now my energy bills are significantly lower. Highly recommend!",
      author: "Jakob Stanton",
      role: "Homeowner",
      avatar: "/solvance/testimonials/avatar-jakob.png",
    },
    {
      type: "text" as const,
      quote: "From the first consultation to the final installation, Solvance was on point. Great service, top-quality panels, and zero hassle. Highly recommended!",
      author: "Ryan Bothman",
      role: "Homeowner",
      avatar: "/solvance/testimonials/avatar-ryan.png",
    },
    {
      type: "video" as const,
      video: "/solvance/testimonials/testimonial-kaylynn.mp4",
      author: "Kaylynn Gouse",
      role: "Business Owner",
    },
    {
      type: "video" as const,
      video: "/solvance/testimonials/testimonial-jaxson.mp4",
      author: "Jaxson Curtis",
      role: "Industrial Client",
    },
    {
      type: "text" as const,
      quote: "We needed a large-scale solar setup with reliable battery backup, and Solvance delivered. Their expertise and support made a complex project smooth and successful.",
      author: "Maria Franci",
      role: "Property Developer",
      avatar: "/solvance/testimonials/avatar-maria.png",
    },
    {
      type: "text" as const,
      quote: "Our commercial installation was seamless. The team delivered on time, answered all our questions, and the energy savings are real. Solvance knows what they're doing.",
      author: "Jakob Stanton",
      role: "Commercial Client",
      avatar: "/solvance/testimonials/avatar-jakob2.png",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Frequently asked questions",
  sideText:
    "Still have questions? We're here to help! Whether you're curious about installation, costs, or how solar works, our team is ready to guide.",
  cta: { label: "START A PROJECT", href: "/contact" },
  items: [
    {
      question: "What types of solar services do you offer?",
      answer:
        "We provide full-service solar solutions: rooftop and ground-mounted PV system design and installation, battery storage integration, EV charger setup, and ongoing monitoring and maintenance for residential, commercial, and industrial properties.",
    },
    {
      question: "Where is your studio located?",
      answer:
        "Our headquarters is centrally located, and we serve customers across the region. Get in touch through the contact form and a local advisor will reach out to schedule a site visit.",
    },
    {
      question: "Is my data and work safe?",
      answer:
        "Yes. All project files, energy data, and personal information are stored on encrypted servers. We follow industry best practices and comply with relevant data-protection regulations.",
    },
    {
      question: "How long does a typical installation take?",
      answer:
        "Most residential installations are completed in 1–3 days once permits are approved. Commercial and industrial projects vary based on scale, but we'll give you a clear timeline at the proposal stage.",
    },
    {
      question: "When will I receive my final photos?",
      answer:
        "After commissioning, we send you a project pack within 5 working days that includes installation photos, system documentation, warranty certificates, and monitoring app access.",
    },
  ],
};

export const ctaSection = {
  headingLine1: "Ready to go solar?",
  headingLine2: "Let's make it happen.",
  body:
    "Discover how easy it is to transform your home and business with energy-efficient solutions. Whether you're ready to start your journey or just exploring your options, we're here to guide you every step of the way.",
  ctas: [
    { label: "START A PROJECT", href: "/contact", variant: "primary" as const },
    { label: "LEARN MORE", href: "/about", variant: "white" as const },
  ],
  bg: "/solvance/cta/bg-cta.png",
};

export const footer = {
  logo: "/solvance/brand/logo-light.svg",
  newsletter: {
    body:
      "Get our free, 5-min bi-monthly newsletter. Trusted by 500k+ ESG leaders to master sustainability and drive impactful action across all Environmental, Social, and Governance aspects.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    disclaimer: "We care about your data in our",
    disclaimerLink: { label: "privacy policy.", href: "/privacy-policy" },
  },
  linkGroups: [
    {
      title: "LINKS",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CMS PAGES",
      links: [
        { label: "Projects (CMS)", href: "/projects" },
        { label: "Blog (CMS)", href: "/blog" },
      ],
    },
    {
      title: "OTHER PAGES",
      links: [
        { label: "Terms and conditions", href: "/terms" },
        { label: "Privacy policy", href: "/privacy-policy" },
        { label: "Changelog", href: "/changelog" },
        { label: "License", href: "/license" },
        { label: "Styleguide", href: "/styleguide" },
        { label: "404", href: "/404" },
      ],
    },
  ],
  brands: {
    title: "Trusted by leading Global brands",
    logos: [
      "/solvance/footer/brand-1.svg",
      "/solvance/footer/brand-2.svg",
      "/solvance/footer/brand-3.svg",
      "/solvance/footer/brand-4.svg",
      "/solvance/footer/brand-5.svg",
      "/solvance/footer/brand-6.svg",
    ],
  },
  copyright: "Solvance, all rights reserved, 2025",
  socialLabel: "Connect with us:",
};

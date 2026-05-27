import type { SVGProps } from "react";

// Inline arrow used inside dark and white CTA buttons (small, ~12x12)
export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path
      d="M3 11L11 3M11 3H4.5M11 3V9.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Large arrow used inside small white square (header CTA, hero CTA)
export const ArrowRightSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path
      d="M1 7H13M13 7L7 1M13 7L7 13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Carousel back/next chevrons (used in Projects)
export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M5 1L11 7L5 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Inline checkmark (used inside green circle in features + checklist)
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// FAQ accordion toggles
export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Sun icon for Solvance logo wordmark prefix
export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <circle cx="10" cy="10" r="3.5" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M10 1.5v2.2" />
      <path d="M10 16.3v2.2" />
      <path d="M1.5 10h2.2" />
      <path d="M16.3 10h2.2" />
      <path d="M4 4l1.6 1.6" />
      <path d="M14.4 14.4L16 16" />
      <path d="M4 16l1.6-1.6" />
      <path d="M14.4 5.6L16 4" />
    </g>
  </svg>
);

// Project tag chip icons (Solar / Battery / EV)
export const SolarPanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <rect x="1.2" y="2" width="11.6" height="8" rx="0.6" stroke="currentColor" strokeWidth="1" />
    <path d="M1.2 4.5h11.6M1.2 7h11.6M5 2v8M9 2v8" stroke="currentColor" strokeWidth="0.8" />
    <path d="M5 12h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <rect x="1" y="3.5" width="10.5" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
    <rect x="11.5" y="5.5" width="1.5" height="3" rx="0.3" fill="currentColor" />
    <rect x="2.5" y="5" width="6" height="4" rx="0.3" fill="currentColor" />
  </svg>
);

export const EvChargerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M3 1.5h5a1 1 0 011 1v9.5H2V2.5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1" />
    <path d="M5.8 4.5L4 7h2L4.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6.5h1.5a1.5 1.5 0 011.5 1.5v2a1 1 0 01-1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Play icon (testimonial video overlay)
export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" {...props}>
    <path d="M4 2.5L11.5 7L4 11.5V2.5z" />
  </svg>
);

// Star (for testimonial ratings)
export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" {...props}>
    <path d="M7 1l1.84 3.74 4.13.6-3 2.9.7 4.1L7 10.4l-3.67 1.94.7-4.1-3-2.9 4.13-.6L7 1z" />
  </svg>
);

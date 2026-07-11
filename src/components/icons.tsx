import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/** Elegant Designs — tap / pointer gesture */
export function ElegantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 11V6.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M12 11V9a1.5 1.5 0 0 1 3 0v2" />
      <path d="M15 11v-.5a1.5 1.5 0 0 1 3 0V15a5 5 0 0 1-5 5h-1.5a5 5 0 0 1-4.2-2.3L6 15.5c-.5-.9-.2-1.6.5-2 .6-.4 1.4-.2 1.9.5L9 15V6.5a1.5 1.5 0 0 1 3 0" />
    </svg>
  );
}

/** Personalized Experiences — framed image with pencil edit */
export function PersonalizedIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-4.5-4.5L7 20" />
      <path d="m14 7 3 3" />
    </svg>
  );
}

/** Seamless Coordination — trophy */
export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5C4 9 6 10 8 10" />
      <path d="M16 5h2.5A1.5 1.5 0 0 1 20 6.5C20 9 18 10 16 10" />
      <path d="M12 13v3" />
      <path d="M9 20h6" />
      <path d="M10 16h4l.5 4h-5l.5-4Z" />
    </svg>
  );
}

/** Diverse Expertise — snowflake */
export function SnowflakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20" />
      <path d="m4.5 5 15 14M19.5 5l-15 14" />
      <path d="M9 4l3 2 3-2M9 20l3-2 3 2" />
      <path d="M4 8.5 6.5 9l.5 2.5M20 8.5 17.5 9l-.5 2.5" />
      <path d="M4 15.5 6.5 15l.5-2.5M20 15.5 17.5 15l-.5-2.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

interface Props {
  className?: string;
  color?: string;
}

export function FloralAccent({ className, color = "currentColor" }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
        <path d="M60 10 C 55 30, 50 45, 60 60 C 70 45, 65 30, 60 10 Z" fill={color} fillOpacity="0.12" />
        <path d="M60 60 C 40 55, 25 60, 15 75" />
        <ellipse cx="22" cy="72" rx="9" ry="4" transform="rotate(-25 22 72)" fill={color} fillOpacity="0.18" />
        <path d="M60 60 C 80 55, 95 60, 105 75" />
        <ellipse cx="98" cy="72" rx="9" ry="4" transform="rotate(25 98 72)" fill={color} fillOpacity="0.18" />
        <path d="M60 60 C 58 80, 55 95, 50 110" />
        <ellipse cx="52" cy="100" rx="4" ry="8" transform="rotate(-15 52 100)" fill={color} fillOpacity="0.18" />
        <path d="M60 60 C 62 80, 65 95, 70 110" />
        <ellipse cx="68" cy="100" rx="4" ry="8" transform="rotate(15 68 100)" fill={color} fillOpacity="0.18" />
      </g>
    </svg>
  );
}

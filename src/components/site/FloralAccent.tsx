export function FloralAccent({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} {...props}>
      <path d="M100 18c-18 24-26 41-26 61 0 20 12 37 29 48 17-11 29-28 29-48 0-20-8-37-26-61Z" fill="currentColor" />
      <path d="M70 58c-12 16-20 33-20 50 0 25 19 44 49 48-8-15-12-31-12-48 0-16 6-30 16-44-11-2-22-4-33-6Z" fill="currentColor" opacity="0.8" />
      <path d="M130 58c12 16 20 33 20 50 0 25-19 44-49 48 8-15 12-31 12-48 0-16-6-30-16-44 11-2 22-4 33-6Z" fill="currentColor" opacity="0.8" />
      <path d="M100 88c-9 8-14 17-14 28 0 14 8 25 14 34 6-9 14-20 14-34 0-11-5-20-14-28Z" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

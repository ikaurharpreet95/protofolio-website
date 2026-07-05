type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="uppercase tracking-[0.35em] text-xs text-gold mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">{title}</h2>
      <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">{subtitle}</p>
    </div>
  );
}

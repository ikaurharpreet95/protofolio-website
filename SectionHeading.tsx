import { motion } from "motion/react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="uppercase tracking-[0.35em] text-xs text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-charcoal/70 leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-6 h-px w-16 bg-gold ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}

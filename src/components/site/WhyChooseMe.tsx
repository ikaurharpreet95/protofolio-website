import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  "Thoughtful, personalized design concepts",
  "Fast communication and friendly support",
  "Elegant layouts that feel timeless and premium",
  "Flexible options for digital and print-ready invites",
];

export function WhyChooseMe() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <SectionHeading eyebrow="Why Choose Me" title="A Fresh, Personal Approach to Invitation Design" subtitle="I bring warmth, creativity, and attention to detail to every project so your invites feel as meaningful as the event itself." />
        </div>
        <div className="rounded-3xl bg-charcoal text-ivory p-8 shadow-luxe">
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 text-gold" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

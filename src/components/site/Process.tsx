import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { title: "Share Your Vision", description: "Tell me about your event, theme, and style preferences." },
  { title: "Design & Refine", description: "I create a bespoke concept and refine it with your feedback." },
  { title: "Deliver Your Invitation", description: "Receive your beautiful invitation ready to share or print." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-rose/10 to-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Process" title="How It Works" subtitle="A simple and collaborative experience from first idea to final delivery." />

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-gold/15 bg-card p-8 shadow-soft">
              <div className="flex items-center gap-3 text-gold">
                <span className="text-sm font-semibold">0{index + 1}</span>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="mt-6 flex items-center text-gold">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

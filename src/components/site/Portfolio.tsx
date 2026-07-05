import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { categories, projects, type Category } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const current = projects.find((p) => p.id === open) ?? null;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-to-b from-ivory to-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Portfolio" title="Selected Invitation Work" subtitle="A growing collection of bespoke invitation designs crafted for life's most cherished moments." />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={cn("px-5 py-2 rounded-full text-sm font-medium border transition-all", active === c ? "bg-gold text-ivory border-gold shadow-soft" : "border-charcoal/15 text-charcoal/70 hover:border-gold hover:text-gold") }>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-luxe transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{p.category}</p>
                  <h3 className="font-display text-2xl text-ivory">{p.title}</h3>
                  <p className="mt-2 text-sm text-ivory/85">{p.description}</p>
                  <button onClick={() => setOpen(p.id)} className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-gold/95 text-ivory px-5 py-2 text-xs font-medium tracking-wider uppercase hover:bg-gold transition">
                    <Eye size={14} /> View Project
                  </button>
                </div>
                <div className="p-6 lg:hidden">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                  <h3 className="font-display text-xl mt-1 text-charcoal">{p.title}</h3>
                  <p className="text-sm text-charcoal/70 mt-1">{p.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!current} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-ivory">
          {current && (
            <>
              <DialogTitle className="sr-only">{current.title}</DialogTitle>
              <DialogDescription className="sr-only">{current.description}</DialogDescription>
              <img src={current.image} alt={current.title} className="w-full h-auto max-h-[75vh] object-contain bg-charcoal/5" />
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{current.category}</p>
                <h3 className="font-display text-2xl text-charcoal mt-1">{current.title}</h3>
                <p className="text-sm text-charcoal/75 mt-2">{current.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

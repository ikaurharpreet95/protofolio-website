import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Completed", value: 7, suffix: "+" },
  { label: "Months Experience", value: 4, suffix: "+" },
  { label: "Happy Clients", value: 7, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(p * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,var(--color-gold),transparent_60%),radial-gradient(circle_at_80%_80%,var(--color-rose),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-5xl md:text-6xl text-gold">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.25em] text-ivory/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

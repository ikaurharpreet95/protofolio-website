import { Instagram, Facebook } from "lucide-react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <p className="font-display text-2xl text-ivory">Harpreet Kaur</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mt-1">Invitations</p>
          <p className="mt-4 text-sm text-ivory/60 max-w-xs">
            Crafting beautiful invitations for life's most special moments.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 mb-4">Quick Links</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm hover:text-gold transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 mb-4">Follow</p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-ivory/10 text-center text-xs text-ivory/50">
        © 2026 Harpreet Kaur Invitations. All Rights Reserved.
      </div>
    </footer>
  );
}

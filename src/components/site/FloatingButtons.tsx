import { MessageCircle, PhoneCall, Calendar } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="https://tally.so/r/8b901cd0-a746-444a-993d-2d4c4796b486" target="_blank" rel="noopener noreferrer" className="group flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg hover:scale-105 transition relative" title="Book a Meeting">
        <Calendar size={20} />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-charcoal text-ivory text-xs px-3 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition">Book Meeting</span>
      </a>
      <a href="https://wa.me/19843023290" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition">
        <MessageCircle size={22} />
      </a>
      <a href="tel:+19843023290" className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ivory shadow-lg hover:scale-105 transition">
        <PhoneCall size={20} />
      </a>
    </div>
  );
}

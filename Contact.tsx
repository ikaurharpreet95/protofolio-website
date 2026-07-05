import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, User, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Please enter a phone number").max(30),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().trim().min(10, "Please share a few details").max(1000),
});

type FormData = z.infer<typeof schema>;

const eventTypes = [
  "Wedding",
  "Engagement",
  "Housewarming",
  "Birthday",
  "Baby Shower",
  "Digital Invitation",
  "Other",
];

const info = [
  { icon: User, label: "Designer", value: "Harpreet Kaur" },
  { icon: Phone, label: "Phone", value: "+64 21 487 593", href: "tel:+6421487593" },
  { icon: Mail, label: "Email", value: "hello@harpreetinvites.co.nz", href: "mailto:hello@harpreetinvites.co.nz" },
  { icon: MapPin, label: "Location", value: "Auckland, New Zealand" },
];

function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.4 7.6 11.1-.1-.9-.2-2.4 0-3.4.2-.9 1.5-5.6 1.5-5.6s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4-2.4 4-5.9 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.8 2.7-5.8 5.6 0 1.1.4 2.3.9 2.9.1.1.1.2.1.3-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.5-.7-2.4-2.8-2.4-4.6 0-3.7 2.7-7.2 7.8-7.2 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.4-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.4-1.5 3.2 1.1.3 2.3.5 3.5.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: PinterestIcon, label: "Pinterest", href: "https://pinterest.com" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/6421487593" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    // TODO: wire to backend (Lovable Cloud / email) when ready
    console.log("Contact submission", data);
    toast.success("Thank you! I'll be in touch shortly.");
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-ivory to-rose/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Beautiful Together"
          subtitle="Tell me about your celebration — I'd love to design an invitation that feels truly yours."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-soft space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Name</label>
                <Input className="mt-2 bg-ivory/80" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Email</label>
                <Input type="email" className="mt-2 bg-ivory/80" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Phone</label>
                <Input className="mt-2 bg-ivory/80" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-charcoal/70">Event Type</label>
                <Select
                  value={watch("eventType") ?? ""}
                  onValueChange={(v) => setValue("eventType", v, { shouldValidate: true })}
                >
                  <SelectTrigger className="mt-2 bg-ivory/80">
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((e) => (
                      <SelectItem key={e} value={e}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eventType && (
                  <p className="text-xs text-destructive mt-1">{errors.eventType.message}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-charcoal/70">Message</label>
              <Textarea rows={5} className="mt-2 bg-ivory/80" {...register("message")} />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-gold text-ivory py-4 font-medium tracking-wide hover:bg-gold/90 transition shadow-luxe disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl p-8 bg-charcoal text-ivory shadow-luxe">
              <h3 className="font-display text-2xl mb-6">Get in touch</h3>
              <ul className="space-y-5">
                {info.map((i) => (
                  <li key={i.label} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <i.icon size={16} />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">
                        {i.label}
                      </p>
                      {i.href ? (
                        <a href={i.href} className="text-sm hover:text-gold transition">
                          {i.value}
                        </a>
                      ) : (
                        <p className="text-sm">{i.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-ivory/15">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-3">
                  Follow along
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

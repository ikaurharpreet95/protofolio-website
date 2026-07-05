import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";
import { WhyChooseMe } from "@/components/site/WhyChooseMe";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

const title = "Harpreet Kaur Invitations — Custom Invitation Designer | Auckland";
const description =
  "Bespoke wedding, housewarming, engagement and digital invitation design by Harpreet Kaur. Elegant, custom invitations crafted with love in Auckland, New Zealand.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Harpreet Kaur Invitations",
          description,
          image: "/",
          telephone: "+64214875593",
          email: "hello@harpreetinvites.co.nz",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Auckland",
            addressCountry: "NZ",
          },
          areaServed: "New Zealand",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="bg-ivory text-charcoal">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <WhyChooseMe />
      <Stats />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

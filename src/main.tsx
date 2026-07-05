import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Portfolio } from "./components/site/Portfolio";
import { Services } from "./components/site/Services";
import { WhyChooseMe } from "./components/site/WhyChooseMe";
import { Stats } from "./components/site/Stats";
import { Testimonials } from "./components/site/Testimonials";
import { Process } from "./components/site/Process";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { FloatingButtons } from "./components/site/FloatingButtons";
import "./styles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
      <Toaster position="top-center" />
    </QueryClientProvider>
  </React.StrictMode>,
);

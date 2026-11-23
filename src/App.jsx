import { MotionConfig } from "framer-motion";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Benefits from "@/components/site/Benefits";
import Demands from "@/components/site/Demands";
import QuoteBand from "@/components/site/QuoteBand";
import Audience from "@/components/site/Audience";
import Modalities from "@/components/site/Modalities";
import Coverage from "@/components/site/Coverage";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export default function App() {
  return (
    // reducedMotion="user": respeita quem pediu menos animação no sistema.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-linen text-river">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Demands />
          <QuoteBand />
          <Audience />
          <Modalities />
          <Coverage />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}

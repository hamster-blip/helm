import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Divider from "@/components/ui/divider";
import Reality from "@/components/reality";
import Consequences from "@/components/consequences";
import Insight from "@/components/insight";
import HowItWorks from "@/components/how-it-works";
import Guardrails from "@/components/guardrails";
import Metrics from "@/components/metrics";
import Expansion from "@/components/expansion";
import Founder from "@/components/founder";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Reality />
        <Consequences />
        <Divider color="teal" />
        <Insight />
        <Divider />
        <HowItWorks />
        <Guardrails />
        <Divider />
        <Metrics />
        <Expansion />
        <Divider />
        <Founder />
        <Divider color="teal" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

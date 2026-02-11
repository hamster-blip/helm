import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import InkDivider from "@/components/ui/ink-divider";
import CoreProblem from "@/components/core-problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import WhyItMatters from "@/components/why-it-matters";
import Team from "@/components/team";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Dark: Hero */}
        <Hero />

        {/* Paper: Ink divider — brand signature moment */}
        <InkDivider />

        {/* Paper: Core Problem */}
        <CoreProblem />

        {/* Dark: Solution */}
        <Solution />

        {/* Dark: How It Works */}
        <HowItWorks />

        {/* Dark: Why It Matters + Guardrails + Metrics */}
        <WhyItMatters />

        {/* Paper: Team */}
        <Team />

        {/* Dark: CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

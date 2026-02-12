import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import InkDivider from "@/components/ui/ink-divider";
import CoreProblem from "@/components/core-problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import WhyItMatters from "@/components/why-it-matters";
import WhereHelmStarts from "@/components/where-helm-starts";
import Economics from "@/components/economics";
import ScadaErp from "@/components/scada-erp";
import Integration from "@/components/integration";
import Team from "@/components/team";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import LandscapeTip from "@/components/landscape-tip";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandscapeTip />
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

        {/* Paper: Where Helm Starts (commercial wedge) */}
        <WhereHelmStarts />

        {/* Paper: Economics */}
        <Economics />

        {/* Paper: Why SCADA to ERP doesn't solve this */}
        <ScadaErp />

        {/* Paper: Integration */}
        <Integration />

        {/* Paper: Team */}
        <Team />

        {/* Dark: CTA — Pilot in 30 Days */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}

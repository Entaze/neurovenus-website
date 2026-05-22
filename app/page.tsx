import { MarketingNavbar } from "@/components/layout/MarketingNavbar";
import { HeroPreview } from "@/components/marketing/HeroPreview";
import { WorkflowSection } from "@/components/marketing/WorkflowSection";
import { WhoIsItForSection } from "@/components/marketing/WhoIsItForSection";
import { InstitutionalSection } from "@/components/marketing/InstitutionalSection";
import { AssessmentsSection } from "@/components/marketing/AssessmentsSection";
import { SecuritySection } from "@/components/marketing/SecuritySection";
import { PilotSection } from "@/components/marketing/PilotSection";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <MarketingNavbar />

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid min-h-screen w-full max-w-[1280px] items-center gap-20 px-6 pb-24 pt-32 md:pt-40 xl:grid-cols-[1fr_720px] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 backdrop-blur">
              Remote Cognitive & Sleep Research Platform
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Research infrastructure for remote cognitive and sleep studies.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-slate-400 md:text-xl">
              Neurovenus helps research teams design structured study protocols, administer cognitive and sleep assessments remotely, manage participant workflows, and export analysis-ready datasets for SPSS, R, Python, and Excel.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#pilot"
                className="w-full rounded-2xl bg-[#4f6fd8] px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-[#5d7cf0] sm:w-auto"
              >
                Request Access
              </a>

              <a
                href="#assessments"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-center text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/[0.06] sm:w-auto"
              >
                View Assessments
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                Structured Protocols
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                Longitudinal Study Support
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                Trial-Level Exports
              </div>
            </div>

            <div className="mt-20 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span>AVLT / RAVLT</span>
              <span>Stroop</span>
              <span>Digit Span</span>
              <span>N-Back</span>
              <span>Finger Tapping</span>
              <span>PSQI</span>
            </div>
          </div>

          <HeroPreview />
        </div>
      </section>
      <WorkflowSection />
      <WhoIsItForSection />
      <AssessmentsSection />
      <InstitutionalSection />
      <SecuritySection />
      <PilotSection />
      <MarketingFooter />
    </main>
  );
}
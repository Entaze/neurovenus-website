import { FadeIn } from "@/components/motion/FadeIn";
import { PilotContactForm } from "./PilotContactForm";

export function PilotSection() {
  return (
    <section id="pilot" className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-[1100px] px-6 lg:px-12">
        <div className="overflow-hidden rounded-[40px] border border-white/[0.08] bg-white/[0.03]">
          <div className="relative px-8 py-20 md:px-16 md:py-24">
            <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

            <FadeIn className="relative mx-auto max-w-3xl text-center">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
                Research Access
              </div>

              <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white">
                Request access to Neurovenus.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                We’re onboarding early research groups, academic labs, institutional collaborators, and clinical researchers for research access and workflow validation.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="rounded-2xl bg-[#5d7cf0] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#6d8cff]">
                  Request Research Access
                </button>

                <a
                  href="#pilot-form"
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
                >
                  Contact Research Team
                </a>
              </div>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Early institutional onboarding
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  Workflow validation support
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                  Research collaboration opportunities
                </div>
              </div>

              <PilotContactForm />

            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
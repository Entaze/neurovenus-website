import { FadeIn } from "@/components/motion/FadeIn";
import {
  ShieldCheck,
  Lock,
  Database,
  Users,
  GitBranch,
  FileSpreadsheet,
} from "lucide-react";

const securityItems = [
  {
    title: "Protocol locking",
    text: "Study protocols can be locked after activation to preserve research consistency and structured data collection workflows.",
    icon: Lock,
  },
  {
    title: "Researcher isolation",
    text: "Institutional workspaces support researcher-level separation and controlled access boundaries by default.",
    icon: Users,
  },
  {
    title: "Structured exports",
    text: "Export workflows preserve structured participant, session, and assessment relationships for downstream analysis.",
    icon: FileSpreadsheet,
  },
  {
    title: "Participant privacy",
    text: "Remote participant workflows are designed to minimize onboarding friction while maintaining controlled access patterns.",
    icon: ShieldCheck,
  },
  {
    title: "Longitudinal study support",
    text: "Structured session sequencing supports repeated-measures and multi-session research designs.",
    icon: GitBranch,
  },
  {
    title: "Analysis-ready datasets",
    text: "Export participant responses and trial-level datasets for SPSS, R, Python, Excel, and statistical workflows.",
    icon: Database,
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-[480px_1fr]">
          {/* LEFT */}
          <FadeIn className="max-w-4xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
              Security & Data Integrity
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white">
              Built for structured, reproducible research workflows.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Neurovenus is designed around structured protocol workflows,
              export integrity, participant privacy, and reproducible research
              operations.
            </p>

            <div className="mt-12 rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-8">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Export Integrity
              </div>

              <div className="mt-5 text-3xl font-semibold text-white">
                Analysis-ready by design.
              </div>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Structured export workflows preserve participant, protocol,
                session, and assessment relationships for downstream analysis
                and reproducibility.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["CSV", "SPSS", "R", "Python", "Excel"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
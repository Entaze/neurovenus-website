import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: "01",
    title: "Create a protocol",
    text: "Define the study structure, assessments, sessions, and participant flow before data collection begins.",
  },
  {
    number: "02",
    title: "Configure sessions",
    text: "Support multi-session and longitudinal study designs with structured assessment schedules.",
  },
  {
    number: "03",
    title: "Invite participants",
    text: "Recruit participants remotely without requiring participant account creation.",
  },
  {
    number: "04",
    title: "Run assessments online",
    text: "Administer cognitive and sleep assessments through a participant-friendly web workflow.",
  },
  {
    number: "05",
    title: "Export research data",
    text: "Download analysis-ready datasets for SPSS, R, Python, Excel, and statistical workflows.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <FadeIn className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Research workflow
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            From protocol design to analysis-ready export.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Neurovenus supports the operational flow of remote cognitive and
            sleep research, from study setup through participant completion and
            structured data export.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="text-sm font-semibold text-[#38bdf8]">
                  {step.number}
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
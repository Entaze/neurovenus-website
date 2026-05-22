import { FadeIn } from "@/components/motion/FadeIn";

const assessments = [
  {
    category: "Memory",
    title: "AVLT / RAVLT",
    description:
      "Verbal learning and memory assessment commonly used in neuropsychological and cognitive research workflows.",
  },
  {
    category: "Executive Function",
    title: "Stroop Test",
    description:
      "Assessment of selective attention, cognitive inhibition, and executive control processes.",
  },
  {
    category: "Working Memory",
    title: "Digit Span",
    description:
      "Forward and backward digit span workflows for working memory capacity evaluation.",
  },
  {
    category: "Working Memory",
    title: "N-Back",
    description:
      "Structured N-Back administration for continuous working memory and attentional load assessment.",
  },
  {
    category: "Motor Function",
    title: "Finger Tapping",
    description:
      "Motor speed and coordination assessment with structured response capture and export support.",
  },
  {
    category: "Sleep Research",
    title: "PSQI",
    description:
      "Pittsburgh Sleep Quality Index workflows with structured questionnaire administration and scoring.",
  },
];

export function AssessmentsSection() {
  return (
    <section id="assessments" className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_28%)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-12">

        <FadeIn className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Supported Assessments
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white">
            Built around validated cognitive and sleep assessment workflows.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Neurovenus supports structured administration of validated
            cognitive and sleep assessments commonly used in academic,
            neuropsychological, and clinical research environments.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {assessments.map((assessment, index) => (
            <FadeIn
              key={assessment.title}
              delay={index * 0.06}
              duration={0.5}
              y={18}
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-[80px]" />
              </div>

              <div className="relative">
                <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-[0.12em] text-cyan-300">
                  {assessment.category}
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {assessment.title}
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-400">
                  {assessment.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
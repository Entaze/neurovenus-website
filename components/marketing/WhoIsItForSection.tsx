import { FadeIn } from "@/components/motion/FadeIn";

const audiences = [
  {
    title: "Cognitive neuroscience labs",
    text: "Structured workflows for memory, attention, executive function, and longitudinal cognitive research.",
  },
  {
    title: "Sleep research groups",
    text: "Remote administration workflows for sleep questionnaires, repeated sessions, and participant follow-up.",
  },
  {
    title: "Clinical psychology researchers",
    text: "Structured participant workflows and export-ready datasets for behavioral and clinical research studies.",
  },
  {
    title: "Neuropsychology workflows",
    text: "Validated cognitive assessment administration with centralized protocol organization and export support.",
  },
  {
    title: "Longitudinal cognitive studies",
    text: "Multi-session study configuration for repeated-measures and longitudinal research designs.",
  },
  {
    title: "University research institutions",
    text: "Institutional workspaces for centralized protocol management, participant coordination, and collaboration.",
  },
];

export function WhoIsItForSection() {
  return (
    <section
      id="audiences"
      className="border-t border-white/[0.06] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        <FadeIn className="max-w-4xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Who Neurovenus Is For
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white">
            Built for research teams running cognitive and sleep studies.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Neurovenus is designed for academic, institutional, and clinical
            research environments requiring structured study workflows,
            participant coordination, and analysis-ready data exports.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.05}
              duration={0.5}
              y={18}
            >
              <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
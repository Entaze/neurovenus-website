"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";

const features = [
  "Shared institutional workspaces",
  "Multi-researcher collaboration",
  "Workspace-level administration",
  "Researcher privacy isolation",
  "Structured protocol organization",
  "Centralized export workflows",
];

export function InstitutionalSection() {
  return (
    <section id="workspaces" className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-24 px-6 lg:grid-cols-[1fr_700px] lg:px-12">
        {/* LEFT */}
        <FadeIn className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Institutional Workspaces
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white">
            Designed for collaborative research environments.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Neurovenus supports institutional research workflows through
            shared workspaces, multi-researcher collaboration, structured
            study organization, and centralized administration.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
              >
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />

                <div className="text-sm leading-7 text-slate-300">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* RIGHT */}
        <FadeIn delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09111f]/90 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <Image
                src="/preview/workspace-preview.png"
                alt="Institutional Workspace"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-10 -left-10 w-[280px] rounded-[28px] border border-white/[0.08] bg-[#0d1728]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                Collaboration
              </div>

              <div className="mt-4 text-2xl font-semibold text-white">
                Multi-researcher workflows
              </div>

              <div className="mt-4 text-sm leading-7 text-slate-400">
                Institutional workspaces support centralized administration and
                researcher-level data isolation by default.
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
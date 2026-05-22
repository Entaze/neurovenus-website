"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroPreview() {
  return (
    <div className="relative mt-16 hidden h-[620px] w-full xl:block">
      <div className="absolute right-10 top-20 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/20 blur-[100px]" />
      <div className="absolute bottom-0 left-20 h-[240px] w-[240px] rounded-full bg-cyan-400/10 blur-[80px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute right-0 top-10 w-full max-w-[820px] overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#09111f]/95 ring-1 ring-cyan-400/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
        <Image
          src="/preview/dashboard-preview1.png"
          alt="Neurovenus Dashboard"
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/30 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute bottom-2 left-10 w-[280px] rounded-[24px] border border-white/[0.08] bg-[#0d1728]/95 p-5 shadow-2xl shadow-black/30 ring-1 ring-white/[0.04] backdrop-blur-xl"
      >
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
          Export Integrity
        </div>

        <div className="mt-4 text-lg font-semibold text-white">
          Analysis-ready datasets
        </div>

        <div className="mt-3 text-sm leading-7 text-slate-400">
          Structured exports for SPSS, R, Python, and Excel workflows.
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["CSV", "SPSS", "R", "Python"].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Assessments",
    href: "#assessments",
  },
  {
    label: "Workspaces",
    href: "#workspaces",
  },
  {
    label: "Security",
    href: "#security",
  },
  {
    label: "Research Access",
    href: "#pilot",
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white transition hover:bg-white/[0.06] lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        className={`fixed inset-0 z-[9999] transition duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full bg-[#020617]/90 backdrop-blur-xl"
        />

        <aside
          className={`absolute right-0 top-0 flex min-h-screen w-[88%] max-w-[380px] flex-col border-l border-white/[0.08] bg-[#07101d] shadow-2xl shadow-black/40 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
            <div className="flex items-center gap-3">
              <Image
                src="/branding/neurovenus-icon.svg"
                alt="Neurovenus"
                width={36}
                height={36}
              />

              <div>
                <div className="text-lg font-semibold tracking-[-0.02em] text-white">
                  Neurovenus
                </div>

                <div className="text-xs text-slate-500">
                  Research Infrastructure
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white transition hover:bg-white/[0.06]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center rounded-2xl px-4 py-4 text-left text-base text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/[0.06] pt-8">
              <a
                href="#pilot"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-[#5d7cf0] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#6d8cff]"
              >
                Request Research Access
              </a>

              <a
                href="#pilot"
                onClick={() => setOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05]"
              >
                Sign In
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
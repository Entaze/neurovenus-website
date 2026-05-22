import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

export function MarketingNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#020817]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <Image
            src="/branding/neurovenus-icon.svg"
            alt="Neurovenus"
            width={44}
            height={44}
            className="h-12 w-12"
          />

          <div className="flex flex-col">
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
              Neurovenus
            </span>

            <span className="hidden text-xs text-slate-500 sm:block">
              Research Infrastructure Platform
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#assessments" className="text-sm text-slate-400 transition hover:text-white">
            Assessments
          </a>

          <a href="#workspaces" className="text-sm text-slate-400 transition hover:text-white">
            Workspaces
          </a>

          <a href="#security" className="text-sm text-slate-400 transition hover:text-white">
            Security
          </a>

          <a href="#pilot" className="text-sm text-slate-400 transition hover:text-white">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#pilot"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Sign In
          </a>

          <a
            href="#pilot"
            className="rounded-2xl bg-[#4f6fd8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5d7cf0]"
          >
            Request Access
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
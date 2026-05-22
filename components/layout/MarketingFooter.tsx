import Image from "next/image";

const footerLinks = [
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

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-12 md:py-14">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-4">
          <Image
            src="/branding/neurovenus-icon.svg"
            alt="Neurovenus"
            width={42}
            height={42}
          />

          <div>
            <div className="text-base font-semibold text-white">
              Neurovenus
            </div>
            <div className="text-sm text-slate-500">
              Remote cognitive and sleep research infrastructure.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1280px] px-6 text-sm text-slate-600 lg:px-12">
        © {new Date().getFullYear()} Neurovenus. Built for structured research workflows.
      </div>
    </footer>
  );
}
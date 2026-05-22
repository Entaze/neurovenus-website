"use client";

import { useState } from "react";

export function PilotContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      institution: formData.get("institution"),
      researchArea: formData.get("researchArea"),
      message: formData.get("message"),
    };

    try {
      setStatus("loading");
      const response = await fetch("/api/access-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");

      form.reset();
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 grid gap-5 rounded-[32px] border border-white/[0.08] bg-[#07101d]/80 p-6 text-left md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-300">Name</label>
          <input
            required
            name="name"
            placeholder="Dr. Sarah Williams"
            className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#020817] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-300">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="researcher@university.edu"
            className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#020817] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-300">
            Institution / Organization
          </label>
          <input
            name="institution"
            placeholder="University, lab, hospital, or research group"
            className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#020817] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-300">
            Research area
          </label>
          <input
            name="researchArea"
            placeholder="Sleep, cognition, neuropsychology..."
            className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#020817] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-300">
          What would you like to use Neurovenus for?
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe your study, lab workflow, or research access interest."
          className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-[#020817] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40"
        />
      </div>

      <div className="flex flex-col gap-5 border-t border-white/[0.06] pt-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm leading-6 text-slate-500">
            We’ll review your request and follow up about access availability.
          </p>

          {status === "sent" && (
            <p className="text-sm text-emerald-400">
              Your research inquiry has been submitted successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-[#5d7cf0] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#6d8cff] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading"
            ? "Submitting..."
            : status === "sent"
            ? "Request Received"
            : status === "error"
            ? "Try Again"
            : "Send Research Inquiry"}
        </button>
      </div>
    </form>
  );
}
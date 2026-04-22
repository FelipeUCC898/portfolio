"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.info("Contact form:", Object.fromEntries(data.entries()));
    setSuccess(true);
    form.reset();
    window.setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <div>
      {success ? (
        <div
          className="mb-5 rounded-md border border-[#05DFD7] bg-[rgba(5,223,215,0.2)] px-4 py-3 text-center text-sm text-[#05DFD7]"
          role="status"
        >
          {t("success")}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-[#05DFD7]">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("namePh")}
            className="rounded-md border border-[#05DFD7] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0D7377] focus:bg-[rgba(5,223,215,0.08)] focus:outline-none focus:ring-2 focus:ring-[#05DFD7]/40 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:bg-[rgba(5,223,215,0.1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold text-[#05DFD7]">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("emailPh")}
            className="rounded-md border border-[#05DFD7] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0D7377] focus:bg-[rgba(5,223,215,0.08)] focus:outline-none focus:ring-2 focus:ring-[#05DFD7]/40 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:bg-[rgba(5,223,215,0.1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm font-semibold text-[#05DFD7]">
            {t("subject")}
          </label>
          <input
            id="subject"
            name="subject"
            required
            placeholder={t("subjectPh")}
            className="rounded-md border border-[#05DFD7] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0D7377] focus:bg-[rgba(5,223,215,0.08)] focus:outline-none focus:ring-2 focus:ring-[#05DFD7]/40 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:bg-[rgba(5,223,215,0.1)]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-semibold text-[#05DFD7]">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={t("messagePh")}
            className="min-h-[120px] resize-y rounded-md border border-[#05DFD7] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0D7377] focus:bg-[rgba(5,223,215,0.08)] focus:outline-none focus:ring-2 focus:ring-[#05DFD7]/40 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:bg-[rgba(5,223,215,0.1)]"
          />
        </div>
        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#05DFD7] px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-[#0D7377] hover:shadow-[0_10px_25px_rgba(5,223,215,0.3)] dark:text-[#040404]"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}

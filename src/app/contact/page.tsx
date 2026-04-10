import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Maryland Natives",
  description:
    "Reach Maryland Natives by email. We welcome questions about native trees, the site, and conservation in Maryland.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Get in touch
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Maryland Natives is a non-profit organization focused on environmental
          conservation and helping people learn about native trees and plants in
          Maryland. Use the email below for general questions, corrections to our
          species pages, media inquiries, or partnership ideas.
        </p>
      </header>

      <article className="max-w-2xl space-y-6 text-sm leading-relaxed text-neutral-800">
        <section className="space-y-3 rounded-xl border border-neutral-300 bg-white/50 p-5">
          <h2 className="text-lg font-semibold text-neutral-900">Email</h2>
          <p>
            <a
              href="mailto:trees@marylandnatives.com"
              className="text-base font-semibold text-emerald-700 hover:text-emerald-800"
            >
              trees@marylandnatives.com
            </a>
          </p>
          <p className="text-neutral-600">
            We read every message. Response time varies, especially during busy
            seasons; we appreciate your patience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            What to include
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Species corrections:</strong> Tree name, page URL, and
              what should change, plus a source if possible (field guide,
              extension publication, etc.).
            </li>
            <li>
              <strong>Planting or ID help:</strong> Your county or region in
              Maryland, sun and soil conditions, and a photo link if you have
              one—we cannot diagnose every case but we try to point you toward
              reliable resources.
            </li>
            <li>
              <strong>Privacy or policy:</strong> See our{" "}
              <Link
                href="/privacy"
                className="text-emerald-700 hover:text-emerald-800"
              >
                Privacy Policy
              </Link>{" "}
              for how we handle data and advertising.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            About Maryland Natives
          </h2>
          <p>
            Learn more about our mission, how we use support, and what you will
            find on the site on our{" "}
            <Link href="/about" className="text-emerald-700 hover:text-emerald-800">
              About
            </Link>{" "}
            page.
          </p>
        </section>
      </article>

      <div>
        <Link
          href="/"
          className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

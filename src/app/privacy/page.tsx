import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Maryland Natives",
  description:
    "How Maryland Natives collects, uses, and shares information when you use our website, including cookies and Google AdSense.",
};

export default function PrivacyPage() {
  const updated = "April 10, 2026";

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Legal
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-600">Last updated: {updated}</p>
      </header>

      <article className="max-w-2xl space-y-6 text-sm leading-relaxed text-neutral-800">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Who we are</h2>
          <p>
            This policy describes how{" "}
            <strong>Maryland Natives</strong> (“we,” “us”) handles information
            when you visit this website and related pages (the “Site”). We are a
            non-profit organization
            focused on environmental conservation and education about
            Maryland&apos;s native trees and plants.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            Information we collect
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Information you send us.</strong> If you email us at{" "}
              <a
                href="mailto:trees@marylandnatives.com"
                className="text-emerald-700 hover:text-emerald-800"
              >
                trees@marylandnatives.com
              </a>
              , we receive your address and the contents of your message.
            </li>
            <li>
              <strong>Usage and performance data.</strong> We use Vercel
              Analytics and Speed Insights to understand aggregate traffic and
              performance (for example, page views and load metrics). These
              services may process technical data such as IP address (often in
              truncated or aggregated form), device type, browser, and general
              location derived from IP.
            </li>
            <li>
              <strong>Cookies and similar technologies.</strong> We and our
              partners may store or read cookies and use local storage where
              needed for Site operation, analytics, and advertising as described
              below.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            Google AdSense and advertising
          </h2>
          <p>
            We use <strong>Google AdSense</strong> to show ads on the Site.
            Google and its partners may use cookies or similar technologies to
            serve ads based on your prior visits to our Site or other websites,
            and to measure ad effectiveness. Google&apos;s use of advertising
            cookies enables it and its partners to serve ads to you based on
            your visits to our Site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-emerald-700 hover:text-emerald-800"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            , or the opt-out page for third-party vendors that participate in
            the{" "}
            <a
              href="https://www.aboutads.info/choices/"
              className="text-emerald-700 hover:text-emerald-800"
              rel="noopener noreferrer"
            >
              Digital Advertising Alliance
            </a>
            . You can also learn how Google uses data when you use our
            partners&apos; sites or apps at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-emerald-700 hover:text-emerald-800"
              rel="noopener noreferrer"
            >
              Google&apos;s partner sites policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            How we use information
          </h2>
          <p>We use collected information to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Operate, maintain, and improve the Site;</li>
            <li>Respond to your messages;</li>
            <li>Understand aggregate readership and performance;</li>
            <li>
              Display and measure advertising through Google and related
              services, where enabled.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Sharing</h2>
          <p>
            We do not sell your personal information. We share data with
            service providers that help us run the Site (such as hosting and
            analytics) and with advertising partners as described above, in
            accordance with their privacy policies and applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            Your choices
          </h2>
          <p>
            You can control cookies through your browser settings (blocking or
            deleting cookies may affect Site features or ad behavior). For
            European Economic Area users, consent mechanisms where required may
            be presented by Google or other partners when you first interact
            with ads or tracking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Children</h2>
          <p>
            The Site is intended for a general audience. We do not knowingly
            collect personal information from children under 13. If you believe
            we have received such information, please contact us and we will
            delete it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Changes</h2>
          <p>
            We may update this policy from time to time. The “Last updated” date
            at the top will change when we do. Continued use of the Site after
            changes means you accept the updated policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a
              href="mailto:trees@marylandnatives.com"
              className="text-emerald-700 hover:text-emerald-800"
            >
              trees@marylandnatives.com
            </a>{" "}
            or our{" "}
            <Link href="/contact" className="text-emerald-700 hover:text-emerald-800">
              contact page
            </Link>
            .
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

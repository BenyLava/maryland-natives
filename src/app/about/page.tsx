import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Maryland Natives",
  description:
    "Maryland Natives is a non-profit focused on environmental conservation. Revenue supports planting native plants in Maryland.",
};

const siteLinks = [
  {
    href: "/",
    title: "Home",
    blurb: "Overview, featured trees, and articles.",
  },
  {
    href: "/trees",
    title: "Tree Catalog",
    blurb: "Native Maryland trees with growing notes and wildlife value.",
  },
  {
    href: "/articles",
    title: "Articles",
    blurb: "Longer reads on native plants, ecology, and outdoor curiosity.",
  },
  {
    href: "/quiz",
    title: "Quiz",
    blurb: "Practice questions to sharpen your tree and soil knowledge.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          About us
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Who we are
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Maryland Natives is a non-profit organization focused on increasing
          attention to environmental conservation, so that clean water,
          healthy soils, resilient landscapes, and thriving wildlife stay front
          of mind in our communities, not buried under everything else.
        </p>
      </header>

      <article className="max-w-2xl space-y-6 text-sm leading-relaxed text-neutral-800">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Our mission</h2>
          <p>
            Too often, the living systems that support us stay invisible until
            something breaks. We exist to make conservation easier to notice,
            understand, and act on, especially where everyday choices meet the
            land: what we plant, what we protect, and how we teach the next
            generation to see the outdoors as home, not backdrop.
          </p>
        </section>



        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            Why native trees and plants
          </h2>
          <p>
            Native species are the infrastructure of local ecology. They feed
            insects, birds, and countless other organisms in ways that many
            ornamental or invasive plants simply cannot. By highlighting
            Maryland&apos;s native trees and related topics, we hope to turn
            curiosity into stewardship, one yard, park, school, and watershed at
            a time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">
            What you&apos;ll find here
          </h2>
          <p>
            This site offers a growing catalog of native trees, articles, and
            learning tools meant for explorers of every level. We are not here
            to lecture; we are here to invite you in, answer practical
            questions, and celebrate the species that belong in Maryland&apos;s
            landscape.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-300 bg-white/50 p-4">
          <h2 className="text-lg font-semibold text-neutral-900">
            Explore the site
          </h2>
          <p className="text-neutral-700">
            Jump to any section of Maryland Natives:
          </p>
          <ul className="space-y-3">
            {siteLinks.map(({ href, title, blurb }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  {title}
                </Link>
                <span className="text-neutral-600">, {blurb}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">Get involved</h2>
          <p>
            Conservation spreads when people share what they learn. Whether you
            plant a single native tree, volunteer with a local land trust, or
            simply name the trees on your block, you help widen the circle. We
            are glad you are here.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-emerald-700/30 bg-emerald-50/60 p-4">
          <h2 className="text-lg font-semibold text-neutral-900">
            Where the money goes
          </h2>
          <p>
            Any money this organization earns, whether from donations,
            partnerships, or other support tied to our mission, is used directly
            to plant native plants in Maryland. We want every dollar to show up
            on the ground as living roots, leaves, and habitat, not as overhead
            dressed up as impact.
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

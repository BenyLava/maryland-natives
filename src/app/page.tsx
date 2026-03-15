import Link from "next/link";

const featuredGuides = [
  {
    category: "Tree Guides",
    title: "10 Iconic Trees to Learn First",
    description:
      "A beginner-friendly set of species you can recognize in nearly any temperate forest.",
  },
  {
    category: "Urban Trees",
    title: "Best Street Trees for Small Yards",
    description:
      "Compact, hardy trees that bring shade and character to tight city spaces.",
  },
  {
    category: "Evergreens",
    title: "Evergreen vs. Deciduous: What Really Matters",
    description:
      "Understand foliage, growth habits, and where each type thrives.",
  },
];

const latestArticles = [
  {
    title: "How to Read a Tree Ring Story",
    category: "Articles",
    slug: "everyday-trees",
  },
  {
    title: "Beginner’s Guide to Identifying Bark",
    category: "Articles",
    slug: "identification-checklist",
  },
  {
    title: "Shade, Shelter, and Soil: Why Trees Matter",
    category: "Articles",
    slug: "urban-street-trees",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Simple guides to the trees you see every day.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-neutral-600">
            Maryland Natives is your guide to native trees of Maryland—explore
            the catalog, learn species, and read articles about the state&apos;s
            canopy.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/trees"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-white shadow-sm transition hover:bg-emerald-700"
            >
              Browse tree catalog
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-neutral-800 hover:bg-neutral-100"
            >
              Read tree articles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured Guides
          </h2>
          <Link
            href="/trees"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            View all trees
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article
              key={guide.title}
              className="flex flex-col justify-between rounded-xl border border-neutral-300 bg-[#E6E5A3] p-4 shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {guide.category}
                </p>
                <h3 className="text-sm font-semibold leading-snug text-neutral-900">
                  {guide.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {guide.description}
                </p>
              </div>
              <Link
                href="/trees"
                className="mt-3 text-xs font-medium text-emerald-700 hover:text-emerald-800"
              >
                Explore related trees →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Latest Articles
          </h2>
          <Link
            href="/articles"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            View all articles
          </Link>
        </div>
        <div className="divide-y divide-neutral-300 rounded-xl border border-neutral-300 bg-[#E6E5A3]">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block p-4 hover:bg-[#d9d886]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {article.category}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

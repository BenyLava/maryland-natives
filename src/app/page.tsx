import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { getAllTrees } from "@/lib/trees";
import { treeCatalogMetaLineClass } from "@/lib/tree-meta-styles";

const FEATURED_ARTICLE_SLUG = "why-plant-native-trees";

function shuffleAndTake<T>(array: T[], count: number): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export default function Home() {
  const allTrees = getAllTrees();
  const featuredTrees = shuffleAndTake(allTrees, 4);

  const allArticles = getAllArticles();
  const featuredArticle = allArticles.find((a) => a.slug === FEATURED_ARTICLE_SLUG);
  const moreArticles = allArticles.filter((a) => a.slug !== FEATURED_ARTICLE_SLUG);

  return (
    <div className="space-y-12">
      {/* Hero with Wye Oak background */}
      <section className="relative min-h-[420px] overflow-hidden rounded-2xl bg-neutral-300">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/wye-oak-hero.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/85 via-neutral-900/50 to-neutral-900/30" />
        <div className="relative flex min-h-[420px] flex-col justify-end px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Simple guides to the trees you see every day.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-100">
              Maryland Natives is your guide to native trees of Maryland, explore
              the catalog, learn species, and read articles about the state&apos;s
              canopy.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/trees"
                className="-mt-[10px] inline-flex items-center rounded-full bg-[#9ADE7B] px-5 py-2 text-neutral-900 font-medium shadow-sm transition hover:opacity-90"
              >
                Browse tree catalog
              </Link>
              <Link
                href="/quiz"
                className="-mt-[10px] inline-flex items-center rounded-full border border-white/80 bg-white/10 px-5 py-2 text-white backdrop-blur-sm shadow-sm transition hover:bg-white/20"
              >
                Take tree quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trees */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured Trees
          </h2>
          <Link
            href="/trees"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            View all trees
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTrees.map((tree) => (
            <Link
              key={tree.slug}
              href={`/trees/${tree.slug}`}
              className="flex flex-col justify-between rounded-xl border border-neutral-300 bg-[#E6E5A3] p-4 shadow-sm hover:bg-[#d9d886] hover:border-neutral-400"
            >
              <div>
                <h3 className="text-sm font-semibold leading-snug text-neutral-900">
                  {tree.title}
                </h3>
                <p className="mt-1 font-mono text-xs leading-tight text-neutral-700">
                  {tree.latinName}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-tight text-neutral-600">
                  {tree.region}
                </p>
              </div>
              <div className="mt-3 space-y-1">
                {tree.sun ? (
                  <p className={treeCatalogMetaLineClass}>Sun: {tree.sun}</p>
                ) : null}
                {tree.height ? (
                  <p className={treeCatalogMetaLineClass}>Height: {tree.height}</p>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {tree.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured Article
          </h2>
          <Link
            href="/articles"
            className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
          >
            View all articles
          </Link>
        </div>
        {featuredArticle && (
          <Link
            href={`/articles/${featuredArticle.slug}`}
            className="block rounded-xl border border-neutral-300 bg-[#E6E5A3] p-6 shadow-sm hover:bg-[#d9d886] hover:border-neutral-400"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {featuredArticle.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-neutral-900">
              {featuredArticle.title}
            </h3>
            {featuredArticle.readTime && (
              <p className="mt-2 text-xs text-neutral-600">
                {featuredArticle.readTime}
              </p>
            )}
          </Link>
        )}
        {moreArticles.length > 0 && (
          <div className="divide-y divide-neutral-300 rounded-xl border border-neutral-300 bg-[#E6E5A3]">
            {moreArticles.map((article) => (
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
        )}
      </section>
    </div>
  );
}

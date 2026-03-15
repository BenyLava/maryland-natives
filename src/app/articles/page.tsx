import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

const FEATURED_ARTICLE_SLUG = "why-plant-native-trees";

export default function ArticlesPage() {
  const articles = getAllArticles();
  const feature = articles.find((a) => a.slug === FEATURED_ARTICLE_SLUG) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== feature.slug);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Tree Articles
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Articles about trees, for everyday explorers.
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          Read approachable, practical pieces on noticing trees, understanding
          their roles in cities and forests, and sharing that curiosity with
          others.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,_1.5fr),minmax(0,_1.1fr)]">
        {/* Featured article */}
        {feature && (
          <article className="flex flex-col justify-between rounded-xl border border-neutral-300 bg-[#E6E5A3] p-5 shadow-sm">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Featured
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                {feature.title}
              </h2>
              <p className="text-xs font-medium text-neutral-500">
                {feature.category} · {feature.readTime}
              </p>
            </div>
            <Link
              href={`/articles/${feature.slug}`}
              className="mt-4 inline-flex w-max items-center rounded-full bg-emerald-600 px-5 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              Read story
            </Link>
          </article>
        )}

        {/* Latest list */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-tight text-neutral-900">
            Recent stories
          </h2>
          <div className="divide-y divide-neutral-300 rounded-xl border border-neutral-300 bg-[#E6E5A3] text-sm">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block p-4 hover:bg-[#d9d886]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-neutral-900">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


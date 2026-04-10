import Link from "next/link";
import { notFound } from "next/navigation";
import { renderTreeArticleBody } from "@/lib/render-tree-markdown";
import { getTreeBySlug } from "@/lib/trees";
import { treeDetailMetaPillClass } from "@/lib/tree-meta-styles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TreeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tree = getTreeBySlug(slug);

  if (!tree) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {tree.type}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {tree.title}
        </h1>
        <p className="font-mono text-sm text-neutral-700">
          {tree.latinName}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
          {tree.sun ? (
            <span className={treeDetailMetaPillClass}>Sun: {tree.sun}</span>
          ) : null}
          {tree.height ? (
            <span className={treeDetailMetaPillClass}>Height: {tree.height}</span>
          ) : null}
          {tree.sun || tree.height ? (
            <span className="text-neutral-500">·</span>
          ) : null}
          <span>Region: {tree.region}</span>
        </div>
      </header>

      <article className="prose max-w-none text-sm leading-relaxed text-neutral-800">
        {renderTreeArticleBody(tree.content)}
      </article>

      <div>
        <Link
          href="/trees"
          className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          ← Back to tree catalog
        </Link>
      </div>
    </div>
  );
}

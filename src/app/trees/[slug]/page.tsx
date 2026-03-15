import Link from "next/link";
import { notFound } from "next/navigation";
import { getTreeBySlug } from "@/lib/trees";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TreeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tree = getTreeBySlug(slug);

  if (!tree) {
    return notFound();
  }

  const lines = tree.content.split("\n");

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
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span>Height: {tree.height}</span>
          <span>Region: {tree.region}</span>
        </div>
      </header>

      <article className="prose max-w-none text-sm leading-relaxed text-neutral-800">
        {lines.map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="mt-6 text-lg font-semibold text-[#171717]">
                {line.replace("## ", "")}
              </h2>
            );
          }

          if (!line.trim()) {
            return <br key={index} />;
          }

          return <p key={index}>{line}</p>;
        })}
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

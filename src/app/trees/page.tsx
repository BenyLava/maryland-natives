import Link from "next/link";
import { getAllTrees } from "@/lib/trees";

export default function TreesPage() {
  const trees = getAllTrees();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Tree Catalog
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Explore different tree species.
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          A small, hand-picked catalog of trees from around the world. Use it
          as a starting point for learning the shapes, leaves, and regions of
          common species.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {trees.map((tree) => (
          <Link
            key={tree.slug}
            href={`/trees/${tree.slug}`}
            className="flex aspect-square flex-col justify-between rounded-xl border border-neutral-300 bg-[#E6E5A3] p-3 shadow-sm hover:bg-[#d9d886] hover:border-neutral-400"
          >
            <div>
              <h3 className="line-clamp-2 text-base font-semibold leading-tight text-neutral-900">
                {tree.title}
              </h3>
              <p className="mt-1 font-mono text-xs leading-tight text-neutral-700">
                {tree.latinName}
              </p>
              <p className="mt-2 line-clamp-2 text-xs leading-tight text-neutral-600">
                {tree.region}
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              {tree.type}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-neutral-500">
        This catalog is intentionally lightweight. You can extend it later with
        photos, seasonal notes, and links to in-depth articles.
      </p>
    </div>
  );
}


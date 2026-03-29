import Link from "next/link";
import { getAllTrees } from "@/lib/trees";
import { treeCatalogMetaLineClass } from "@/lib/tree-meta-styles";

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
          Every tree in this catalog is a certified native of Maryland. These
          species are well suited to local conditions and support local
          wildlife, from birds and pollinators to mammals. If a tree you know
          isn’t listed here, that doesn’t mean it isn’t a Maryland native; this
          list is a curated selection, not a complete inventory.
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
            <div className="flex flex-col gap-1">
              {tree.sun ? (
                <p className={treeCatalogMetaLineClass}>Sun: {tree.sun}</p>
              ) : null}
              {tree.height ? (
                <p className={treeCatalogMetaLineClass}>Height: {tree.height}</p>
              ) : null}
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                {tree.type}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


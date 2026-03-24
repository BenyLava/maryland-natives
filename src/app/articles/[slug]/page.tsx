import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getArticleContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "articles",
    `${slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const raw = getArticleContent(slug);

  if (!raw) {
    return notFound();
  }

  const lines = raw.split("\n");

  // very small front-matter stripper: skip until the second '---'
  let i = 0;
  if (lines[0]?.trim() === "---") {
    i = 1;
    for (; i < lines.length; i++) {
      if (lines[i].trim() === "---") {
        i++;
        break;
      }
    }
  }

  const contentLines = lines.slice(i);

  const metaTitleLine = lines.find((line) => line.startsWith("title:"));
  const metaTitle = metaTitleLine
    ? metaTitleLine.split(":").slice(1).join(":").trim().replace(/^"|"$/g, "")
    : "";

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {metaTitle || slug}
        </h1>
      </header>

      <article className="prose max-w-none text-sm leading-relaxed text-neutral-800">
        {contentLines.map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="mt-6 text-lg font-semibold">
                {line.replace("## ", "")}
              </h2>
            );
          }

          const imageMatch = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(line.trim());
          if (imageMatch) {
            const alt = imageMatch[1];
            const src = imageMatch[2];
            return (
              <figure
                key={index}
                className="my-4 max-w-lg overflow-hidden rounded-lg border border-neutral-300 bg-[#f5f4e8] shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {alt ? (
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    {alt}
                  </figcaption>
                ) : null}
              </figure>
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
          href="/articles"
          className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
        >
          ← Back to all articles
        </Link>
      </div>
    </div>
  );
}


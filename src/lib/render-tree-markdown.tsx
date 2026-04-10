import Image from "next/image";
import type { ReactNode } from "react";

let inlineKey = 0;
function nextInlineKey() {
  inlineKey += 1;
  return `t-${inlineKey}`;
}

/** Inline **bold**, *italic*, and [label](url) (non-nested except inside links/bold). */
export function parseTreeInline(text: string): ReactNode {
  if (!text) return null;

  const nodes: ReactNode[] = [];

  const pushPlain = (s: string) => {
    if (s) nodes.push(s);
  };

  let pos = 0;

  while (pos < text.length) {
    if (text[pos] === "[") {
      const rb = text.indexOf("]", pos);
      if (
        rb !== -1 &&
        text[rb + 1] === "(" &&
        text.indexOf(")", rb + 2) !== -1
      ) {
        const cp = text.indexOf(")", rb + 2);
        const inner = text.slice(pos + 1, rb);
        const href = text.slice(rb + 2, cp);
        nodes.push(
          <a
            key={nextInlineKey()}
            href={href}
            className="text-emerald-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {parseTreeInline(inner)}
          </a>,
        );
        pos = cp + 1;
        continue;
      }
    }

    if (text.slice(pos, pos + 2) === "**") {
      const end = text.indexOf("**", pos + 2);
      if (end !== -1) {
        nodes.push(
          <strong key={nextInlineKey()}>
            {parseTreeInline(text.slice(pos + 2, end))}
          </strong>,
        );
        pos = end + 2;
        continue;
      }
    }

    if (text[pos] === "*") {
      const end = text.indexOf("*", pos + 1);
      if (end !== -1 && end > pos + 1) {
        nodes.push(<em key={nextInlineKey()}>{text.slice(pos + 1, end)}</em>);
        pos = end + 1;
        continue;
      }
    }

    let next = text.length;
    const openBracket = text.indexOf("[", pos);
    if (openBracket !== -1) next = Math.min(next, openBracket);

    const doubleStar = text.indexOf("**", pos);
    if (doubleStar !== -1) next = Math.min(next, doubleStar);

    const star = text.indexOf("*", pos);
    if (star !== -1 && text.slice(star, star + 2) !== "**") {
      next = Math.min(next, star);
    }

    pushPlain(text.slice(pos, next));
    pos = next;
  }

  if (nodes.length === 0) return null;
  if (nodes.length === 1) return nodes[0];
  return <>{nodes}</>;
}

function resetTreeInlineKeys() {
  inlineKey = 0;
}

let blockKey = 0;
function nextBlockKey() {
  blockKey += 1;
  return `blk-${blockKey}`;
}

/** Renders tree species markdown: ## headings, images, bullet lists, paragraphs. */
export function renderTreeArticleBody(content: string): ReactNode {
  resetTreeInlineKeys();
  blockKey = 0;
  const lines = content.split("\n");
  const out: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      out.push(
        <h2
          key={nextBlockKey()}
          className="mt-6 text-lg font-semibold text-[#171717]"
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    const imageLine = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageLine) {
      const [, alt, src] = imageLine;
      const isRemote = /^https?:\/\//i.test(src);
      out.push(
        <figure key={nextBlockKey()} className="my-5 max-w-xl">
          {isRemote ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote species reference photos
            <img
              src={src}
              alt={alt || "Illustration"}
              className="h-auto max-h-80 w-full rounded-lg border border-neutral-200 bg-neutral-50 object-contain"
            />
          ) : (
            <Image
              src={src}
              alt={alt || "Illustration"}
              width={560}
              height={320}
              className="h-auto w-full rounded-lg border border-neutral-200 bg-neutral-50 object-contain"
            />
          )}
          {alt ? (
            <figcaption className="mt-2 text-xs text-neutral-600">{alt}</figcaption>
          ) : null}
        </figure>,
      );
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      out.push(
        <ul
          key={nextBlockKey()}
          className="my-3 list-disc space-y-2 pl-5 text-neutral-800"
        >
          {items.map((item, j) => (
            <li key={j} className="pl-0.5">
              {parseTreeInline(item)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    out.push(
      <p key={nextBlockKey()} className="text-neutral-800">
        {parseTreeInline(line)}
      </p>,
    );
    i++;
  }

  return <>{out}</>;
}

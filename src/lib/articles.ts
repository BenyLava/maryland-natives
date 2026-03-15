import fs from "fs";
import path from "path";

export type ArticleMeta = {
  title: string;
  category: string;
  readTime: string;
  slug: string;
};

export type Article = ArticleMeta & {
  content: string;
};

const articlesDir = path.join(process.cwd(), "content", "articles");

function parseFrontMatter(fileContent: string) {
  const lines = fileContent.split("\n");
  if (lines[0].trim() !== "---") {
    throw new Error("Missing front matter");
  }

  let i = 1;
  const data: Record<string, string> = {};

  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "---") {
      i++;
      break;
    }
    if (!line) continue;
    const [key, ...rest] = line.split(":");
    data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  }

  const content = lines.slice(i).join("\n").trim();

  return {
    data: {
      title: data.title ?? "",
      category: data.category ?? "",
      readTime: data.readTime ?? "",
    },
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(articlesDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontMatter(raw);
      const slug = path.basename(file, ".md");
      return {
        title: data.title,
        category: data.category,
        readTime: data.readTime,
        slug,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(raw);

  return {
    title: data.title,
    category: data.category,
    readTime: data.readTime,
    slug,
    content,
  };
}


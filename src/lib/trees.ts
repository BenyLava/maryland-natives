import fs from "fs";
import path from "path";

export type TreeSun = "full sun" | "part sun" | "full shade";

export type TreeMeta = {
  title: string;
  latinName: string;
  type: string;
  height: string;
  region: string;
  sun: TreeSun | "";
  slug: string;
};

export type Tree = TreeMeta & {
  content: string;
};

const treesDir = path.join(process.cwd(), "content", "trees");

function parseFrontMatter(fileContent: string) {
  const lines = fileContent.split("\n");
  if (lines[0]?.trim() !== "---") {
    return { data: {} as Record<string, string>, content: fileContent };
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
  return { data, content };
}

export function getAllTrees(): TreeMeta[] {
  if (!fs.existsSync(treesDir)) {
    return [];
  }

  const files = fs.readdirSync(treesDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(treesDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontMatter(raw);
      const slug = path.basename(file, ".md");
  const sunRaw = (data.sun ?? "").toLowerCase().trim();
  const sun: TreeSun | "" =
    sunRaw === "full sun" || sunRaw === "part sun" || sunRaw === "full shade"
      ? sunRaw
      : "";

  return {
    title: data.title ?? "",
    latinName: data.latinName ?? "",
    type: data.type ?? "",
    height: data.height ?? "",
    region: data.region ?? "",
    sun,
    slug,
  };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getTreeBySlug(slug: string): Tree | null {
  const fullPath = path.join(treesDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(raw);

  const sunRaw = (data.sun ?? "").toLowerCase().trim();
  const sun: TreeSun | "" =
    sunRaw === "full sun" || sunRaw === "part sun" || sunRaw === "full shade"
      ? sunRaw
      : "";

  return {
    title: data.title ?? "",
    latinName: data.latinName ?? "",
    type: data.type ?? "",
    height: data.height ?? "",
    region: data.region ?? "",
    sun,
    slug,
    content,
  };
}

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { enrichments } from "./tree-enrichment.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const treesDir = path.join(__dirname, "..", "content", "trees");

function parseFrontMatter(raw) {
  const lines = raw.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") return null;

  const data = {};
  let i = 1;
  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "---") {
      i++;
      break;
    }
    if (!line) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let val = line.slice(colon + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }

  const content = lines.slice(i).join("\n").trim();
  return { data, content };
}

function escapeYamlString(val) {
  const s = String(val);
  if (/[:#\n]/.test(s) || s.includes('"')) {
    return JSON.stringify(s);
  }
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildBody(meta, e) {
  const open = `${meta.title} (${meta.latinName}) is a native tree in Maryland (${meta.type}). The sections below summarize where it grows, how to recognize it, and how it supports local ecosystems.`;

  return [
    open,
    "",
    "## Habitat and range",
    "",
    e.habitat,
    "",
    "## Identification",
    "",
    e.identification,
    "",
    "## Soil and moisture",
    "",
    e.soil,
    "",
    "## Wildlife value",
    "",
    e.wildlife,
    "",
    "## Uses and significance",
    "",
    e.uses,
    "",
  ].join("\n");
}

const keysOrder = ["title", "latinName", "type", "height", "region", "sun"];

for (const file of fs.readdirSync(treesDir).filter((f) => f.endsWith(".md"))) {
  const slug = path.basename(file, ".md");
  const e = enrichments[slug];
  if (!e) {
    console.error("Missing enrichment for:", slug);
    process.exit(1);
  }

  const raw = fs.readFileSync(path.join(treesDir, file), "utf8");
  const parsed = parseFrontMatter(raw);
  if (!parsed) {
    console.error("Invalid front matter:", file);
    process.exit(1);
  }

  const { data } = parsed;
  data.sun = e.sun;
  data.height = (data.height || "")
    .replace(/\uFFFD/g, "–")
    .replace(/\u2013/g, "–");

  const fmLines = ["---"];
  for (const k of keysOrder) {
    const v = data[k];
    if (v == null || v === "") continue;
    fmLines.push(`${k}: ${escapeYamlString(v)}`);
  }
  fmLines.push("---", "");

  const out = `${fmLines.join("\n")}${buildBody(data, e)}`;
  fs.writeFileSync(path.join(treesDir, file), out, "utf8");
  console.log("Wrote", file);
}

console.log("Done. Trees:", Object.keys(enrichments).length);

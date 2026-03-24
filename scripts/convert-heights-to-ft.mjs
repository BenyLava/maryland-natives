import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const treesDir = path.join(__dirname, "..", "content", "trees");

function mToFtRange(mStr) {
  const a = parseFloat(mStr);
  if (Number.isNaN(a)) return null;
  return Math.round(a * 3.28084);
}

function convertHeightValue(value) {
  return value.replace(
    /(\d+(?:\.\d+)?)\s*([–-])\s*(\d+(?:\.\d+)?)\s*m\b/g,
    (_, low, sep, high) => {
      const ft1 = mToFtRange(low);
      const ft2 = mToFtRange(high);
      if (ft1 == null || ft2 == null) return _;
      const dash = sep === "–" ? "–" : "–";
      return `${ft1}${dash}${ft2} ft`;
    },
  );
}

for (const file of fs.readdirSync(treesDir).filter((f) => f.endsWith(".md"))) {
  const fp = path.join(treesDir, file);
  let raw = fs.readFileSync(fp, "utf8");
  const lines = raw.split(/\r?\n/);
  let changed = false;

  const out = lines.map((line) => {
    const m = /^(height:\s*)(".*")$/.exec(line);
    if (!m) return line;
    const prefix = m[1];
    let inner = m[2].slice(1, -1);
    const next = convertHeightValue(inner);
    if (next !== inner) {
      changed = true;
      return `${prefix}"${next}"`;
    }
    return line;
  });

  if (changed) {
    fs.writeFileSync(fp, out.join("\n"), "utf8");
    console.log("Updated", file);
  }
}

console.log("Done.");

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const treesDir = path.join(__dirname, "..", "content", "trees");

function roundTo5(n) {
  return Math.round(n / 5) * 5;
}

function roundHeightString(value) {
  return value.replace(
    /(\d+)\s*[–-]\s*(\d+)\s*(ft)\b/g,
    (match, low, high, unit) => {
      let a = roundTo5(parseInt(low, 10));
      let b = roundTo5(parseInt(high, 10));
      if (a > b) [a, b] = [b, a];
      if (a === b) {
        return `${a} ${unit}`;
      }
      return `${a}–${b} ${unit}`;
    },
  );
}

for (const file of fs.readdirSync(treesDir).filter((f) => f.endsWith(".md"))) {
  const fp = path.join(treesDir, file);
  const raw = fs.readFileSync(fp, "utf8");
  const lines = raw.split(/\r?\n/);
  let changed = false;

  const out = lines.map((line) => {
    const m = /^(height:\s*)(".*")$/.exec(line);
    if (!m) return line;
    const prefix = m[1];
    let inner = m[2].slice(1, -1);
    const next = roundHeightString(inner);
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

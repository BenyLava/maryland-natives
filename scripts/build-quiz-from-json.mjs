import fs from "fs";
import path from "path";

const sourcePath =
  "C:\\Users\\ben-o\\Downloads\\Arborist-400-Questions.txt.json";
const outPath = path.join(process.cwd(), "content", "quiz", "questions.md");

function build() {
  const raw = fs.readFileSync(sourcePath, "utf8");
  const data = JSON.parse(raw);
  const items = data.quiz_items || [];

  const blocks = [];

  for (const item of items) {
    const number = item.question_number;
    const id = `q${String(number).padStart(3, "0")}`;
    const correct = String(item.correct_option || "").trim().toUpperCase();
    const explanationRaw = String(item.solution_explanation || "").trim();

    const text = String(item.question_text || "");
    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (!lines.length) continue;

    // Drop leading "Question X" line if present
    let idx = 0;
    if (/^Question\s+\d+/i.test(lines[0])) {
      idx = 1;
    }
    const contentLines = lines.slice(idx);

    const optionStartIndex = contentLines.findIndex((l) => /^\(A\)/.test(l));
    if (optionStartIndex === -1) continue;

    const promptLines = contentLines.slice(0, optionStartIndex);
    const optionLines = contentLines.slice(optionStartIndex);

    const prompt = promptLines.join(" ");

    const optionMap = new Map();
    for (const line of optionLines) {
      const m = /^\(([A-D])\)\s*(.+)$/.exec(line);
      if (!m) continue;
      const letter = m[1].toUpperCase();
      const text = m[2];
      optionMap.set(letter, text);
    }

    if (!prompt || optionMap.size < 2) continue;

    const blockLines = [];
    blockLines.push(`@@ ${id} ${correct}`);
    blockLines.push(prompt);
    blockLines.push("");

    ["A", "B", "C", "D"].forEach((letter) => {
      if (optionMap.has(letter)) {
        blockLines.push(`${letter}. ${optionMap.get(letter)}`);
      }
    });

    if (explanationRaw) {
      const oneLine = explanationRaw.replace(/\s+/g, " ").trim();
      blockLines.push("");
      blockLines.push(`Explanation: ${oneLine}`);
    }

    blockLines.push("");
    blocks.push(blockLines.join("\n"));
  }

  fs.writeFileSync(outPath, blocks.join("\n"), "utf8");
  console.log(`Wrote ${blocks.length} questions to ${outPath}`);
}

build();


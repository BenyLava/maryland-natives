import fs from "fs";
import path from "path";

const sourcePath = "C:\\Users\\ben-o\\Downloads\\Arborist-400-Questions.txt";
const outDir = path.join(process.cwd(), "content", "quiz");

function parseAnswerKey(text) {
  const answerSectionMatch = text.match(/Answer Key[\\s\\S]*$/m);
  if (!answerSectionMatch) {
    throw new Error("Answer Key section not found");
  }
  const section = answerSectionMatch[0];
  const map = new Map();
  const regex = /(\\d+)\\s+([A-D])/g;
  let m;
  while ((m = regex.exec(section)) !== null) {
    const num = parseInt(m[1], 10);
    const letter = m[2];
    if (!map.has(num)) {
      map.set(num, letter);
    }
  }
  return map;
}

function parseQuestions(text) {
  const questions = [];
  const withoutAnswers = text.split("Answer Key")[0];
  const regex =
    /\\f?Question\\s+(\\d+)[\\r\\n]+([\\s\\S]*?)(?=\\f?Question\\s+\\d+|Answer Key|$)/g;

  let m;
  while ((m = regex.exec(withoutAnswers)) !== null) {
    const number = parseInt(m[1], 10);
    const block = m[2];
    const lines = block
      .split(/\\r?\\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    if (lines.length === 0) continue;

    const optionStartIndex = lines.findIndex((l) => /^\\([A-D]\\)/.test(l));
    if (optionStartIndex === -1) continue;

    const promptLines = lines.slice(0, optionStartIndex);
    const optionLines = lines.slice(optionStartIndex);

    const prompt = promptLines.join(" ");
    const options = [];
    for (const line of optionLines) {
      const match = /^\\(([A-D])\\)\\s*(.*)$/.exec(line);
      if (match) {
        options.push({ letter: match[1], text: match[2] });
      }
    }

    if (options.length === 0) continue;

    questions.push({ number, prompt, options });
  }
  return questions;
}

function toId(n) {
  return `q${String(n).padStart(3, "0")}`;
}

async function main() {
  const raw = fs.readFileSync(sourcePath, "utf8");
  const answerMap = parseAnswerKey(raw);
  const questions = parseQuestions(raw);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const q of questions) {
    const correct = answerMap.get(q.number) ?? "";
    const id = toId(q.number);
    const filePath = path.join(outDir, `${id}.md`);
    const frontMatterLines = [
      "---",
      `id: ${id}`,
      `number: ${q.number}`,
      "source: arborist-400",
      `correct: ${correct}`,
      "---",
      "",
    ];
    const bodyLines = [
      q.prompt,
      "",
      ...q.options.map((opt) => `${opt.letter}. ${opt.text}`),
      "",
    ];
    const contents = [...frontMatterLines, ...bodyLines].join("\\n");
    fs.writeFileSync(filePath, contents, "utf8");
  }

  console.log(`Wrote ${questions.length} quiz questions to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


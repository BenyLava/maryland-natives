import fs from "fs";
import path from "path";
import QuizClient from "./QuizClient";

export type QuizOption = {
  label: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correct: string;
  explanation?: string;
};

function loadQuizQuestions(): QuizQuestion[] {
  const quizPath = path.join(process.cwd(), "content", "quiz", "questions.md");
  const raw = fs.readFileSync(quizPath, "utf8");

  const blocks = raw
    .split(/^@@\s+/m)
    .map((b) => b.trim())
    .filter((b) => b.length > 0);

  const questions: QuizQuestion[] = [];

  for (const block of blocks) {
    const lines = block.split(/\r?\n/).map((l) => l.trim());
    if (lines.length < 3) continue;

    const headerMatch = /^(\S+)\s+([A-D])\s*$/i.exec(lines[0]);
    if (!headerMatch) continue;

    const id = headerMatch[1];
    const correct = headerMatch[2].toUpperCase();

    const bodyLines = lines.slice(1);
    const explanationIndex = bodyLines.findIndex((l) =>
      l.toLowerCase().startsWith("explanation:"),
    );
    const mainLines =
      explanationIndex === -1
        ? bodyLines
        : bodyLines.slice(0, explanationIndex);
    const explanationLines =
      explanationIndex === -1 ? [] : bodyLines.slice(explanationIndex);

    const optionStartIndex = mainLines.findIndex((l) => /^[A-D]\./.test(l));
    if (optionStartIndex === -1) continue;

    const promptLines = mainLines.slice(0, optionStartIndex);
    const optionLines = mainLines.slice(optionStartIndex);

    const prompt = promptLines.join(" ");

    const options: QuizOption[] = optionLines
      .map((line) => {
        const m = /^([A-D])\.\s*(.+)$/.exec(line);
        if (!m) return null;
        return {
          label: m[1].toUpperCase(),
          text: m[2],
        };
      })
      .filter((o): o is QuizOption => o !== null);

    if (!prompt || options.length < 2) continue;

    let explanation: string | undefined;
    if (explanationLines.length) {
      const joined = explanationLines.join(" ");
      explanation = joined.replace(/^Explanation:\s*/i, "").trim();
    }

    questions.push({ id, prompt, options, correct, explanation });
  }

  return questions;
}

function shuffleAndTake<T>(items: T[], count: number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export default function QuizPage() {
  const allQuestions = loadQuizQuestions();
  const questions = shuffleAndTake(allQuestions, 10);

  return (
    <QuizClient questions={questions} />
  );
}


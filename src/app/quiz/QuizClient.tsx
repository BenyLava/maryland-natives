"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { QuizQuestion } from "./page";

type Props = {
  questions: QuizQuestion[];
};

export default function QuizClient({ questions }: Props) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const total = questions.length;

  const handleChange = (questionId: string, label: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    let correctCount = 0;
    for (const q of questions) {
      if (answers[q.id] && answers[q.id].toUpperCase() === q.correct) {
        correctCount++;
      }
    }
    setScore(correctCount);
    setSubmitted(true);
    setShowResult(true);
  };

  const handleCloseOverlay = () => {
    setShowResult(false);
  };

  const percent = useMemo(
    () => (total > 0 ? Math.round((score / total) * 100) : 0),
    [score, total],
  );

  return (
    <div className="space-y-8 relative">
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Quiz
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Test your tree knowledge.
            </h1>
          </div>
          {submitted && (
            <button
              type="button"
              onClick={() => {
                setShowResult(false);
                router.refresh();
              }}
              className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              Restart quiz
            </button>
          )}
        </div>
        <p className="max-w-2xl text-sm text-neutral-600">
          Each visit loads a random set of ten multiple-choice questions drawn
          from a growing bank of arborist-style practice items.
        </p>
      </header>

      <section className="space-y-6 rounded-xl border border-neutral-300 bg-[#E6E5A3] p-5">
        <ol className="space-y-5">
          {questions.map((question, qIndex) => (
            <li
              key={question.id}
              className="space-y-3 rounded-lg bg-white/60 p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-neutral-900">
                <span className="mr-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Q{qIndex + 1}
                </span>
                {question.prompt}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {question.options.map((option) => {
                  const selected = answers[question.id];
                  const isSelected = selected === option.label;
                  const isCorrectOption =
                    option.label.toUpperCase() === question.correct;

                  let optionClasses =
                    "flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-xs text-neutral-800 transition";

                  if (!submitted) {
                    optionClasses +=
                      " border-neutral-300 bg-white hover:border-emerald-600 hover:bg-emerald-50";
                  } else if (isCorrectOption) {
                    optionClasses +=
                      " border-emerald-600 bg-emerald-100 text-emerald-900";
                  } else if (isSelected && !isCorrectOption) {
                    optionClasses +=
                      " border-red-600 bg-red-100 text-red-900";
                  } else {
                    optionClasses +=
                      " border-neutral-200 bg-white/60 text-neutral-500";
                  }

                  return (
                    <label key={option.label} className={optionClasses}>
                      <input
                        type="radio"
                        name={question.id}
                        disabled={submitted}
                        checked={isSelected}
                        onChange={() =>
                          handleChange(question.id, option.label)
                        }
                        className="h-3 w-3 border border-neutral-400 text-emerald-700 focus:ring-emerald-600"
                      />
                      <span>
                        <span className="mr-1 font-semibold">
                          {option.label}.
                        </span>
                        {option.text}
                      </span>
                    </label>
                  );
                })}
              </div>
              {submitted &&
                question.explanation &&
                (!answers[question.id] ||
                  answers[question.id].toUpperCase() !==
                    question.correct) && (
                  <p className="mt-2 text-xs leading-relaxed text-neutral-700">
                    <span className="font-semibold text-neutral-900">
                      Explanation:
                    </span>{" "}
                    {question.explanation}
                  </p>
                )}
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-neutral-600">
            {submitted
              ? "Correct answers are highlighted in green; incorrect choices in red. Skipped or wrong questions include an explanation."
              : "Select one answer for each question, then submit to see your score."}
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center rounded-full bg-[#9ADE7B] px-5 py-2 text-xs font-semibold text-neutral-900 shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={submitted}
          >
            {submitted ? "Submitted" : "Submit answers"}
          </button>
        </div>
      </section>

      <div>
        <Link
          href="/articles"
          className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
        >
          ← Back to articles
        </Link>
      </div>

      {showResult && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/40"
          onClick={handleCloseOverlay}
        >
          <div className="mx-4 max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="text-lg font-semibold text-neutral-900">
              Your score
            </h2>
            <p className="mt-3 text-3xl font-bold text-emerald-700">
              {score} / {total}
            </p>
            <p className="mt-1 text-xs text-neutral-600">{percent}% correct</p>
            <p className="mt-4 text-xs text-neutral-600">
              Tap or click anywhere to close this card.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { getPatternTitle, getSubPatterns } from "../../data";

// highlight.js setup
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

export default function QuestionPage({
  params,
}: {
  params: Promise<{ pattern: string; question: string }>;
}) {
  const [pattern, setPattern] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<"javascript" | "python">(
    "javascript"
  );
  const [openSection, setOpenSection] = useState<"better" | "optimal" | null>(
    null
  );

  useEffect(() => {
    params.then((resolvedParams) => {
      setPattern(resolvedParams.pattern);
      setQuestion(resolvedParams.question);
      setIsLoading(false);
    });
  }, [params]);

  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        try {
          hljs.highlightElement(block as HTMLElement);
        } catch {}
      });
    });
  }, [language, openSection]);

  if (isLoading) {
    return (
      <div className="section pt-28 pb-16">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2" style={{ borderColor: '#FFC107' }}></div>
        </div>
      </div>
    );
  }

  const title = getPatternTitle(pattern);
  const subPatterns = getSubPatterns(pattern);
  const allQuestions = subPatterns.flatMap(sp => sp.questions);
  const q = allQuestions.find((x) => x.slug === question);

  if (!title || !q) return notFound();

  const codeSamples = {
    javascript: {
      better: {
        description:
          "Uses hashing for quick lookups. Time complexity: O(n), Space: O(n).",
        code: `// Better Approach - Hashing
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      },
      optimal: {
        description:
          "Uses sorting + two pointers. Time complexity: O(n log n), Space: O(1) extra.",
        code: `// Optimal Approach - Sorting + Two Pointers
function twoSum(nums, target) {
  let arr = nums.map((val, idx) => [val, idx]);
  arr.sort((a, b) => a[0] - b[0]);

  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left][0] + arr[right][0];
    if (sum === target) return [arr[left][1], arr[right][1]];
    if (sum < target) left++;
    else right--;
  }
  return [];
}`,
      },
    },
    python: {
      better: {
        description:
          "Uses hashing for quick lookups. Time complexity: O(n), Space: O(n).",
        code: `# Better Approach - Hashing
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`,
      },
      optimal: {
        description:
          "Uses sorting + two pointers. Time complexity: O(n log n), Space: O(1) extra.",
        code: `# Optimal Approach - Sorting + Two Pointers
def two_sum(nums, target):
    arr = list(enumerate(nums))
    arr.sort(key=lambda x: x[1])
    left, right = 0, len(arr) - 1

    while left < right:
        s = arr[left][1] + arr[right][1]
        if s == target:
            return [arr[left][0], arr[right][0]]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []`,
      },
    },
  };

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow={title}
        title={q.title}
        subtitle={
          <>
            <span
              className={
                q.difficulty.toLowerCase() === "easy"
                  ? "text-green-600"
                  : q.difficulty.toLowerCase() === "medium"
                  ? "text-[#FFC107]"
                  : "text-red-600"
              }
            >
              {q.difficulty}
            </span>
            {` : practice->${pattern}->${question}`}
          </>
        }
        center
      />

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="p-6 text-left">
          <p style={{ color: "#6b7280" }}>
            This is a placeholder question page. Here you can show the full
            prompt, constraints, examples and a coding workspace.
          </p>

          {/* Language Selector */}
          <div className="flex gap-4 my-6">
            <button
              onClick={() => setLanguage("javascript")}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                language === "javascript"
                  ? "text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              style={{
                backgroundColor: language === "javascript" ? "#FFC107" : undefined
              }}
            >
              JavaScript
            </button>
            <button
              onClick={() => setLanguage("python")}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                language === "python"
                  ? "text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              style={{
                backgroundColor: language === "python" ? "#FFC107" : undefined
              }}
            >
              Python
            </button>
          </div>

          {/* Collapsible Sections */}
          {(["better", "optimal"] as const).map((approachKey) => {
            const isOpen = openSection === approachKey;
            const approach = codeSamples[language][approachKey];

            return (
              <div
                key={approachKey}
                className="mb-4 border border-white/20 rounded-xl overflow-hidden"
              >
                {/* Toggle Button */}
                <button
                  className={`w-full flex justify-between items-center px-4 py-3 text-lg font-medium transition-all duration-200 ${
                    isOpen
                      ? "bg-gradient-to-r from-blue-50 to-white text-blue-700"
                      : "hover:bg-white/5"
                  }`}
                  onClick={() => setOpenSection(isOpen ? null : approachKey)}
                >
                  {approachKey === "better"
                    ? "Better Approach (Hashing)"
                    : "Optimal Approach (Sorting)"}
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </span>
                </button>

                {/* Code Section */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 py-3">
                    <p className="mb-3 text-gray-600">{approach.description}</p>
                    <pre className="rounded-lg overflow-auto">
                      <code className={`language-${language}`}>{approach.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="glass-divider my-6" />
          <div className="flex items-center justify-between">
            <Link
              href={`/practice`}
              className="px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#ffffffcc",
                border: "1px solid rgba(0,0,0,0.08)",
                color: "#00171f",
              }}
            >
              ← Back to list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { patterns, patternIdToQuestions } from './data';

function getBadgeStyle(difficulty?: string) {
  const d = (difficulty || '').toLowerCase();
  if (d === 'easy') {
    return { backgroundColor: '#22c55e1a', border: '1px solid #22c55e33', color: '#16a34a' };
  }
  if (d === 'medium') {
    return { backgroundColor: '#f59e0b1a', border: '1px solid #f59e0b33', color: '#d97706' };
  }
  if (d === 'hard') {
    return { backgroundColor: '#ef44441a', border: '1px solid #ef444433', color: '#dc2626' };
  }
  return { backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' };
}

const STORAGE_Q_KEY = 'practice-dsa-questions-v1';

type CompletedMap = Record<string, string[]>; // patternId -> [questionSlug]

export default function PracticePage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [completedMap, setCompletedMap] = useState<CompletedMap>({});

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_Q_KEY);
      if (raw) setCompletedMap(JSON.parse(raw));
    } catch { }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_Q_KEY, JSON.stringify(completedMap));
    } catch { }
  }, [completedMap]);

  const isCompleted = (patternId: string, slug: string) =>
    Array.isArray(completedMap[patternId]) && completedMap[patternId].includes(slug);

  const toggleQuestion = (patternId: string, slug: string) => {
    setCompletedMap((prev) => {
      const current = new Set(prev[patternId] || []);
      if (current.has(slug)) current.delete(slug); else current.add(slug);
      return { ...prev, [patternId]: Array.from(current) };
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">

      <section className="section pt-28 pb-16">
        <SectionHeader
          eyebrow="Practice DSA"
          title="Master DSA Patterns"
          subtitle="Practice curated LeetCode-style problems organized by common patterns."
          center
        />

        {/* Popular list - show only glassmorphism cards */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg" style={{ color: '#00171f' }}>Popular Dsa Sheet</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-4">

            {[
              {
                id: 'Striver Sheet',
                title: 'Striver Sheet',
                description: 'Use two indices to scan from both ends or with offset for linear-time solutions.',
                url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2'
              },
              {
                id: 'NeetCode',
                title: 'NeetCode',
                description: 'Maintain a moving window over arrays/strings to track optimal substructures.',
                url: 'https://neetcode.io/practice?tab=allNC'
              },
              {
                id: 'Love Babber',
                title: 'Love Babber',
                description: 'Divide-and-conquer search on sorted domains and monotonic predicates.',
                url: 'https://450dsa.com/'
              },
            ].map((item) => (
              <div key={item.id} className="glass-card p-4 h-full flex flex-col justify-between">
                <div>
                  <div className="font-semibold" style={{ color: '#00171f' }}>{item.title}</div>
                  <div className="mt-2 text-sm" style={{ color: '#6b7280' }}>{item.description}</div>
                </div>
                <div className="mt-4">
                  <a href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-pill text-xs" >Explore</a>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-10">
          <div className="text-left">
            <ul className="space-y-1">
              {patterns.map((p) => {
                const questions = patternIdToQuestions[p.id] || [];
                const isOpen = expanded === p.id;
                return (
                  <li key={p.id} className="pattern-row">
                    <button type="button" onClick={() => toggle(p.id)} className="w-full flex items-center justify-between gap-3 py-2">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className={`inline-block transition-transform ${isOpen ? 'rotate-90' : ''}`} style={{ color: '#00171f' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                            <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div>
                          <div className="font-semibold text-base" style={{ color: '#00171f' }}>{p.title}</div>

                        </div>
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{questions.length} questions</div>
                    </button>
                    {isOpen && questions.length > 0 && (
                      <div className="mt-4 tree-children">
                        <ul className="space-y-1">
                          {questions.map((q) => {
                            const completed = isCompleted(p.id, q.slug);
                            const lcHref = `https://leetcode.com/problemset/?search=${encodeURIComponent(q.title)}`;
                            return (
                              <li key={q.slug} className="question-row border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                                <div className="flex items-center justify-between gap-4 py-2">
                                  <div className="flex items-center gap-3 sm:gap-4">
                                    <span className="tree-dot" />
                                    <input
                                      type="checkbox"
                                      checked={completed}
                                      onChange={() => toggleQuestion(p.id, q.slug)}
                                      className="h-4 w-4 rounded border border-black/20"
                                    />
                                    <Link href={`/practice/${p.id}/${q.slug}`} className="hover:underline text-sm sm:text-base" style={{ color: '#00171f' }}>
                                      {q.title}
                                    </Link>
                                  </div>
                                  <div className="flex items-center gap-3 sm:gap-4">
                                    <span className="px-2 py-1 text-[11px] sm:text-xs rounded-full" style={getBadgeStyle(q.difficulty)}>
                                      {q.difficulty}
                                    </span>
                                    <a href={lcHref} target="_blank" rel="noreferrer" className="brand-pill" aria-label="Open on LeetCode">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16" aria-hidden>
                                        <path fill="#ffa116" d="M24 4c11.046 0 20 8.954 20 20S35.046 44 24 44 4 35.046 4 24 12.954 4 24 4z" />
                                        <path fill="#ffffff" d="M28.9 31.7h6.2v3.5H25.2V18.8h10v3.5h-6.4v2.8h5.5v3.5h-5.4v3.1zM16.8 35.2c-2.7 0-4.8-2.1-4.8-4.8V21.3c0-2.6 2.1-4.8 4.8-4.8h5.2v3.5h-5.1c-.7 0-1.3.6-1.3 1.3v8.9c0 .7.6 1.3 1.3 1.3h5.1v3.7h-5.2z" />
                                      </svg>
                                      <span className="hidden sm:inline text-xs">LeetCode</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}



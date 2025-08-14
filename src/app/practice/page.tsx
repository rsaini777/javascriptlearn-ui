"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { patterns, getSubPatterns } from './data';

function getBadgeStyle(difficulty?: string) {
  const d = (difficulty || '').toLowerCase();
  if (d === 'easy') {
    return { backgroundColor: '#22c55e1a', border: '1px solid #22c55e33', color: '#16a34a' };
  }
  if (d === 'medium') {
    return { backgroundColor: '#00a8e8', border: '1px solid #00a8e8', color: '#ffffff' };
  }
  if (d === 'hard') {
    return { backgroundColor: '#ef44441a', border: '1px solid #ef444433', color: '#dc2626' };
  }
  return { backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' };
}

// Pattern icons mapping
const getPatternIcon = (patternId: string) => {
  const iconMap: Record<string, string> = {
    'two-pointers': '👆👆',
    'sliding-window': '🪟',
    'fast-slow': '🐰🐢',
    'merge-intervals': '🔗',
    'cyclic-sort': '🔄',
    'monotonic-stack': '📚',
    'bfs': '🌊',
    'dfs': '🌳',
    'binary-search': '🔍',
    'top-k': '🏆',
    'k-way-merge': '🔀',
    'greedy': '💰',
    'dp': '🧠',
    'backtracking': '🔙',
    'graphs': '🕸️',
    'trees': '🌲',
    'tries': '🔤'
  };
  return iconMap[patternId] || '📝';
};

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

        {/* Popular DSA Sheets */}
        <div className="mt-12">
          <div className="flex items-center justify-center mb-6">
            <h3 className="font-semibold text-xl flex items-center gap-2" style={{ color: '#00171f' }}>
              📚 Popular DSA Sheets
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                id: 'Striver Sheet',
                title: 'Striver Sheet',
                description: 'Comprehensive DSA course with 400+ problems covering all major patterns.',
                icon: '🚀',
                url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2'
              },
              {
                id: 'NeetCode',
                title: 'NeetCode',
                description: 'Curated problem sets with video explanations and optimal solutions.',
                icon: '🎯',
                url: 'https://neetcode.io/practice?tab=allNC'
              },
              {
                id: 'Love Babbar',
                title: 'Love Babbar',
                description: '450 DSA problems with detailed solutions and practice questions.',
                icon: '💝',
                url: 'https://450dsa.com/'
              },
            ].map((item) => (
              <div key={item.id} className="glass-card p-6 h-full flex flex-col justify-between hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-lg mb-2" style={{ color: '#00171f' }}>{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</div>
                </div>
                <div className="mt-4">
                  <a href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: '#ffffffcc', 
                      border: '1px solid rgba(0,0,0,0.08)', 
                      color: '#00171f' 
                    }}
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DSA Patterns */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-semibold text-2xl flex items-center justify-center gap-3 mb-2" style={{ color: '#00171f' }}>
              🧩 DSA Patterns ({patterns.length})
            </h3>
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Click on any pattern to explore questions and start practicing
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {patterns.map((p) => {
                const subPatterns = getSubPatterns(p.id);
                const isOpen = expanded === p.id;
                const totalQuestions = subPatterns.reduce((sum, sp) => sum + sp.questions.length, 0);
                const completedCount = subPatterns.reduce((sum, sp) => 
                  sum + sp.questions.filter(q => isCompleted(p.id, q.slug)).length, 0
                );
                
                return (
                  <div key={p.id} className="glass-card overflow-hidden">
                    <button 
                      type="button" 
                      onClick={() => toggle(p.id)} 
                      className="w-full flex items-center justify-between gap-4 p-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{getPatternIcon(p.id)}</div>
                        <div className="text-left">
                          <div className="font-semibold text-lg" style={{ color: '#00171f' }}>{p.title}</div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm" style={{ color: '#6b7280' }}>
                              {totalQuestions} questions
                            </span>
                            {p.hasSubPatterns && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                {subPatterns.length} sub-patterns
                              </span>
                            )}
                            {totalQuestions > 0 && (
                              <div className="flex items-center gap-1">
                                <span className="text-xs" style={{ color: '#6b7280' }}>Progress:</span>
                                <span className="text-xs font-medium text-green-600">
                                  {completedCount}/{totalQuestions}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {totalQuestions > 0 && (
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${(completedCount / totalQuestions) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        <span className={`inline-block transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} style={{ color: '#00171f' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                            <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </button>
                    
                    {isOpen && totalQuestions > 0 && (
                      <div className="border-t border-white/20">
                        <div className="p-4">
                          <div className="mb-4 text-sm font-medium" style={{ color: '#00171f' }}>
                            📋 Questions in {p.title}
                          </div>
                          
                          {/* Sub-patterns display */}
                          <div className="space-y-4">
                            {subPatterns.map((subPattern, subIndex) => (
                              <div key={subPattern.id} className="border-l-2 border-blue-200 pl-4">
                                {subPatterns.length > 1 && (
                                  <div className="mb-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                                      {subPattern.title}
                                    </span>
                                  </div>
                                )}
                                
                                <div className="space-y-2">
                                  {subPattern.questions.map((q) => {
                                    const completed = isCompleted(p.id, q.slug);
                                    const lcHref = `https://leetcode.com/problemset/?search=${encodeURIComponent(q.title)}`;
                                    return (
                                      <div key={q.slug} className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-3">
                                          <input
                                            type="checkbox"
                                            checked={completed}
                                            onChange={() => toggleQuestion(p.id, q.slug)}
                                            className="h-4 w-4 rounded border border-black/20 accent-green-500"
                                          />
                                          <Link 
                                            href={`/practice/${p.id}/${q.slug}`} 
                                            className="hover:text-blue-600 transition-colors text-sm" 
                                            style={{ color: '#00171f' }}
                                          >
                                            {q.title}
                                          </Link>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          <span className="px-2 py-1 text-xs rounded-full" style={getBadgeStyle(q.difficulty)}>
                                            {q.difficulty}
                                          </span>
                                          <a 
                                            href={lcHref} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs transition-all duration-200 hover:scale-105"
                                            style={{ 
                                              backgroundColor: '#ffffffcc', 
                                              border: '1px solid rgba(0,0,0,0.08)', 
                                              color: '#00171f' 
                                            }}
                                            aria-label="Open on LeetCode"
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14" aria-hidden>
                                              <path fill="#ffa116" d="M24 4c11.046 0 20 8.954 20 20S35.046 44 24 44 4 35.046 4 24 12.954 4 24 4z" />
                                              <path fill="#ffffff" d="M28.9 31.7h6.2v3.5H25.2V18.8h10v3.5h-6.4v2.8h5.5v3.5h-5.4v3.1zM16.8 35.2c-2.7 0-4.8-2.1-4.8-4.8V21.3c0-2.6 2.1-4.8 4.8-4.8h5.2v3.5h-5.1c-.7 0-1.3.6-1.3 1.3v8.9c0 .7.6 1.3 1.3 1.3h5.1v3.7h-5.2z" />
                                            </svg>
                                            <span className="hidden sm:inline">LC</span>
                                          </a>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



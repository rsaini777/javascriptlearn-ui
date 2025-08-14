"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import type { InterviewSet, QuestionItem } from '@/app/interview-questions/data';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

export default function ClientSetContent({ interviewSet }: { interviewSet: InterviewSet }) {
  const [activeSlug, setActiveSlug] = useState<string>(() => interviewSet.questions[0]?.slug ?? '');

  const activeItem: QuestionItem | undefined = useMemo(
    () => interviewSet.questions.find((q) => q.slug === activeSlug),
    [interviewSet.questions, activeSlug]
  );

  useEffect(() => {
    setActiveSlug(interviewSet.questions[0]?.slug ?? '');
  }, [interviewSet.slug]);

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
  }, []);

  const codeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeRef.current) {
      try {
        hljs.highlightElement(codeRef.current);
      } catch { }
    }
  }, [activeItem?.code]);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      <aside className="md:col-span-1 text-left">
        <div className="px-4 py-3 border-b border-r" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
          <div className="font-semibold" style={{ color: '#00171f' }}>Questions</div>
        </div>
        <ul className='border-r' style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
          {interviewSet.questions.map((q, idx) => {
            const isActive = q.slug === activeSlug;
            return (
              <li key={q.slug}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 transition-all  cursor-pointer"
                  style={{
                    color: '#00171f',
                  }}
                  onClick={() => setActiveSlug(q.slug)}
                >

                  <span className="mr-2" style={{ color: isActive ? '#00a8e8' : '#6b7280' }}>{idx + 1}.</span>
                  <span
                    className={isActive ? 'font-bold text-base' : 'text-sm'}
                    style={{ color: isActive ? '#00171f' : '#00171f' }}
                  >
                    {q.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <article className=" p-5 md:col-span-2 text-left">
        {activeItem ? (
          <div>
            <h2 className="font-semibold text-lg" style={{ color: '#00171f' }}>{activeItem.title}</h2>
            <div className="glass-divider my-3" />
            <div className="prose" style={{ color: '#00171f' }}>
              <p>{activeItem.answer}</p>
              {activeItem.code && (
                <pre className="code-block"><code ref={codeRef} className="language-javascript">{activeItem.code}</code></pre>
              )}
            </div>
          </div>
        ) : (
          <div style={{ color: '#6b7280' }}>Select a question to view details.</div>
        )}
      </article>
    </div>
  );
}



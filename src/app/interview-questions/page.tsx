"use client";

import SectionHeader from '@/components/SectionHeader';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { INTERVIEW_SETS, type CategoryKey } from './data';
import Image from 'next/image';

function getLevelStyle(level?: string) {
  const l = (level || '').toLowerCase();
  if (l.includes('easy') || l.includes('beginner')) {
    return { backgroundColor: '#22c55e1a', border: '1px solid #22c55e33', color: '#16a34a' };
  }
  if (l.includes('intermediate')) {
    return { backgroundColor: '#f59e0b1a', border: '1px solid #f59e0b33', color: '#d97706' };
  }
  if (l.includes('advanced') || l.includes('advance')) {
    return { backgroundColor: '#ef44441a', border: '1px solid #ef444433', color: '#dc2626' };
  }
  return { backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' };
}

// content now provided by INTERVIEW_SETS

export default function InterviewQuestionsPage() {
  const categories: CategoryKey[] = useMemo(
    () => ['JavaScript', 'React', 'System Design', 'Behavioral'],
    []
  );
  const [active, setActive] = useState<CategoryKey>('JavaScript');

  const sets = INTERVIEW_SETS[active];
  // No preview/accordion; whole card is a link

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow="Interview prep"
        title="Interview Questions"
        subtitle="Browse curated questions by category. JavaScript selected by default."
        center={false}
      />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className="brand-pill text-sm"
              style={{
                background: isActive ? '#ffffff' : '#ffffffcc',
                border: isActive ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: isActive ? '0 1px 8px rgba(0,0,0,0.12)' : undefined,
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-4">
        {sets.map((s) => (
          <Link key={s.slug} href={`/interview-questions/${encodeURIComponent(active)}/${s.slug}`} className="block group hover:translate-y-[-2px] transition-transform">
            <div className="glass-card p-4 text-left">
              <div className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                  <Image src={s.image} alt="" width={0} height={0} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: '#00171f' }}>{s.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#6b7280' }}>{s.description}</p>
                    {s.longDescription && (
                      <p className="text-sm mt-1" style={{ color: '#6b7280' }}>{s.longDescription}</p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="px-2 py-0.5 rounded-full text-[11px]" style={getLevelStyle(s.level)}>Level: {s.level}</span>
                      <span className="text-xs" style={{ color: '#6b7280' }}>{s.date}</span>
                      <div className="flex flex-wrap items-center gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full text-[11px]" style={{ background: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



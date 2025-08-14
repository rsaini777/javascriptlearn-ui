"use client";

import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

type Referral = {
  id: string;
  email: string;
  profile: string;
  experienceYears: string;
  location: string;
  note?: string;
  createdAt: number;
};

const STORAGE_KEY = 'referrals-v1';

function generateId() {
  try {

    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  } catch {}
  return 'ref_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('Frontend Developer');
  const [experienceYears, setExperienceYears] = useState('0-1');
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setReferrals(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(referrals));
    } catch {}
  }, [referrals]);

  const profiles = useMemo(
    () => [
      'Frontend Developer',
      'Backend Developer',
      'Fullstack Developer',
      'Mobile Developer',
      'DevOps / SRE',
      'Data Engineer',
      'Data Scientist / ML',
      'Product Manager',
      'Designer',
      'Other',
    ],
    []
  );

  const experienceOptions = useMemo(
    () => ['0-1', '1-2', '2-4', '4-6', '6-8', '8+'],
    []
  );

  function resetForm() {
    setEmail('');
    setProfile('Frontend Developer');
    setExperienceYears('0-1');
    setLocation('');
    setNote('');
  }

  function handleAddReferral(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !profile || !experienceYears || !location) return;
    const newReferral: Referral = {
      id: generateId(),
      email: email.trim(),
      profile: profile.trim(),
      experienceYears,
      location: location.trim(),
      note: note.trim() || undefined,
      createdAt: Date.now(),
    };
    setReferrals((prev) => [newReferral, ...prev]);
    resetForm();
  }

  function handleDelete(id: string) {
    setReferrals((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">
      <section className="section pt-28 pb-16">
        <SectionHeader
          eyebrow="Referrals"
          title="Ask for a Referral"
          subtitle="Create a referral request card with your email, target profile, experience and location."
          center
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <form onSubmit={handleAddReferral} className="glass-card p-5 md:col-span-1 text-left">
            <div className="font-semibold text-lg" style={{ color: '#00171f' }}>Create Referral Request</div>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm" style={{ color: '#00171f' }}>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  style={{ background: '#ffffffcc', borderColor: 'rgba(0,0,0,0.08)', color: '#00171f' }}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm" style={{ color: '#00171f' }}>Profile</label>
                <select
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  style={{ background: '#ffffffcc', borderColor: 'rgba(0,0,0,0.08)', color: '#00171f' }}
                >
                  {profiles.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm" style={{ color: '#00171f' }}>Experience (years)</label>
                <select
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  style={{ background: '#ffffffcc', borderColor: 'rgba(0,0,0,0.08)', color: '#00171f' }}
                >
                  {experienceOptions.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm" style={{ color: '#00171f' }}>Location</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  style={{ background: '#ffffffcc', borderColor: 'rgba(0,0,0,0.08)', color: '#00171f' }}
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="text-sm" style={{ color: '#00171f' }}>Note (optional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  style={{ background: '#ffffffcc', borderColor: 'rgba(0,0,0,0.08)', color: '#00171f' }}
                  placeholder="Brief context, target company, etc."
                  rows={3}
                />
              </div>

              <div className="pt-1">
                <button type="submit" className="brand-pill">
                  Create Referral Card
                </button>
              </div>
            </div>
          </form>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg" style={{ color: '#00171f' }}>Your Referral Requests</h3>
              {referrals.length > 0 && (
                <button
                  className="text-sm underline"
                  style={{ color: '#00171f' }}
                  onClick={() => setReferrals([])}
                >
                  Clear all
                </button>
              )}
            </div>
            {referrals.length === 0 ? (
              <div className="mt-4 text-sm" style={{ color: '#6b7280' }}>
                No referral requests yet. Add one using the form.
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {referrals.map((r) => (
                  <div key={r.id} className="glass-card p-4 text-left">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm" style={{ color: '#6b7280' }}>Email</div>
                        <div className="font-semibold" style={{ color: '#00171f' }}>{r.email}</div>
                      </div>
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="text-xs px-2 py-1 rounded-md"
                        style={{ background: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}
                        aria-label="Delete referral"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-sm" style={{ color: '#6b7280' }}>Profile</div>
                        <div style={{ color: '#00171f' }}>{r.profile}</div>
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: '#6b7280' }}>Experience</div>
                        <div style={{ color: '#00171f' }}>{r.experienceYears} yrs</div>
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: '#6b7280' }}>Location</div>
                        <div style={{ color: '#00171f' }}>{r.location}</div>
                      </div>
                      <div>
                        <div className="text-sm" style={{ color: '#6b7280' }}>Created</div>
                        <div style={{ color: '#00171f' }}>{new Date(r.createdAt).toLocaleString()}</div>
                      </div>
                    </div>

                    {r.note && (
                      <div className="mt-3">
                        <div className="text-sm" style={{ color: '#6b7280' }}>Note</div>
                        <div style={{ color: '#00171f' }}>{r.note}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}



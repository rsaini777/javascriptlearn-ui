'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // Keep state reserved for future mobile menu usage
  const [_isOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-2xl border-b border-white/20 shadow-lg" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold drop-shadow" style={{ color: '#00171f' }}>
                JavascriptLearning
              </span>
            </Link>
            {/* Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {[
                { href: '/practice', label: 'Practice Dsa' },
                { href: '/challenges', label: 'UI coding' },
                { href: '/learn', label: 'Guides' },
                { href: '/interview-questions', label: 'Interview Questions' },
                { href: '/backend', label: 'Backend' },
                { href: '/referrals', label: 'Referrals' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent transition-all"
                  style={{ color: '#00171f' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/signin"
              className="px-3 py-2 rounded-md transition-all"
              style={{ color: '#00171f' }}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all"
              style={{ color: '#00171f', backgroundColor: '#ffffffcc' }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

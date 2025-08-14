'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

export default function UserDropdown() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/20 transition-colors"
        style={{ color: '#00171f' }}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/80 border border-black/10">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm font-semibold" style={{ color: '#00171f' }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <span className="hidden sm:block text-sm font-medium">{user.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg font-semibold text-gray-600">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#00171f' }}>{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
              style={{ color: '#6b7280' }}
              onClick={() => setIsOpen(false)}
            >
              Profile Settings
            </a>
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
              style={{ color: '#6b7280' }}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="/referrals"
              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
              style={{ color: '#6b7280' }}
              onClick={() => setIsOpen(false)}
            >
              Referrals
            </a>
          </div>

          {/* Logout Button */}
          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors text-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

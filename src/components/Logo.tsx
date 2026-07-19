/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="logo-container">
      {/* Geometric Icon representing direction, structure, progress, and alignment */}
      <div 
        className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-brand-500 to-emerald-500 shadow-lg shadow-blue-500/20"
        id="logo-icon-wrap"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-white"
          id="logo-svg"
        >
          {/* Abstract elegant 'A' + direction chevron */}
          <path d="M3 20L12 4L21 20" />
          <path d="M7 16H17" />
          <path d="M12 4V16" strokeDasharray="2 2" className="opacity-60" />
          <circle cx="12" cy="4" r="1.5" fill="currentColor" />
        </svg>
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 opacity-25 blur-sm -z-10"></div>
      </div>

      {variant !== 'compact' && (
        <div className="flex flex-col text-left" id="logo-text-wrap">
          <span 
            className="font-display font-bold tracking-wider text-lg leading-none text-white"
            id="logo-brand-name"
          >
            ARIAS
          </span>
          <span 
            className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400 mt-1 leading-none"
            id="logo-tagline"
          >
            Business Consulting
          </span>
        </div>
      )}
    </div>
  );
}

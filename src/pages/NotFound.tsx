/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, ArrowRight, CornerDownLeft } from 'lucide-react';
import { AppRoute } from '../types';
import SEO from '../components/SEO';

interface NotFoundProps {
  onNavigate: (path: AppRoute) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-[75vh] items-center justify-center bg-slate-950 py-32" id="notfound-page">
      <SEO 
        title="Page Not Found (404)" 
        description="The requested corporate consulting page could not be located."
        path="/404"
      />

      <div className="max-w-md mx-auto px-4 sm:px-6 text-center" id="notfound-container">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-7 h-7" />
        </div>

        <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold bg-indigo-500/5 px-2.5 py-0.5 rounded border border-indigo-500/10 mb-4 inline-block">
          Error Code 404
        </span>

        <h1 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-white mb-3">
          Page Not Found
        </h1>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
          The requested coordinate or policy guideline could not be located on our servers. Please verify the link or return to the main hub.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center" id="notfound-actions">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
          >
            Return to Home
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-slate-300 font-bold text-xs bg-slate-900 hover:bg-slate-850 transition-colors cursor-pointer border border-slate-800"
          >
            <CornerDownLeft className="w-4 h-4" />
            Browse Services
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { AppRoute } from '../types';
import { COMPANY_INFO } from '../data';
import SEO from '../components/SEO';

interface ThankYouProps {
  onNavigate: (path: AppRoute) => void;
}

export default function ThankYou({ onNavigate }: ThankYouProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-[75vh] items-center justify-center bg-slate-950 py-32" id="thankyou-page">
      <SEO 
        title="Thank You for Your Submission" 
        description="Thank you for reaching out to ARIAS BUSINESS CONSULTING, LLC. Your business inquiry has been safely routed."
        path="/thank-you"
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center" id="thankyou-container">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h1 className="font-display font-bold tracking-tight text-3xl text-white mb-4">
          Submission Successful
        </h1>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
          Thank you for reaching out to ARIAS BUSINESS CONSULTING, LLC. Your operational parameters have been securely routed to <span className="text-slate-200">info@ariasbusinessconsulting.com</span>. Augusto Jesus Arias will evaluate your strategic coordinates and respond within 1-2 business days.
        </p>

        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900 flex flex-col gap-3 text-left mb-8" id="thankyou-info-card">
          <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Direct Coordinates:</span>
          <div className="flex flex-col gap-2.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:4078014292" className="hover:text-emerald-400 transition-colors">(407) 801-4292</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <a href="mailto:info@ariasbusinessconsulting.com" className="hover:text-indigo-400 transition-colors">info@ariasbusinessconsulting.com</a>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
        >
          Return to Homepage
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

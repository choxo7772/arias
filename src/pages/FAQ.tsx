/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { AppRoute } from '../types';
import { FAQS } from '../data';
import SEO from '../components/SEO';

interface FAQProps {
  onNavigate: (path: AppRoute) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter FAQs based on search term
  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full" id="faq-page">
      <SEO 
        title="Frequently Asked Questions (FAQ)" 
        description="Find answers to common questions about ARIAS BUSINESS CONSULTING, LLC, including client environments, consultation process, and legal boundaries."
        path="/faq"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="faq-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="faq-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            FAQ Hub
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Detailed, factual answers explaining our consulting scopes, local Florida presence, confidentiality guidelines, and pricing structures.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative" id="faq-search-wrap">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              id="faq-search-input"
            />
          </div>
        </div>
      </section>

      {/* FAQ List Accordions */}
      <section className="py-16 bg-slate-950" id="faq-accordions-list">
        <div className="max-w-3xl mx-auto px-4 sm:px-6" id="faq-list-container">
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-3.5" id="faq-grid">
              {filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="rounded-xl border border-slate-900 bg-slate-900/20 overflow-hidden"
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-bold text-xs text-white cursor-pointer hover:bg-slate-900/40 transition-colors"
                    aria-expanded={openFaq === faq.id}
                    id={`faq-trigger-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-400 shrink-0 transition-transform duration-200 ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-4 border-t border-slate-900/60 bg-slate-950/60" id={`faq-answer-block-${faq.id}`}>
                      <p className="text-slate-400 text-xs leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center" id="faq-no-results">
              <HelpCircle className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 text-xs">No matching questions found. Try searching for "Florida", "strategy", or "pricing".</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900/10 border-t border-slate-900" id="faq-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center animate-fade-in" id="faq-cta-wrap">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Have an Unanswered Question?</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Every business has custom administrative setups or operational challenges. Speak with Augusto Jesus Arias during a free 1-on-1 discovery consultation.
          </p>
          <a
            href="/request-consultation"
            onClick={(e) => handleLinkClick('/request-consultation', e)}
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Submit Custom Inquiry
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

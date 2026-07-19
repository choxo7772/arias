/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { AppRoute } from '../types';
import { INSIGHTS } from '../data';
import SEO from '../components/SEO';

interface InsightsProps {
  onNavigate: (path: AppRoute) => void;
}

export default function Insights({ onNavigate }: InsightsProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full" id="insights-list-page">
      <SEO 
        title="Business Insights | Operational & Strategic Leadership" 
        description="Read articles written by Augusto Jesus Arias on strategic priority sorting, operational bottleneck audits, and growth readiness planning."
        path="/insights"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="insights-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="insights-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Knowledge Hub
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Business Insights & Operational Guidelines
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Practical articles to help entrepreneurs manage capacity, build standard operating procedures, and align strategic objectives.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-slate-950" id="insights-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="insights-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" id="insights-grid">
            {INSIGHTS.map((article) => (
              <div 
                key={article.slug} 
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all group flex flex-col justify-between text-left"
                id={`insights-card-${article.slug}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-400 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-indigo-400 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-900/80 pt-4 mt-4" id="insights-card-footer">
                  <span className="text-[9px] text-slate-500 font-medium">By {article.author}</span>
                  <a 
                    href={`/insights/${article.slug}`}
                    onClick={(e) => handleLinkClick(`/insights/${article.slug}` as AppRoute, e)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-white transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, BookOpen, Calendar, User, Clock } from 'lucide-react';
import { AppRoute } from '../types';
import { INSIGHTS } from '../data';
import SEO from '../components/SEO';

interface InsightArticleProps {
  slug: string;
  onNavigate: (path: AppRoute) => void;
}

export default function InsightArticle({ slug, onNavigate }: InsightArticleProps) {
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-32 text-center" id="article-not-found">
        <h2 className="text-xl text-white">Article not found</h2>
        <button 
          onClick={() => onNavigate('/insights')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-xs font-bold text-white rounded-lg cursor-pointer"
        >
          Back to Insights
        </button>
      </div>
    );
  }

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full" id={`insight-article-${article.slug}`}>
      <SEO 
        title={article.title} 
        description={article.excerpt}
        path={`/insights/${article.slug}`}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 to-slate-900" id="article-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left" id="article-hero-container">
          <a 
            href="/insights" 
            onClick={(e) => handleLinkClick('/insights', e)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors mb-6"
            id="back-to-insights-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </a>

          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-500 mb-4" id="article-meta-tags">
            <span className="text-brand-400 uppercase tracking-widest bg-indigo-500/5 border border-indigo-500/10 px-2.5 py-0.5 rounded">
              {article.category}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.publishedDate}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>

          <h1 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4" id="article-title">
            {article.title}
          </h1>

          <p className="text-slate-400 text-sm italic border-l-2 border-brand-500 pl-4 py-1 max-w-3xl" id="article-excerpt">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-12 bg-slate-950" id="article-body-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="article-body-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="article-body-grid">
            {/* Left Col: Main Text (Structured paragraphs) */}
            <div className="lg:col-span-8 text-left" id="article-content-wrapper">
              <div className="prose prose-invert prose-slate text-slate-300 text-xs sm:text-sm leading-relaxed flex flex-col gap-6" id="article-main-text">
                {article.content.split('\n\n').map((block, idx) => {
                  if (block.startsWith('###')) {
                    return (
                      <h3 key={idx} className="font-display font-bold text-sm sm:text-base text-white mt-4 border-b border-slate-900 pb-2">
                        {block.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (block.startsWith('-')) {
                    return (
                      <ul key={idx} className="flex flex-col gap-2 pl-4 list-disc text-slate-400">
                        {block.split('\n').map((li, i) => (
                          <li key={i}>{li.replace('-', '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.startsWith('1.')) {
                    return (
                      <ol key={idx} className="flex flex-col gap-2.5 pl-4 list-decimal text-slate-400">
                        {block.split('\n').map((li, i) => (
                          <li key={i}>{li.replace(/^\d+\.\s*/, '').trim()}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-400">
                      {block.trim()}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Right Col: Author Card / CTA sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left" id="article-sidebar">
              {/* Author Info */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-900" id="author-card">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block mb-3">Written By</span>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-display font-bold text-xs text-white">Augusto Jesus Arias</h4>
                    <span className="text-[9px] text-slate-500 font-medium">Owner & Principal</span>
                  </div>
                </div>
              </div>

              {/* Consultation Ad */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col gap-4" id="sidebar-cta">
                <h4 className="font-display font-bold text-xs text-white">Need Customized Advisory Support?</h4>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  We look at your specific business workflows to design standard guidelines, realistic budgets, and phased roadmaps.
                </p>
                <a 
                  href="/request-consultation"
                  onClick={(e) => handleLinkClick('/request-consultation', e)}
                  className="w-full text-center py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

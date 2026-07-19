/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Search, Sliders, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { AppRoute } from '../types';
import { TIMELINE_STEPS } from '../data';
import SEO from '../components/SEO';

interface ApproachProps {
  onNavigate: (path: AppRoute) => void;
}

export default function Approach({ onNavigate }: ApproachProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search className="w-5 h-5 text-indigo-400" />;
      case 1: return <Target className="w-5 h-5 text-emerald-400" />;
      case 2: return <Sliders className="w-5 h-5 text-blue-400" />;
      case 3: return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 4: return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 5: return <Sparkles className="w-5 h-5 text-pink-400" />;
      default: return <Sliders className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full" id="approach-page">
      <SEO 
        title="Our Consulting Approach" 
        description="ARIAS BUSINESS CONSULTING’s structured consulting process is designed around discovery, evaluation, prioritization, and realistic roadmaps."
        path="/approach"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="approach-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="approach-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Our Methodology
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            A Structured Process From Discovery to Action
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We do not believe in cookie-cutter strategies. We help small businesses analyze constraints, isolate bottlenecks, and execute structured milestones.
          </p>
        </div>
      </section>

      {/* Detailed Timeline Steps */}
      <section className="py-16 bg-slate-950" id="approach-timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="approach-container">
          <div className="flex flex-col gap-12" id="approach-list">
            {TIMELINE_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-colors text-left"
                id={`approach-step-card-${idx}`}
              >
                {/* Visual Step Mark */}
                <div className="flex sm:flex-col items-center gap-3 shrink-0" id={`approach-icon-wrap-${idx}`}>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-850 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">Phase {idx + 1}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-400 font-semibold">{step.label} — Core Checkpoint</span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white">{step.step}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Guidelines */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-900" id="approach-philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="philosophy-container">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-2 block">Consulting Standards</span>
          <h2 className="font-display font-bold tracking-tight text-xl sm:text-2xl text-white mb-8">What Makes Our Guidance Practical</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" id="philosophy-grid">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 flex flex-col gap-2">
              <span className="font-display font-bold text-xs text-white">1. Direct Accountability</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                We assign clear milestone targets to specific internal owners. This eliminates cross-department confusion and delays during rollout.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 flex flex-col gap-2">
              <span className="font-display font-bold text-xs text-white">2. No Unneeded Complexity</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                We avoid dense, thousand-page manuals that sit on shelves. We supply clean, skimmable SOP templates, checklists, and visual tracker sheets.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 flex flex-col gap-2">
              <span className="font-display font-bold text-xs text-white">3. Clear Risk Mapping</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Before scaling marketing or expanding hiring, we stresstest operational capacity thresholds so you never outgrow your margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="approach-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" id="approach-cta-wrap">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Let’s Start With Discovery</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Our structured timelines prevent waste. Contact us to schedule a direct discovery consultation call.
          </p>
          <a
            href="/request-consultation"
            onClick={(e) => handleLinkClick('/request-consultation', e)}
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

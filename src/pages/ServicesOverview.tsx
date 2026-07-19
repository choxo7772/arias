/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Sliders, Briefcase, Shield, BarChart2, TrendingUp, Compass, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AppRoute } from '../types';
import { SERVICES } from '../data';
import SEO from '../components/SEO';

interface ServicesOverviewProps {
  onNavigate: (path: AppRoute) => void;
}

export default function ServicesOverview({ onNavigate }: ServicesOverviewProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (id: string, size = "w-6 h-6") => {
    switch (id) {
      case 'strategy': return <Award className={`${size} text-indigo-400`} />;
      case 'operations': return <Sliders className={`${size} text-emerald-400`} />;
      case 'planning': return <Briefcase className={`${size} text-blue-400`} />;
      case 'process': return <Shield className={`${size} text-cyan-400`} />;
      case 'financial': return <BarChart2 className={`${size} text-yellow-400`} />;
      case 'growth': return <TrendingUp className={`${size} text-purple-400`} />;
      case 'startup': return <Compass className={`${size} text-orange-400`} />;
      case 'advisory': return <Sparkles className={`${size} text-pink-400`} />;
      default: return <Briefcase className={`${size} text-slate-400`} />;
    }
  };

  return (
    <div className="flex flex-col w-full" id="services-overview-page">
      <SEO 
        title="Services Overview | Business Consulting & Advisory" 
        description="ARIAS BUSINESS CONSULTING provides 8 primary services including strategy, operational improvement, process development, and financial organization support."
        path="/services"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="services-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="services-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Advisory Portfolio
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Solutions Designed Around Real Business Needs
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            From clarifying strategic roadmaps to building repeatable Standard Operating Procedures (SOPs), we support entrepreneurs with direct solutions.
          </p>
        </div>
      </section>

      {/* Grid of services */}
      <section className="py-16 bg-slate-950" id="services-list-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-detailed-grid">
            {SERVICES.map((s) => (
              <div 
                key={s.id} 
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all group flex flex-col justify-between text-left"
                id={`detailed-service-card-${s.id}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-850 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {getServiceIcon(s.id)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white">{s.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {s.longDescription.substring(0, 180)}...
                  </p>

                  <div className="flex flex-col gap-2.5 mb-8" id={`service-bullets-${s.id}`}>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Key Engagements Focus:</span>
                    {s.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={`/services/${s.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${s.slug}` as AppRoute, e)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-white transition-colors border-t border-slate-900/60 pt-4"
                >
                  Explore Complete Service Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Section */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-900" id="services-model">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" id="services-model-container">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-2 block">Our Engagement Model</span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-5">How We Structure Client Projects</h2>
          <p className="text-slate-400 text-xs leading-relaxed mb-8 max-w-xl mx-auto">
            We understand that small businesses have varying budgets and administrative limits. Therefore, we offer flexible contracts styled around actual milestone outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left" id="services-model-grid">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-900">
              <h4 className="font-display font-bold text-xs text-white mb-2">1. Scope-Defined Projects</h4>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Perfect for specific administrative needs, such as drafting a structured 5-part Business Plan or mapping out standard operation procedures (SOPs).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-900">
              <h4 className="font-display font-bold text-xs text-white mb-2">2. Single-Session Advisory</h4>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Focused 1-on-1 strategy assessments to dissect a single major business choice, contract bottleneck, or market pivot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="services-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" id="services-cta-wrap">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Let's Design the Ideal Solution</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Speak with Augusto Jesus Arias during a free discovery consultation call. We’ll discuss your business structure and determine whether our support fits your goals.
          </p>
          <a
            href="/request-consultation"
            onClick={(e) => handleLinkClick('/request-consultation', e)}
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

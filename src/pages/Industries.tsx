/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Home, 
  ShoppingBag, 
  Cpu, 
  Building2, 
  Truck, 
  Coffee, 
  Palette, 
  User, 
  Rocket, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import { AppRoute } from '../types';
import { INDUSTRIES } from '../data';
import SEO from '../components/SEO';

interface IndustriesProps {
  onNavigate: (path: AppRoute) => void;
}

const getIndustryIcon = (name: string) => {
  switch (name) {
    case 'Professional Services':
      return <Briefcase className="w-4 h-4 text-amber-400" />;
    case 'Home and Local Services':
      return <Home className="w-4 h-4 text-emerald-400" />;
    case 'Retail and E-Commerce':
      return <ShoppingBag className="w-4 h-4 text-pink-400" />;
    case 'Technology & Digital Services':
      return <Cpu className="w-4 h-4 text-sky-400" />;
    case 'Construction & Property Services':
      return <Building2 className="w-4 h-4 text-indigo-400" />;
    case 'Transportation & Logistics':
      return <Truck className="w-4 h-4 text-orange-400" />;
    case 'Hospitality & Customer Services':
      return <Coffee className="w-4 h-4 text-rose-400" />;
    case 'Creative & Marketing Agencies':
      return <Palette className="w-4 h-4 text-violet-400" />;
    case 'Independent Professionals':
      return <User className="w-4 h-4 text-cyan-400" />;
    case 'Startups & New Ventures':
      return <Rocket className="w-4 h-4 text-yellow-400" />;
    case 'Family-Owned Businesses':
      return <Users className="w-4 h-4 text-red-400" />;
    case 'Growing Small Businesses':
      return <TrendingUp className="w-4 h-4 text-teal-400" />;
    default:
      return <Briefcase className="w-4 h-4 text-slate-400" />;
  }
};

export default function Industries({ onNavigate }: IndustriesProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full" id="industries-page">
      <SEO 
        title="Industries We Serve | Strategic Sector Experience" 
        description="ARIAS BUSINESS CONSULTING provides strategic consulting across 12 sectors, including professional services, home services, startups, and local brands."
        path="/industries"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="industries-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="industries-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Sectors & Environments
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Consulting Support Across Different Business Environments
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Every engagement begins with understanding the individual company, its operations, customers, resources, and goals.
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16 bg-slate-950" id="industries-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="industries-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="industries-detailed-grid">
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all flex flex-col justify-between text-left"
                id={`detailed-industry-card-${idx}`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-slate-950/80 flex items-center justify-center shrink-0">
                      {getIndustryIcon(ind.name)}
                    </div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white">{ind.name}</h3>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-6 block">
                  Advisory Option Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="industries-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" id="industries-cta-wrap">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Discuss Your Industry Challenges</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Every market has unique customer behaviors and margin realities. We configure standard operating playbooks customized specifically for your local or digital sector.
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

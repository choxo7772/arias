/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Compass, Heart, Mail, Phone, ArrowRight } from 'lucide-react';
import { AppRoute } from '../types';
import { COMPANY_INFO } from '../data';
import SEO from '../components/SEO';

interface AboutProps {
  onNavigate: (path: AppRoute) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full" id="about-page-container">
      <SEO 
        title="About Our Company" 
        description="Learn about ARIAS BUSINESS CONSULTING, LLC, founded in 2022 in Coral Springs, Florida to support small businesses with practical operational planning."
        path="/about"
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="about-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="about-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            About Us
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Practical Business Guidance Built Around Your Priorities
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Helping entrepreneurs, startups, and established small businesses turn complex operational challenges into structured next steps.
          </p>
        </div>
      </section>

      {/* Background & Company Overview */}
      <section className="py-16 bg-slate-950" id="about-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-overview-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-grid">
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Our Foundation & Background
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                {COMPANY_INFO.aboutBrief}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Our consulting works by identifying the hidden operational leaks and planning gaps that drain business margins. Instead of proposing theoretical strategies that are impossible for small teams to execute, we prioritize realistic templates, documented Standard Operating Procedures (SOPs), and structured budgets.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                By focusing on clarity, we ensure you gain complete transparency over your operations, team workloads, and pricing structures. We operate directly from Coral Springs, Florida, bringing professional advisory resources to South Florida communities and remote clients alike.
              </p>
            </div>

            {/* Beautiful Workspace Image Frame */}
            <div className="lg:col-span-5 relative group" id="about-workspace-image-container">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl shadow-indigo-500/5">
                <img 
                  src="/src/assets/images/consulting_workspace_1784430738464.jpg" 
                  alt="Modern business consulting workspace and planning materials" 
                  className="w-full aspect-[4/3] object-cover object-center brightness-[0.85] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>
                
                {/* Elegant overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col gap-1 text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                    Coral Springs, Florida
                  </span>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-white">
                    Actionable operations planning & systems design
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-900" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="mv-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="mv-grid">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-3 text-left">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">Our Mission</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{COMPANY_INFO.mission}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-3 text-left">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">Our Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{COMPANY_INFO.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-slate-900/10 border-t border-slate-900 relative" id="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="values-container">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-2 block">Our Core Principles</span>
            <h2 className="font-display font-bold tracking-tight text-2xl text-white">Values That Guide Our Advisory</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="values-grid">
            {COMPANY_INFO.values.map((v, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-950 border border-slate-900 flex flex-col gap-2 text-left hover:border-slate-800 transition-colors">
                <span className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                  {v.title}
                </span>
                <p className="text-slate-400 text-[10px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="about-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" id="about-cta-container">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Ready to Discuss Your Strategic Roadmaps?</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Contact us for a confidential, structured consultation review. We’ll look at your operational challenges and outline immediate recommendations.
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

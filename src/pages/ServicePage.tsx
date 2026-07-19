/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Sliders, Briefcase, Shield, BarChart2, TrendingUp, Compass, Sparkles, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, UserCheck } from 'lucide-react';
import { AppRoute } from '../types';
import { SERVICES, FAQS } from '../data';
import SEO from '../components/SEO';

interface ServicePageProps {
  slug: string;
  onNavigate: (path: AppRoute) => void;
}

export default function ServicePage({ slug, onNavigate }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    // Fail-safe redirect or not found view
    return (
      <div className="py-32 text-center" id="service-not-found">
        <h2 className="text-xl text-white">Service not found</h2>
        <button 
          onClick={() => onNavigate('/services')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-xs font-bold text-white rounded-lg cursor-pointer"
        >
          Back to Services
        </button>
      </div>
    );
  }

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

  // Find 3 other related services
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  // Pick relevant FAQs based on keywords
  const relevantFaqs = FAQS.filter(
    (faq) => 
      faq.question.toLowerCase().includes(service.title.toLowerCase().substring(0, 8)) ||
      faq.answer.toLowerCase().includes(service.id) ||
      faq.id === 'arias-role' ||
      faq.id === 'customization'
  ).slice(0, 3);

  return (
    <div className="flex flex-col w-full" id={`service-page-${service.id}`}>
      <SEO 
        title={`${service.title} | Consulting Services`} 
        description={service.description}
        path={`/services/${service.slug}`}
      />

      {/* Service-specific Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="service-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="service-hero-container">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Core Service Line
          </span>
          <h1 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white max-w-3xl mx-auto leading-tight mb-5" id="service-headline">
            {service.headline}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed" id="service-brief">
            {service.description}
          </p>
        </div>
      </section>

      {/* Overview & Who It's For */}
      <section className="py-16 bg-slate-950" id="service-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="overview-grid-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="overview-grid">
            {/* Left Col: Long Description */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left" id="service-left-desc">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getServiceIcon(service.id, "w-5 h-5")}
                </div>
                <h2 className="font-display font-bold text-lg text-white">Service Overview</h2>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {service.longDescription}
              </p>

              {/* Specific page disclaimers */}
              {service.id === 'planning' && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850/60 flex items-start gap-2.5 mt-2" id="planning-disclaimer-box">
                  <AlertCircle className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-400 leading-normal font-mono">
                    Disclaimer: Business plans and projections are planning tools and do not guarantee revenue, investment, financing, or business success.
                  </p>
                </div>
              )}

              {service.id === 'financial' && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850/60 flex items-start gap-2.5 mt-2" id="financial-disclaimer-box">
                  <AlertCircle className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-400 leading-normal font-mono">
                    Disclaimer: ARIAS BUSINESS CONSULTING, LLC does not provide certified public accounting, auditing, tax preparation, legal, investment, or securities services unless specifically stated in a separate written agreement and performed by appropriately licensed professionals.
                  </p>
                </div>
              )}
            </div>

            {/* Right Col: Who It's For list */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/40 border border-slate-900 flex flex-col gap-5 text-left" id="service-who-for">
              <span className="font-display font-bold text-xs text-white">Who This Service is For:</span>
              <ul className="flex flex-col gap-3" id="who-for-list">
                {service.whoFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges & Deliverables Grid */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-900" id="service-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="details-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="challenges-deliverables-grid">
            {/* Common Challenges Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-5 text-left" id="challenges-box">
              <h3 className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-indigo-400" />
                Common Business Challenges Addressed
              </h3>
              <ul className="flex flex-col gap-3" id="service-challenges-list">
                {service.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Deliverables Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-5 text-left" id="deliverables-box">
              <h3 className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                What We May Deliver (Deliverables)
              </h3>
              <ul className="flex flex-col gap-3" id="service-deliverables-list">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step process */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="service-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="process-container">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-2 block">Our Methodology</span>
            <h2 className="font-display font-bold tracking-tight text-xl sm:text-2xl text-white">Step-by-Step Consulting Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="process-steps-grid">
            {service.process.map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/40 border border-slate-900 flex flex-col gap-3 text-left hover:border-slate-800 transition-colors" id={`p-step-${idx}`}>
                <div className="flex items-center justify-between gap-2 border-b border-slate-950 pb-2">
                  <span className="font-mono text-xs font-bold text-indigo-400">{p.step}</span>
                  <span className="text-[9px] text-slate-500 uppercase font-mono">Phase {idx + 1}</span>
                </div>
                <h4 className="font-display font-bold text-xs text-white">{p.title}</h4>
                <p className="text-slate-400 text-[10px] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Participation Details */}
      <section className="py-16 bg-slate-900/10 border-t border-slate-900" id="client-participation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="participation-container">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col md:flex-row items-start gap-6 text-left" id="participation-card">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-sm text-white">Client Participation & Confidentiality</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                A successful consulting project requires active collaboration. While we structure the roadmaps, templates, and procedures, the client must provide factual operational parameters and designate internal project owners. All data exchanged during the program is treated with the highest professional confidentiality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQ section */}
      {relevantFaqs.length > 0 && (
        <section className="py-16 bg-slate-950 border-t border-slate-900" id="service-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6" id="service-faq-container">
            <h3 className="font-display font-bold text-sm text-white text-center mb-8">Service FAQ</h3>
            <div className="flex flex-col gap-3" id="service-faq-list">
              {relevantFaqs.map((faq) => (
                <div key={faq.id} className="p-4 rounded-xl bg-slate-900/20 border border-slate-900 text-left" id={`service-faq-${faq.id}`}>
                  <h4 className="font-display font-bold text-xs text-white mb-2">{faq.question}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-900" id="related-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="related-container">
          <h3 className="font-display font-bold text-sm text-white mb-8">Related Consulting Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" id="related-grid">
            {relatedServices.map((s) => (
              <div key={s.id} className="p-5 rounded-xl bg-slate-950 border border-slate-900 text-left flex flex-col justify-between" id={`related-service-${s.id}`}>
                <div>
                  <h4 className="font-display font-bold text-xs text-white mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed mb-4">{s.description}</p>
                </div>
                <a 
                  href={`/services/${s.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${s.slug}` as AppRoute, e)}
                  className="text-[10px] font-bold text-indigo-400 hover:text-white flex items-center gap-1 mt-2"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 border-t border-slate-900" id="service-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" id="service-cta-wrap">
          <h2 className="font-display font-bold text-2xl text-white mb-4">Request a Consultation on {service.title}</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Let us address your current priorities. We will review your operations and discuss how our customized frameworks can help.
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

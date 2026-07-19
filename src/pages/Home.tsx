/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Check, 
  Phone, 
  Target, 
  Shield, 
  Award, 
  Users, 
  Sliders, 
  Briefcase, 
  BarChart2, 
  TrendingUp, 
  Compass, 
  Sparkles, 
  AlertCircle, 
  HelpCircle, 
  ArrowUpRight,
  Workflow,
  RefreshCw,
  EyeOff,
  FileText,
  Clock,
  BookOpen,
  Lightbulb,
  Home as HomeIcon,
  ShoppingBag,
  Cpu,
  Building2,
  Truck,
  Coffee,
  Palette
} from 'lucide-react';
import { AppRoute } from '../types';
import { SERVICES, COMPANY_INFO, CHALLENGES, TIMELINE_STEPS, INDUSTRIES, INSIGHTS, FAQS } from '../data';
import DashboardVisual from '../components/DashboardVisual';
import SEO from '../components/SEO';

const getIndustryIcon = (name: string) => {
  switch (name) {
    case 'Professional Services':
      return <Briefcase className="w-4 h-4 text-amber-400" />;
    case 'Home and Local Services':
      return <HomeIcon className="w-4 h-4 text-emerald-400" />;
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
    default:
      return <Briefcase className="w-4 h-4 text-slate-400" />;
  }
};

const SYSTEM_NODES = [
  {
    id: 'strategy',
    label: 'Strategy',
    desc: 'Strategic direction focuses team actions, filters high-profit ideas from distractions, and outlines clear 90-day execution goals.',
    icon: Target,
    color: 'indigo',
    borderColor: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/60',
    hoverBg: 'hover:bg-indigo-500/10',
    textColor: 'text-indigo-400',
    accentColor: '#6366f1',
    x: 50,
    y: 10,
    isMajor: true,
  },
  {
    id: 'team-roles',
    label: 'Team Roles',
    desc: 'Structured roles and explicit ownership prevent handoff confusion, eliminate double-work, and guarantee high-quality client results.',
    icon: Users,
    color: 'blue',
    borderColor: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/60',
    hoverBg: 'hover:bg-blue-500/10',
    textColor: 'text-blue-400',
    accentColor: '#3b82f6',
    x: 78,
    y: 22,
    isMajor: false,
  },
  {
    id: 'financial-org',
    label: 'Financial Org',
    desc: 'Rigorous tracking of direct service margins and pipeline visibility keeps scaling highly profitable and risk-free.',
    icon: BarChart2,
    color: 'yellow',
    borderColor: 'border-yellow-500/20',
    hoverBorder: 'hover:border-yellow-500/60',
    hoverBg: 'hover:bg-yellow-500/10',
    textColor: 'text-yellow-400',
    accentColor: '#eab308',
    x: 90,
    y: 50,
    isMajor: true,
  },
  {
    id: 'perf-review',
    label: 'Performance Review',
    desc: 'Objective operational metrics and consistent reviews ensure complete accountability and empower autonomous team operations.',
    icon: Award,
    color: 'rose',
    borderColor: 'border-rose-500/20',
    hoverBorder: 'hover:border-rose-500/60',
    hoverBg: 'hover:bg-rose-500/10',
    textColor: 'text-rose-400',
    accentColor: '#f43f5e',
    x: 78,
    y: 78,
    isMajor: false,
  },
  {
    id: 'operations',
    label: 'Operations',
    desc: 'Streamlining repetitive checklist tasks lowers overhead and relieves key leaders from daily firefighting.',
    icon: Sliders,
    color: 'emerald',
    borderColor: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/60',
    hoverBg: 'hover:bg-emerald-500/10',
    textColor: 'text-emerald-400',
    accentColor: '#10b981',
    x: 50,
    y: 90,
    isMajor: true,
  },
  {
    id: 'growth',
    label: 'Growth Plans',
    desc: 'Stresstesting operational capacities protects your customer satisfaction levels from dipping during high-volume periods.',
    icon: TrendingUp,
    color: 'purple',
    borderColor: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/60',
    hoverBg: 'hover:bg-purple-500/10',
    textColor: 'text-purple-400',
    accentColor: '#a855f7',
    x: 22,
    y: 78,
    isMajor: false,
  },
  {
    id: 'processes',
    label: 'Processes',
    desc: 'Documenting repeatable, standardized checklists ensures consistent quality and protects your business from turnover risks.',
    icon: Workflow,
    color: 'cyan',
    borderColor: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/60',
    hoverBg: 'hover:bg-cyan-500/10',
    textColor: 'text-cyan-400',
    accentColor: '#06b6d4',
    x: 10,
    y: 50,
    isMajor: true,
  },
  {
    id: 'customers',
    label: 'Customers',
    desc: 'Sustaining a consistent intake funnel and delivering repeatable, high-quality outcomes builds long-term client loyalty.',
    icon: Compass,
    color: 'sky',
    borderColor: 'border-sky-500/20',
    hoverBorder: 'hover:border-sky-500/60',
    hoverBg: 'hover:bg-sky-500/10',
    textColor: 'text-sky-400',
    accentColor: '#0ea5e9',
    x: 22,
    y: 22,
    isMajor: false,
  },
];

interface HomeProps {
  onNavigate: (path: AppRoute) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [hoveredChallenge, setHoveredChallenge] = useState<number | null>(null);
  const [hoveredSystemNode, setHoveredSystemNode] = useState<string | null>(null);

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (id: string, size = "w-5 h-5") => {
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

  const getChallengeIcon = (idx: number, isHovered: boolean) => {
    const size = "w-4 h-4 transition-colors duration-300";
    switch (idx) {
      case 0:
        return <Compass className={`${size} ${isHovered ? 'text-indigo-400' : 'text-slate-500'}`} />;
      case 1:
        return <Workflow className={`${size} ${isHovered ? 'text-emerald-400' : 'text-slate-500'}`} />;
      case 2:
        return <RefreshCw className={`${size} ${isHovered ? 'text-cyan-400' : 'text-slate-500'}`} />;
      case 3:
        return <EyeOff className={`${size} ${isHovered ? 'text-amber-400' : 'text-slate-500'}`} />;
      case 4:
        return <Users className={`${size} ${isHovered ? 'text-blue-400' : 'text-slate-500'}`} />;
      case 5:
        return <TrendingUp className={`${size} ${isHovered ? 'text-purple-400' : 'text-slate-500'}`} />;
      case 6:
        return <FileText className={`${size} ${isHovered ? 'text-sky-400' : 'text-slate-500'}`} />;
      case 7:
        return <Clock className={`${size} ${isHovered ? 'text-rose-400' : 'text-slate-500'}`} />;
      case 8:
        return <BookOpen className={`${size} ${isHovered ? 'text-teal-400' : 'text-slate-500'}`} />;
      case 9:
        return <Lightbulb className={`${size} ${isHovered ? 'text-yellow-400' : 'text-slate-500'}`} />;
      default:
        return <AlertCircle className={`${size} ${isHovered ? 'text-indigo-400' : 'text-slate-500'}`} />;
    }
  };

  const getChallengeColorClass = (idx: number, isHovered: boolean) => {
    if (!isHovered) return 'bg-slate-900 text-slate-500 border border-transparent';
    switch (idx) {
      case 0: return 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
      case 1: return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 2: return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
      case 3: return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 4: return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 5: return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      case 6: return 'bg-sky-500/10 text-sky-400 border border-sky-500/20';
      case 7: return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
      case 8: return 'bg-teal-500/10 text-teal-400 border border-teal-500/20';
      case 9: return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
      default: return 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
    }
  };

  const getChallengeCardClass = (idx: number, isHovered: boolean) => {
    const base = "p-4 rounded-xl border transition-all duration-300 flex flex-col gap-3 text-left";
    if (!isHovered) {
      return `${base} bg-slate-950/80 border-slate-900 hover:border-slate-800`;
    }
    
    switch (idx) {
      case 0: return `${base} bg-slate-900 border-indigo-500/30 shadow-lg shadow-indigo-500/5 scale-[1.02]`;
      case 1: return `${base} bg-slate-900 border-emerald-500/30 shadow-lg shadow-emerald-500/5 scale-[1.02]`;
      case 2: return `${base} bg-slate-900 border-cyan-500/30 shadow-lg shadow-cyan-500/5 scale-[1.02]`;
      case 3: return `${base} bg-slate-900 border-amber-500/30 shadow-lg shadow-amber-500/5 scale-[1.02]`;
      case 4: return `${base} bg-slate-900 border-blue-500/30 shadow-lg shadow-blue-500/5 scale-[1.02]`;
      case 5: return `${base} bg-slate-900 border-purple-500/30 shadow-lg shadow-purple-500/5 scale-[1.02]`;
      case 6: return `${base} bg-slate-900 border-sky-500/30 shadow-lg shadow-sky-500/5 scale-[1.02]`;
      case 7: return `${base} bg-slate-900 border-rose-500/30 shadow-lg shadow-rose-500/5 scale-[1.02]`;
      case 8: return `${base} bg-slate-900 border-teal-500/30 shadow-lg shadow-teal-500/5 scale-[1.02]`;
      case 9: return `${base} bg-slate-900 border-yellow-500/30 shadow-lg shadow-yellow-500/5 scale-[1.02]`;
      default: return `${base} bg-slate-900 border-indigo-500/30 shadow-lg shadow-indigo-500/5 scale-[1.02]`;
    }
  };

  // Only use home-related FAQs (first 8)
  const homeFaqs = FAQS.slice(0, 8);

  return (
    <div className="flex flex-col w-full" id="home-page-container">
      <SEO 
        title="Business Consulting in Coral Springs, FL" 
        description="ARIAS BUSINESS CONSULTING provides practical strategy, planning, operational, process, and growth guidance for entrepreneurs and small businesses."
        path="/"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" id="hero-section">
        {/* Abstract background lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="hero-content-wrap">
          <span 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-400 mb-6 animate-fade-in"
            id="hero-eyebrow"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Business Consulting for Clearer Decisions
          </span>

          <h1 
            className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl mx-auto leading-[1.1] mb-6"
            id="hero-headline"
          >
            Build a Stronger Business With Clear Strategy and <span className="text-gradient-accent font-extrabold">Practical Guidance</span>
          </h1>

          <p 
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            id="hero-body-text"
          >
            ARIAS BUSINESS CONSULTING, LLC helps entrepreneurs, small businesses, and growing organizations improve planning, operations, processes, and long-term direction through practical consulting support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" id="hero-actions">
            <a
              href="/request-consultation"
              onClick={(e) => handleLinkClick('/request-consultation', e)}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/15 flex items-center justify-center gap-1.5"
              id="hero-primary-btn"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/services"
              onClick={(e) => handleLinkClick('/services', e)}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold rounded-xl text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center"
              id="hero-secondary-btn"
            >
              Explore Our Services
            </a>
          </div>

          <div className="text-center" id="hero-trust-line">
            <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Interactive Hero Dashboard Visual */}
          <div className="mt-16 border-t border-slate-900 pt-12" id="hero-dashboard-wrap">
            <DashboardVisual />
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <section className="bg-slate-950 border-y border-slate-900 py-10" id="trust-strip-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="trust-strip-wrap">
          <p className="text-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-6">
            Practical Support for Every Stage of Business Development
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-semibold text-slate-400" id="trust-strip-grid">
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-indigo-400 shrink-0" /> Business Strategy</span>
            <span className="flex items-center gap-2"><Sliders className="w-4 h-4 text-emerald-400 shrink-0" /> Operational Organization</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400 shrink-0" /> Process Development</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-purple-400 shrink-0" /> Growth Preparation</span>
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-pink-400 shrink-0" /> Ongoing Advisory</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPANY OVERVIEW */}
      <section className="py-20 bg-slate-900/40 relative" id="overview-section">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="overview-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="overview-grid">
            {/* Left Box: Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left" id="overview-text-block">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
                About ARIAS BUSINESS CONSULTING
              </span>
              <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-5">
                Clearer Structure Creates Better Business Decisions
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Managing a business requires owners and leadership teams to balance strategy, operations, customer needs, administrative responsibilities, and future growth. We help clients organize these priorities, identify areas for improvement, and develop realistic next steps.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Established in Florida, we focus on stripping away complexity to deliver actionable operational frameworks and direct strategies. We value long-term partnerships, practical advice, and professional confidentiality above all.
              </p>
              <a 
                href="/about"
                onClick={(e) => handleLinkClick('/about', e)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-850 hover:bg-slate-800 border border-slate-800 px-5 py-3 rounded-lg transition-colors"
                id="overview-btn"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </a>
            </div>

            {/* Right Box: Company Facts Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4" id="overview-facts-grid">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-1.5 hover:border-slate-800 transition-colors">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Established</span>
                <span className="font-display font-extrabold text-2xl text-white">2022</span>
                <span className="text-[10px] text-slate-400 leading-normal">Registered in Florida</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-1.5 hover:border-slate-800 transition-colors">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Location</span>
                <span className="font-display font-extrabold text-2xl text-white">Coral Springs</span>
                <span className="text-[10px] text-slate-400 leading-normal">Serving Broward & South Florida</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-1.5 hover:border-slate-800 transition-colors">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Engagements</span>
                <span className="font-display font-extrabold text-2xl text-white">Customized</span>
                <span className="text-[10px] text-slate-400 leading-normal">Project-Based or Retainer</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-900 flex flex-col gap-1.5 hover:border-slate-800 transition-colors">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Approach</span>
                <span className="font-display font-extrabold text-2xl text-white">Practical</span>
                <span className="text-[10px] text-slate-400 leading-normal">Direct & Action-focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="py-20 bg-slate-950 relative" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-container">
          <div className="text-center max-w-3xl mx-auto mb-12" id="services-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-3 block">
              Our Consulting Services
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Solutions Designed Around Real Business Needs
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We help clients analyze problems and structure solutions across eight primary advisory categories.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" id="services-cards-grid">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 hover:shadow-xl transition-all group flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors shrink-0">
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <a
                  href={`/services/${service.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${service.slug}` as AppRoute, e)}
                  className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-white group-hover:text-indigo-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center" id="services-more-cta">
            <a
              href="/services"
              onClick={(e) => handleLinkClick('/services', e)}
              className="inline-flex items-center gap-1 px-6 py-3 text-xs font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              id="view-all-services-btn"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BUSINESS CHALLENGES */}
      <section className="py-20 bg-slate-900/20 border-t border-slate-900 relative" id="challenges-section">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="challenges-container">
          <div className="text-center max-w-3xl mx-auto mb-14" id="challenges-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
              Challenges We Help Address
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Move From Business Complexity to Clear Priorities
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              As a business grows, unstructured habits and silent inefficiencies block progress. We help identify and resolve these operational roadblocks.
            </p>
          </div>

          {/* Grid of Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4" id="challenges-grid">
            {CHALLENGES.map((challenge, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredChallenge(idx)}
                onMouseLeave={() => setHoveredChallenge(null)}
                className={getChallengeCardClass(idx, hoveredChallenge === idx)}
                id={`challenge-card-${idx}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg transition-all duration-300 flex items-center justify-center shrink-0 ${getChallengeColorClass(idx, hoveredChallenge === idx)}`}>
                    {getChallengeIcon(idx, hoveredChallenge === idx)}
                  </div>
                  <span className="font-display font-bold text-xs text-white leading-tight">
                    {challenge.title}
                  </span>
                </div>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CONSULTING PROCESS */}
      <section className="py-20 bg-slate-950 relative" id="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="process-container">
          <div className="text-center max-w-3xl mx-auto mb-16" id="process-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-3 block">
              How We Work
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              A Structured Process From Discovery to Action
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              To ensure practical recommendations, every engagement follows six logical development checkpoints.
            </p>
          </div>

          {/* Timeline Structure */}
          <div className="relative" id="timeline-wrapper">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-slate-900 -z-10" id="desktop-timeline-line"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6" id="timeline-grid">
              {TIMELINE_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-start text-left relative group" id={`timeline-step-${idx}`}>
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start mb-4" id={`step-head-${idx}`}>
                    {/* Circle Indicator */}
                    <div 
                      className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-lg"
                      id={`step-circle-${idx}`}
                    >
                      {idx + 1}
                    </div>
                    
                    <div className="lg:mt-3" id={`step-badge-wrap-${idx}`}>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block">
                        {step.label}
                      </span>
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-300 transition-colors">
                        {step.step}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-[11px] leading-relaxed pl-13 lg:pl-0">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12" id="process-cta-wrap">
            <a 
              href="/approach"
              onClick={(e) => handleLinkClick('/approach', e)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-5 py-3 rounded-lg transition-colors"
            >
              Explore Our Approach
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — BUSINESS SYSTEM VISUAL */}
      <section className="py-20 bg-slate-900/40 relative border-t border-slate-900" id="system-visual-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="system-visual-container">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
              Connected Business Operations
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Your Business is a Connected System
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Business areas do not operate independently. Strong planning connects strategy, people, processes, financial information, and daily operations.
            </p>
          </div>

          {/* Interactive Web of Connected Areas */}
          <div className="relative w-full aspect-square max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[500px] mx-auto py-4 flex items-center justify-center" id="connected-areas-web">
            {/* Pulsing Central Hub */}
            <div 
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center z-20 transition-all duration-300 ${
                hoveredSystemNode 
                  ? 'scale-105 border-2 bg-slate-950' 
                  : 'bg-slate-950 border-2 border-slate-800/80 shadow-lg shadow-indigo-500/5'
              }`}
              style={{ 
                borderColor: hoveredSystemNode ? SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.accentColor : undefined,
                boxShadow: hoveredSystemNode ? `0 0 25px ${SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.accentColor}25` : undefined
              }}
            >
              <div className="absolute inset-1.5 rounded-full border border-slate-800/40 opacity-50"></div>
              <span className="font-display font-extrabold text-[10px] sm:text-xs text-white uppercase tracking-widest z-10">Your</span>
              <span className="font-display font-extrabold text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-0.5 z-10">Business</span>
            </div>

            {/* Orbiting Nodes */}
            {SYSTEM_NODES.map((node) => {
              const IconComponent = node.icon;
              const isHovered = hoveredSystemNode === node.id;
              return (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 select-none cursor-pointer group ${
                    isHovered ? 'scale-105 z-30' : 'hover:scale-102 hover:z-20'
                  }`}
                  onMouseEnter={() => setHoveredSystemNode(node.id)}
                  onMouseLeave={() => setHoveredSystemNode(null)}
                  id={`system-node-${node.id}`}
                >
                  <div 
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border backdrop-blur-md transition-all duration-300 ${
                      isHovered
                        ? `bg-slate-900 ${node.textColor}`
                        : 'bg-slate-950/90 border-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700/60'
                    }`}
                    style={{
                      borderColor: isHovered ? node.accentColor : undefined,
                      boxShadow: isHovered ? `0 0 15px ${node.accentColor}15` : undefined
                    }}
                  >
                    <div className={`p-1 rounded-md transition-colors duration-300 ${
                      isHovered 
                        ? `${node.textColor} bg-slate-950` 
                        : 'text-slate-500 bg-slate-900 group-hover:text-slate-400'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-display font-bold text-[10px] tracking-wide whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* SVGs lines connecting everything */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-800 pointer-events-none -z-10" id="visual-connections">
              {/* Decorative concentric orbits */}
              <circle cx="50" cy="50" r="36" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 4" className="opacity-40" />
              <circle cx="50" cy="50" r="22" fill="none" stroke="#1e293b" strokeWidth="0.5" className="opacity-20" />

              {SYSTEM_NODES.map((node) => {
                const isHovered = hoveredSystemNode === node.id;
                return (
                  <g key={node.id}>
                    {/* Glowing highlight line underneath */}
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={node.x} 
                      y2={node.y} 
                      stroke={isHovered ? node.accentColor : '#1e293b'} 
                      strokeWidth={isHovered ? '1.5' : '0.5'} 
                      strokeDasharray={isHovered ? undefined : node.isMajor ? undefined : '2 2'}
                      className={`transition-all duration-300 ${isHovered ? 'opacity-80' : 'opacity-40'}`}
                    />
                    {isHovered && (
                      <line 
                        x1="50" 
                        y1="50" 
                        x2={node.x} 
                        y2={node.y} 
                        stroke={node.accentColor} 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        className="animated-connector blur-[1px] opacity-45"
                        style={{
                          strokeDasharray: '4 4'
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Detailed Context Card */}
          <div className="mt-8 max-w-xl mx-auto p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 text-left relative overflow-hidden" id="system-details-card">
            {/* Subtle gradient background matches hovered node */}
            <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300 ${
              hoveredSystemNode 
                ? SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'indigo' ? 'bg-indigo-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'blue' ? 'bg-blue-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'yellow' ? 'bg-yellow-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'rose' ? 'bg-rose-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'emerald' ? 'bg-emerald-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'purple' ? 'bg-purple-500' :
                  SYSTEM_NODES.find(n => n.id === hoveredSystemNode)?.color === 'cyan' ? 'bg-cyan-500' :
                  'bg-sky-500'
                : 'bg-slate-700'
            }`} />
            
            {hoveredSystemNode ? (
              (() => {
                const activeNode = SYSTEM_NODES.find(n => n.id === hoveredSystemNode);
                if (!activeNode) return null;
                const NodeIcon = activeNode.icon;
                return (
                  <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 ${activeNode.textColor}`}>
                      <NodeIcon className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                        {activeNode.label}
                        <span className="text-[9px] font-mono tracking-widest uppercase opacity-60 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {activeNode.isMajor ? 'Core Pillar' : 'Supporting Driver'}
                        </span>
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {activeNode.desc}
                      </p>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="flex items-start gap-4 text-slate-500 text-xs leading-relaxed py-1">
                <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-900 shrink-0">
                  <Sparkles className="w-5 h-5 text-indigo-400/50 animate-pulse" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-display font-bold text-slate-400">Interactive Operations Map</h4>
                  <p className="text-slate-500">
                    Hover over or tap any business domain to visualize structural connections and explore system synergies.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8 — BENEFITS */}
      <section className="py-20 bg-slate-950 relative" id="benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="benefits-container">
          <div className="text-center max-w-3xl mx-auto mb-14" id="benefits-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-3 block">
              Why Work With Us
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Practical Guidance Without Unnecessary Complexity
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our core advisory philosophy prioritizes actionable systems designed around your available resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="benefits-grid">
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900/80 flex flex-col gap-3">
              <span className="font-display font-bold text-xs text-white">Customized Support</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Every engagement is based on the client’s actual situation, objectives, and available resources.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900/80 flex flex-col gap-3">
              <span className="font-display font-bold text-xs text-white">Clear Communication</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Recommendations are explained in direct and understandable language. No confusing corporate jargon.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900/80 flex flex-col gap-3">
              <span className="font-display font-bold text-xs text-white">Business-Focused Thinking</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                We focus on solutions that support real operational and strategic priorities.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900/80 flex flex-col gap-3">
              <span className="font-display font-bold text-xs text-white">Realistic Recommendations</span>
              <p className="text-slate-400 text-[10px] leading-relaxed">
                Plans are designed around the company’s ability to implement them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — INDUSTRIES */}
      <section className="py-20 bg-slate-900/20 border-t border-slate-900 relative" id="industries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="industries-container">
          <div className="max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
              Sector Experience
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Consulting Support Across Different Business Environments
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every engagement begins with understanding the individual company, its operations, customers, resources, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10" id="industries-grid">
            {INDUSTRIES.slice(0, 8).map((ind, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-950 transition-all duration-300 text-left flex flex-col gap-3 group"
                id={`industry-node-${idx}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {getIndustryIcon(ind.name)}
                  </div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-tight">{ind.name}</h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-500 italic">
            Need customized consulting for a specialized industry? We evaluate custom engagements during our discovery consultation.
          </p>
        </div>
      </section>

      {/* SECTION 10 — ENGAGEMENT OPTIONS */}
      <section className="py-20 bg-slate-950 relative" id="engagement-options-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="engagement-container">
          <div className="text-center max-w-3xl mx-auto mb-14" id="engagement-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-3 block">
              How to Engage Us
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Flexible Consulting Based on Your Current Needs
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Choose an engagement format that aligns with your active objectives. We provide options ranging from one-time audits to recurring guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="engagement-grid">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-900 flex flex-col justify-between" id="eng-option-1">
              <div>
                <h3 className="font-display font-bold text-sm text-white mb-2">Strategy Session</h3>
                <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider block mb-4 bg-indigo-500/5 border border-indigo-500/15 px-2 py-0.5 rounded w-fit">Focused Assessment</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  A focused consultation addressing a specific question, opportunity, or business challenge. Ideal for resolving immediate roadblocks.
                </p>
              </div>
              <a href="/request-consultation" onClick={(e) => handleLinkClick('/request-consultation', e)} className="mt-6 text-xs font-bold text-indigo-400 hover:text-white flex items-center gap-1">
                Book Session <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-900 flex flex-col justify-between" id="eng-option-2">
              <div>
                <h3 className="font-display font-bold text-sm text-white mb-2">Business Assessment</h3>
                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider block mb-4 bg-emerald-500/5 border border-emerald-500/15 px-2 py-0.5 rounded w-fit">Comprehensive Audit</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  A structured review of business operations, priorities, processes, and areas for improvement. Delivers a complete roadmap.
                </p>
              </div>
              <a href="/request-consultation" onClick={(e) => handleLinkClick('/request-consultation', e)} className="mt-6 text-xs font-bold text-emerald-400 hover:text-white flex items-center gap-1">
                Request Audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-900 flex flex-col justify-between" id="eng-option-3">
              <div>
                <h3 className="font-display font-bold text-sm text-white mb-2">Ongoing Advisory</h3>
                <span className="text-[9px] font-mono text-purple-400 uppercase tracking-wider block mb-4 bg-purple-500/5 border border-purple-500/15 px-2 py-0.5 rounded w-fit">Retainer Engagement</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Recurring consulting sessions for planning, progress reviews, accountability, and decision support. Perfect for continuous strategic guidance.
                </p>
              </div>
              <a href="/request-consultation" onClick={(e) => handleLinkClick('/request-consultation', e)} className="mt-6 text-xs font-bold text-purple-400 hover:text-white flex items-center gap-1">
                Request retainer <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — INSIGHTS */}
      <section className="py-20 bg-slate-900/20 border-t border-slate-900 relative" id="insights-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="insights-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="insights-header">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
                Business Insights
              </span>
              <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-white">
                Lessons in Strategic Structure
              </h2>
            </div>
            <a 
              href="/insights" 
              onClick={(e) => handleLinkClick('/insights', e)}
              className="text-xs font-bold text-brand-300 hover:text-white flex items-center gap-1 shrink-0"
              id="view-insights-link"
            >
              View All Insights
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="insights-grid">
            {INSIGHTS.slice(0, 3).map((article, idx) => (
              <div 
                key={article.slug} 
                className="p-5 rounded-2xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-all group flex flex-col justify-between"
                id={`insight-card-${article.slug}`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-mono text-slate-500">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-xs text-white group-hover:text-brand-300 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <a 
                  href={`/insights/${article.slug}`}
                  onClick={(e) => handleLinkClick(`/insights/${article.slug}` as AppRoute, e)}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-white transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="py-20 bg-slate-950 relative" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="faq-container">
          <div className="text-center mb-12" id="faq-heading-wrap">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-400 mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-white mb-4">
              Answers to Core Consulting Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3" id="faq-accordions">
            {homeFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className="rounded-xl border border-slate-900 bg-slate-900/20 overflow-hidden"
                id={`faq-accordion-${faq.id}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-bold text-xs text-white cursor-pointer hover:bg-slate-900/40 transition-colors"
                  aria-expanded={openFaq === faq.id}
                  id={`faq-btn-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-400 shrink-0 transition-transform duration-200 ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === faq.id && (
                  <div className="p-4 border-t border-slate-900/60 bg-slate-950/60" id={`faq-answer-${faq.id}`}>
                    <p className="text-slate-400 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="/faq"
              onClick={(e) => handleLinkClick('/faq', e)}
              className="text-xs font-bold text-indigo-400 hover:text-white flex items-center justify-center gap-1"
            >
              View All FAQ Questions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden" id="final-cta-section">
        {/* Glowing visual effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10" id="final-cta-container">
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-white mb-4">
            Ready to Bring More Clarity to Your Business?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Tell us about your current priorities, challenges, or future plans. We will review your inquiry and discuss whether our consulting services are a suitable fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="final-cta-buttons">
            <a
              href="/request-consultation"
              onClick={(e) => handleLinkClick('/request-consultation', e)}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/15"
              id="final-cta-primary"
            >
              Request a Consultation
            </a>
            <a
              href="tel:4078014292"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold rounded-xl text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              id="final-cta-secondary"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              Call (407) 801-4292
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

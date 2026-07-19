/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, Shield, Award, Sparkles, Sliders, Briefcase, BarChart2, TrendingUp, Compass, HelpCircle, BookOpen } from 'lucide-react';
import { AppRoute } from '../types';
import { SERVICES } from '../data';
import Logo from './Logo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: AppRoute) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Monitor scroll state for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Icon mapping for dropdown services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'strategy':
        return <Award className="w-4 h-4 text-indigo-400" />;
      case 'operations':
        return <Sliders className="w-4 h-4 text-emerald-400" />;
      case 'planning':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'process':
        return <Shield className="w-4 h-4 text-cyan-400" />;
      case 'financial':
        return <BarChart2 className="w-4 h-4 text-yellow-400" />;
      case 'growth':
        return <TrendingUp className="w-4 h-4 text-purple-400" />;
      case 'startup':
        return <Compass className="w-4 h-4 text-orange-400" />;
      case 'advisory':
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg shadow-black/10' 
          : 'bg-transparent py-5'
      }`}
      id="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="header-container">
        <div className="flex items-center justify-between h-14" id="header-wrapper">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => handleLinkClick('/', e)} 
            className="flex items-center"
            id="header-logo-link"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" id="desktop-nav">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className={`hover:text-white transition-colors py-2 ${currentPath === '/' ? 'text-white font-semibold' : ''}`}
              id="nav-link-home"
            >
              Home
            </a>
            <a 
              href="/about" 
              onClick={(e) => handleLinkClick('/about', e)}
              className={`hover:text-white transition-colors py-2 ${currentPath === '/about' ? 'text-white font-semibold' : ''}`}
              id="nav-link-about"
            >
              About
            </a>

            {/* Services Dropdown Trigger */}
            <div className="relative" ref={servicesDropdownRef} id="services-dropdown-parent">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 hover:text-white transition-colors py-2 cursor-pointer ${
                  currentPath.startsWith('/services') ? 'text-white font-semibold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
                id="services-dropdown-btn"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 grid grid-cols-1 gap-1 -z-10 animate-in fade-in slide-in-from-top-2 duration-200"
                  id="services-dropdown-panel"
                >
                  <a
                    href="/services"
                    onClick={(e) => handleLinkClick('/services', e)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white group border-b border-slate-800/40 pb-3 mb-1"
                    id="dropdown-link-services-overview"
                  >
                    <div className="p-1 rounded bg-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-white">Services Overview</div>
                      <div className="text-[10px] text-slate-400">View all advisory services</div>
                    </div>
                  </a>
                  {SERVICES.map((service) => (
                    <a
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={(e) => handleLinkClick(`/services/${service.slug}` as AppRoute, e)}
                      className={`flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white ${
                        currentPath === `/services/${service.slug}` ? 'bg-slate-800/30 text-white' : ''
                      }`}
                      id={`dropdown-link-${service.id}`}
                    >
                      <div className="mt-0.5">{getServiceIcon(service.id)}</div>
                      <div>
                        <div className="font-medium text-xs text-slate-200 group-hover:text-white">{service.title}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="/industries" 
              onClick={(e) => handleLinkClick('/industries', e)}
              className={`hover:text-white transition-colors py-2 ${currentPath === '/industries' ? 'text-white font-semibold' : ''}`}
              id="nav-link-industries"
            >
              Industries
            </a>

            {/* Resources Dropdown Trigger */}
            <div className="relative" ref={resourcesDropdownRef} id="resources-dropdown-parent">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className={`flex items-center gap-1 hover:text-white transition-colors py-2 cursor-pointer ${
                  currentPath.startsWith('/insights') || currentPath === '/faq' || currentPath === '/approach' ? 'text-white font-semibold' : ''
                }`}
                aria-expanded={resourcesDropdownOpen}
                id="resources-dropdown-btn"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 grid grid-cols-1 gap-1 -z-10 animate-in fade-in slide-in-from-top-2 duration-200"
                  id="resources-dropdown-panel"
                >
                  <a
                    href="/approach"
                    onClick={(e) => handleLinkClick('/approach', e)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white ${
                      currentPath === '/approach' ? 'text-white bg-slate-800/30' : ''
                    }`}
                    id="dropdown-link-approach"
                  >
                    <Compass className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="font-medium text-xs">Our Approach</span>
                  </a>
                  <a
                    href="/insights"
                    onClick={(e) => handleLinkClick('/insights', e)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white ${
                      currentPath.startsWith('/insights') ? 'text-white bg-slate-800/30' : ''
                    }`}
                    id="dropdown-link-insights"
                  >
                    <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-medium text-xs">Insights</span>
                  </a>
                  <a
                    href="/faq"
                    onClick={(e) => handleLinkClick('/faq', e)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-300 hover:text-white ${
                      currentPath === '/faq' ? 'text-white bg-slate-800/30' : ''
                    }`}
                    id="dropdown-link-faq"
                  >
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium text-xs">FAQ</span>
                  </a>
                </div>
              )}
            </div>
            <a 
              href="/contact" 
              onClick={(e) => handleLinkClick('/contact', e)}
              className={`hover:text-white transition-colors py-2 ${currentPath === '/contact' ? 'text-white font-semibold' : ''}`}
              id="nav-link-contact"
            >
              Contact
            </a>
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-5" id="header-actions">
            <a 
              href="tel:4078014292" 
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              id="header-phone-link"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              (407) 801-4292
            </a>
            <a
              href="/request-consultation"
              onClick={(e) => handleLinkClick('/request-consultation', e)}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0.5 transition-all"
              id="header-cta-btn"
            >
              Request a Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="flex lg:hidden items-center gap-3" id="header-mobile-toggle-wrap">
            <a 
              href="tel:4078014292" 
              className="p-2 text-slate-400 hover:text-white transition-colors"
              id="mobile-phone-trigger"
            >
              <Phone className="w-5 h-5 text-brand-400" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[60px] bg-slate-950 z-40 flex flex-col p-6 overflow-y-auto animate-in fade-in slide-in-from-right duration-300 border-t border-slate-900"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-4 text-lg font-medium text-slate-300 mb-8" id="mobile-nav-links">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className={`py-2 border-b border-slate-900 ${currentPath === '/' ? 'text-white' : ''}`}
            >
              Home
            </a>
            <a 
              href="/about" 
              onClick={(e) => handleLinkClick('/about', e)}
              className={`py-2 border-b border-slate-900 ${currentPath === '/about' ? 'text-white' : ''}`}
            >
              About Us
            </a>

            {/* Mobile Services list */}
            <div className="flex flex-col" id="mobile-services-collapsible">
              <span className="py-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mt-2">Our Services</span>
              <a
                href="/services"
                onClick={(e) => handleLinkClick('/services', e)}
                className={`py-1.5 pl-3 text-sm flex items-center gap-2 ${currentPath === '/services' ? 'text-white' : 'text-slate-400'}`}
              >
                <Sliders className="w-4 h-4 text-brand-400" />
                Services Overview
              </a>
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`/services/${s.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${s.slug}` as AppRoute, e)}
                  className={`py-1.5 pl-3 text-sm flex items-center gap-2 ${
                    currentPath === `/services/${s.slug}` ? 'text-white font-medium' : 'text-slate-400'
                  }`}
                >
                  {getServiceIcon(s.id)}
                  {s.title}
                </a>
              ))}
            </div>

            <a 
              href="/industries" 
              onClick={(e) => handleLinkClick('/industries', e)}
              className={`py-2 border-b border-slate-900 ${currentPath === '/industries' ? 'text-white' : ''}`}
            >
              Industries
            </a>
            {/* Mobile Resources list */}
            <div className="flex flex-col border-b border-slate-900 pb-2" id="mobile-resources-collapsible">
              <span className="py-2 text-slate-400 text-xs uppercase tracking-widest font-semibold mt-2">Resources</span>
              <a
                href="/approach"
                onClick={(e) => handleLinkClick('/approach', e)}
                className={`py-1.5 pl-3 text-sm flex items-center gap-2 ${currentPath === '/approach' ? 'text-white font-medium' : 'text-slate-400'}`}
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                Our Approach
              </a>
              <a
                href="/insights"
                onClick={(e) => handleLinkClick('/insights', e)}
                className={`py-1.5 pl-3 text-sm flex items-center gap-2 ${currentPath.startsWith('/insights') ? 'text-white' : 'text-slate-400'}`}
              >
                <BookOpen className="w-4 h-4 text-sky-400" />
                Insights
              </a>
              <a
                href="/faq"
                onClick={(e) => handleLinkClick('/faq', e)}
                className={`py-1.5 pl-3 text-sm flex items-center gap-2 ${currentPath === '/faq' ? 'text-white font-medium' : 'text-slate-400'}`}
              >
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                FAQ
              </a>
            </div>

            <a 
              href="/contact" 
              onClick={(e) => handleLinkClick('/contact', e)}
              className={`py-2 border-b border-slate-900 ${currentPath === '/contact' ? 'text-white' : ''}`}
            >
              Contact
            </a>
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-12" id="mobile-drawer-cta-wrap">
            <a 
              href="tel:4078014292" 
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-800 bg-slate-900 text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              Call (407) 801-4292
            </a>
            <a
              href="/request-consultation"
              onClick={(e) => handleLinkClick('/request-consultation', e)}
              className="flex items-center justify-center gap-1 py-3.5 rounded-lg bg-blue-600 text-sm font-bold text-white hover:bg-blue-500 shadow-xl shadow-blue-500/10"
            >
              Request a Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { AppRoute } from '../types';
import { COMPANY_INFO } from '../data';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (path: AppRoute) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs mt-auto pt-16 pb-12" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="footer-container">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12" id="footer-grid">
          {/* Brand Info Column */}
          <div className="col-span-2 flex flex-col gap-5" id="footer-brand-col">
            <a href="/" onClick={(e) => handleLinkClick('/', e)} className="inline-block" id="footer-logo-link">
              <Logo variant="full" />
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm" id="footer-brand-desc">
              ARIAS BUSINESS CONSULTING provides practical strategy, planning, operational, and organizational guidance for entrepreneurs, small businesses, and growing companies.
            </p>
            <div className="flex flex-col gap-3 mt-2 text-slate-300" id="footer-contact-details">
              <a href="tel:4078014292" className="flex items-center gap-2 hover:text-white transition-colors" id="footer-phone">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>(407) 801-4292</span>
              </a>
              <a href="mailto:info@ariasbusinessconsulting.com" className="flex items-center gap-2 hover:text-white transition-colors" id="footer-email">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>info@ariasbusinessconsulting.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400" id="footer-address">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  2149 NW 85th Way<br />
                  Coral Springs, FL 33071
                </span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4" id="footer-company-col">
            <span className="font-display font-semibold uppercase tracking-wider text-white text-[11px]" id="footer-company-title">Company</span>
            <ul className="flex flex-col gap-2.5 font-medium" id="footer-company-links">
              <li><a href="/about" onClick={(e) => handleLinkClick('/about', e)} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/approach" onClick={(e) => handleLinkClick('/approach', e)} className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="/industries" onClick={(e) => handleLinkClick('/industries', e)} className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="/insights" onClick={(e) => handleLinkClick('/insights', e)} className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/contact" onClick={(e) => handleLinkClick('/contact', e)} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4" id="footer-services-col">
            <span className="font-display font-semibold uppercase tracking-wider text-white text-[11px]" id="footer-services-title">Services</span>
            <ul className="flex flex-col gap-2.5 font-medium" id="footer-services-links">
              <li><a href="/services/business-strategy" onClick={(e) => handleLinkClick('/services/business-strategy', e)} className="hover:text-white transition-colors">Business Strategy</a></li>
              <li><a href="/services/operational-improvement" onClick={(e) => handleLinkClick('/services/operational-improvement', e)} className="hover:text-white transition-colors">Operational Improvement</a></li>
              <li><a href="/services/business-planning" onClick={(e) => handleLinkClick('/services/business-planning', e)} className="hover:text-white transition-colors">Business Planning</a></li>
              <li><a href="/services/process-development" onClick={(e) => handleLinkClick('/services/process-development', e)} className="hover:text-white transition-colors">Process Development</a></li>
              <li><a href="/services/financial-organization" onClick={(e) => handleLinkClick('/services/financial-organization', e)} className="hover:text-white transition-colors">Financial Organization</a></li>
              <li><a href="/services/growth-planning" onClick={(e) => handleLinkClick('/services/growth-planning', e)} className="hover:text-white transition-colors">Growth Planning</a></li>
              <li><a href="/services/startup-guidance" onClick={(e) => handleLinkClick('/services/startup-guidance', e)} className="hover:text-white transition-colors">Startup Guidance</a></li>
              <li><a href="/services/ongoing-advisory" onClick={(e) => handleLinkClick('/services/ongoing-advisory', e)} className="hover:text-white transition-colors">Ongoing Advisory</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4" id="footer-resources-col">
            <span className="font-display font-semibold uppercase tracking-wider text-white text-[11px]" id="footer-resources-title">Resources</span>
            <ul className="flex flex-col gap-2.5 font-medium" id="footer-resources-links">
              <li><a href="/insights" onClick={(e) => handleLinkClick('/insights', e)} className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/faq" onClick={(e) => handleLinkClick('/faq', e)} className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/request-consultation" onClick={(e) => handleLinkClick('/request-consultation', e)} className="hover:text-white transition-colors">Request a Consultation</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4" id="footer-legal-col">
            <span className="font-display font-semibold uppercase tracking-wider text-white text-[11px]" id="footer-legal-title">Legal</span>
            <ul className="flex flex-col gap-2.5 font-medium" id="footer-legal-links">
              <li><a href="/privacy-policy" onClick={(e) => handleLinkClick('/privacy-policy', e)} className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-use" onClick={(e) => handleLinkClick('/terms-of-use', e)} className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="/cookie-policy" onClick={(e) => handleLinkClick('/cookie-policy', e)} className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/accessibility" onClick={(e) => handleLinkClick('/accessibility', e)} className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900/80 my-8" id="footer-divider"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="footer-bottom">
          <div className="flex flex-col gap-2" id="footer-copyright-and-info">
            <p className="text-slate-500 font-medium">
              © {currentYear} ARIAS BUSINESS CONSULTING, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

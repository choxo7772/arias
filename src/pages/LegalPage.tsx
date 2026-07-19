/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Scale, FileText, Activity } from 'lucide-react';
import { AppRoute } from '../types';
import { COMPANY_INFO } from '../data';
import SEO from '../components/SEO';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookie' | 'accessibility';
  onNavigate: (path: AppRoute) => void;
}

export default function LegalPage({ type, onNavigate }: LegalPageProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: AppRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          description: 'ARIAS BUSINESS CONSULTING, LLC Privacy Policy detailing how we collect, store, and process secure business consultation inquiries.',
          icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
          sections: [
            {
              title: '1. Information We Collect Voluntarily',
              content: 'We collect coordinates and company profiles submitted voluntarily when you request a consultation or send a message via our contact forms. This may include your full name, company name, email address, phone number, industry, team size, business stage, and any comments explaining your operational challenges. We never request sensitive identifiers like EIN, SSN, bank routing details, or passwords.'
            },
            {
              title: '2. Automatically Collected Coordinates (Cookies)',
              content: 'Like most websites, we collect basic technical data automatically. This includes IP addresses, browser types, referral URLs, pages visited, and timestamps. This coordinates data is processed to optimize site speeds, secure our servers, and ensure responsive layouts on mobile devices. Optional analytics cookies are only activated with your consent.'
            },
            {
              title: '3. How Information is Used',
              content: 'All submitted business details are routed securely to info@ariasbusinessconsulting.com. We process this information to: (a) evaluate whether our consulting services fit your requirements; (b) contact you to schedule discovery calls; (c) refine our internal process templates; and (d) send occasional administrative or planning reminders.'
            },
            {
              title: '4. Information Sharing & Third Parties',
              content: 'ARIAS BUSINESS CONSULTING, LLC does not sell, trade, or lease your private business details to any third-party marketing companies. We only disclose records when required to comply with Florida state regulations, respond to legal subpoenas, or coordinate safe server hosting services under strict non-disclosure contracts.'
            },
            {
              title: '5. Data Security & Retention',
              content: 'We employ secure server-side encryption standards to guard your inquiries. While no digital exchange is 100% impenetrable, we do not retain sensitive financial records on our server. Factual survey details are stored securely only for the duration required to support active advisory engagements.'
            },
            {
              title: '6. Children’s Privacy',
              content: 'Our services and website are designed strictly for mature entrepreneurs and business teams. This website is not intended for children under 13 years of age, and we do not knowingly track or collect information from children.'
            }
          ]
        };

      case 'terms':
        return {
          title: 'Terms of Use',
          description: 'Terms of Use governing the informational browsing experience of ARIAS BUSINESS CONSULTING, LLC website.',
          icon: <Scale className="w-8 h-8 text-indigo-400" />,
          sections: [
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and browsing this website, you agree to comply with and be bound by these Terms of Use and our associated Privacy Policy. If you disagree with any segment, please terminate your browsing session immediately.'
            },
            {
              title: '2. General Informational Purpose Only',
              content: 'All material, articles, process guides, timeline checklists, and metrics published on this website are supplied for general informational purposes only. The information does not constitute professional legal, tax, accounting, investment, or securities advice.'
            },
            {
              title: '3. No Consultant-Client Relationship',
              content: 'Browsing this website, submitting a contact inquiry, filling out a strategic survey, or calling our office does not create an active consultant-client relationship. Such a relationship is only established through a separate, signed written Consulting Agreement between an authorized company representative and ARIAS BUSINESS CONSULTING, LLC.'
            },
            {
              title: '4. No Assured Business Outcomes',
              content: 'Our strategic roadmaps, workflow optimizations, and SOP templates are planning tools designed around standard industry practices. We do not guarantee specific profitability gains, revenue thresholds, banking approvals, investment interest, or venture success.'
            },
            {
              title: '5. Intellectual Property Rights',
              content: 'The ARIAS wordmark, logo symbols, original articles, process mapping visuals, and website layout code are the exclusive intellectual property of ARIAS BUSINESS CONSULTING, LLC. No portion may be reproduced, copied, or hot-linked without written authorization.'
            },
            {
              title: '6. Governing Florida Law',
              content: 'These Terms of Use are governed by and construed in accordance with the laws of the State of Florida, without regard to conflict of law principles. Any legal dispute arising from website browsing shall be resolved exclusively in the state or federal courts located in Broward County, Florida.'
            }
          ]
        };

      case 'cookie':
        return {
          title: 'Cookie Policy',
          description: 'Factual Cookie Policy outlining essential, preference, and analytics trackers used on this website.',
          icon: <FileText className="w-8 h-8 text-indigo-400" />,
          sections: [
            {
              title: '1. What Are Cookies?',
              content: 'Cookies are small text files downloaded to your device by websites you visit. They help the system remember your preferred settings, keep form details loaded, and report aggregated traffic patterns to server administrators.'
            },
            {
              title: '2. Essential Cookies (Always Active)',
              content: 'These cookies are strictly required to support basic website mechanics, secure navigation, and save your cookie banner selections. They do not store any personal corporate details and cannot be disabled in our preference panel.'
            },
            {
              title: '3. Preference Cookies (Consent-Based)',
              content: 'With your consent, these cookies remember your past selections (like preferred contact method) to ensure you do not have to retype them when filling out subsequent planning worksheets.'
            },
            {
              title: '4. Analytics Cookies (Consent-Based)',
              content: 'We use aggregated analytics cookies to monitor monthly site traffic volume, detect page load bottlenecks, and understand which consulting articles are read most frequently. No individual IP is compiled under these trackers.'
            },
            {
              title: '5. Browser Controls & Revocation',
              content: 'You can modify your browser settings to reject cookies entirely or clear them upon closing your tab. Additionally, you can adjust your consents at any time using our floating Cookie Preferences panel.'
            }
          ]
        };

      case 'accessibility':
        return {
          title: 'Accessibility Statement',
          description: 'Our commitment to ensuring a readable, navigable website for all entrepreneurs, including those with disabilities.',
          icon: <Activity className="w-8 h-8 text-indigo-400" />,
          sections: [
            {
              title: '1. Commitment to Accessibility',
              content: 'ARIAS BUSINESS CONSULTING, LLC is dedicated to providing an online experience that is accessible and usable for all entrepreneurs, including individuals with visual, auditory, cognitive, or physical limitations.'
            },
            {
              title: '2. Implemented Standards',
              content: 'We design our layouts to meet Web Content Accessibility Guidelines (WCAG). This includes: (a) ensuring high-contrast text color relationships; (b) providing readable, scalable typography; (c) supporting clean keyboard navigation across all dropdown menus; and (d) optimizing semantic HTML so that screen readers can parse page structures logical.'
            },
            {
              title: '3. Known Limitations',
              content: 'While we strive to ensure absolute WCAG compliance, certain third-party embedded maps, form captchas, or legacy scripts may have limitations outside our immediate control. We actively audit our templates to resolve these.'
            },
            {
              title: '4. Feedback & Assistance',
              content: 'If you encounter any readability blocks or navigation hurdles on our website, please contact us. Call our office at (407) 801-4292 or email info@ariasbusinessconsulting.com, and we will work to provide you with the necessary details through alternative channels.'
            }
          ]
        };
    }
  };

  const data = getContent();

  return (
    <div className="flex flex-col w-full" id={`legal-page-${type}`}>
      <SEO 
        title={data.title} 
        description={data.description}
        path={`/${type === 'privacy' ? 'privacy-policy' : type === 'terms' ? 'terms-of-use' : type === 'cookie' ? 'cookie-policy' : type}`}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="legal-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left" id="legal-hero-wrap">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              {data.icon}
            </div>
            <div>
              <h1 className="font-display font-bold tracking-tight text-2xl sm:text-3xl text-white">
                {data.title}
              </h1>
              <span className="text-[10px] text-slate-500 font-mono block mt-1">Effective: January 1, 2026</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 bg-slate-950" id="legal-content-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="legal-content-container">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/20 border border-slate-900 flex flex-col gap-8 text-left" id="legal-body-wrap">
            {data.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-2.5" id={`legal-sec-${idx}`}>
                <h2 className="font-display font-bold text-xs sm:text-sm text-white">
                  {section.title}
                </h2>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Factual corporate footprint */}
            <div className="mt-6 pt-6 border-t border-slate-900 text-[10px] text-slate-500 leading-normal flex flex-col gap-1.5" id="legal-footprint">
              <span className="font-semibold text-slate-400 uppercase tracking-wider font-mono">Company Legal Footprint:</span>
              <span>Registered Business Name: {COMPANY_INFO.name}</span>
              <span>Physical Address: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
              <span>Inquiries Desk: {COMPANY_INFO.email} | {COMPANY_INFO.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

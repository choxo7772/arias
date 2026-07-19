/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Clock, ShieldCheck, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { AppRoute, ConsultationFormInput } from '../types';
import { COMPANY_INFO, SERVICES } from '../data';
import SEO from '../components/SEO';

interface RequestConsultationProps {
  onNavigate: (path: AppRoute) => void;
}

export default function RequestConsultation({ onNavigate }: RequestConsultationProps) {
  const [formData, setFormData] = useState<Partial<ConsultationFormInput>>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    yearsInOperation: '',
    teamSize: '',
    businessStage: '',
    serviceRequested: '',
    mainChallenge: '',
    desiredOutcome: '',
    timeline: '',
    preferredMeeting: 'virtual',
    existingDocumentation: 'no',
    budgetRange: '',
    additionalComments: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName?.trim()) newErrors.companyName = 'Company name is required';
    
    // Email
    if (!formData.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone
    if (!formData.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.yearsInOperation) newErrors.yearsInOperation = 'Please select operational length';
    if (!formData.teamSize) newErrors.teamSize = 'Please select active team size';
    if (!formData.businessStage) newErrors.businessStage = 'Please select business stage';
    if (!formData.serviceRequested) newErrors.serviceRequested = 'Please select service focus';
    if (!formData.mainChallenge?.trim()) newErrors.mainChallenge = 'Please describe your core challenge';
    if (!formData.desiredOutcome?.trim()) newErrors.desiredOutcome = 'Please describe your desired outcome';
    if (!formData.timeline) newErrors.timeline = 'Please select desired project timeline';
    if (!formData.privacyConsent) newErrors.privacyConsent = 'You must accept the privacy consent checkbox';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to error
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate secure backend submission (sending inquiries to info@ariasbusinessconsulting.com)
    setTimeout(() => {
      console.log('Secure consultation request received: info@ariasbusinessconsulting.com', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full" id="request-consultation-page">
      <SEO 
        title="Request a Consultation | Strategic Project Inquiry" 
        description="Book a strategic consulting review session. ARIAS BUSINESS CONSULTING, LLC will evaluate your planning, operational, and process bottlenecks."
        path="/request-consultation"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="consult-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="consult-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Advisory Proposal
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Request a Consultation
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Take the first step toward a more organized, structured corporate operational engine. Submit your details below to schedule a Discovery Call.
          </p>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16 bg-slate-950" id="consult-form-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6" id="consult-container">
          {isSubmitted ? (
            /* Success State */
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center animate-in scale-in duration-300" id="consult-success-state">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white mb-3">Consultation Request Received</h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Your request has been securely processed. Augusto Jesus Arias will evaluate your strategic coordinates and contact you at <span className="text-slate-200">info@ariasbusinessconsulting.com</span> to finalize scheduling.
              </p>
              <button 
                onClick={() => onNavigate('/')}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
              >
                Return to Homepage
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-900 flex flex-col gap-6 text-left"
              noValidate
              id="consultation-form"
            >
              <div className="border-b border-slate-900 pb-3" id="form-header">
                <h3 className="font-display font-bold text-sm text-white">Strategic Assessment Survey</h3>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block">Please supply accurate, factual company information. No passwords or credentials required.</span>
              </div>

              {Object.keys(errors).length > 0 && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] flex items-start gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Please fill out all required fields:</span>
                    <ul className="list-disc pl-4 flex flex-col gap-0.5 mt-1 font-mono text-[10px]">
                      {Object.values(errors).map((err, i) => (
                        <li key={i}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Part 1: Basic Contacts */}
              <div className="flex flex-col gap-4" id="section-1-contacts">
                <span className="font-display font-bold text-xs text-indigo-400">1. Contact Coordinates</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.fullName ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="companyName" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Company Name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.companyName ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.email ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. (407) 801-4292"
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.phone ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: Company Info */}
              <div className="flex flex-col gap-4 mt-2" id="section-2-company">
                <span className="font-display font-bold text-xs text-indigo-400">2. Business Profile</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="industry" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.industry ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select Industry...</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Home & Local Services">Home & Local Services</option>
                      <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                      <option value="Technology & Digital">Technology & Digital Services</option>
                      <option value="Construction & Property">Construction & Property Services</option>
                      <option value="Creative & Marketing">Creative & Marketing Agencies</option>
                      <option value="Independent Professional">Independent Professional</option>
                      <option value="Startup">Startup</option>
                      <option value="Other">Other Sector</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="yearsInOperation" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Years in Operation *</label>
                    <select
                      id="yearsInOperation"
                      name="yearsInOperation"
                      value={formData.yearsInOperation}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.yearsInOperation ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select length...</option>
                      <option value="Pre-launch / Startup">Pre-launch / Startup</option>
                      <option value="Under 1 year">Under 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="teamSize" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Team Size (Using Ranges) *</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.teamSize ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select range...</option>
                      <option value="1 (Founder only)">1 (Founder only)</option>
                      <option value="2-5 people">2-5 people</option>
                      <option value="6-15 people">6-15 people</option>
                      <option value="16-30 people">16-30 people</option>
                      <option value="30+ people">30+ people</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="businessStage" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Current Business Stage *</label>
                    <select
                      id="businessStage"
                      name="businessStage"
                      value={formData.businessStage}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.businessStage ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select stage...</option>
                      <option value="Ideation / Planning">Ideation / Planning</option>
                      <option value="Early Revenue / Post-launch">Early Revenue / Post-launch</option>
                      <option value="Stable daily operations">Stable daily operations</option>
                      <option value="Preparing for scaling / Expansion">Preparing for scaling / Expansion</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Part 3: Consultation Requested */}
              <div className="flex flex-col gap-4 mt-2" id="section-3-project">
                <span className="font-display font-bold text-xs text-indigo-400">3. Advisory Details</span>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="serviceRequested" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Consulting Focus requested *</label>
                  <select
                    id="serviceRequested"
                    name="serviceRequested"
                    value={formData.serviceRequested}
                    onChange={handleInputChange}
                    className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                      errors.serviceRequested ? 'border-red-500/60' : 'border-slate-850'
                    }`}
                  >
                    <option value="">Select Service Focus...</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other / Comprehensive Review">Other / Comprehensive Review</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mainChallenge" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Main Operational Challenge *</label>
                  <textarea
                    id="mainChallenge"
                    name="mainChallenge"
                    rows={2}
                    value={formData.mainChallenge}
                    onChange={handleInputChange}
                    maxLength={800}
                    placeholder="What is the single biggest bottleneck affecting your daily operations?"
                    className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                      errors.mainChallenge ? 'border-red-500/60' : 'border-slate-850'
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="desiredOutcome" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Desired Outcome *</label>
                  <textarea
                    id="desiredOutcome"
                    name="desiredOutcome"
                    rows={2}
                    value={formData.desiredOutcome}
                    onChange={handleInputChange}
                    maxLength={800}
                    placeholder="What does a successful engagement look like? E.g., Documented SOPs, clear pricing..."
                    className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                      errors.desiredOutcome ? 'border-red-500/60' : 'border-slate-850'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="timeline" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Desired Timeline *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.timeline ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select timeline...</option>
                      <option value="Within 1 month">Immediate (Within 1 month)</option>
                      <option value="1-3 months">Short Term (1-3 months)</option>
                      <option value="3+ months">Strategic planning (3+ months)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredMeeting" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Preferred Meeting Method *</label>
                    <select
                      id="preferredMeeting"
                      name="preferredMeeting"
                      value={formData.preferredMeeting}
                      onChange={handleInputChange}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="virtual">Virtual Meeting (Zoom / Google Meet)</option>
                      <option value="phone">Standard Phone Call</option>
                      <option value="in_person">In Person (Coral Springs office region)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="existingDocumentation" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Do you have existing process documentation? *</label>
                    <select
                      id="existingDocumentation"
                      name="existingDocumentation"
                      value={formData.existingDocumentation}
                      onChange={handleInputChange}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="no">No, we are starting from scratch</option>
                      <option value="partial">Yes, partial/unorganized notes</option>
                      <option value="yes">Yes, structured guidelines</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budgetRange" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Optional Budget Range (Consulting Allocation)</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Undetermined / Not Listed</option>
                      <option value="Under $2,500">Under $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="additionalComments" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Additional Comments / Context (Optional)</label>
                  <textarea
                    id="additionalComments"
                    name="additionalComments"
                    rows={2}
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    maxLength={1000}
                    placeholder="Any specific billing timelines, custom scopes, or operational coordinates we should note..."
                    className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Part 4: Privacy consent */}
              <div className="flex flex-col gap-2 mt-2">
                <label className="flex items-start gap-2.5 text-[10px] text-slate-400 leading-normal cursor-pointer">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleInputChange}
                    required
                    className={`text-indigo-500 bg-slate-950 border focus:ring-0 rounded mt-0.5 shrink-0 ${
                      errors.privacyConsent ? 'border-red-500' : 'border-slate-850'
                    }`}
                  />
                  <span>
                    I consent to the secure collection of this information by ARIAS BUSINESS CONSULTING, LLC. I confirm that this survey represents a planning inquiry and does not bind either party to an active consulting program.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <span className="text-[9px] text-red-500 font-mono mt-0.5">{errors.privacyConsent}</span>
                )}
              </div>

              {/* Security Banner */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 flex items-start gap-2.5 text-[10px] text-slate-500 leading-normal" id="security-note">
                <ShieldCheck className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  Secure operational encryption: We never request EIN, SSN, bank routing credentials, credit cards, or logins. All information provided is guarded under professional confidentiality guidelines.
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-500/10 flex items-center justify-center gap-1.5 active:translate-y-0.5"
                id="submit-consult-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing secure assessment survey...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

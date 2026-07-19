/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { AppRoute, ContactFormInput } from '../types';
import { COMPANY_INFO, SERVICES } from '../data';
import SEO from '../components/SEO';

interface ContactProps {
  onNavigate: (path: AppRoute) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState<Partial<ContactFormInput>>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    serviceOfInterest: '',
    preferredContact: 'email',
    description: '',
    mainChallenge: '',
    timeline: '',
    referral: '',
    consent: false,
  });

  // Validation States
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

    // Clean error state
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
    
    // Email Validation
    if (!formData.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone Validation
    if (!formData.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.industry) newErrors.industry = 'Industry selection is required';
    if (!formData.serviceOfInterest) newErrors.serviceOfInterest = 'Please select a service';
    if (!formData.description?.trim()) newErrors.description = 'Please describe your business';
    if (!formData.mainChallenge?.trim()) newErrors.mainChallenge = 'Please describe your main challenge';
    if (!formData.timeline) newErrors.timeline = 'Please select a desired timeline';
    if (!formData.consent) newErrors.consent = 'You must accept the terms consent checkbox';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
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
      console.log('Secure submission received for: info@ariasbusinessconsulting.com', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full" id="contact-page">
      <SEO 
        title="Contact Us | Let's Discuss Your Priorities" 
        description="Get in touch with ARIAS BUSINESS CONSULTING, LLC in Coral Springs, FL. Submit a business inquiry to discuss strategic strategy planning."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden" id="contact-hero">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="contact-hero-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-widest text-indigo-400 mb-5">
            Connect
          </span>
          <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-5">
            Let’s Discuss Your Business Priorities
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Submit a secure operational inquiry below. We will evaluate your challenges and discuss whether our support is a suitable match.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-950" id="contact-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-grid-container">
          {isSubmitted ? (
            /* Submission success screen */
            <div className="max-w-xl mx-auto p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center animate-in scale-in duration-300" id="contact-success-state">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-white mb-3">Inquiry Submitted Successfully</h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Thank you for contacting ARIAS BUSINESS CONSULTING, LLC. Your business inquiry has been securely routed to <span className="text-slate-200">info@ariasbusinessconsulting.com</span>. We will review your priorities and get back to you within 1-2 business days.
              </p>
              <button 
                onClick={() => onNavigate('/')}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg text-white font-bold text-xs bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Return Home
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
              {/* Left Column: Factual Contact details */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left" id="contact-info-col">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Corporate Information</span>
                  <h3 className="font-display font-bold text-base text-white">{COMPANY_INFO.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Florida Registered LLC helping entrepreneurs organize operations, streamline processes, and expand responsibly.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-2" id="contact-points">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Principal Office</span>
                      <span className="text-xs text-white">2149 NW 85th Way<br />Coral Springs, FL 33071</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Direct Office Phone</span>
                      <a href="tel:4078014292" className="text-xs text-white hover:text-emerald-400 transition-colors">(407) 801-4292</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                    <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Secure Inquiries Email</span>
                      <a href="mailto:info@ariasbusinessconsulting.com" className="text-xs text-white hover:text-indigo-400 transition-colors">info@ariasbusinessconsulting.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                    <Clock className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-mono text-slate-500">Consultation Hours</span>
                      <span className="text-xs text-white">Available by Appointment</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-900 flex items-start gap-2.5 mt-2" id="confidentiality-badge">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Factual administrative protection: All inquiries are evaluated with strict confidentiality. Submit coordinates safely.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact form */}
              <div className="lg:col-span-7" id="contact-form-col">
                <form 
                  onSubmit={handleSubmit}
                  className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900 flex flex-col gap-5 text-left"
                  noValidate
                  id="contact-form"
                >
                  <h3 className="font-display font-bold text-sm text-white mb-1">Submit Corporate Inquiry</h3>
                  
                  {Object.keys(errors).length > 0 && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] flex items-start gap-2 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block mb-0.5">Please correct the following errors:</span>
                        <ul className="list-disc pl-4 flex flex-col gap-1 mt-1 font-mono">
                          {Object.values(errors).map((err, i) => (
                            <li key={i}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        maxLength={80}
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
                        maxLength={100}
                        required
                        className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                          errors.companyName ? 'border-red-500/60' : 'border-slate-850'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        maxLength={80}
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
                        maxLength={25}
                        required
                        placeholder="e.g. (407) 801-4292"
                        className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                          errors.phone ? 'border-red-500/60' : 'border-slate-850'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Row 3: Website & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="website" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Company Website (Optional)</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        maxLength={100}
                        placeholder="https://example.com"
                        className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
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
                  </div>

                  {/* Service of Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceOfInterest" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Service of Interest *</label>
                    <select
                      id="serviceOfInterest"
                      name="serviceOfInterest"
                      value={formData.serviceOfInterest}
                      onChange={handleInputChange}
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors ${
                        errors.serviceOfInterest ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    >
                      <option value="">Select Service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other / Multiple Scopes">Other / Multiple Scopes</option>
                    </select>
                  </div>

                  {/* Preferred Contact */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Preferred Contact Method</span>
                    <div className="flex gap-4 mt-1">
                      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="text-indigo-500 bg-slate-950 border-slate-850 focus:ring-0"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="text-indigo-500 bg-slate-950 border-slate-850 focus:ring-0"
                        />
                        <span>Phone Call</span>
                      </label>
                    </div>
                  </div>

                  {/* Business Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Describe Your Business *</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      maxLength={1000}
                      placeholder="Please tell us what your company sells, who your customers are, and your current team size..."
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                        errors.description ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>

                  {/* Main Challenge */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mainChallenge" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Main Operational Challenge or Goal *</label>
                    <textarea
                      id="mainChallenge"
                      name="mainChallenge"
                      rows={3}
                      value={formData.mainChallenge}
                      onChange={handleInputChange}
                      maxLength={1000}
                      placeholder="What is your biggest operational delay, strategic concern, or immediate goal?"
                      className={`px-3.5 py-2.5 bg-slate-950 border rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                        errors.mainChallenge ? 'border-red-500/60' : 'border-slate-850'
                      }`}
                    />
                  </div>

                  {/* Desired Timeline */}
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
                      <option value="">Select Desired Timeline...</option>
                      <option value="Immediate (Within 1 month)">Immediate (Within 1 month)</option>
                      <option value="Short Term (1-3 months)">Short Term (1-3 months)</option>
                      <option value="Planning (3+ months)">Planning (3+ months)</option>
                    </select>
                  </div>

                  {/* How Did You Hear About Us */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="referral" className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">How Did You Hear About Us? (Optional)</label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                      maxLength={80}
                      placeholder="Word of mouth, Florida registration search, google..."
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Privacy and Relationship Consent Checkbox */}
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-start gap-2.5 text-[10px] text-slate-400 leading-normal cursor-pointer">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className={`text-indigo-500 bg-slate-950 border focus:ring-0 rounded mt-0.5 shrink-0 ${
                          errors.consent ? 'border-red-500' : 'border-slate-850'
                        }`}
                      />
                      <span>
                        I agree that ARIAS BUSINESS CONSULTING, LLC may use the information provided to respond to my inquiry. I understand that submitting this form does not create a consultant-client relationship.
                      </span>
                    </label>
                    {errors.consent && (
                      <span className="text-[9px] text-red-500 font-mono mt-0.5">{errors.consent}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-500/10 flex items-center justify-center gap-1.5 active:translate-y-0.5"
                    id="submit-inquiry-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting secure inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

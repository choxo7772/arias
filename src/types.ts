/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute =
  | '/'
  | '/about'
  | '/services'
  | '/services/business-strategy'
  | '/services/operational-improvement'
  | '/services/business-planning'
  | '/services/process-development'
  | '/services/financial-organization'
  | '/services/growth-planning'
  | '/services/startup-guidance'
  | '/services/ongoing-advisory'
  | '/approach'
  | '/industries'
  | '/insights'
  | `/insights/${string}`
  | '/faq'
  | '/contact'
  | '/request-consultation'
  | '/privacy-policy'
  | '/terms-of-use'
  | '/cookie-policy'
  | '/accessibility'
  | '/thank-you';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  whoFor: string[];
  challenges: string[];
  includes: string[];
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readTime: string;
  category: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormInput {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  website?: string;
  industry: string;
  serviceOfInterest: string;
  preferredContact: 'email' | 'phone';
  description: string;
  mainChallenge: string;
  timeline: string;
  referral: string;
  consent: boolean;
}

export interface ConsultationFormInput {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  yearsInOperation: string;
  teamSize: string;
  businessStage: string;
  serviceRequested: string;
  mainChallenge: string;
  desiredOutcome: string;
  timeline: string;
  preferredMeeting: string;
  existingDocumentation: string;
  budgetRange?: string;
  additionalComments?: string;
  privacyConsent: boolean;
}

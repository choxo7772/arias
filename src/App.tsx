/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppRoute } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import ServicePage from './pages/ServicePage';
import Approach from './pages/Approach';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import InsightArticle from './pages/InsightArticle';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import RequestConsultation from './pages/RequestConsultation';
import LegalPage from './pages/LegalPage';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Read current pathname on load
    return window.location.pathname || '/';
  });

  // Handle routing popstate (back/forward browser clicks)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Custom Navigation function
  const navigate = (path: AppRoute) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Render active page based on currentPath
  const renderPage = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return <Home onNavigate={navigate} />;
    }
    if (currentPath === '/about') {
      return <About onNavigate={navigate} />;
    }
    if (currentPath === '/services') {
      return <ServicesOverview onNavigate={navigate} />;
    }
    if (currentPath === '/approach') {
      return <Approach onNavigate={navigate} />;
    }
    if (currentPath === '/industries') {
      return <Industries onNavigate={navigate} />;
    }
    if (currentPath === '/insights') {
      return <Insights onNavigate={navigate} />;
    }
    if (currentPath === '/faq') {
      return <FAQ onNavigate={navigate} />;
    }
    if (currentPath === '/contact') {
      return <Contact onNavigate={navigate} />;
    }
    if (currentPath === '/request-consultation') {
      return <RequestConsultation onNavigate={navigate} />;
    }
    if (currentPath === '/thank-you') {
      return <ThankYou onNavigate={navigate} />;
    }

    // Dynamic Service routes
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServicePage slug={slug} onNavigate={navigate} />;
    }

    // Dynamic Insight routes
    if (currentPath.startsWith('/insights/')) {
      const slug = currentPath.replace('/insights/', '');
      return <InsightArticle slug={slug} onNavigate={navigate} />;
    }

    // Legal Policy routes
    if (currentPath === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigate} />;
    }
    if (currentPath === '/terms-of-use') {
      return <LegalPage type="terms" onNavigate={navigate} />;
    }
    if (currentPath === '/cookie-policy') {
      return <LegalPage type="cookie" onNavigate={navigate} />;
    }
    if (currentPath === '/accessibility') {
      return <LegalPage type="accessibility" onNavigate={navigate} />;
    }

    // Fallback 404
    return <NotFound onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-600/30 selection:text-white" id="main-application-frame">
      {/* Navigation Header */}
      <Header currentPath={currentPath as AppRoute} onNavigate={navigate} />

      {/* Primary Page Canvas */}
      <main className="flex-grow flex flex-col items-center justify-start w-full relative" id="main-content-canvas">
        {renderPage()}
      </main>

      {/* Footer Segment */}
      <Footer onNavigate={navigate} />

      {/* Cookie Consent Consent System */}
      <CookieBanner onNavigate={navigate} />
    </div>
  );
}

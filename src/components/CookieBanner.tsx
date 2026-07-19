/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Settings, ArrowRight, Check } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Cookie states
  const [essential, setEssential] = useState(true); // Always true, cannot be disabled
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('arias_cookie_consent');
    if (!consent) {
      // Show banner after 1.5 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferencesObj = {
      essential: true,
      preferences: true,
      analytics: true,
    };
    localStorage.setItem('arias_cookie_consent', JSON.stringify(preferencesObj));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const preferencesObj = {
      essential: true,
      preferences: false,
      analytics: false,
    };
    localStorage.setItem('arias_cookie_consent', JSON.stringify(preferencesObj));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const preferencesObj = {
      essential: true,
      preferences,
      analytics,
    };
    localStorage.setItem('arias_cookie_consent', JSON.stringify(preferencesObj));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-slate-900/95 border border-slate-800/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-bottom-6 duration-300"
      id="cookie-consent-banner"
    >
      <div className="flex items-start gap-3.5" id="cookie-banner-content">
        <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 text-brand-400 mt-0.5" id="cookie-banner-icon">
          <ShieldAlert className="w-5 h-5 text-indigo-400" />
        </div>
        
        <div className="flex flex-col gap-1.5" id="cookie-text-wrap">
          <h4 className="font-display font-bold text-sm text-white">We Respect Your Privacy</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            We use cookies to improve your browsing experience, analyze site traffic, and support administrative structures. Choose which cookies you consent to using.
          </p>
        </div>
      </div>

      {showPreferences ? (
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-col gap-3" id="cookie-preferences-panel">
          <h5 className="font-display font-semibold text-xs text-slate-300">Manage Cookie Preferences</h5>
          
          {/* Essential Category */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-900">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white flex items-center gap-1">
                Essential Cookies <span className="text-[9px] text-brand-400 font-mono bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">Required</span>
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">Necessary for core website mechanics and security.</span>
            </div>
            <div className="w-8 h-5 bg-indigo-500 rounded-full relative flex items-center justify-end px-1 select-none opacity-80 cursor-not-allowed">
              <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Preferences Category */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-900">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Preference Cookies</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Remembers your layout choices and selected forms inputs.</span>
            </div>
            <button 
              onClick={() => setPreferences(!preferences)}
              className={`w-8 h-5 rounded-full relative flex items-center p-0.5 transition-colors cursor-pointer ${preferences ? 'bg-emerald-500 justify-end' : 'bg-slate-800 justify-start'}`}
            >
              <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
            </button>
          </div>

          {/* Analytics Category */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-900">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Analytics Cookies</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Helps us measure site traffic patterns and user behavior.</span>
            </div>
            <button 
              onClick={() => setAnalytics(!analytics)}
              className={`w-8 h-5 rounded-full relative flex items-center p-0.5 transition-colors cursor-pointer ${analytics ? 'bg-emerald-500 justify-end' : 'bg-slate-800 justify-start'}`}
            >
              <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 mt-2">
            <button 
              onClick={() => setShowPreferences(false)}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Back
            </button>
            <button 
              onClick={handleSavePreferences}
              className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            >
              Save Choices
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex flex-col sm:flex-row gap-2.5" id="cookie-banner-buttons">
          <button 
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Accept All
          </button>
          <button 
            onClick={handleRejectAll}
            className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
          >
            Reject All
          </button>
          <button 
            onClick={() => setShowPreferences(true)}
            className="px-3.5 py-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-slate-300 font-medium text-xs border border-slate-800/60 transition-colors cursor-pointer flex items-center justify-center gap-1"
            aria-label="Customize cookie choices"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

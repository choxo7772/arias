/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Shuffle, Sliders, TrendingUp, CheckCircle, Clock, AlertCircle, BarChart2 } from 'lucide-react';

export default function DashboardVisual() {
  const [activeTab, setActiveTab] = useState<'strategy' | 'operations' | 'processes' | 'growth'>('strategy');

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-md p-6 shadow-2xl shadow-blue-900/10 glow-card"
      id="dashboard-visual-wrapper"
    >
      {/* Decorative backdrop gradients representing premium depth */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6" id="dash-header">
        <div className="flex items-center gap-2" id="dash-header-title">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">ARIAS Active Business Framework</span>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex items-center flex-wrap gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60" id="dash-tabs">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'strategy' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            Strategy
          </button>
          <button
            onClick={() => setActiveTab('operations')}
            className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'operations' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            Operations
          </button>
          <button
            onClick={() => setActiveTab('processes')}
            className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'processes' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            Processes
          </button>
          <button
            onClick={() => setActiveTab('growth')}
            className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'growth' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Growth
          </button>
        </div>
      </div>

      {/* Dashboard Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="dash-grid-container">
        {/* Left Column: Focused Interactive Review */}
        <div className="lg:col-span-7 flex flex-col gap-5" id="dash-left-column">
          {activeTab === 'strategy' && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300" id="dash-tab-strategy">
              <h4 className="font-display font-semibold text-white text-base">Strategic Priorities</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Evaluating key business variables to align team actions with high-value milestones.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="strategy-cards">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Target className="w-4 h-4" />
                    <span className="font-display font-bold text-xs text-white">Business Model Align</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Evaluating net profitability across service lines to identify core margins.
                  </p>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 w-fit">
                    Completed
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <Clock className="w-4 h-4" />
                    <span className="font-display font-bold text-xs text-white">Priority Roadmap</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Mapping 12-month goals into 90-day action steps with clear accountability.
                  </p>
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 w-fit">
                    Active Sprint
                  </span>
                </div>
              </div>

              {/* Action Roadmap Visual */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-3" id="roadmap-box">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Milestone Priority Roadmap</span>
                <div className="flex flex-col gap-2.5" id="roadmap-items">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5">1</div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-slate-200">Value Proposition Refinement</span>
                      <span className="text-[10px] text-slate-400">Identify core market advantages & consolidate service catalog</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5">2</div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-slate-200">Resource Optimization</span>
                      <span className="text-[10px] text-slate-400">Reallocating administrative hours to service delivery focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'operations' && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300" id="dash-tab-operations">
              <h4 className="font-display font-semibold text-white text-base">Operational Review</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Streamlining daily business operations to minimize bottlenecks and reduce administrative waste.
              </p>

              <div className="flex flex-col gap-2.5" id="operations-list">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Administrative Auditing</span>
                      <span className="text-[10px] text-slate-400">Review time-consuming manual checklists</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-slate-400">In Progress</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">Friction Identification</span>
                      <span className="text-[10px] text-slate-400">Identify delays in customer intake & handoffs</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-yellow-400 bg-yellow-500/10 px-1.5 py-0.5 rounded border border-yellow-500/20">Audit Focus</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'processes' && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300" id="dash-tab-processes">
              <h4 className="font-display font-semibold text-white text-base">Process Improvement</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Formalizing repeatable SOP checklists to ensure consistency and protect against employee turnover.
              </p>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col gap-3" id="sop-checklist">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Core SOP Documentation Status</span>
                <div className="flex flex-col gap-2.5" id="sop-checklist-items">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Customer Onboarding Protocol — <span className="text-slate-500 text-[10px]">100% Documented</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Service Delivery Standard Checklist — <span className="text-slate-500 text-[10px]">100% Documented</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Post-Service Review & Feedback SOP — <span className="text-slate-500 text-[10px]">In Drafting</span></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300" id="dash-tab-growth">
              <h4 className="font-display font-semibold text-white text-base">Growth Planning</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Stresstesting operational limits and designing phased hiring triggers to scale responsibly.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center" id="growth-metrics">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/60">
                  <span className="text-[10px] text-slate-400 block mb-1">Scaling Risk</span>
                  <span className="text-xs font-bold text-emerald-400">Mitigated</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/60">
                  <span className="text-[10px] text-slate-400 block mb-1">Workflow Ready</span>
                  <span className="text-xs font-bold text-white">90%</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/60">
                  <span className="text-[10px] text-slate-400 block mb-1">Next Trigger</span>
                  <span className="text-xs font-bold text-indigo-400">Hire Assistant</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Performance Overview Vector Chart */}
        <div className="lg:col-span-5 flex flex-col gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80" id="dash-right-column">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800/60 pb-3" id="chart-header">
            <span className="font-display font-bold text-xs text-white flex items-center gap-1">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              Performance Overview
            </span>
            <span className="text-[9px] font-mono text-slate-500">Core KPI Ratios</span>
          </div>

          <p className="text-[10px] text-slate-400 leading-relaxed">
            Comparing pre-engagement baselines against operational objectives.
          </p>

          {/* Clean Vector Chart SVG */}
          <div className="relative w-full h-44 flex items-center justify-center bg-slate-950 rounded-lg border border-slate-900 p-2" id="chart-svg-wrap">
            <svg viewBox="0 0 200 120" className="w-full h-full text-slate-400" id="performance-chart-svg">
              {/* Grid Lines */}
              <line x1="20" y1="10" x2="190" y2="10" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="20" y1="40" x2="190" y2="40" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="20" y1="70" x2="190" y2="70" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="20" y1="100" x2="190" y2="100" stroke="#1f2937" strokeWidth="1" />

              {/* Y Axis Labels */}
              <text x="12" y="13" fill="#6b7280" fontSize="6" textAnchor="end">Optimized</text>
              <text x="12" y="73" fill="#6b7280" fontSize="6" textAnchor="end">Baseline</text>

              {/* Column Bars */}
              {/* Column 1 - Strategy Alignment */}
              <rect x="35" y="60" width="12" height="40" rx="2" fill="#1e293b" />
              <rect x="35" y="25" width="12" height="75" rx="2" fill="url(#blue-grad)" className="opacity-90" />
              <text x="41" y="110" fill="#9ca3af" fontSize="5" textAnchor="middle">Strategy</text>

              {/* Column 2 - Operational Overhead (Lower is better) */}
              <rect x="85" y="30" width="12" height="70" rx="2" fill="#1e293b" />
              <rect x="85" y="65" width="12" height="35" rx="2" fill="url(#cyan-grad)" className="opacity-90" />
              <text x="91" y="110" fill="#9ca3af" fontSize="5" textAnchor="middle">Overhead</text>

              {/* Column 3 - Team Delivery Consistency */}
              <rect x="135" y="65" width="12" height="35" rx="2" fill="#1e293b" />
              <rect x="135" y="15" width="12" height="85" rx="2" fill="url(#emerald-grad)" className="opacity-90" />
              <text x="141" y="110" fill="#9ca3af" fontSize="5" textAnchor="middle">Consistency</text>

              {/* Gradients */}
              <defs>
                <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0e7490" />
                </linearGradient>
                <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col gap-1 text-[10px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-900/60" id="chart-legend-box">
            <span className="font-semibold text-slate-300">Framework Focus:</span>
            <span className="leading-relaxed">
              Standardizing key operations lowers overhead costs while raising team service consistency.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

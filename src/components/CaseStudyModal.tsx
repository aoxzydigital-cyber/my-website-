import React, { useState, useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Bot,
  Sparkles,
  ArrowRight,
  Layers,
  Activity,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Code2,
  Sliders,
  Check,
  Copy,
} from 'lucide-react';
import { CaseStudyData } from '../types.ts';
import { AIVistaSimulator } from './simulators/AIVistaSimulator.tsx';
import { InsightAISimulator } from './simulators/InsightAISimulator.tsx';
import { FraudRiskSimulator } from './simulators/FraudRiskSimulator.tsx';
import { DataCleaningSimulator } from './simulators/DataCleaningSimulator.tsx';

interface CaseStudyModalProps {
  caseStudy: CaseStudyData | null;
  allCaseStudies: CaseStudyData[];
  onClose: () => void;
  onSelectCaseStudy: (study: CaseStudyData) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  allCaseStudies,
  onClose,
  onSelectCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<'simulation' | 'workflow' | 'friction' | 'prompts' | 'impact' | 'tradeoffs'>('simulation');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseStudy) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(caseStudy.samplePrompt.systemPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const renderSimulator = () => {
    switch (caseStudy.id) {
      case 'aivista':
        return <AIVistaSimulator />;
      case 'insightai':
        return <InsightAISimulator />;
      case 'fraud-platform':
        return <FraudRiskSimulator />;
      case 'agentic-data-pipeline':
        return <DataCleaningSimulator />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-zinc-800 bg-[#090a10] shadow-2xl text-zinc-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Navigation & Actions */}
        <div className="flex flex-col border-b border-zinc-800/80 bg-[#0d0e16]/95 backdrop-blur px-5 py-4 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span className="text-blue-400">{caseStudy.category}</span>
                <span aria-hidden="true">·</span>
                <span>{caseStudy.role}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                {caseStudy.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-500 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-600 transition"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Switcher between Case Studies */}
          <div className="flex items-center gap-2 pt-3 mt-2 border-t border-zinc-800/60 overflow-x-auto text-xs scrollbar-none">
            <span className="text-zinc-500 shrink-0 font-mono text-[11px]">Switch Case Study:</span>
            {allCaseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => {
                  onSelectCaseStudy(cs);
                  setActiveTab('simulation');
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition ${
                  cs.id === caseStudy.id
                    ? 'bg-zinc-800 text-white border border-zinc-750'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                {cs.title.split('—')[0].trim()}
              </button>
            ))}
          </div>

          {/* Deep-Dive Tabs */}
          <div className="flex items-center gap-1.5 pt-3 overflow-x-auto text-xs scrollbar-none">
            {[
              { id: 'simulation', label: 'Interactive Simulator' },
              { id: 'workflow', label: 'System Architecture & Flow' },
              { id: 'friction', label: 'Problem & Friction Points' },
              { id: 'prompts', label: 'Prompt Specs & Edge Cases' },
              { id: 'impact', label: 'Evaluation & Business Impact' },
              { id: 'tradeoffs', label: 'Risks & What Stays Human' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* TAB 1: INTERACTIVE SIMULATOR */}
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white font-display">Interactive System Playground</h3>
                  <span className="text-xs font-mono text-blue-400">Live Browser Simulation</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Experience how this system functions in practice. Adjust live parameters, trigger agent planning steps, and inspect the human-in-the-loop decision controls.
                </p>
              </div>

              {/* Render domain-specific simulator */}
              {renderSimulator()}

              {/* Key Highlights Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-3.5 space-y-1">
                    <span className="text-xs text-zinc-500 font-mono">{m.label}</span>
                    <div className="text-lg font-bold font-mono text-zinc-100">{m.value}</div>
                    {m.detail && <p className="text-xs text-zinc-400">{m.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE & FLOW */}
          {activeTab === 'workflow' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white font-display">The Redesigned System Architecture</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  How the traditional manual or brittle process was transformed into a structured, reliable AI workflow.
                </p>
              </div>

              {/* Step-by-Step Flow Pipeline */}
              <div className="space-y-3">
                {caseStudy.workflowSteps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-4 space-y-2 transition hover:border-zinc-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-950 text-blue-400 font-mono text-xs font-bold border border-blue-800/60">
                          0{step.stepNumber}
                        </span>
                        <h4 className="text-base font-semibold text-zinc-100">{step.title}</h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">Stage 0{step.stepNumber}</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-medium pl-8">{step.description}</p>
                    <ul className="space-y-1 pl-8 pt-1 text-xs text-zinc-400 list-disc list-inside">
                      {step.details.map((d, i) => (
                        <li key={i} className="leading-relaxed">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* End-to-End Product Loop */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">The Continuous Product Loop</span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {caseStudy.productLoop.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
                        {item}
                      </span>
                      {idx < caseStudy.productLoop.length - 1 && (
                        <span className="text-zinc-600 font-sans">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Human Fallback Triggers */}
              <div className="rounded-xl border border-amber-900/30 bg-amber-950/10 p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Human Fallback Triggers (Decision Support Rules)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {caseStudy.humanFallbackTriggers.map((trigger, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800/80">
                      <span className="text-amber-400 font-mono text-[11px] shrink-0">·</span>
                      <span className="leading-relaxed">{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROBLEM & FRICTION POINTS */}
          {activeTab === 'friction' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white font-display">The Original Workflow & Core Bottlenecks</h3>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  {caseStudy.originalWorkflow.overview}
                </p>
              </div>

              {/* Core Problem Box */}
              <div className="rounded-xl border border-blue-900/40 bg-blue-950/15 p-4 text-xs space-y-1.5">
                <span className="font-mono text-blue-400 uppercase tracking-wider text-[11px]">The Core Strategic Dilemma</span>
                <p className="text-sm text-zinc-100 font-medium italic">"{caseStudy.originalWorkflow.coreProblem}"</p>
              </div>

              {/* Friction Table */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Root-Cause Analysis</span>
                <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#0d0f18]">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Friction Point</th>
                        <th className="py-2.5 px-4 font-semibold">Underlying Root Cause</th>
                        <th className="py-2.5 px-4 font-semibold">Business / User Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {caseStudy.frictionPoints.map((fp, i) => (
                        <tr key={i} className="hover:bg-zinc-900/40">
                          <td className="py-3 px-4 font-medium text-zinc-100">{fp.friction}</td>
                          <td className="py-3 px-4 text-zinc-400">{fp.rootCause}</td>
                          <td className="py-3 px-4 text-zinc-300">{fp.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Architectural Prerequisites */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">System Prerequisites for Success</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {caseStudy.prerequisites.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3">
                      <span className="text-blue-400 font-mono text-xs shrink-0 font-bold">{idx + 1}.</span>
                      <span className="text-zinc-300 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROMPT SPECS & EDGE CASES */}
          {activeTab === 'prompts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">Prompt Engineering & Structured Schemas</h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    Strict JSON-constrained prompts designed to decouple non-deterministic generation from deterministic downstream tools.
                  </p>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-xs text-zinc-300 hover:text-white transition"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? 'Copied!' : 'Copy System Prompt'}</span>
                </button>
              </div>

              {/* System Prompt Code Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase">System Prompt Specification</span>
                <pre className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs font-mono text-blue-300 overflow-x-auto leading-relaxed">
                  {caseStudy.samplePrompt.systemPrompt}
                </pre>
              </div>

              {/* Sample User Input vs Valid JSON Output */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase">Sample Input Context</span>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed h-[200px] overflow-y-auto">
                    {caseStudy.samplePrompt.sampleInput}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase">Structured JSON Output</span>
                  <pre className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed h-[200px] overflow-y-auto">
                    {caseStudy.samplePrompt.sampleOutput}
                  </pre>
                </div>
              </div>

              {/* Prompt Testing Matrix */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase">Prompt Testing & Edge Case Matrix</span>
                <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#0d0f18]">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Test Case</th>
                        <th className="py-2.5 px-4 font-semibold">Input Scenario</th>
                        <th className="py-2.5 px-4 font-semibold">Expected Model Output</th>
                        <th className="py-2.5 px-4 font-semibold text-rose-400">What a Bad Result Reveals</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/80">
                      {caseStudy.promptTesting.map((pt, i) => (
                        <tr key={i} className="hover:bg-zinc-900/40">
                          <td className="py-3 px-4 font-medium text-zinc-100 whitespace-nowrap">{pt.caseName}</td>
                          <td className="py-3 px-4 text-zinc-400">{pt.input}</td>
                          <td className="py-3 px-4 text-zinc-200">{pt.expectedOutput}</td>
                          <td className="py-3 px-4 text-rose-300 text-[11px]">{pt.whatBadResultReveals}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: EVALUATION & BUSINESS IMPACT */}
          {activeTab === 'impact' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white font-display">Evaluation Metrics & Business Impact</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Moving beyond superficial demos to measurable operational and analytical capabilities.
                </p>
              </div>

              {/* Special evaluation callout for ML Fraud project if applicable */}
              {caseStudy.id === 'fraud-platform' && (
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 uppercase">
                      Held-Out Test Set Performance (89,459 rows)
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">Offline Evaluation Split</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">Recall</span>
                      <span className="text-base font-bold text-emerald-400">99.20%</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">PR-AUC</span>
                      <span className="text-base font-bold text-blue-400">0.9898</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">F1 Score</span>
                      <span className="text-base font-bold text-zinc-100">89.59%</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">Precision</span>
                      <span className="text-base font-bold text-zinc-100">81.68%</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">ROC-AUC</span>
                      <span className="text-base font-bold text-purple-400">0.9998</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800">
                      <span className="text-[11px] text-zinc-500 block">FPR</span>
                      <span className="text-base font-bold text-zinc-300">0.0031</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 pt-1 flex flex-wrap gap-3">
                    <span>Confusion Matrix: TN = 87,937</span>
                    <span>FP = 277</span>
                    <span>FN = 10</span>
                    <span>TP = 1,235</span>
                  </div>
                </div>
              )}

              {/* Before vs After Table */}
              <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#0d0f18]">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Capability / Metric</th>
                      <th className="py-2.5 px-4 font-semibold text-rose-400/90">Before (Traditional Workflow)</th>
                      <th className="py-2.5 px-4 font-semibold text-emerald-400/90">After (With AI System)</th>
                      <th className="py-2.5 px-4 font-semibold">Architectural Reasoning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/80">
                    {caseStudy.businessImpact.map((row, i) => (
                      <tr key={i} className="hover:bg-zinc-900/40">
                        <td className="py-3 px-4 font-semibold text-zinc-100">{row.metricOrCapability}</td>
                        <td className="py-3 px-4 text-zinc-400">{row.before}</td>
                        <td className="py-3 px-4 text-emerald-300 font-medium">{row.after}</td>
                        <td className="py-3 px-4 text-zinc-400">{row.reasoning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: RISKS & WHAT STAYS HUMAN */}
          {activeTab === 'tradeoffs' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white font-display">Product Thinking, Risks & Governance</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  How trade-offs are evaluated and where the boundary between automated intelligence and human judgment lies.
                </p>
              </div>

              {/* Risks & Mitigations */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase">Key Identified Risks & Engineered Mitigations</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {caseStudy.risksAndTradeoffs.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                      <span className="text-xs font-bold text-amber-300 block">{item.risk}</span>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.mitigation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Stays Human Matrix */}
              <div className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">The Governance Boundary: What Stays Human</h4>
                  <span className="text-xs font-mono text-blue-400">Strict Separation</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2 rounded-lg border border-zinc-800/80 bg-zinc-950 p-3.5">
                    <span className="font-semibold text-blue-400 block font-mono text-[11px] uppercase">
                      What the AI System Automates:
                    </span>
                    <ul className="space-y-1.5 text-zinc-300">
                      {caseStudy.whatStaysHuman.aiAutomates.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 rounded-lg border border-zinc-800/80 bg-zinc-950 p-3.5">
                    <span className="font-semibold text-emerald-400 block font-mono text-[11px] uppercase">
                      What Accountable Humans Retain:
                    </span>
                    <ul className="space-y-1.5 text-zinc-300">
                      {caseStudy.whatStaysHuman.humanRetains.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 text-xs text-zinc-400 italic">
                  "{caseStudy.whatStaysHuman.governancePrinciple}"
                </div>
              </div>

              {/* Current State vs Next Build */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                  <span className="font-mono text-emerald-400 font-semibold uppercase text-[11px]">Implemented & Live Today</span>
                  <ul className="space-y-1 text-zinc-300 list-disc list-inside">
                    {caseStudy.currentState.map((s, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2">
                  <span className="font-mono text-blue-400 font-semibold uppercase text-[11px]">Next Production Roadmap</span>
                  <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                    {caseStudy.nextBuild.map((nb, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {nb}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Repo Link & Close */}
        <div className="flex items-center justify-between border-t border-zinc-800 bg-[#0d0e16] px-5 py-3.5 shrink-0 text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Tech Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.technologies.map((t, idx) => (
                <span key={idx} className="font-mono text-[11px] text-zinc-300">
                  {t} {idx < caseStudy.technologies.length - 1 ? '·' : ''}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              <span>View Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition"
            >
              Close Reader
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

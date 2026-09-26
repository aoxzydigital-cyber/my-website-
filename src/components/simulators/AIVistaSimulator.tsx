import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

interface SimulationScenario {
  company: string;
  category: string;
  websiteExcerpt: string;
  generatedQueries: string[];
  competitors: string[];
  brandVisibilityRate: number;
  aiResponse: string;
  citations: string[];
  diagnosis: string;
  suggestedExperiment: {
    title: string;
    hypothesis: string;
    targetAction: string;
    expectedOutcome: string;
  };
}

const scenarios: SimulationScenario[] = [
  {
    company: 'Relay CRM',
    category: 'Sales Automation & Mid-Market CRM',
    websiteExcerpt: 'Modern CRM tailored for 50-500 employee teams. Deep two-way sync with Gmail and Slack, automatic pipeline updates.',
    generatedQueries: [
      'Best CRM for mid-market companies in 2026',
      'Which CRM integrates natively with Gmail and Slack?',
      'Relay CRM vs HubSpot for mid-market sales teams',
    ],
    competitors: ['HubSpot', 'Salesforce', 'Pipedrive'],
    brandVisibilityRate: 18,
    aiResponse:
      'For mid-market sales organizations, HubSpot and Salesforce dominate the landscape due to their extensive app ecosystems. Relay CRM is occasionally mentioned for its lightweight Slack sync, but lacks independent review coverage on major software directories.',
    citations: ['hubspot.com', 'salesforce.com/crm', 'g2.com/categories/crm', 'forbes.com/advisor/business/software/best-crm'],
    diagnosis:
      'Relay CRM suffers a 74% citation gap on authoritative software review directories (G2, Capterra). AI models rely heavily on these aggregators for mid-market recommendations.',
    suggestedExperiment: {
      title: 'Targeted G2 Comparison Content & Review Campaign',
      hypothesis:
        'Publishing verified customer comparison matrices on G2 and TechRadar will increase AI recommendation presence from 18% to >45% within 60 days.',
      targetAction: 'Launch G2 customer review drive targeting mid-market Slack/Gmail integration use-cases.',
      expectedOutcome: 'Direct inclusion in primary "Top 3 Mid-Market CRMs" generative summaries.',
    },
  },
  {
    company: 'TalentPulse',
    category: 'AI Recruiting & Candidate Screening',
    websiteExcerpt: 'Agentic candidate screening for engineering teams with bias-audited skill verification.',
    generatedQueries: [
      'Top AI recruiting tools with transparent bias auditing',
      'Candidate screening software for technical engineering hiring',
      'TalentPulse vs Ashby vs Greenhouse for AI screening',
    ],
    competitors: ['Greenhouse', 'Ashby', 'Lever'],
    brandVisibilityRate: 12,
    aiResponse:
      'Greenhouse and Ashby are the premier enterprise standards. When asked specifically about bias auditing, modern AI engines cite academic whitepapers and specialized audits, where TalentPulse has minimal indexed public research.',
    citations: ['greenhouse.io', 'ashbyhq.com', 'shrm.org', 'techtarget.com/hr-tech'],
    diagnosis:
      'AI models prioritize published whitepapers and third-party ethical AI certifications when recommending bias-sensitive recruiting software.',
    suggestedExperiment: {
      title: 'Open Ethical AI Audit Whitepaper Syndication',
      hypothesis:
        'Publishing third-party algorithmic fairness audit results on SHRM and ArXiv will prompt AI search to cite TalentPulse as the benchmark for compliant hiring.',
      targetAction: 'Index third-party algorithm verification report with public DOI citation.',
      expectedOutcome: 'Featured recommendation for all "bias-free AI candidate screening" user intents.',
    },
  },
];

export const AIVistaSimulator: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  const scenario = scenarios[selectedScenarioIndex];

  const handleNext = () => {
    if (activeStep < 6) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(1);
    setIsApproved(null);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-5 text-sm text-zinc-300">
      {/* Header controls */}
      <div className="flex flex-col gap-3 pb-4 border-b border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-blue-400 font-mono">Interactive Workflow</span>
          <h4 className="text-base font-semibold text-zinc-100">AIVista Autonomous Agent Simulation</h4>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedScenarioIndex}
            onChange={(e) => {
              setSelectedScenarioIndex(Number(e.target.value));
              handleReset();
            }}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 focus:border-blue-500 focus:outline-none"
          >
            {scenarios.map((s, idx) => (
              <option key={s.company} value={idx}>
                {s.company} ({s.category.split('&')[0]})
              </option>
            ))}
          </select>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-900/80 px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition"
            title="Reset Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Step progress pills */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 py-4 border-b border-zinc-800 text-xs">
        {[
          { num: 1, label: 'Investigate' },
          { num: 2, label: 'Generate' },
          { num: 3, label: 'Test' },
          { num: 4, label: 'Analyze' },
          { num: 5, label: 'Diagnose' },
          { num: 6, label: 'Recommend' },
        ].map((step) => {
          const isActive = activeStep === step.num;
          const isDone = activeStep > step.num;
          return (
            <button
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg border transition-all text-center ${
                isActive
                  ? 'border-blue-500 bg-blue-950/40 text-blue-300 font-medium'
                  : isDone
                  ? 'border-zinc-700 bg-zinc-900/60 text-emerald-400'
                  : 'border-zinc-800/80 bg-zinc-950/40 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span className="font-mono text-[11px]">{step.num}.</span>
              <span className="truncate">{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* Simulation Stage Content */}
      <div className="py-4 min-h-[260px] flex flex-col justify-between">
        {activeStep === 1 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 1: Website & Entity Extraction</span>
              <span className="text-xs text-emerald-400 font-mono">Agent Status: Active</span>
            </div>
            <div className="rounded-lg bg-zinc-950 p-3.5 border border-zinc-800 space-y-2">
              <p className="text-xs text-zinc-400">Target URL / Company Domain:</p>
              <p className="font-mono text-blue-300 text-xs">{scenario.company.toLowerCase()}.io</p>
              <div className="pt-2 border-t border-zinc-800/80">
                <span className="text-xs text-zinc-500">Extracted Category:</span>
                <p className="text-zinc-200 text-xs mt-0.5 font-medium">{scenario.category}</p>
              </div>
              <div>
                <span className="text-xs text-zinc-500">Core Positioning & Value Proposition:</span>
                <p className="text-zinc-300 text-xs mt-0.5 italic">"{scenario.websiteExcerpt}"</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              The agent parsed page structure, value props, and integrations to build the seed knowledge graph before query generation.
            </p>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 2: Realistic Customer Intent Generation</span>
              <span className="text-xs text-blue-400 font-mono">3 High-Intent Queries Formulated</span>
            </div>
            <div className="space-y-2">
              {scenario.generatedQueries.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                  <span className="font-mono text-xs text-blue-400 shrink-0">Q{idx + 1}</span>
                  <span className="text-xs text-zinc-200 font-medium">"{q}"</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-400">
              Queries simulate authentic decision stages: general category, specific integrations, and competitive head-to-head comparisons.
            </p>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 3: Multi-Engine AI Search Testing</span>
              <span className="text-xs text-amber-400 font-mono">Evaluating ChatGPT, Claude & Gemini</span>
            </div>
            <div className="rounded-lg bg-zinc-950 p-3.5 border border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Simulated Primary AI Response:</span>
                <span className="text-zinc-500 font-mono">Query: "{scenario.generatedQueries[0]}"</span>
              </div>
              <p className="text-xs text-zinc-300 bg-zinc-900/80 p-2.5 rounded border border-zinc-800 leading-relaxed font-mono">
                {scenario.aiResponse}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="text-zinc-500">Cited Sources:</span>
                {scenario.citations.map((c, i) => (
                  <span key={i} className="text-xs font-mono text-blue-400">
                    {c} {i < scenario.citations.length - 1 ? '·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 4: Cross-Model Response Analytics</span>
              <span className="text-xs text-zinc-400 font-mono">Parsed Entity Distribution</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Brand AI Visibility</span>
                <span className="text-xl font-bold font-mono text-amber-400">{scenario.brandVisibilityRate}%</span>
                <span className="text-[11px] text-zinc-500 block mt-1">Recommended in 1 of 6 runs</span>
              </div>
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Primary Competitors</span>
                <div className="flex flex-wrap gap-1 mt-1 text-xs text-zinc-200">
                  {scenario.competitors.join(', ')}
                </div>
                <span className="text-[11px] text-zinc-500 block mt-1">82% Share of Voice</span>
              </div>
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Dominant Cited Domains</span>
                <span className="text-xs text-blue-400 font-mono block mt-1 truncate">g2.com, forbes.com</span>
                <span className="text-[11px] text-zinc-500 block mt-1">80% of model weight</span>
              </div>
            </div>
          </div>
        )}

        {activeStep === 5 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 5: Root-Cause Diagnosis</span>
              <span className="text-xs text-amber-400 font-mono flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Gap Discovered
              </span>
            </div>
            <div className="rounded-lg bg-zinc-950 p-3.5 border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-400">Empirical Diagnostic Trace:</span>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 py-1">
                <span className="text-amber-400">Low AI Visibility</span>
                <span>→</span>
                <span>Competitor Dominance</span>
                <span>→</span>
                <span className="text-blue-400">Citation Authority Gap</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pt-1 border-t border-zinc-800/80">
                {scenario.diagnosis}
              </p>
            </div>
          </div>
        )}

        {activeStep === 6 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Step 6: Proposed Revenue Experiment & Human Gate</span>
              <span className="text-xs text-emerald-400 font-mono">Requires PM Sign-Off</span>
            </div>
            <div className="rounded-lg bg-zinc-950 p-3.5 border border-blue-900/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-100">{scenario.suggestedExperiment.title}</span>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
                  Hypothesis Driven
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-zinc-200">Hypothesis:</strong> {scenario.suggestedExperiment.hypothesis}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80 text-xs">
                <div>
                  <span className="text-zinc-500 block">Proposed Action:</span>
                  <span className="text-zinc-300">{scenario.suggestedExperiment.targetAction}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Expected Metric Impact:</span>
                  <span className="text-emerald-400">{scenario.suggestedExperiment.expectedOutcome}</span>
                </div>
              </div>
            </div>

            {/* Human Gate */}
            <div className="rounded-lg bg-zinc-900/60 p-3 border border-zinc-800 flex items-center justify-between">
              <div className="text-xs">
                <span className="font-medium text-zinc-200">Human-in-the-Loop Governance:</span>
                <p className="text-zinc-400 text-[11px]">Autonomous experiments cannot launch without PM approval.</p>
              </div>
              <div className="flex items-center gap-2">
                {isApproved === null ? (
                  <>
                    <button
                      onClick={() => setIsApproved(false)}
                      className="px-2.5 py-1 text-xs rounded border border-zinc-700 text-zinc-400 hover:text-zinc-200 transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setIsApproved(true)}
                      className="px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-500 font-medium transition"
                    >
                      Approve Experiment
                    </button>
                  </>
                ) : isApproved ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approved & Queued
                  </span>
                ) : (
                  <span className="text-xs text-zinc-400 font-mono bg-zinc-800 px-2.5 py-1 rounded">
                    Rejected by PM
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center justify-between">
          <button
            onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
            disabled={activeStep === 1}
            className="text-xs text-zinc-400 hover:text-zinc-200 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            ← Previous Step
          </button>
          <div className="text-xs text-zinc-500 font-mono">
            Stage {activeStep} of 6
          </div>
          {activeStep < 6 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="text-xs text-zinc-400 hover:text-zinc-200 transition"
            >
              Run Again ↺
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

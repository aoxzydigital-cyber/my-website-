import React, { useState } from 'react';
import { Search, Sparkles, Filter, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface RetrievedItem {
  id: string;
  source: string;
  text: string;
  segment: 'SMB' | 'Enterprise' | 'Free Trial';
  arr: string;
  similarity: number;
}

interface PreloadedInquiry {
  question: string;
  retrieved: RetrievedItem[];
  llmInsight: string;
  themes: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: 'high' | 'medium' | 'low';
  opportunity: {
    title: string;
    description: string;
    impactScore: number; // 1-5
    severityScore: number; // 1-5
    revenueWeight: number; // 1-5
    formula: string;
    finalPriorityScore: number;
  };
}

const sampleInquiries: PreloadedInquiry[] = [
  {
    question: 'What are customers complaining about in the onboarding experience?',
    retrieved: [
      {
        id: 'TICK-4819',
        source: 'Zendesk Ticket',
        text: 'Setup took almost an hour and I was not sure what to do next after entering API tokens.',
        segment: 'SMB',
        arr: '$14,000/yr',
        similarity: 0.94,
      },
      {
        id: 'REV-8201',
        source: 'G2 Review',
        text: 'The initial configuration screens are confusing and required our dev to intervene.',
        segment: 'Free Trial',
        arr: '$0 (Prospect)',
        similarity: 0.91,
      },
      {
        id: 'CHAT-3021',
        source: 'Intercom Chat',
        text: 'I could not understand how to connect my Google Workspace account during workspace invite.',
        segment: 'SMB',
        arr: '$8,400/yr',
        similarity: 0.89,
      },
      {
        id: 'NPS-9921',
        source: 'Typeform NPS',
        text: 'Too many mandatory steps before our team could actually test the first dashboard report.',
        segment: 'SMB',
        arr: '$22,000/yr',
        similarity: 0.87,
      },
    ],
    llmInsight:
      'Customers experience acute drop-off friction during initial workspace creation due to multi-step API key prompts and unverified third-party account linking.',
    themes: ['Setup Complexity', 'Ambiguous Token Instructions', 'Account Linking Delay'],
    severity: 'high',
    confidence: 'high',
    opportunity: {
      title: 'Guided 3-Step Onboarding Wizard with Single Sign-On',
      description: 'Replace raw token input forms with OAuth one-click connect and immediate sample workspace preload.',
      impactScore: 4.5,
      severityScore: 4.0,
      revenueWeight: 4.2,
      formula: '(Impact 4.5 × 0.4) + (Severity 4.0 × 0.3) + (Revenue 4.2 × 0.3)',
      finalPriorityScore: 4.26,
    },
  },
  {
    question: 'Why are Enterprise customers requesting custom role-based permissions (RBAC)?',
    retrieved: [
      {
        id: 'TICK-9012',
        source: 'Zendesk Ticket',
        text: 'Our security team blocks deployment because analysts can see billing tabs without admin consent.',
        segment: 'Enterprise',
        arr: '$85,000/yr',
        similarity: 0.96,
      },
      {
        id: 'GONG-104',
        source: 'Sales Call Transcript',
        text: 'We love the agent pipeline, but need view-only guest roles for external marketing consultants.',
        segment: 'Enterprise',
        arr: '$120,000/yr (Pipeline)',
        similarity: 0.93,
      },
      {
        id: 'TICK-9140',
        source: 'Zendesk Ticket',
        text: 'Need to restrict export of raw data tables to compliance officers only.',
        segment: 'Enterprise',
        arr: '$64,000/yr',
        similarity: 0.88,
      },
    ],
    llmInsight:
      'Enterprise accounts are actively blocked from expanding seats due to audit compliance requirements separating financial/billing access from operational dashboards.',
    themes: ['Security Compliance', 'Granular Role Definitions', 'Export Restrictions'],
    severity: 'critical',
    confidence: 'high',
    opportunity: {
      title: 'Custom RBAC Engine with Security Audit Log',
      description: 'Implement Admin, Analyst, and View-Only presets with scoped export privileges to unblock pipeline deals.',
      impactScore: 4.8,
      severityScore: 5.0,
      revenueWeight: 4.9,
      formula: '(Impact 4.8 × 0.4) + (Severity 5.0 × 0.3) + (Revenue 4.9 × 0.3)',
      finalPriorityScore: 4.89,
    },
  },
];

export const InsightAISimulator: React.FC = () => {
  const [selectedInquiryIdx, setSelectedInquiryIdx] = useState(0);
  const [filterSegment, setFilterSegment] = useState<'All' | 'SMB' | 'Enterprise' | 'Free Trial'>('All');

  const inquiry = sampleInquiries[selectedInquiryIdx];

  const filteredRetrieved = inquiry.retrieved.filter((r) =>
    filterSegment === 'All' ? true : r.segment === filterSegment
  );

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-5 text-sm text-zinc-300">
      {/* Simulator header */}
      <div className="flex flex-col gap-3 pb-4 border-b border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono">Interactive RAG Engine</span>
          <h4 className="text-base font-semibold text-zinc-100">Customer Feedback Vector Synthesis & Prioritization</h4>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedInquiryIdx}
            onChange={(e) => {
              setSelectedInquiryIdx(Number(e.target.value));
              setFilterSegment('All');
            }}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
          >
            {sampleInquiries.map((inq, idx) => (
              <option key={idx} value={idx}>
                {inq.question.slice(0, 48)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Query Bar */}
      <div className="py-3">
        <div className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5">
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-mono text-xs text-zinc-200">{inquiry.question}</span>
          <span className="ml-auto text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
            Dense Vector Search
          </span>
        </div>
      </div>

      {/* Main Grid: Retrieved Evidence vs Grounded Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-2">
        {/* Left Column: Retrieved Customer Quotes (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              Retrieved Context ({filteredRetrieved.length} matched vectors)
            </span>
            {/* Filter buttons */}
            <div className="flex items-center gap-1 text-[11px]">
              {(['All', 'SMB', 'Enterprise', 'Free Trial'] as const).map((seg) => (
                <button
                  key={seg}
                  onClick={() => setFilterSegment(seg)}
                  className={`px-2 py-0.5 rounded transition ${
                    filterSegment === seg
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-medium'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {seg}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {filteredRetrieved.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 space-y-1.5 transition hover:border-zinc-700"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-blue-400">{item.id}</span>
                  <span className="text-zinc-400">
                    {item.source} · <span className="text-zinc-300">{item.segment}</span> · {item.arr}
                  </span>
                  <span className="font-mono text-emerald-400">{(item.similarity * 100).toFixed(0)}% match</span>
                </div>
                <p className="text-xs text-zinc-200 italic leading-snug">"{item.text}"</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500">
            Strict cosine threshold (&gt;0.85) applied. Excludes speculative or ungrounded feedback.
          </p>
        </div>

        {/* Right Column: AI Evidence Synthesis & Prioritization (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">Evidence-Grounded Synthesis</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Grounded in RAG
            </span>
          </div>

          <div className="rounded-lg border border-emerald-900/30 bg-zinc-950 p-3.5 space-y-3">
            <div>
              <span className="text-xs text-zinc-500 block">Synthesized Customer Insight:</span>
              <p className="text-xs text-zinc-200 mt-1 leading-relaxed">{inquiry.llmInsight}</p>
            </div>

            <div className="pt-2 border-t border-zinc-800/80">
              <span className="text-xs text-zinc-500 block">Identified Themes:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {inquiry.themes.map((th, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50"
                  >
                    {th}
                  </span>
                ))}
              </div>
            </div>

            {/* Opportunity Priority Matrix */}
            <div className="pt-2 border-t border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  {inquiry.opportunity.title}
                </span>
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  Priority: {inquiry.opportunity.finalPriorityScore} / 5.0
                </span>
              </div>
              <p className="text-xs text-zinc-300">{inquiry.opportunity.description}</p>
              <div className="rounded bg-zinc-900/90 p-2 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Weighted Scoring:</span>
                <span className="text-blue-300">{inquiry.opportunity.formula}</span>
              </div>
            </div>
          </div>

          {/* Human Governance Guardrail */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-2.5 text-xs text-zinc-400 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-zinc-200">Human Governance:</strong> Opportunities are ranked with transparent mathematical weighting; roadmap inclusion requires product manager verification.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

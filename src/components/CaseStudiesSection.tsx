import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Sparkles, Terminal, Activity, Layers, Bot, Cpu } from 'lucide-react';
import { CaseStudyData } from '../types.ts';
import { caseStudies } from '../data/portfolioData.ts';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudyData) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Agentic AI', 'RAG & Search', 'Machine Learning', 'Data Systems'];

  const filteredStudies =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory);

  return (
    <section id="case-studies" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Featured Case Studies</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              End-to-End AI Products & Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              Four real-world AI initiatives exploring agentic orchestration, semantic retrieval, explainable decision support, and data engineering. Click any case study to launch the interactive deep-dive.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-zinc-900/80 border border-zinc-800 rounded-xl shrink-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                {cat === 'All' ? 'All (4)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (2-column layout on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-[#0d0e16] p-6 sm:p-7 hover:border-zinc-700 hover:bg-[#11121d] transition-all cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-4">
                {/* Quiet 1-line text kicker (NO pill enclosures) */}
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-medium">{study.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-400">{study.role.split('&')[0].trim()}</span>
                  </div>
                </div>

                {/* Card Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors font-display">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Core Problem / Premise Quote */}
                <blockquote className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3.5 text-xs text-zinc-300 italic leading-relaxed border-l-2 border-l-blue-500">
                  "{study.headlineQuote}"
                </blockquote>

                {/* Highlight Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {study.highlightSummary}
                </p>

                {/* Quantitative & Capability Proof Strip */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-zinc-800/80 font-mono">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <span className="text-[10px] text-zinc-500 uppercase block truncate">{m.label}</span>
                      <span className="text-sm font-bold text-zinc-100 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Unboxed Tech Stack metadata */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 font-mono">
                  <span>Stack:</span>
                  {study.technologies.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="text-zinc-300">
                      {tech}
                      {idx < Math.min(study.technologies.length, 5) - 1 ? ' ·' : ''}
                    </span>
                  ))}
                  {study.technologies.length > 5 && (
                    <span className="text-zinc-500">+{study.technologies.length - 5} more</span>
                  )}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition"
                >
                  <span>Explore Interactive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-zinc-600 transition"
                  title="View repository on GitHub (opens in new tab)"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

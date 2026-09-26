import React from 'react';
import { skillCategories } from '../data/portfolioData.ts';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-800/80 bg-[#07080d]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Technical & Product Skillset</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Skills & Domain Expertise
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A comprehensive matrix spanning product discovery, agentic orchestration, statistical machine learning, and production full-stack engineering.
          </p>
        </div>

        {/* 6 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-zinc-800/90 bg-[#0d0e16] p-5 sm:p-6 space-y-4 transition hover:border-zinc-700"
            >
              <div className="border-b border-zinc-800/80 pb-3">
                <h3 className="text-base font-bold text-white font-display">
                  {category.category}
                </h3>
                <span className="text-[11px] font-mono text-zinc-500">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Clean unboxed text with typographic separators (anti-slop rule compliant) */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-zinc-300">
                {category.skills.map((skill, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hover:text-blue-300 transition-colors">
                      {skill}
                    </span>
                    {idx < category.skills.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-600 font-mono">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

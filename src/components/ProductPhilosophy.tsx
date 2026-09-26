import React from 'react';
import { productPhilosophyPillars } from '../data/portfolioData.ts';
export const ProductPhilosophy: React.FC = () => {

  return (
    <section id="philosophy" className="py-16 md:py-24 border-t border-zinc-800/80 bg-[#07080d]/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Design & PM Constitution</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            How I Think About AI Product Management
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            AI products aren't just about adding an LLM to a workflow. The interesting work is figuring out where AI creates real leverage, where it needs constraints, and where humans should stay in control.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            My approach is shaped by building AI products across search intelligence, product feedback, fraud risk, and data quality.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productPhilosophyPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border border-zinc-800/90 bg-[#0d0e16] p-6 space-y-3 transition hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-blue-400">
                  {pillar.number}.
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase">Core Principle</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

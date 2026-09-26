import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Check, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300 font-medium">Open to AI Product Manager / APM Roles</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] text-balance">
            Most PMs write AI requirements. <span className="text-zinc-400">I prototype the AI experience.</span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Hi, I’m <strong className="text-white font-semibold">Thamada Ashish</strong> — recent M.Tech Computer Science graduate from Delhi Technological University (DTU). My design tool isn't just Figma. I use Claude and Claude Code to take an idea from concept to working prototype myself.
          </p>

          {/* Prominent Contact & Social Links Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Primary Action: View Case Studies */}
            <a
              href="#case-studies"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 whitespace-nowrap"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-500 transition whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>View Full Resume</span>
            </button>

            {/* Email quick copy */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-blue-400" />}
              <span>{copiedEmail ? 'Copied to clipboard!' : personalInfo.email}</span>
            </button>
          </div>

          {/* Dedicated Prominent Socials Bar (Prominent LinkedIn, GitHub, Email icons opening in new tab) */}
          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <span className="font-mono text-zinc-500 text-[11px] uppercase tracking-wider">Connect directly:</span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:text-white hover:border-[#0a66c2] hover:bg-blue-950/30 transition group"
            >
              <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn Profile</span>
              <span className="text-[10px] text-zinc-500">↗</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition group"
            >
              <Github className="w-4 h-4 text-zinc-300 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub Repositories</span>
              <span className="text-[10px] text-zinc-500">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

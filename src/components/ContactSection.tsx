import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Get in Touch</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Let's Discuss AI Product Opportunities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I'm actively interviewing for AI Product Manager and APM roles. Feel free to reach out directly via email, LinkedIn, or check out my work on GitHub.
          </p>
        </div>

        {/* 3 Prominent Channels Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0e16] p-6 space-y-4 transition hover:border-zinc-700 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-800/60">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-400 hover:text-white transition flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block">Direct Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-blue-400 transition mt-1 block break-all font-display"
                >
                  {personalInfo.email}
                </a>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Preferred channel for interview invitations, role inquiries, or deep product discussions.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 font-medium transition"
              >
                <span>Compose in Email Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-[#0d0e16] p-6 space-y-4 transition hover:border-blue-700/80 hover:bg-blue-950/20 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-950/80 text-[#0a66c2] border border-blue-800/60 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition" />
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block">LinkedIn</span>
                <span className="text-base font-bold text-white group-hover:text-blue-300 transition mt-1 block font-display">
                  thamada-ashish-09403342a
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Connect for professional networking, mutual recommendations, or to review shared endorsements.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 text-xs text-zinc-500 group-hover:text-blue-400 font-medium flex items-center gap-1.5 transition">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-[#0d0e16] p-6 space-y-4 transition hover:border-zinc-600 hover:bg-zinc-900/60 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-zinc-100 border border-zinc-800 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
              </div>

              <div>
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block">GitHub</span>
                <span className="text-base font-bold text-white group-hover:text-zinc-200 transition mt-1 block font-display">
                  roomslabdesigns-collab
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Inspect system architectures, LangGraph workflows, and model evaluations across all 4 products.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 text-xs text-zinc-500 group-hover:text-white font-medium flex items-center gap-1.5 transition">
              <span>Explore Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { X, Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo, education, experiences, certifications, skillCategories } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in print:p-0 print:bg-white print:backdrop-none">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-zinc-800 bg-[#0c0d14] text-zinc-100 shadow-2xl overflow-hidden print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header (hidden in print) */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-[#12131e] px-5 py-3.5 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-zinc-200">Resume — Thamada Ashish</span>
            <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60">
              AI Product Manager
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-sm print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-5 text-center sm:text-left print:border-black/20">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black font-display">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-blue-400 print:text-neutral-800 mt-1">
              {personalInfo.title}
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-3 pt-2 text-xs text-zinc-400 print:text-black font-mono">

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1 text-zinc-300 hover:text-blue-400 print:text-black transition"
              >
                <Mail className="w-3 h-3 text-zinc-500 print:hidden" />
                {personalInfo.email}
              </a>
              <span aria-hidden="true" className="text-zinc-600 print:text-neutral-400">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-blue-400 print:text-black transition"
              >
                <Linkedin className="w-3 h-3 text-zinc-500 print:hidden" />
                @LinkedIn
              </a>
              <span aria-hidden="true" className="text-zinc-600 print:text-neutral-400">|</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-blue-400 print:text-black transition"
              >
                <Github className="w-3 h-3 text-zinc-500 print:hidden" />
                @GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-neutral-800 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Core Competencies & Skills
            </h2>
            <div className="space-y-1.5 text-xs text-zinc-300 print:text-neutral-800">
              {skillCategories.map((cat, i) => (
                <div key={i} className="leading-snug">
                  <strong className="text-zinc-100 print:text-black">{cat.category}: </strong>
                  <span className="text-zinc-400 print:text-neutral-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
                  <div>
                    <h3 className="font-bold text-zinc-100 print:text-black text-sm">{edu.institution}</h3>
                    <p className="text-zinc-300 print:text-neutral-800 font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-zinc-400 print:text-neutral-600 shrink-0">
                    <div>{edu.period}</div>
                    <div className="text-blue-400 print:text-black font-semibold">{edu.cgpa}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Featured AI Products & Case Studies
            </h2>

            <div className="space-y-3 text-xs">
              {/* Project 1 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold text-zinc-100 print:text-black text-sm">
                    Agentic AI-Powered Data Cleaning Pipeline
                  </h3>
                  <span className="font-mono text-zinc-500 print:text-neutral-600 text-[11px]">LangGraph · Ollama</span>
                </div>
                <p className="text-blue-300 print:text-neutral-700 text-[11px] font-mono">
                  Agentic AI | Multi-Agent Systems | Python | Pandas | Ollama
                </p>
                <p className="text-zinc-300 print:text-neutral-800 mt-1 leading-relaxed">
                  Designed and developed a multi-agent data cleaning pipeline using LangGraph, Python, and Ollama for data analysts to automate dataset preparation and eliminate manual effort in cleaning, validation, and quality reporting. Decoupled planning from deterministic execution.
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold text-zinc-100 print:text-black text-sm">
                    AIVista (AI Tool) — AI Search Revenue Agent
                  </h3>
                  <span className="font-mono text-zinc-500 print:text-neutral-600 text-[11px]">Gemini API · React</span>
                </div>
                <p className="text-blue-300 print:text-neutral-700 text-[11px] font-mono">
                  AI Product Management | Agentic AI | React | TypeScript | Node.js | Express | Firebase
                </p>
                <p className="text-zinc-300 print:text-neutral-800 mt-1 leading-relaxed">
                  An AI search intelligence platform using AI agents, Gemini API, React, and Node.js for marketing and product teams to uncover why AI assistants recommend competitors, pinpoint citation authority gaps, and convert findings into measurable growth experiments.
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold text-zinc-100 print:text-black text-sm">
                    InsightAI (AI Tool) — Product Feedback Intelligence
                  </h3>
                  <span className="font-mono text-zinc-500 print:text-neutral-600 text-[11px]">RAG · Semantic Search</span>
                </div>
                <p className="text-blue-300 print:text-neutral-700 text-[11px] font-mono">
                  AI Product Management | RAG | Semantic Search | LLMs | Gemini API
                </p>
                <p className="text-zinc-300 print:text-neutral-800 mt-1 leading-relaxed">
                  Designed and built an AI-powered feedback intelligence platform using RAG, semantic search, and LLMs for product teams to uncover customer pain points, feature opportunities, and churn signals from unstructured feedback with 100% citation grounding.
                </p>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold text-zinc-100 print:text-black text-sm">
                    AI Fraud & Risk Intelligence Platform — ML Decision Support System
                  </h3>
                  <span className="font-mono text-zinc-500 print:text-neutral-600 text-[11px]">XGBoost · SHAP</span>
                </div>
                <p className="text-blue-300 print:text-neutral-700 text-[11px] font-mono">
                  Machine Learning | XGBoost | Explainable AI | FastAPI | Streamlit
                </p>
                <p className="text-zinc-300 print:text-neutral-800 mt-1 leading-relaxed">
                  Implemented a human-in-the-loop fraud risk decision support platform that prioritizes suspicious transactions using ML-based risk scoring and explainable AI (SHAP), achieving 99.20% recall, 89.59% F1, and 98.98% PR-AUC on an 89,459-row held-out test split.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300 print:text-neutral-800">
              {certifications.map((c, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-blue-400 print:text-black font-bold">·</span>
                  <span>
                    <strong>{c.title}</strong> — {c.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-blue-400 print:text-black">
              Additional Experience
            </h2>
            <div className="space-y-3 text-xs">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-bold text-zinc-100 print:text-black text-sm">
                      {exp.role} — {exp.organization}
                    </h3>
                    <span className="font-mono text-zinc-400 print:text-neutral-600 text-[11px]">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-zinc-300 print:text-neutral-800">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { education, experiences, certifications } from '../data/portfolioData.ts';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Background & Foundations</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Education, Experience & Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            A combination of computer science engineering research at Delhi Technological University, hands-on technical teaching, digital product strategy, and specialized AI PM credentials.
          </p>
        </div>

        {/* 2-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-zinc-100 font-semibold text-lg font-display">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h3>Academic Background</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-800 bg-[#0d0e16] p-5 space-y-3 transition hover:border-zinc-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                      <p className="text-xs sm:text-sm font-medium text-blue-400">{edu.degree}</p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-xs text-zinc-400 shrink-0">
                      <div>{edu.period}</div>
                      <div className="text-emerald-400 font-semibold">{edu.cgpa}</div>
                    </div>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-xs text-zinc-300">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-400 font-mono text-[11px] shrink-0">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work & Leadership Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-zinc-100 font-semibold text-lg font-display">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <h3>Experience & Leadership</h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-800 bg-[#0d0e16] p-5 space-y-3 transition hover:border-zinc-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-xs sm:text-sm font-medium text-zinc-300">{exp.organization}</p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-xs text-zinc-400 shrink-0">
                      <div>{exp.period}</div>
                      <div className="text-zinc-500">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-xs text-zinc-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-mono text-[11px] shrink-0">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Professional Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">Industry Verified</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 text-xs transition hover:border-zinc-700"
              >
                <div>
                  <h4 className="font-semibold text-zinc-100">{cert.title}</h4>
                  <span className="text-[11px] text-zinc-400">{cert.issuer}</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

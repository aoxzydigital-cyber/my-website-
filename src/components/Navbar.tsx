import React, { useState } from 'react';
import { Linkedin, Github, FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#090a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element Brand Zone (Strict Top Bar Contract) */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors font-display"
        >
          {personalInfo.name}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a href="#case-studies" className="hover:text-zinc-100 transition-colors">
            Case Studies
          </a>
          <a href="#philosophy" className="hover:text-zinc-100 transition-colors">
            AI PM Approach
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience & Education
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary action + Prominent Social Links */}
        <div className="flex items-center gap-3">
          {/* Prominent Social Icons opening in new tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-[#0a66c2] hover:border-blue-900/60 hover:bg-zinc-850 transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-850 transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-white hover:bg-blue-500 transition shadow-sm whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0c0d15] px-6 py-4 space-y-3 text-sm">
          <nav className="flex flex-col space-y-3 font-medium text-zinc-300">
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 py-1 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 py-1 transition-colors"
            >
              AI PM Approach
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 py-1 transition-colors"
            >
              Experience & Education
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 py-1 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 py-1 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

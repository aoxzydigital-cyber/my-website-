import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#06070a] py-12 text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-base font-bold text-white font-display">
              {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Thamada Ashish"
              className="text-zinc-400 hover:text-white transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="text-zinc-400 hover:text-blue-400 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="text-zinc-400 hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-zinc-600 font-mono">
          <div>
            © {new Date().getFullYear()} Thamada Ashish. Designed with intentional typography & zero-image performance.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};

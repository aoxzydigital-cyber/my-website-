import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { ProductPhilosophy } from './components/ProductPhilosophy.tsx';
import { ExperienceEducation } from './components/ExperienceEducation.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CaseStudyData } from './types.ts';
import { caseStudies } from './data/portfolioData.ts';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Interactive Case Studies Section */}
        <CaseStudiesSection onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* AI PM Philosophy & Methodology */}
        <ProductPhilosophy />

        {/* Experience & Education */}
        <ExperienceEducation />

        {/* Skills Matrix */}
        <SkillsSection />

        {/* Contact & Social Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Deep-Dive Case Study Modal with Interactive Simulators */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        allCaseStudies={caseStudies}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
      />

      {/* Printable & Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

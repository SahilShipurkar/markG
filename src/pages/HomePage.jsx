import React from 'react';
import { Hero } from '@/components/ui/hero-1';

export default function HomePage({ onOpenExpertModal, onNavigate }) {
  return (
    <div className="w-full flex flex-col bg-[#e8e8e8] text-slate-900" style={{ backgroundColor: '#e8e8e8' }}>
      <Hero 
        title="The New Standard of"
        highlightText="Digital Industry"
        subtitle="Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence."
        ctaLabel="Learn More"
        ctaHref="#solutions"
        onCtaClick={onOpenExpertModal}
        showMarquee={true}
      />
      {/* Blank Next Page / Section with seamless grey color */}
      <section 
        id="blank-section" 
        className="w-full min-h-screen bg-[#e8e8e8]"
        style={{ backgroundColor: '#e8e8e8' }}
      >
      </section>
    </div>
  );
}

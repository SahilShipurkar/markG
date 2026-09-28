import React from 'react';
import { Hero } from '@/components/ui/hero-1';
import CommunityOrbitDemo from '@/components/ui/builders-community-hero-demo';

export default function HomePage({ onOpenExpertModal, onNavigate }) {
  return (
    <div className="w-full flex flex-col bg-[#e8e8e8] text-slate-900" style={{ backgroundColor: '#e8e8e8' }}>
      {/* 1st Page: Hero Section */}
      <Hero 
        title="The New Standard of"
        highlightText="Digital Industry"
        subtitle="Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence."
        ctaLabel="Learn More"
        ctaHref="#solutions"
        onCtaClick={onOpenExpertModal}
        showMarquee={true}
      />
      
      {/* 2nd Page: Blank Section */}
      <section 
        id="blank-section" 
        className="w-full min-h-screen bg-[#e8e8e8]"
        style={{ backgroundColor: '#e8e8e8' }}
      >
      </section>

      {/* 3rd Page: Builders Community Orbit Hero */}
      <section 
        id="community-section" 
        className="w-full min-h-screen flex flex-col items-center justify-center bg-[#e8e8e8] overflow-hidden"
        style={{ backgroundColor: '#e8e8e8' }}
      >
        <CommunityOrbitDemo />
      </section>
    </div>
  );
}


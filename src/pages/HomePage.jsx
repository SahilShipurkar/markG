import React from 'react';
import { Hero } from '@/components/ui/hero-1';

export default function HomePage({ onOpenExpertModal, onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900">
      <Hero 
        title="The New Standard of"
        highlightText="Digital Industry"
        subtitle="Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence."
        ctaLabel="Learn More"
        ctaHref="#solutions"
        onCtaClick={onOpenExpertModal}
      />
    </div>
  );
}

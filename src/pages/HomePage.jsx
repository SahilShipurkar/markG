import React from 'react';
import { Hero } from '@/components/ui/hero-1';
import { MarqueeDemo } from '@/components/ui/demo';

export default function HomePage({ onOpenExpertModal, onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Hero Section */}
      <Hero 
        title="The New Standard of"
        highlightText="Digital Industry"
        subtitle="Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence."
        ctaLabel="Learn More"
        ctaHref="#solutions"
        onCtaClick={onOpenExpertModal}
      />

      {/* Sliding Marquee Icons Section */}
      <section className="w-full bg-slate-50/70 dark:bg-zinc-950/50 border-y border-slate-100 dark:border-zinc-800/60 py-4">
        <MarqueeDemo />
      </section>
    </div>
  );
}

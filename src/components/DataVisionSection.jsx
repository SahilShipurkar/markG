import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Layers, Headphones } from 'lucide-react';

const VISION_FEATURES = [
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    category: 'Security & Compliance',
    icon: ShieldCheck,
    iconColor: '#10b981',
    iconBg: '#ecfdf5',
    iconBorder: '#a7f3d0',
    description:
      'At our company, we prioritize data privacy by implementing robust security measures. We use encryption, access controls, and regular audits to ensure your confidential information remains safe and secure at all times.'
  },
  {
    id: 'detailed-insights',
    title: 'Detailed Insights',
    category: 'Telemetry & Analytics',
    icon: BarChart3,
    iconColor: '#0284c7',
    iconBg: '#f0f9ff',
    iconBorder: '#bae6fd',
    description:
      'Gain detailed insights into your industry to empower data-driven decisions and minimize errors, ensuring your business stays ahead of curve with real-time telemetry.'
  },
  {
    id: 'versatility',
    title: 'Versatility in Application',
    category: 'Ecosystem & Workflows',
    icon: Layers,
    iconColor: '#f97316',
    iconBg: '#fff7ed',
    iconBorder: '#fed7aa',
    description:
      "Our platform's allows easy integration with other applications, streamlining processes and enhancing productivity for a more efficient workflow across diverse sectors."
  },
  {
    id: 'customer-experience',
    title: 'Full Customer Experience',
    category: 'Attentive 24/7 Support',
    icon: Headphones,
    iconColor: '#e11d48',
    iconBg: '#fff1f2',
    iconBorder: '#fecdd3',
    description:
      "Our after-sales support is quick and attentive, guaranteeing a smooth customer experience. Your satisfaction is our top priority, and we're here to assist you through every upgrade cycle."
  }
];

export default function DataVisionSection() {
  return (
    <div className="w-full bg-[#e8e8e8] flex flex-col justify-start items-center px-6 sm:px-12 md:px-16 lg:px-24 pt-0 sm:pt-2 md:pt-4 pb-20 text-center font-['Inter',sans-serif]">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center -translate-y-10 sm:-translate-y-20 md:-translate-y-28 lg:-translate-y-36">
        
        {/* Main Headline */}
        <div className="relative mb-6 sm:mb-8 max-w-4xl w-full">
          <h2
            className="text-slate-900 font-normal leading-[1.2] sm:leading-[1.25] tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.85rem)',
              fontWeight: 400,
            }}
          >
            <span className="block whitespace-normal sm:whitespace-nowrap">
              Let Your Data Take Your Business to
            </span>
            <span className="text-[#ff5c6c] font-normal block mt-1">
              Higher Grounds
            </span>
          </h2>
        </div>

        {/* Subtitle / Paragraph (Sentence 1 in 1 line, Sentence 2 on new line) */}
        <div className="w-full max-w-5xl text-neutral-600 font-normal text-[14.5px] sm:text-[15.5px] lg:text-[16.5px] leading-relaxed sm:leading-[1.75] mb-14 sm:mb-16">
          <p className="block whitespace-normal lg:whitespace-nowrap text-center">
            We aim to deliver intuitive high-tech platforms that enable industries to effortlessly shift from the physical world to the digital age.
          </p>
          <p className="block whitespace-normal lg:whitespace-nowrap text-center mt-1 sm:mt-1.5">
            Recognizing the obstacles that come with this change, our cutting solutions are crafted to streamline the transition, boost efficiency, and promote growth.
          </p>
        </div>

        {/* 4 Feature Items Grid (2 columns, 2 rows matching exact 3rd image style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-12 w-full text-left mt-10 sm:mt-16 md:mt-20 translate-y-4 sm:translate-y-10 md:translate-y-14">
          {VISION_FEATURES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex items-start gap-4 sm:gap-5">
                {/* Clean Feature Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm border"
                  style={{
                    backgroundColor: item.iconBg,
                    borderColor: item.iconBorder,
                  }}
                >
                  <IconComponent 
                    className="w-6 h-6" 
                    style={{ color: item.iconColor }} 
                    strokeWidth={2.2}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-slate-900 font-semibold text-[17px] sm:text-[18px] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-[13.5px] sm:text-[14px] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}


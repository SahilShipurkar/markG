"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export interface HeroProps {
  title?: string
  highlightText?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
}

export function Hero({
  title = "The New Standard of",
  highlightText = "Digital Industry",
  subtitle = "Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  onCtaClick,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full overflow-hidden 
      bg-[linear-gradient(to_bottom,#fff,#ffffff_55%,#e8e8e8_92%)]  
      dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] 
      rounded-b-xl px-6 md:px-8 text-center"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[650px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"
      />

      {/* Radial Accent - Horizon Curvature Arc */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] sm:top-[calc(100%-110px)] md:top-[calc(100%-140px)] lg:top-[calc(100%-160px)] 
        h-[480px] w-[700px] md:h-[550px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-[#B48CDE]/20 bg-white dark:bg-black 
        bg-[radial-gradient(closest-side,#ffffff_74%,#000000_100%)] 
        dark:bg-[radial-gradient(closest-side,#000000_82%,#ffffff)] 
        animate-fade-up shadow-[0_-20px_50px_rgba(0,0,0,0.14)] pointer-events-none z-0"
      />

      {/* Centered Content Container */}
      <div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto 0',
          padding: '1rem'
        }}
      >
        {/* Title with Highlighted Underline */}
        <h1
          className="animate-fade-in text-balance font-semibold text-slate-900 dark:text-white"
          style={{ 
            fontSize: 'clamp(2.5rem, 5.4vw, 4.75rem)',
            lineHeight: '1.25',
            letterSpacing: '-0.03em',
            paddingTop: '0.5rem',
            paddingBottom: '0.75rem',
            display: 'inline-block'
          }}
        >
          <span>The New Standard </span>
          <br className="hidden sm:inline" />
          <span>of </span>
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 text-slate-900 dark:text-white">
              {highlightText || "Digital Industry"}
            </span>
            {/* Hand-drawn marker brush stroke highlight */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4.5 pointer-events-none z-0 overflow-visible"
              viewBox="0 0 260 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 4,14 Q 130,5 256,12 Q 130,20 6,17"
                fill="#00A3FF"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="animate-fade-in text-balance text-gray-600 dark:text-gray-400 font-normal"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: '1.65',
              maxWidth: '760px',
              marginTop: '1.25rem',
              marginBottom: '2rem'
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        {ctaLabel && (
          <div className="flex justify-center z-20">
            <Button
              asChild
              className="w-fit min-w-40 sm:min-w-48 px-8 py-3.5 h-12 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg font-medium text-base font-geist tracking-tight cursor-pointer"
              onClick={onCtaClick}
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Fade Overlay */}
      <div
        className="animate-fade-up relative mt-12 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
      />
    </section>
  )
}

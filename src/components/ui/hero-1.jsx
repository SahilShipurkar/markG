"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { MarqueeDemo } from "@/components/ui/demo"

export function Hero({
  title = "The New Standard of",
  highlightText = "Digital Industry",
  subtitle = "Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  onCtaClick,
  showMarquee = true,
}) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full overflow-hidden bg-white px-6 md:px-8 text-center"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[650px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"
      />

      {/* Horizon Curvature Arc in Grey (#e8e8e8) */}
      <div
        className="absolute left-1/2 top-[calc(100%-110px)] sm:top-[calc(100%-130px)] md:top-[calc(100%-150px)] lg:top-[calc(100%-170px)] 
        h-[480px] w-[700px] md:h-[550px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-t border-slate-300/40 bg-[#e8e8e8] 
        animate-fade-up shadow-[0_-20px_50px_rgba(0,0,0,0.06)] pointer-events-none z-0"
        style={{
          backgroundColor: '#e8e8e8'
        }}
      />

      {/* Centered Content Container */}
      <div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center my-auto pt-4"
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

      {/* Sliding Marquee Inside Hero */}
      {showMarquee && (
        <div className="relative z-20 w-full max-w-6xl mx-auto mt-auto translate-y-12 sm:translate-y-16 md:translate-y-20 pb-2">
          <MarqueeDemo />
        </div>
      )}

      {/* Bottom Fade Overlay transitioning to grey */}
      <div
        className="animate-fade-up relative opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,#e8e8e8_10%,transparent)]"
      />
    </section>
  )
}

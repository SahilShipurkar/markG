"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { MarqueeDemo } from "@/components/ui/demo"

interface HeroProps {
  title?: string
  highlightText?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  showMarquee?: boolean
}

export function Hero({
  title = "The New Standard of",
  highlightText = "Digital Industry",
  subtitle = "Use Accurate Data to Get a 360-Degree View of Your Business. Accelerate decisions with industrial-grade intelligence.",
  ctaLabel = "Learn More",
  ctaHref = "#",
  onCtaClick,
  showMarquee = true,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full overflow-hidden bg-white text-center flex flex-col justify-between items-center select-none"
      style={{
        minHeight: '100vh',
        height: '100vh',
        paddingTop: 'clamp(4.5rem, 8vh, 5.5rem)',
        paddingBottom: 'clamp(1rem, 2vh, 1.75rem)',
        paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 3vw, 2.5rem)',
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

      {/* Gentle Horizon Curvature Arc in Grey (#e8e8e8) */}
      <div
        className="absolute left-1/2 bottom-[-320px] sm:bottom-[-380px] md:bottom-[-440px] lg:bottom-[-520px] 
        h-[460px] sm:h-[540px] md:h-[620px] lg:h-[720px] w-[145%] sm:w-[135%] lg:w-[125%] 
        -translate-x-1/2 rounded-[100%] border-t border-slate-300/40 bg-[#e8e8e8] 
        shadow-[0_-20px_50px_rgba(0,0,0,0.06)] pointer-events-none z-0"
        style={{
          backgroundColor: '#e8e8e8'
        }}
      />

      {/* ========================================================================= */}
      {/* FLOATING HANDWRITTEN ANNOTATIONS                                         */}
      {/* ========================================================================= */}

      {/* 1. Upper-left: Built for real-world operations */}
      <div 
        className="hidden md:flex absolute flex-col items-start z-20 pointer-events-none select-none"
        style={{
          top: 'clamp(4.75rem, 11vh, 7.5rem)',
          left: 'clamp(1rem, 4vw, 5.5rem)'
        }}
      >
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 pointer-events-none overflow-visible mb-1 ml-5"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 32 34 C 28 20, 20 12, 8 6"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 8 18 L 8 6 L 20 6"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span 
          className="font-semibold text-[20px] sm:text-[22px] lg:text-[25px] leading-tight -rotate-3 whitespace-nowrap"
          style={{ fontFamily: "'Caveat', cursive", color: '#7B5872' }}
        >
          Built for real-world operations
        </span>
      </div>

      {/* 2. Mid-Right near title: From machines to meaningful insights. */}
      <div 
        className="hidden md:flex absolute items-center z-20 pointer-events-none select-none"
        style={{
          top: 'clamp(10rem, 28vh, 15rem)',
          right: 'clamp(1rem, 4vw, 5.5rem)'
        }}
      >
        <svg
          className="w-8 h-6 sm:w-10 sm:h-7 lg:w-12 lg:h-8 pointer-events-none overflow-visible mr-1.5"
          viewBox="0 0 50 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 46 20 C 32 20, 18 16, 6 12"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 16 6 L 6 12 L 16 18"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span 
          className="font-semibold text-[20px] sm:text-[22px] lg:text-[25px] leading-tight rotate-2 whitespace-nowrap"
          style={{ fontFamily: "'Caveat', cursive", color: '#7B5872' }}
        >
          From machines to meaningful insights.
        </span>
      </div>

      {/* 4. Lower-right in white area above grey arc: Technology that works beyond the screen */}
      <div 
        className="hidden lg:flex absolute flex-col items-start z-20 pointer-events-none select-none"
        style={{
          bottom: 'clamp(130px, 20vh, 190px)',
          right: 'clamp(1.5rem, 6vw, 8rem)'
        }}
      >
        <span 
          className="font-semibold text-[20px] sm:text-[22px] lg:text-[25px] leading-tight rotate-2 whitespace-nowrap mb-1"
          style={{ fontFamily: "'Caveat', cursive", color: '#7B5872' }}
        >
          Technology that works beyond the screen.
        </span>
        <svg
          className="w-8 h-10 sm:w-9 sm:h-11 lg:w-10 lg:h-12 pointer-events-none overflow-visible ml-6"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 24 4 C 24 20, 20 32, 10 42"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 8 30 L 10 42 L 22 38"
            stroke="#7B5872"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* CENTERED HERO HEADLINE, SUBTITLE & CTA BUTTON                             */}
      {/* ========================================================================= */}
      <div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center my-auto w-full px-2"
      >
        {/* Title with Highlighted Underline */}
        <h1
          className="animate-fade-in text-balance font-semibold text-slate-900 dark:text-white"
          style={{ 
            fontFamily: "'Caveat', cursive",
            fontSize: 'clamp(2.8rem, min(5.2vw, 8vh), 5.1rem)',
            lineHeight: '1.14',
            letterSpacing: '0',
            paddingTop: '0.25rem',
            paddingBottom: '0.4rem',
            display: 'inline-block',
            fontWeight: 600
          }}
        >
          <span>The New Standard </span>
          <br className="hidden sm:inline" />
          <span>of </span>
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 font-semibold" style={{ color: '#FC787D' }}>
              {highlightText || "Digital Industry"}
            </span>
            {/* Hand-drawn marker brush stroke highlight */}
            <svg
              className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 lg:h-4.5 pointer-events-none z-0 overflow-visible"
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
              fontSize: 'clamp(0.95rem, min(1.25vw, 2.2vh), 1.2rem)',
              lineHeight: '1.55',
              maxWidth: 'clamp(500px, 60vw, 760px)',
              marginTop: 'clamp(0.5rem, 1.5vh, 1.1rem)',
              marginBottom: 'clamp(0.9rem, 2.2vh, 1.75rem)'
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA Button Wrapper with caption pointing toward button */}
        <div className="relative flex flex-col justify-center items-center z-20 w-full">
          {ctaLabel && (
            <Button
              asChild
              className="w-fit min-w-36 sm:min-w-44 px-8 sm:px-10 py-3 sm:py-3.5 h-11 sm:h-12 rounded-full text-white hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md font-medium text-sm sm:text-base font-geist tracking-tight cursor-pointer"
              style={{ 
                backgroundColor: '#7B5872', 
                borderRadius: '9999px',
                boxShadow: '0 4px 16px rgba(123, 88, 114, 0.35)'
              }}
              onClick={onCtaClick}
            >
              <a href={ctaHref} onClick={onCtaClick}>{ctaLabel}</a>
            </Button>
          )}

          {/* 3. Below CTA button in white area: Explore what we can build for you */}
          <div className="hidden md:flex items-center justify-center mt-3 sm:mt-4 z-20 pointer-events-none select-none -translate-x-24 sm:-translate-x-36 md:-translate-x-44 lg:-translate-x-52">
            <span 
              className="font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-tight -rotate-2 whitespace-nowrap"
              style={{ fontFamily: "'Caveat', cursive", color: '#7B5872' }}
            >
              Explore what we can build for you
            </span>
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 pointer-events-none overflow-visible ml-1.5 -mt-3"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 6 28 C 10 18, 18 10, 26 6"
                stroke="#7B5872"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 14 6 L 26 6 L 26 18"
                stroke="#7B5872"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Sliding Marquee Inside Hero sitting on the grey crest */}
      {showMarquee && (
        <div className="relative z-20 w-full max-w-6xl mx-auto mt-auto pb-1 sm:pb-2">
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

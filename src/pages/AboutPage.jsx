import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Wrench, 
  Radio, 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Award,
  Layers,
  Activity,
  Globe2,
  ChevronRight
} from 'lucide-react';

// Custom Intersection Observer Hook for smooth scroll reveal
function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    }, options);

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return [domRef, isVisible];
}

// Reusable Animated Container Component
function Reveal({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up': return 'translate3d(0, 36px, 0)';
      case 'down': return 'translate3d(0, -36px, 0)';
      case 'left': return 'translate3d(36px, 0, 0)';
      case 'right': return 'translate3d(-36px, 0, 0)';
      case 'scale': return 'scale(0.92) translate3d(0, 20px, 0)';
      default: return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-box ${isVisible ? 'revealed' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage({ onOpenExpertModal, onExploreSolutions }) {
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    // Trigger initial hero entrance immediately upon mount
    const timer = setTimeout(() => {
      setHeroMounted(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  const coreValues = [
    {
      title: 'Innovation',
      desc: 'Designing state-of-the-art intelligent software systems and edge-to-cloud telemetry pipelines.',
      icon: '⚡',
      badge: 'Advanced Tech',
      glowColor: 'rgba(234, 179, 8, 0.15)'
    },
    {
      title: 'Reliability',
      desc: 'High-availability platforms engineered for mission-critical industrial and agricultural resilience.',
      icon: '🛡️',
      badge: '99.98% Uptime',
      glowColor: 'rgba(11, 58, 112, 0.15)'
    },
    {
      title: 'Velocity',
      desc: 'Rapid deployment cycles, sub-second telemetry acquisition, and instant digital trade settlements.',
      icon: '🚀',
      badge: 'Real-Time Speed',
      glowColor: 'rgba(239, 68, 68, 0.15)'
    }
  ];

  const solutions = [
    {
      badge: 'CMMS PLATFORM',
      title: '4M Smart Maintenance Management System',
      desc: 'Streamlines plant operations with real-time asset telemetry, 4M framework (Man, Machine, Method, Material), work-order tracking, and cuts downtime by up to 42%.',
      icon: Wrench,
      color: '#0B3A70',
      bg: '#EBF3FC',
      borderHover: '#93C5FD',
      highlights: ['Predictive Maintenance', 'Asset Lifecycle Tracking', 'MTBF / MTTR Analytics']
    },
    {
      badge: 'TELEMETRY & EDGE',
      title: 'Smart Industrial IoT Telemetry & Networks',
      desc: 'Universal edge gateway protocols (Modbus, MQTT, OPC-UA), 50Hz sub-second sensor acquisition, and predictive vibration AI anomaly analytics.',
      icon: Radio,
      color: '#0284C7',
      bg: '#E0F2FE',
      borderHover: '#7DD3FC',
      highlights: ['Sub-second Telemetry', 'Universal Edge Protocols', 'Edge AI Analytics']
    },
    {
      badge: 'AGRI-COMMERCE PLATFORM',
      title: 'GramUnnati Smart Agricultural Ecosystem',
      desc: 'Complete connected agritech commerce ecosystem comprising Seller App, Buyer App, Transporter Logistics, SHG App, and GMU-Hub Web Portal.',
      icon: Sprout,
      color: '#15803D',
      bg: '#F0FDF4',
      borderHover: '#86EFAC',
      highlights: ['Farmer Direct Trade', 'Logistics Routing', 'Multi-role Mobile Ecosystem']
    }
  ];

  const certifications = [
    { name: 'ISO 27001', title: 'Information Security Management', desc: 'Enterprise data confidentiality & encryption' },
    { name: 'IEC 62443', title: 'Industrial Cybersecurity Standard', desc: 'Secure edge gateway & field controller protocols' },
    { name: 'ISO 55001', title: 'Asset Management Standards', desc: 'Lifecycle reliability for 4M CMMS platforms' },
    { name: 'SOC 2 Type II', title: 'Cloud Infrastructure Compliance', desc: 'Continuous audit controls & data governance' }
  ];

  const metrics = [
    { value: '99.98%', label: 'Platform Availability', sub: 'Enterprise SLA uptime' },
    { value: '50Hz', label: 'Telemetry Acquisition', sub: 'High-speed sensor bus' },
    { value: '42%', label: 'Downtime Reduction', sub: 'Via 4M Predictive CMMS' },
    { value: '100%', label: 'In-House Engineering', sub: 'Hardware & software integration' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingTop: '4.25rem', paddingBottom: '3.5rem', overflowX: 'hidden' }}>
      
      {/* 1. HERO HEADER WITH STAGGERED STARTUP MOTION */}
      <section style={{ padding: '2.5rem 1.5rem 2.5rem', maxWidth: '1080px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        
        {/* Ambient subtle glow background */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(11, 58, 112, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Eyebrow Tag Animation */}
        <div 
          className="hero-anim-item"
          style={{ 
            opacity: heroMounted ? 1 : 0, 
            transform: heroMounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div 
            className="eyebrow-tag"
            style={{
              padding: '6px 14px',
              backgroundColor: '#F1F5F9',
              border: '1px solid #E2E8F0',
              borderRadius: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
            }}
          >
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0B3A70', animation: 'pulseDot 2s infinite' }} />
            ABOUT G MARK SOFTWARE
          </div>
        </div>
        
        {/* Main Headline Animation */}
        <h1 
          className="hero-anim-item"
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.85rem)', 
            fontWeight: '900', 
            letterSpacing: '-0.035em', 
            color: '#0F172A',
            lineHeight: 1.12,
            marginBottom: '1.25rem',
            opacity: heroMounted ? 1 : 0,
            transform: heroMounted ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.75s ease-out 0.25s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
            position: 'relative',
            zIndex: 1
          }}
        >
          Engineering Intelligent Systems <br />
          <span style={{ 
            background: 'linear-gradient(135deg, #0B3A70 0%, #0284C7 60%, #15803D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            for the Real World.
          </span>
        </h1>

        {/* Lead Paragraph Animation */}
        <p 
          className="hero-anim-item"
          style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.22rem)', 
            lineHeight: '1.75', 
            color: '#475569',
            maxWidth: '820px',
            margin: '0 auto 2rem',
            opacity: heroMounted ? 1 : 0,
            transform: heroMounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            position: 'relative',
            zIndex: 1
          }}
        >
          <strong style={{ color: '#0F172A', fontWeight: '700' }}>G Mark Software Private Limited</strong> is a premier enterprise IT and industrial software provider, specializing in digital platforms, 4M CMMS, smart agriculture e-commerce, and industrial IoT telemetry networks.
        </p>

        {/* Metrics Bar / Quick Stats Entrance */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            maxWidth: '940px',
            margin: '1.5rem auto 0',
            opacity: heroMounted ? 1 : 0,
            transform: heroMounted ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.97)',
            transition: 'opacity 0.85s ease-out 0.55s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
            position: 'relative',
            zIndex: 1
          }}
        >
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="metric-pill"
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                padding: '1rem 0.75rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
            >
              <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0B3A70', fontFamily: 'var(--font-mono)', lineHeight: 1.1 }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#1E293B', marginTop: '4px' }}>
                {m.label}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 2. CORE VALUES WITH STAGGERED SCROLL REVEAL */}
      <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '3.5rem 0 4rem', position: 'relative' }}>
        <div className="container-enterprise">
          
          <Reveal direction="up" delay={0}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                OUR GUIDING PRINCIPLES
              </span>
              <h2 style={{ fontSize: '2.15rem', fontWeight: '800', color: '#0F172A', marginTop: '6px', letterSpacing: '-0.02em' }}>
                Core Engineering Values
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '6px' }}>
                Principles driving our system architecture, security benchmarks, and deployment reliability.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {coreValues.map((v, i) => (
              <Reveal key={i} direction="up" delay={i * 140}>
                <div 
                  className="interactive-value-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    border: '1px solid #E2E8F0',
                    padding: '2rem 1.75rem',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div 
                      className="value-icon-wrapper"
                      style={{ 
                        fontSize: '2.25rem', 
                        marginBottom: '1rem',
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        backgroundColor: '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {v.icon}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                      {v.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: '1.6' }}>
                      {v.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', position: 'relative', zIndex: 1 }}>
                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        fontFamily: 'var(--font-mono)', 
                        color: '#0B3A70', 
                        fontWeight: '700', 
                        backgroundColor: '#EBF3FC', 
                        padding: '4px 10px', 
                        borderRadius: '6px',
                        display: 'inline-block'
                      }}
                    >
                      {v.badge}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FLAGSHIP ENTERPRISE PLATFORMS WITH SCROLL REVEAL & INTERACTIVE CARDS */}
      <section style={{ padding: '4rem 0 4.25rem', position: 'relative' }}>
        <div className="container-enterprise">
          
          <Reveal direction="up" delay={0}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                WHAT WE BUILD
              </span>
              <h2 style={{ fontSize: '2.15rem', fontWeight: '800', color: '#0F172A', marginTop: '6px', letterSpacing: '-0.02em' }}>
                Flagship Enterprise Platforms
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '6px' }}>
                Integrated digital and IoT solutions deployed across mission-critical enterprise environments.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {solutions.map((s, i) => {
              const IconComp = s.icon;
              return (
                <Reveal key={i} direction="up" delay={i * 150}>
                  <div 
                    className="interactive-solution-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '18px',
                      border: '1px solid #E2E8F0',
                      padding: '2rem 1.75rem',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                        <span 
                          style={{ 
                            fontSize: '0.75rem', 
                            fontFamily: 'var(--font-mono)', 
                            color: s.color, 
                            fontWeight: '700', 
                            backgroundColor: s.bg, 
                            padding: '4px 10px', 
                            borderRadius: '6px' 
                          }}
                        >
                          {s.badge}
                        </span>
                        <div 
                          className="solution-icon-pill"
                          style={{ 
                            width: '38px', 
                            height: '38px', 
                            borderRadius: '10px', 
                            backgroundColor: s.bg, 
                            color: s.color, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          <IconComp size={18} />
                        </div>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.65rem', lineHeight: '1.3' }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {s.desc}
                      </p>

                      {/* Feature Bullet tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                        {s.highlights.map((h, hi) => (
                          <span 
                            key={hi}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: '600',
                              color: '#334155',
                              backgroundColor: '#F8FAFC',
                              border: '1px solid #E2E8F0',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                      <div 
                        onClick={onOpenExpertModal}
                        className="interactive-card-action"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.45rem', 
                          fontSize: '0.88rem', 
                          color: s.color, 
                          fontWeight: '700', 
                          cursor: 'pointer',
                          transition: 'gap 0.2s ease'
                        }}
                      >
                        <span>Explore Architecture</span>
                        <ArrowRight size={15} className="arrow-icon" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. COMPLIANCE & STANDARDS WITH STAGGERED REVEALS */}
      <section style={{ backgroundColor: '#FAFCFE', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '3.5rem 0 4rem' }}>
        <div className="container-enterprise">
          
          <Reveal direction="up" delay={0}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                SECURITY & COMPLIANCE
              </span>
              <h2 style={{ fontSize: '2.15rem', fontWeight: '800', color: '#0F172A', marginTop: '6px', letterSpacing: '-0.02em' }}>
                Enterprise Grade Standards
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '6px' }}>
                Built in accordance with strict international security frameworks and data privacy standards.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {certifications.map((c, i) => (
              <Reveal key={i} direction="scale" delay={i * 100}>
                <div 
                  className="cert-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0B3A70', fontFamily: 'var(--font-mono)' }}>
                      {c.name}
                    </div>
                    <CheckCircle2 size={16} style={{ color: '#15803D' }} />
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0F172A', marginBottom: '0.35rem' }}>
                    {c.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HEADQUARTERS & CONTACT WITH SIDE-BY-SIDE REVEAL */}
      <section style={{ padding: '4rem 0 3rem' }}>
        <div className="container-enterprise">
          
          <Reveal direction="scale" delay={50}>
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #CBD5E1',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 12px 36px -6px rgba(11, 58, 112, 0.07)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2.5rem',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="hq-grid"
            >
              {/* Left Column: HQ Details */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#15803D', animation: 'pulseDot 1.8s infinite' }} />
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    GLOBAL HEADQUARTERS & LAB
                  </span>
                </div>

                <h2 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#0F172A', marginTop: '2px', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  G Mark Software Private Limited
                </h2>
                
                <p style={{ fontSize: '0.98rem', color: '#64748B', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  Engineering mission-critical industrial architectures, IoT firmware, and agritech platforms from our engineering headquarters in Pune, Maharashtra.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '0.92rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EBF3FC', color: '#0B3A70', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <MapPin size={17} />
                    </div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '2px' }}>Office & Engineering Lab:</strong>
                      <div style={{ color: '#64748B', lineHeight: '1.4' }}>Moshi, Pune, Maharashtra, India – 412105</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#F0FDF4', color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={17} />
                    </div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: '#64748B' }}>Direct Telephone</strong>
                      <a href="tel:+919657363967" style={{ color: '#0F172A', fontWeight: '700', textDecoration: 'none' }} className="contact-link">
                        +91 9657363967
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={17} />
                    </div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: '#64748B' }}>Corporate Inquiries</strong>
                      <a href="mailto:gmarksoftware@gmail.com" style={{ color: '#0F172A', fontWeight: '700', textDecoration: 'none' }} className="contact-link">
                        gmarksoftware@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive CTA Card */}
              <div 
                className="cta-callout-card"
                style={{ 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: '18px', 
                  border: '1px solid #E2E8F0', 
                  padding: '2.25rem 2rem', 
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(11, 58, 112, 0.04)'
                }}
              >
                <div 
                  className="cta-icon-badge"
                  style={{ 
                    width: '52px', 
                    height: '52px', 
                    borderRadius: '14px', 
                    backgroundColor: '#0B3A70', 
                    color: '#FFFFFF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.25rem', 
                    boxShadow: '0 6px 18px rgba(11, 58, 112, 0.25)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Building2 size={26} />
                </div>
                
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                  Start a Partnership with G-Mark
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  Talk directly with our systems engineering team to customize 4M CMMS, IoT telemetry, or GramUnnati for your organization.
                </p>
                
                <button 
                  onClick={onOpenExpertModal}
                  className="btn-primary"
                  style={{ 
                    padding: '0.85rem 1.85rem', 
                    fontSize: '0.95rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  Schedule Engineering Call
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* STYLES & KEYFRAME ANIMATIONS */}
      <style>{`
        @keyframes pulseDot {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(11, 58, 112, 0.5);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 7px rgba(11, 58, 112, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(11, 58, 112, 0);
          }
        }

        .metric-pill:hover {
          transform: translateY(-3px);
          background-color: #FFFFFF !important;
          box-shadow: 0 8px 24px -4px rgba(11, 58, 112, 0.1);
          border-color: #CBD5E1 !important;
        }

        .interactive-value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px -8px rgba(11, 58, 112, 0.12);
          border-color: #93C5FD !important;
        }

        .interactive-value-card:hover .value-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .interactive-solution-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px -8px rgba(11, 58, 112, 0.12);
          border-color: #93C5FD !important;
        }

        .interactive-solution-card:hover .solution-icon-pill {
          transform: scale(1.12);
        }

        .interactive-solution-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        .cert-card:hover {
          transform: translateY(-4px);
          border-color: #93C5FD !important;
          box-shadow: 0 10px 24px -4px rgba(11, 58, 112, 0.08);
        }

        .cta-callout-card:hover .cta-icon-badge {
          transform: scale(1.08) translateY(-2px);
        }

        .contact-link:hover {
          color: #0B3A70 !important;
          text-decoration: underline !important;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        @media (min-width: 992px) {
          .hq-grid {
            grid-template-columns: 1.28fr 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}

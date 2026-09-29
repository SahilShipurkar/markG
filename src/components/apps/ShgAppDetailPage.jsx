import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Smartphone, 
  QrCode, 
  Truck, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Wallet, 
  Server,
  RefreshCw,
  Clock,
  Zap,
  Activity,
  LifeBuoy,
  Code2,
  Users,
  MapPin,
  Check,
  ArrowRight,
  Database,
  SmartphoneNfc,
  ChevronDown,
  ArrowDown,
  Sparkles,
  PackageCheck,
  KeyRound,
  Store,
  Home
} from 'lucide-react';

export default function ShgAppDetailPage({ onBack, onOpenExpertModal }) {
  const [activeStepP1, setActiveStepP1] = useState(0); // active accordion step for Phase 1
  const [activeStepP2, setActiveStepP2] = useState(0); // active accordion step for Phase 2

  const metricPills = [
    { label: '< 3s Latency', sub: 'Camera QR Scan Engine', icon: QrCode },
    { label: '100% OTP Proof', sub: 'Doorstep Handover', icon: ShieldCheck },
    { label: 'Instant Credit', sub: 'SHG Commission Ledger', icon: Wallet },
    { label: '3 Languages', sub: 'Odia, Hindi & English', icon: Globe }
  ];

  const phase1Steps = [
    {
      num: '1',
      title: 'Seller Doorstep Visit & Inspection',
      tag: 'Pickup Assignment',
      desc: 'SHG representative receives notification on the app, visits the rural producer or farmer’s home, and verifies product condition.',
      desc2: 'Confirms item count, inspects packaging integrity, and affixes the standardized GMU barcode label.',
      status: 'PICKUP_SHG_ACCEPTED',
      icon: Home
    },
    {
      num: '2',
      title: 'Barcode / QR Scan & Weight Registration',
      tag: 'Camera Scanner Engine',
      desc: 'SHG opens the camera scanner interface, scans the affixed parcel QR label, and logs the gross verified weight.',
      desc2: 'Status transitions in real-time to PICKUP_SHG_PICKED, establishing initial chain-of-custody in the cloud database.',
      status: 'PICKUP_SHG_PICKED',
      icon: QrCode
    },
    {
      num: '3',
      title: 'Staging at Village Center Node',
      tag: 'Local Aggregation',
      desc: 'Collected parcels are securely staged at the local village SHG center awaiting scheduled middle-mile transport.',
      desc2: 'Inventory view tracks all staged parcels grouped by destination hub pincodes.',
      status: 'VILLAGE_NODE_STAGED',
      icon: Layers
    },
    {
      num: '4',
      title: 'Transporter Scan & Custody Handover',
      tag: 'Middle-Mile Handoff',
      desc: 'Transporter vehicle arrives at the village node. The transporter scans the barcode to take physical custody of the batch.',
      desc2: 'Custody transfers from SHG to Transporter vehicle manifest, en route to the GMU Central Hub.',
      status: 'PICKUP_TRANSPORTER_LOADED',
      icon: Truck
    }
  ];

  const phase2Steps = [
    {
      num: '1',
      title: 'Transporter Batch Ingestion at Node',
      tag: 'Inbound Batch Arrival',
      desc: 'Regional transporter drops consolidated parcel batches at the destination village SHG center.',
      desc2: 'SHG receives batch arrival notification with assigned local doorstep delivery routes.',
      status: 'DROP_BATCH_ARRIVED',
      icon: Truck
    },
    {
      num: '2',
      title: 'SHG Inbound Barcode Verification',
      tag: 'Custody Transfer',
      desc: 'SHG representative scans each incoming parcel barcode to verify parcel integrity and accept custody.',
      desc2: 'App populates the buyer address, contact navigation, and optimal village delivery sequence.',
      status: 'DROP_SHG_ACCEPTED',
      icon: QrCode
    },
    {
      num: '3',
      title: 'Doorstep Delivery Run to Buyer',
      tag: 'Final Mile Dispatch',
      desc: 'SHG representative carries the verified package directly to the buyer’s home doorstep.',
      desc2: 'Presents the package for buyer physical inspection prior to final confirmation.',
      status: 'OUT_FOR_DELIVERY',
      icon: Home
    },
    {
      num: '4',
      title: '4-Digit OTP Confirmation & Instant Payout',
      tag: 'Tamper-Proof Handover',
      desc: 'Buyer provides the secret 4-digit OTP sent to their mobile. SHG inputs OTP into the app for instant cryptographic validation.',
      desc2: 'Order transitions to DROP_SHG_DELIVERED, closing the lifecycle and instantly crediting commission to the SHG wallet.',
      status: 'DROP_SHG_DELIVERED',
      icon: KeyRound
    }
  ];

  const connectedApps = [
    {
      name: 'Transporter App',
      desc: 'Middle-mile route logistics & cluster truck fleet',
      image: '/SHG Delivary and Transporter Logo.jpg',
      badge: 'Logistics'
    },
    {
      name: 'GramUnnati',
      desc: 'Digital farm marketplace connecting buyers to SHGs',
      image: '/Final Logo-09.jpg.jpeg',
      badge: 'Agritech'
    },
    {
      name: 'G Track',
      desc: 'Enterprise GPS fleet tracking & cold-chain telemetry',
      image: '/G Track logo.png',
      badge: 'Live Telemetry'
    },
    {
      name: 'ERP',
      desc: 'Centralized procurement, billing & inventory accounts',
      image: '/ERP Logo.png',
      badge: 'Core ERP'
    }
  ];

  return (
    <div style={{ backgroundColor: '#e8e8e8', minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER (FIRST PAGE - WHITE WITH GREY CURVATURE ARC) */}
      {/* ========================================================================= */}
      <section 
        style={{ 
          backgroundColor: '#FFFFFF', 
          textAlign: 'center', 
          paddingTop: '6.5rem', 
          paddingBottom: '5rem', 
          paddingLeft: '1.5rem', 
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle top subtle grid background */}
        <div
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        />

        {/* Horizon Curvature Arc in Grey (#e8e8e8) */}
        <div
          className="absolute left-1/2 top-[calc(100%-140px)] sm:top-[calc(100%-165px)] md:top-[calc(100%-190px)] lg:top-[calc(100%-210px)] 
          h-[480px] w-[700px] md:h-[550px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
          -translate-x-1/2 rounded-[100%] border-t border-slate-300/40 bg-[#e8e8e8] 
          shadow-[0_-20px_50px_rgba(0,0,0,0.06)] pointer-events-none z-0"
          style={{
            backgroundColor: '#e8e8e8'
          }}
        />

        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Eyebrow badge */}
          <div style={{ marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
            <div 
              style={{
                padding: '6px 14px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                fontSize: '0.8rem',
                fontWeight: '400',
                color: '#0F172A',
                letterSpacing: '0.04em'
              }}
            >
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
              GMU LOGISTICS • SHG FIELD APP v2.0
            </div>
          </div>

          {/* Headline matching Home Hero exact font style and #00A3FF brush underline */}
          <h1 
            className="text-balance font-normal text-slate-900"
            style={{ 
              fontSize: 'clamp(2.5rem, 5.4vw, 4.5rem)',
              lineHeight: '1.25',
              letterSpacing: '-0.03em',
              paddingTop: '0.25rem',
              paddingBottom: '0.75rem',
              display: 'inline-block',
              position: 'relative',
              zIndex: 1,
              fontWeight: 400
            }}
          >
            <span>Rural Village Logistics </span>
            <br className="hidden sm:inline" />
            <span>of </span>
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-slate-900 font-normal">
                Self Help Groups
              </span>
              {/* Hand-drawn marker brush stroke highlight matching hero */}
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

          <p 
            className="text-balance text-gray-600 font-normal"
            style={{ 
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
              lineHeight: '1.65', 
              maxWidth: '760px',
              margin: '1.25rem auto 2.25rem',
              position: 'relative',
              zIndex: 1,
              fontWeight: 400
            }}
          >
            Connect local village artisans, farmers, and micro-producers with enterprise logistics networks. Accelerate rural dispatches with standardized QR labels and doorstep OTP verification.
          </p>

          {/* Action Button */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.75rem', position: 'relative', zIndex: 1 }}>
            <button
              onClick={onOpenExpertModal}
              style={{
                padding: '0.8rem 1.75rem',
                borderRadius: '12px',
                fontSize: '0.95rem',
                fontWeight: '400',
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.15)'
              }}
            >
              <span>Request Platform Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Support Highlights Ribbon (Moved below into the grey curve) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              maxWidth: '840px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 10,
              paddingTop: '0.5rem'
            }}
          >
            {metricPills.map((pill, idx) => {
              const IconC = pill.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '16px',
                    padding: '0.95rem 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#EBF3FC', color: '#0B3A70', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconC size={16} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '400', color: '#0F172A', lineHeight: 1.15 }}>
                      {pill.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '400', marginTop: '2px' }}>
                      {pill.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. PHASE 1: FIRST-MILE COLLECTION (WHITE CURVED CARD ON GREY BG) */}
      {/* ========================================================================= */}
      <section 
        id="phase-1-section"
        style={{ 
          backgroundColor: '#e8e8e8', 
          padding: '2.5rem 0 3rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}
      >
        {/* Container strictly aligned to the right edge with curve wrapping closely beside the text */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1040px',
            marginLeft: 'auto',
            marginRight: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          {/* White Curved Background shape */}
          <div 
            className="absolute -top-4 sm:-top-6 md:-top-8 -bottom-4 sm:-bottom-6 md:-bottom-8 right-0 left-0 bg-white rounded-l-[70px] sm:rounded-l-[110px] md:rounded-l-[150px] lg:rounded-l-[180px] border-l border-y border-slate-300/70 shadow-[0_12px_44px_rgba(0,0,0,0.04)] pointer-events-none z-0"
            style={{ right: 0 }}
          />

          {/* Content inside white curved container */}
          <div 
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'flex-start'
            }}
            className="gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 pl-12 sm:pl-16 md:pl-20 pr-4 sm:pr-6 md:pr-8"
          >
            
            {/* LEFT: Phase 1 Info (Clean fixed width, placed right beside the curve) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '370px', flexShrink: 0 }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: '400', color: '#0B3A70', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Sparkles size={14} style={{ color: '#0B3A70' }} />
                  <span>PHASE 1 WORKFLOW</span>
                </span>
                
                <h2 style={{ fontSize: '1.85rem', fontWeight: '400', color: '#0F172A', letterSpacing: '-0.02em', lineHeight: '1.25', marginTop: '2px', marginBottom: '0.75rem' }}>
                  First-Mile Collection <br />
                  & Transporter Pickup
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Visits producer home & verifies item condition</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Scans QR barcode & registers gross verified weight</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Stages collected goods at the local village SHG node</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Completes barcode custody handover to pickup transporter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Phase 1 Process Steps (Right side by scrollbar) */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '530px', flexShrink: 0 }}>
              <div 
                style={{
                  position: 'absolute',
                  left: '21px',
                  top: '24px',
                  bottom: '24px',
                  width: '2px',
                  backgroundColor: '#CBD5E1'
                }} 
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {phase1Steps.map((step, index) => {
                  const isActive = activeStepP1 === index;
                  const IconComp = step.icon;

                  return (
                    <motion.div
                      key={step.num}
                      style={{ position: 'relative', display: 'flex', gap: '1rem', cursor: 'pointer' }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      onClick={() => setActiveStepP1(prev => prev === index ? -1 : index)}
                    >
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: isActive ? '#0F172A' : '#94A3B8',
                          backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                          color: isActive ? '#FFFFFF' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.25s ease',
                          boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.2)' : '0 2px 6px rgba(0,0,0,0.04)'
                        }}
                      >
                        <span style={{ fontSize: '0.85rem', fontWeight: '400' }}>{step.num}</span>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          padding: '1.25rem',
                          borderRadius: '16px',
                          border: `1.5px solid ${isActive ? '#0F172A' : '#CBD5E1'}`,
                          backgroundColor: '#F8FAFC',
                          boxShadow: isActive ? '0 8px 24px -4px rgba(15, 23, 42, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: isActive ? '#0F172A' : '#EBF3FC', color: isActive ? '#FFFFFF' : '#0B3A70', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <IconComp size={16} />
                            </div>
                            <div>
                              <span style={{ fontSize: '0.68rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '400', display: 'block' }}>
                                {step.tag}
                              </span>
                              <h3 style={{ fontSize: '0.98rem', fontWeight: '400', color: '#0F172A', margin: 0 }}>
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <div 
                            style={{ 
                              width: '26px', 
                              height: '26px', 
                              borderRadius: '50%', 
                              backgroundColor: '#FFFFFF', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              color: '#64748B',
                              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s ease',
                              flexShrink: 0
                            }}
                          >
                            <ChevronDown size={14} />
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{ paddingTop: '0.85rem', marginTop: '0.75rem', borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                                  {step.desc}
                                </p>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: '1.55', margin: 0, fontWeight: '400' }}>
                                  {step.desc2}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed #CBD5E1' }}>
                                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '400' }}>
                                    System Status:
                                  </span>
                                  <code style={{ fontSize: '0.72rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2px 8px', borderRadius: '4px', color: '#0F172A', fontWeight: '400' }}>
                                    {step.status}
                                  </code>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PHASE 2: LAST-MILE DELIVERY (OPPOSITE DIRECTION: LEFT PROCESS, RIGHT INFO) */}
      {/* ========================================================================= */}
      <section 
        id="phase-2-section"
        style={{ 
          backgroundColor: '#e8e8e8', 
          padding: '2.5rem 0 3.5rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%'
        }}
      >
        {/* Container strictly aligned to the left edge with curve wrapping closely beside the text */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1040px',
            marginRight: 'auto',
            marginLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          {/* White Curved Background shape */}
          <div 
            className="absolute -top-4 sm:-top-6 md:-top-8 -bottom-4 sm:-bottom-6 md:-bottom-8 left-0 right-0 bg-white rounded-r-[70px] sm:rounded-r-[110px] md:rounded-r-[150px] lg:rounded-r-[180px] border-r border-y border-slate-300/70 shadow-[0_12px_44px_rgba(0,0,0,0.04)] pointer-events-none z-0"
            style={{ left: 0 }}
          />

          {/* Content inside white curved container */}
          <div 
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}
            className="gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 pr-12 sm:pr-16 md:pr-20 pl-4 sm:pl-6 md:pl-8"
          >
            
            {/* LEFT: Phase 2 Process Steps (Left side with fixed compact width) */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '540px', flexShrink: 0, order: 1 }}>
              <div 
                style={{
                  position: 'absolute',
                  left: '21px',
                  top: '24px',
                  bottom: '24px',
                  width: '2px',
                  backgroundColor: '#CBD5E1'
                }} 
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {phase2Steps.map((step, index) => {
                  const isActive = activeStepP2 === index;
                  const IconComp = step.icon;

                  return (
                    <motion.div
                      key={step.num}
                      style={{ position: 'relative', display: 'flex', gap: '1rem', cursor: 'pointer' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      onClick={() => setActiveStepP2(prev => prev === index ? -1 : index)}
                    >
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: isActive ? '#0F172A' : '#94A3B8',
                          backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                          color: isActive ? '#FFFFFF' : '#475569',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.25s ease',
                          boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.2)' : '0 2px 6px rgba(0,0,0,0.04)'
                        }}
                      >
                        <span style={{ fontSize: '0.85rem', fontWeight: '400' }}>{step.num}</span>
                      </div>

                      <div
                        style={{
                          flex: 1,
                          padding: '1.25rem',
                          borderRadius: '16px',
                          border: `1.5px solid ${isActive ? '#0F172A' : '#CBD5E1'}`,
                          backgroundColor: '#F8FAFC',
                          boxShadow: isActive ? '0 8px 24px -4px rgba(15, 23, 42, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: isActive ? '#0F172A' : '#EBF3FC', color: isActive ? '#FFFFFF' : '#0B3A70', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <IconComp size={16} />
                            </div>
                            <div>
                              <span style={{ fontSize: '0.68rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '400', display: 'block' }}>
                                {step.tag}
                              </span>
                              <h3 style={{ fontSize: '0.98rem', fontWeight: '400', color: '#0F172A', margin: 0 }}>
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <div 
                            style={{ 
                              width: '26px', 
                              height: '26px', 
                              borderRadius: '50%', 
                              backgroundColor: '#FFFFFF', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              color: '#64748B',
                              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s ease',
                              flexShrink: 0
                            }}
                          >
                            <ChevronDown size={14} />
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{ paddingTop: '0.85rem', marginTop: '0.75rem', borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                                  {step.desc}
                                </p>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: '1.55', margin: 0, fontWeight: '400' }}>
                                  {step.desc2}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed #CBD5E1' }}>
                                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '400' }}>
                                    System Status:
                                  </span>
                                  <code style={{ fontSize: '0.72rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2px 8px', borderRadius: '4px', color: '#0F172A', fontWeight: '400' }}>
                                    {step.status}
                                  </code>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Phase 2 Info (Clean fixed width, placed beside process) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', order: 2, width: '100%', maxWidth: '380px', flexShrink: 0 }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: '400', color: '#0B3A70', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Sparkles size={14} style={{ color: '#0B3A70' }} />
                  <span>PHASE 2 WORKFLOW</span>
                </span>
                
                <h2 style={{ fontSize: '1.85rem', fontWeight: '400', color: '#0F172A', letterSpacing: '-0.02em', lineHeight: '1.25', marginTop: '2px', marginBottom: '0.75rem' }}>
                  Last-Mile Delivery <br />
                  & Buyer OTP Verification
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Ingests consolidated transporter parcel batches at village node</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Scans inbound barcodes & maps optimal village delivery route</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>Direct final-mile doorstep delivery visit to the buyer</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5', fontWeight: '400' }}>
                    <span style={{ color: '#0B3A70', marginTop: '2px' }}>•</span>
                    <span>4-digit secret OTP verification & instant commission credit</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONNECTED SUPPLY CHAIN APPS GRID (CLEAN UNBOLDED) */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#e8e8e8', padding: '3.5rem 0 2rem' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#0B3A70', fontWeight: '400', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              INTEGRATED ECOSYSTEM
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '400', color: '#0F172A', letterSpacing: '-0.02em', marginTop: '4px' }}>
              Connected GMU Logistics Applications
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {connectedApps.map((app, idx) => (
              <div 
                key={idx}
                onClick={onOpenExpertModal}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <img 
                  src={app.image} 
                  alt={app.name} 
                  style={{ width: '42px', height: '42px', objectFit: 'contain', borderRadius: '10px', border: '1px solid #F1F5F9', padding: '2px', backgroundColor: '#FFFFFF', flexShrink: 0 }} 
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: '400', color: '#0F172A', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {app.name}
                    </h3>
                    <span style={{ fontSize: '0.65rem', fontWeight: '400', padding: '1px 5px', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#475569' }}>
                      {app.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748B', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400' }}>
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

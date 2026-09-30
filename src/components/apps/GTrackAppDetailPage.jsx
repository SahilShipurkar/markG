import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Route, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Smartphone, 
  LayoutDashboard, 
  Server, 
  Sparkles, 
  Check, 
  Navigation, 
  FileText, 
  Zap, 
  Globe, 
  HelpCircle,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';

import { APPLICATIONS } from '../ApplicationsGridSection';

export default function GTrackAppDetailPage({ onBack, onOpenExpertModal, onSelectApp }) {
  const [activeStakeholderTab, setActiveStakeholderTab] = useState('fieldStaff');

  // Stakeholders Data from Project Info
  const STAKEHOLDERS = {
    fieldStaff: {
      title: 'Field Sales & Service Representatives',
      tagline: 'Frictionless geo-attendance, digital product catalogs & on-field order booking',
      accentColor: '#16A34A',
      bgColor: '#F0FDF4',
      borderColor: '#BBF7D0',
      icon: Smartphone,
      challenges: [
        'Manual register attendance and tedious daily end-of-day paperwork reporting',
        'Carrying bulky physical price lists, outdated brochures, and paper order books',
        'Ambiguity over daily assigned client visit sequence and optimal travel routes',
        'Disputes regarding on-site presence, waiting times, and client visit confirmations'
      ],
      solutions: [
        'One-tap geo-fenced mobile punch-in and punch-out with automated work-hour tallying',
        'Instant access to live master product catalogs with real-time stock levels and discounts',
        'Clarity on daily assigned route beats, client waypoints, and priority follow-ups',
        'Automated digital visit verification with GPS timestamp and digital client e-signatures'
      ],
      metrics: [
        { label: 'Paperwork Reduction', value: '100%', sub: 'Fully digitized field workflow' },
        { label: 'Daily Time Saved', value: '~90 min', sub: 'Per field representative' },
        { label: 'Order Placement Speed', value: '< 60 sec', sub: 'From selection to submission' }
      ]
    },
    management: {
      title: 'Operations Management & Central Admin',
      tagline: 'Complete live workforce visibility, route compliance & revenue analytics',
      accentColor: '#0284C7',
      bgColor: '#F0F9FF',
      borderColor: '#BAE6FD',
      icon: LayoutDashboard,
      challenges: [
        'Zero real-time visibility into distributed field team whereabouts and daily progress',
        'High travel expense inflation and unauthorized off-route mileage deviations',
        'Delayed order booking data reaching ERP, causing dispatch and fulfillment lag',
        'Subjective performance appraisals without objective site dwell-time metrics'
      ],
      solutions: [
        'Live interactive map tracking showing real-time location and historic breadcrumb trails',
        'Automated route compliance deviation alerts and idle time monitoring',
        'Direct real-time synchronization of field orders with centralized billing & inventory',
        'Comprehensive productivity dashboards ranking reps by visits, orders, and sales revenue'
      ],
      metrics: [
        { label: 'Workforce Productivity', value: '+40%', sub: 'Increase in daily client visits' },
        { label: 'Route Compliance', value: '96.5%', sub: 'Adherence to planned beats' },
        { label: 'Order-to-Fulfillment', value: 'T+0', sub: 'Instant ERP synchronization' }
      ]
    }
  };

  // 7 Core Functional Modules extracted directly from Section 7 & 9
  const CORE_MODULES = [
    {
      id: 'tracking',
      title: 'Real-Time Location Telemetry & Breadcrumb Trails',
      category: 'GPS & Telematics',
      icon: MapPin,
      badge: 'Live GPS',
      summary: 'Continuous sub-second GPS tracking on interactive live maps with automated work-hour location history.',
      features: [
        'Sub-second live employee location telemetry on Google Maps / OpenStreetMap layers',
        'Historical route replay with speed, idle stops, and dwell-time heatmaps',
        'Battery-efficient background GPS tracking algorithms with offline buffer synchronization',
        'Custom boundary geofencing alerts when reps enter or exit designated sales territories'
      ]
    },
    {
      id: 'attendance',
      title: 'Geo-Verified Attendance & Shift Management',
      category: 'Workforce Management',
      icon: Clock,
      badge: 'Geo-Attendance',
      summary: 'Effortless mobile punch-in and punch-out with geo-fencing, facial selfie verification, and shift rules.',
      features: [
        'One-tap punch-in/punch-out with GPS coordinate and timestamp verification',
        'Configurable shift policies (half-day, overtime, grace periods, remote check-in)',
        'Automated calculation of daily active work hours, transit hours, and idle duration',
        'Direct export to payroll systems (ERP, SAP, Tally, Zoho Payroll)'
      ]
    },
    {
      id: 'fieldVisits',
      title: 'Client Site Visits & Dwell-Time Telemetry',
      category: 'Field Operations',
      icon: Navigation,
      badge: 'Site Telemetry',
      summary: 'Location-verified client and site visit check-ins with automated dwell-time recording and visit notes.',
      features: [
        'Proximity check-in verification preventing false visit claims outside client premises',
        'Site dwell-time stopwatch tracking exact duration spent in client consultations',
        'Photo capture and custom visit questionnaires (e.g. stock audit, competitor pricing)',
        'Digital client sign-off and feedback collection directly on the mobile screen'
      ]
    },
    {
      id: 'orderBooking',
      title: 'Digital Product Catalog & On-Field Order Booking',
      category: 'Commercial Commerce',
      icon: ShoppingBag,
      badge: 'Order Engine',
      summary: 'Empower field staff to browse live master catalogs, apply volume schemes, and book client orders instantly.',
      features: [
        'Mobile digital product catalog with high-res images, SKU specs, and batch stock counts',
        'Dynamic client-specific pricing, credit limits, and promotional discount schemes',
        'Instant on-field order generation with PDF proforma invoice dispatch via WhatsApp/Email',
        'Direct automated injection into centralized warehouse dispatch queues'
      ]
    },
    {
      id: 'routes',
      title: 'Beat Planning & Dynamic Route Optimization',
      category: 'Route Intelligence',
      icon: Route,
      badge: 'Route Engine',
      summary: 'Define and assign daily travel routes, sequence client waypoints, and optimize travel fuel expenses.',
      features: [
        'Smart beat planning engine clustering clients for maximum travel efficiency',
        'Turn-by-turn navigation guidance between scheduled client appointments',
        'Real-time route deviation telemetry flagging unplanned detours to management',
        'Automated travel distance (km) calculation for instant accurate TA/DA expense claims'
      ]
    },
    {
      id: 'dashboard',
      title: 'Central Real-Time Admin Command Center',
      category: 'Enterprise Governance',
      icon: LayoutDashboard,
      badge: 'Command Center',
      summary: 'Comprehensive web portal for management to monitor live workforce clusters, reassign routes, and track sales.',
      features: [
        'Bird’s-eye interactive operations map showing entire active workforce status',
        'Instant broadcast messaging and emergency SOS assistance dispatching',
        'User management with multi-tier role-based access control (Admin, Manager, Team Lead, Rep)',
        'Configurable alert rules for late check-ins, unvisited priority accounts, and low battery'
      ]
    },
    {
      id: 'reporting',
      title: 'Automated Performance Analytics & Productivity Reports',
      category: 'Business Intelligence',
      icon: BarChart3,
      badge: 'BI Analytics',
      summary: 'Deep-dive analytical reporting on visits completed, order booking conversions, and rep scorecards.',
      features: [
        'Automated daily/weekly executive summary PDF reports delivered straight to inbox',
        'Representative productivity leaderboard ranking visits, order conversions, and km traveled',
        'Client coverage gap analysis highlighting unvisited or dormant customer accounts',
        'CSV/Excel one-click export for seamless third-party BI data pipeline feeding'
      ]
    }
  ];

  // 4 Core Values from Project Info
  const CORE_VALUES = [
    { title: 'Accountability', desc: 'Ensure reliable GPS tracking and tamper-proof reporting of all daily field operations and visits.' },
    { title: 'Efficiency', desc: 'Eliminate tedious manual tasks like paperwork, manual logs, and delayed order transmissions.' },
    { title: 'Transparency', desc: 'Empower management with live, real-time visibility into field operations, beats, and cash flows.' },
    { title: 'Productivity', desc: 'Optimize travel routes and client interaction times to maximize enterprise sales output.' }
  ];

  // Connected Ecosystem Applications
  const CONNECTED_APPS = [
    { id: 'erp', name: 'WeighPro ERP', tag: 'Core Enterprise ERP', desc: 'Double-entry accounting, order fulfillment & billing', image: '/ERP Logo.png' },
    { id: 'g-nova-iot', name: 'G-Nova IoT', tag: 'G-Nova Telemetry & 4M ERP', desc: 'Industrial telemetry & facility asset governance', image: '/G-Nova IOT logo 02.jpg' },
    { id: 'gram-unnati', name: 'GramUnnati', tag: 'Agri-Commerce Platform', desc: 'Digital marketplace for farmers & rural enterprises', image: '/Final Logo-09.jpg.jpeg' },
    { id: 'task-management', name: 'SynkroBoard', tag: 'Task Management & Collaboration', desc: 'Enterprise sprint, kanban & RACI workflows', image: '/Task Management & Team Collaboration Logo 01.jpg' }
  ];

  const handleAppClick = (targetId) => {
    if (onSelectApp) {
      const found = APPLICATIONS.find(a => a.id === targetId) || { id: targetId };
      onSelectApp(found);
    } else {
      window.history.pushState({ page: 'app-detail', appId: targetId }, '', `/app/${targetId}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentStakeholder = STAKEHOLDERS[activeStakeholderTab];
  const StakeholderIcon = currentStakeholder.icon;

  return (
    <div style={{ backgroundColor: '#e8e8e8', minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION / HEADER */}
      {/* ========================================================================= */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(232, 232, 232, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #CBD5E1',
          padding: '0.75rem 1.5rem'
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #CBD5E1',
              backgroundColor: '#FFFFFF',
              color: '#334155',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
            className="hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Platforms</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: '500' }}>Platform Suite</span>
            <span style={{ color: '#94A3B8' }}>/</span>
            <span style={{ fontSize: '0.82rem', color: '#0F172A', fontWeight: '600' }}>G Track Field Operations</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#e8e8e8', paddingTop: '3.5rem', paddingBottom: '3rem', position: 'relative' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          
          {/* Eyebrow Tag */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 1rem',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                fontSize: '0.78rem',
                fontWeight: '600',
                color: '#15803D',
                letterSpacing: '0.04em'
              }}
            >
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
              GMARK TRACKING • FIELD WORKFORCE & TELEMETRY SUITE v3.0
            </div>
          </div>

          {/* Headline matching Caveat handwriting font style with #00A3FF brush underline */}
          <div className="relative inline-block">
            <h1 
              className="text-balance text-slate-900"
              style={{ 
                fontFamily: "'Caveat', cursive",
                fontSize: 'clamp(3rem, 6.4vw, 5.25rem)',
                lineHeight: '1.15',
                letterSpacing: '0',
                paddingTop: '0.25rem',
                paddingBottom: '0.75rem',
                display: 'inline-block',
                position: 'relative',
                zIndex: 1,
                fontWeight: 600
              }}
            >
              <span>Field Workforce Intelligence & </span>
              <br className="hidden sm:inline" />
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 font-semibold" style={{ color: '#FC787D' }}>
                  Tracking
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
              <span className="text-slate-900 font-semibold"> System</span>
            </h1>

            {/* Floating App Logo Square Card with Hand-drawn Curved Arrow */}
            <div className="hidden sm:flex absolute -right-28 md:-right-36 lg:-right-44 bottom-1 md:bottom-2 items-end z-20 pointer-events-none">
              {/* Hand-drawn curved arrow pointing to the text in #7B5872 */}
              <svg
                className="w-14 h-10 md:w-16 md:h-12 lg:w-20 lg:h-14 pointer-events-none overflow-visible -mr-1 mb-2"
                viewBox="0 0 80 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 76 38 C 55 46, 24 38, 8 14"
                  stroke="#7B5872"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 6 24 L 8 12 L 20 16"
                  stroke="#7B5872"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              {/* App Logo Square Card */}
              <div 
                style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '22px',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #CBD5E1',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px -4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.04)',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="/G Track logo.png" 
                  alt="G Track Logo" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transform: 'scale(0.9)',
                    borderRadius: '12px'
                  }}
                />
              </div>
            </div>
          </div>

          <p 
            className="text-balance text-gray-600 font-normal"
            style={{ 
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
              lineHeight: '1.65', 
              maxWidth: '780px',
              margin: '1.25rem auto 2.25rem',
              position: 'relative',
              zIndex: 1,
              fontWeight: 400
            }}
          >
            All-in-one employee location tracking, geo-attendance, and field operations platform. Connect field teams with central management through live GPS telemetry, digital order booking, and automated route compliance.
          </p>

          {/* Action Button styled in #7B5872 with matching pill radius */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.75rem', position: 'relative', zIndex: 1 }}>
            <button
              onClick={onOpenExpertModal}
              style={{
                padding: '0.85rem 2.15rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: '500',
                backgroundColor: '#7B5872',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(123, 88, 114, 0.35)'
              }}
              className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span>Request Platform Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 4 Impact Metric Highlights Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              maxWidth: '960px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            {[
              { val: '< 5 sec', label: 'Live GPS Latency', sub: 'Sub-second real-time tracking' },
              { val: '100%', label: 'Paperless Operations', sub: 'Automated visit & order logging' },
              { val: '+40%', label: 'Daily Visit Growth', sub: 'Optimized beat navigation' },
              { val: '99.4%', label: 'Geo-Fenced Accuracy', sub: 'Tamper-proof site check-ins' }
            ].map((stat, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #CBD5E1',
                  padding: '1.25rem 1rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0F172A', lineHeight: 1 }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginTop: '6px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXECUTIVE SUMMARY & FIELD VISION (EXTENDED FULL-BLEED TO RIGHT VIEWPORT) */}
      {/* ========================================================================= */}
      <section 
        style={{ 
          backgroundColor: '#FFFFFF', 
          borderTop: '1px solid #CBD5E1', 
          borderBottom: '1px solid #CBD5E1', 
          padding: '4.5rem 0 5rem',
          maxWidth: 'calc(50vw + 560px)',
          marginRight: 0,
          marginLeft: 'auto',
          borderTopLeftRadius: '28px',
          borderBottomLeftRadius: '28px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: '-8px 12px 32px rgba(0, 0, 0, 0.03)',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            maxWidth: '1120px', 
            margin: '0 auto', 
            paddingLeft: '1.5rem',
            paddingRight: 'max(1.5rem, calc((100vw - 1120px) / 2 + 1.5rem))' 
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              EXECUTIVE OVERVIEW & PROBLEM STATEMENT
            </span>
            <h2 style={{ 
              fontFamily: "'Caveat', cursive", 
              fontSize: 'clamp(2.3rem, 4vw, 2.85rem)', 
              fontWeight: 600, 
              color: '#0F172A', 
              letterSpacing: '0', 
              display: 'block', 
              marginTop: '4px' 
            }}>
              Digitizing Distributed Workforce Operations in Real-Time
              <span style={{ 
                display: 'block', 
                height: '4px', 
                backgroundColor: '#D97706', 
                borderRadius: '2px', 
                width: '60px', 
                marginTop: '6px' 
              }} />
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            
            {/* The Problem Card */}
            <div 
              style={{
                backgroundColor: '#FFF7ED',
                border: '1px solid #FFEDD5',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 4px 12px rgba(234, 88, 12, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#FDBA74', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9A3412' }}>
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#9A3412', margin: 0 }}>The Operational Challenge</h3>
                  <p style={{ fontSize: '0.78rem', color: '#C2410C', margin: 0 }}>Unmonitored field operations & manual paperwork</p>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#7C2D12', lineHeight: '1.65', marginBottom: '1rem' }}>
                Companies with on-field employees struggle to track real-time locations, manage daily attendance, monitor client visits, and handle order bookings efficiently. Lack of visibility causes delayed order fulfillment and inflated travel expenses.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Opaque field presence leading to unverified site visit claims',
                  'Slow, error-prone manual paper-based order collection and submission',
                  'High fuel expense leakage caused by unstructured and unoptimized travel routes'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#9A3412' }}>
                    <span style={{ color: '#EA580C', fontWeight: 'bold' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution Card */}
            <div 
              style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #DCFCE7',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#86EFAC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14532D' }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#14532D', margin: 0 }}>The G-Track Solution</h3>
                  <p style={{ fontSize: '0.78rem', color: '#15803D', margin: 0 }}>Integrated Field Force Management Ecosystem</p>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#166534', lineHeight: '1.65', marginBottom: '1rem' }}>
                GMark Tracking provides a comprehensive field force management platform connecting field staff with central management. Featuring a Mobile App for field employees, a Centralized Web Admin Dashboard, and a High-Throughput real-time API server.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Real-time GPS tracking with timestamped client visit verification',
                  'Digital mobile product catalog with on-field order booking & instant ERP sync',
                  'Dynamic route assignment engine with travel distance & expense automation'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#14532D' }}>
                    <Check size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Platform Vision & 4 Core Values */}
          <div 
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '22px',
              border: '1px solid #E2E8F0',
              padding: '2.25rem',
              marginBottom: '1rem'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: '700', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                <Sparkles size={14} color="#D97706" />
                <span>Our Guiding Mission & Vision</span>
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0F172A', lineHeight: '1.6', margin: 0 }}>
                "To create a fully transparent, highly productive, and seamless field work environment where organizations can manage and empower their distributed workforce effortlessly using modern technology."
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {CORE_VALUES.map((val, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
                    {val.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STAKEHOLDER GOALS & VALUE CREATION (FIELD STAFF VS MANAGEMENT) */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#e8e8e8', padding: '4.5rem 0 5rem', borderBottom: '1px solid #CBD5E1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              STAKEHOLDER GOALS & VALUE UNLOCKED
            </span>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.3rem, 4vw, 2.85rem)', fontWeight: 600, color: '#0F172A', letterSpacing: '0', marginTop: '4px' }}>
              Empowering On-Field Teams & Executive Leadership
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '680px', margin: '0.5rem auto 0', lineHeight: '1.6' }}>
              See how G-Track simplifies day-to-day operations for field employees while providing management with total clarity and real-time operational governance.
            </p>
          </div>

          {/* Stakeholder Switcher Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'fieldStaff', label: 'Field Staff & Sales Reps', icon: Smartphone },
              { id: 'management', label: 'Management & Executive Admin', icon: LayoutDashboard }
            ].map((tab) => {
              const IconComp = tab.icon;
              const isSelected = activeStakeholderTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveStakeholderTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '9999px',
                    border: isSelected ? '1.5px solid #0F172A' : '1px solid #CBD5E1',
                    backgroundColor: isSelected ? '#0F172A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#334155',
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? '600' : '500',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 14px rgba(15, 23, 42, 0.15)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComp size={16} color={isSelected ? '#FFFFFF' : '#64748B'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stakeholder Deep-Dive Card */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: `1.5px solid ${currentStakeholder.borderColor}`,
              padding: '2.5rem',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: currentStakeholder.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentStakeholder.accentColor,
                  border: `1px solid ${currentStakeholder.borderColor}`
                }}
              >
                <StakeholderIcon size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>
                  {currentStakeholder.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '2px 0 0' }}>
                  {currentStakeholder.tagline}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              
              {/* Challenges */}
              <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#DC2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Traditional Field Bottlenecks</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentStakeholder.challenges.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#475569', lineHeight: '1.5' }}>
                      <span style={{ color: '#EF4444', fontWeight: 'bold' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* G-Track Enabled Solutions */}
              <div style={{ backgroundColor: currentStakeholder.bgColor, padding: '1.5rem', borderRadius: '16px', border: `1px solid ${currentStakeholder.borderColor}` }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: currentStakeholder.accentColor, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>G-Track Automated Capabilities</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentStakeholder.solutions.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#1E293B', lineHeight: '1.5' }}>
                      <Check size={16} color={currentStakeholder.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Stakeholder Metrics Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
              {currentStakeholder.metrics.map((m, idx) => (
                <div key={idx} style={{ backgroundColor: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: currentStakeholder.accentColor }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0F172A', marginTop: '2px' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE 3-TIER PLATFORM ECOSYSTEM (MOBILE APP, ADMIN DASHBOARD, API BACKEND) */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0 5rem', borderBottom: '1px solid #CBD5E1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              PLATFORM ARCHITECTURE ECOSYSTEM
            </span>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.3rem, 4vw, 2.85rem)', fontWeight: 600, color: '#0F172A', letterSpacing: '0', marginTop: '4px' }}>
              3 Integrated Pillars. Zero Friction Telemetry.
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '680px', margin: '0.5rem auto 0', lineHeight: '1.6' }}>
              Modern high-throughput cloud infrastructure connecting mobile field agents with real-time management command screens.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            
            {/* 1. Mobile App for Field Employees */}
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '22px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
              className="hover:border-emerald-300 transition-colors"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', backgroundColor: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803D' }}>
                  <Smartphone size={24} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#15803D', backgroundColor: '#DCFCE7', padding: '3px 10px', borderRadius: '20px' }}>
                  Field Staff Client
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem' }}>
                Field Employee Mobile App
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Intuitive mobile application for field reps to punch attendance, share real-time location telemetry, check in at client sites, and book orders directly on the go.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                {[
                  'One-tap geo-fenced punch-in / punch-out attendance',
                  'Live background GPS location & battery status sharing',
                  'Daily assigned route beat checklist & waypoint navigation',
                  'Digital master product catalog & mobile order booking',
                  'Instant visit feedback log with client e-signature'
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                    <Check size={14} color="#16A34A" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Central Admin Dashboard */}
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '22px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
              className="hover:border-blue-300 transition-colors"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', backgroundColor: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284C7' }}>
                  <LayoutDashboard size={24} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0284C7', backgroundColor: '#E0F2FE', padding: '3px 10px', borderRadius: '20px' }}>
                  Web Command Center
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem' }}>
                Central Admin Web Dashboard
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Unified management control portal to visualize workforce location clusters on live maps, assign travel routes, verify orders, and analyze productivity reports.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                {[
                  'Live real-time interactive workforce location map',
                  'Historical route replay with speed & dwell-time telemetry',
                  'Dynamic beat planning & client assignment manager',
                  'Incoming field order review & approval pipeline',
                  'Automated TA/DA travel distance and expense reports'
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                    <Check size={14} color="#0284C7" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Real-Time API Backend */}
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '22px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
              className="hover:border-purple-300 transition-colors"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                  <Server size={24} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9333EA', backgroundColor: '#F3E8FF', padding: '3px 10px', borderRadius: '20px' }}>
                  High-Throughput Server
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem' }}>
                High-Throughput API Backend
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Scalable real-time WebSocket and REST engine handling millions of location pings securely with offline buffer support and enterprise ERP webhooks.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                {[
                  'Sub-second GPS telemetry ingestion and indexing',
                  'Encrypted end-to-end data transmission (AES-256)',
                  'Offline location buffer syncing on network reconnection',
                  'Webhooks & REST APIs for WeighPro ERP & SAP sync',
                  '99.99% cloud uptime SLA with horizontal auto-scaling'
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                    <Check size={14} color="#9333EA" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE 7 FUNCTIONAL MODULES MATRIX */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#e8e8e8', padding: '4.5rem 0 5rem', borderBottom: '1px solid #CBD5E1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              SYSTEM CAPABILITIES & SPECIFICATIONS
            </span>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.3rem, 4vw, 2.85rem)', fontWeight: 600, color: '#0F172A', letterSpacing: '0', marginTop: '4px' }}>
              The 7 Core Field Operations Functional Modules
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '680px', margin: '0.5rem auto 0', lineHeight: '1.6' }}>
              From geo-fenced attendance to real-time order bookings, discover how every module is engineered for frictionless field execution.
            </p>
          </div>

          {/* 7 Modules Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {CORE_MODULES.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div 
                  key={mod.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '18px',
                    padding: '1.75rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                      <IconComp size={22} />
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: '700', color: '#0B3A70', backgroundColor: '#EBF3FC', padding: '2px 8px', borderRadius: '6px' }}>
                      {mod.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0F172A', marginBottom: '0.4rem' }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>
                    {mod.summary}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                    {mod.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.78rem', color: '#334155', lineHeight: '1.4' }}>
                        <span style={{ color: '#16A34A', fontWeight: 'bold' }}>•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BEFORE VS AFTER COMPARISON MATRIX */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 0 5rem', borderBottom: '1px solid #CBD5E1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              TRANSFORMATION BENCHMARKS
            </span>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.3rem, 4vw, 2.85rem)', fontWeight: 600, color: '#0F172A', letterSpacing: '0', marginTop: '4px' }}>
              Manual Field Methods vs. G-Track Automated Telemetry
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '680px', margin: '0.5rem auto 0', lineHeight: '1.6' }}>
              Quantifiable performance improvements delivered by transitioning to modern digital field force telemetry.
            </p>
          </div>

          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                    <th style={{ padding: '1rem 1.25rem', fontWeight: '600' }}>Operational Dimension</th>
                    <th style={{ padding: '1rem 1.25rem', fontWeight: '600', color: '#FCA5A5' }}>Manual Field Methods</th>
                    <th style={{ padding: '1rem 1.25rem', fontWeight: '600', color: '#86EFAC' }}>G-Track Automated Platform</th>
                    <th style={{ padding: '1rem 1.25rem', fontWeight: '600', color: '#93C5FD' }}>Direct Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: 'Location Visibility', old: 'Manual phone calls or WhatsApp location drops', neu: 'Continuous live GPS tracking & breadcrumb playback', imp: '100% operational transparency' },
                    { dim: 'Daily Attendance', old: 'Paper registers or delayed group chats', neu: 'Geo-fenced one-tap punch-in with photo verification', imp: 'Zero proxy attendance' },
                    { dim: 'Client Visits', old: 'Unverified paper visit cards & self-reporting', neu: 'GPS-timestamped site check-in & dwell-time telemetry', imp: '+40% verified client meetings' },
                    { dim: 'Order Booking', old: 'Handwritten order pads submitted at end of week', neu: 'Digital catalog booking with instant ERP synchronization', imp: 'Zero booking lag & errors' },
                    { dim: 'Route Compliance', old: 'Random unoptimized travel with high fuel waste', neu: 'Smart beat planning with turn-by-turn guidance', imp: '22% travel fuel cost savings' },
                    { dim: 'Performance Review', old: 'Subjective end-of-month manager opinions', neu: 'Objective daily productivity analytics & rep scorecards', imp: 'Data-driven sales incentives' }
                  ].map((row, idx) => (
                    <tr 
                      key={idx}
                      style={{ 
                        borderBottom: idx < 5 ? '1px solid #E2E8F0' : 'none',
                        backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                      }}
                    >
                      <td style={{ padding: '1rem 1.25rem', fontWeight: '700', color: '#0F172A' }}>{row.dim}</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#991B1B' }}>✕ {row.old}</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#166534', fontWeight: '600' }}>✓ {row.neu}</td>
                      <td style={{ padding: '1rem 1.25rem', color: '#0B3A70', fontWeight: '700' }}>{row.imp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONNECTED ECOSYSTEM APPLICATIONS */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#e8e8e8', padding: '4rem 0 4.5rem', borderBottom: '1px solid #CBD5E1' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#0B3A70', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              INTEGRATED ENTERPRISE ECOSYSTEM
            </span>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: 'clamp(2.1rem, 3.5vw, 2.6rem)', fontWeight: 600, color: '#0F172A', letterSpacing: '0', marginTop: '4px' }}>
              Seamlessly Connected to the MarkG Ecosystem
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {CONNECTED_APPS.map((app, idx) => (
              <div 
                key={idx}
                onClick={() => handleAppClick(app.id)}
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
                className="hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <img 
                  src={app.image} 
                  alt={app.name} 
                  style={{ width: '42px', height: '42px', objectFit: 'contain', borderRadius: '10px', border: '1px solid #E2E8F0', padding: '2px', backgroundColor: '#FFFFFF', flexShrink: 0 }} 
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0F172A', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {app.name}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.74rem', color: '#EA580C', fontWeight: '700', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {app.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOTTOM ACTION CTA BANNER */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '5rem 0 5.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.35rem 0.9rem', borderRadius: '20px', backgroundColor: '#DCFCE7', color: '#15803D', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>
            <MapPin size={14} />
            <span>DEPLOY G-TRACK FOR YOUR FIELD WORKFORCE</span>
          </div>

          <h2 style={{ 
            fontFamily: "'Caveat', cursive", 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 600, 
            color: '#0F172A', 
            letterSpacing: '0', 
            lineHeight: 1.15,
            marginBottom: '1rem' 
          }}>
            <span>Empower Field Operations With Real-Time </span>
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 font-semibold" style={{ color: '#FC787D' }}>
                Tracking
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none z-0 overflow-visible"
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
          </h2>

          <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: '1.6', margin: 0, marginBottom: '2.5rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
            Schedule an interactive product consultation to explore custom beat planning, ERP order sync integrations, and pilot field force deployments.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenExpertModal}
              style={{
                padding: '0.85rem 2.25rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: '500',
                backgroundColor: '#7B5872',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(123, 88, 114, 0.35)'
              }}
              className="hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span>Schedule Platform Consultation</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onBack}
              style={{
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: '500',
                backgroundColor: '#F1F5F9',
                color: '#334155',
                border: '1px solid #CBD5E1',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              className="hover:bg-slate-100 transition-colors"
            >
              <span>Explore Other Applications</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import logoBlack from '../assets/G Mark-black.png';
import { 
  Wrench, 
  Radio, 
  Sprout, 
  Menu, 
  X,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  Server,
  Cloud,
  FileText,
  ExternalLink,
  Droplets,
  Gauge,
  Workflow,
  Zap,
  BarChart3,
  Factory,
  Car,
  Warehouse,
  Building2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Users,
  Settings,
  ClipboardList,
  Package,
  TrendingUp,
  Leaf,
  ShoppingCart,
  Truck,
  Store,
  Globe,
  UserCheck,
  HelpCircle,
  BookOpen,
  Headphones,
  LifeBuoy,
  MessageSquareQuote,
  Video,
  SlidersHorizontal,
  Edit3
} from 'lucide-react';
import { APPLICATIONS } from './ApplicationsGridSection';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenExpertModal, onScrollToSection, onSelectApp }) {
  const [activeMenu, setActiveMenu] = useState(null); // 'solutions' | 'technology' | 'industries' | null
  const [isClosing, setIsClosing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const handleAppItemClick = (appId) => {
    closeMenu();
    setMobileMenuOpen(false);
    if (onSelectApp) {
      const found = APPLICATIONS.find(a => a.id === appId) || { id: appId };
      onSelectApp(found);
    } else {
      window.history.pushState({ page: 'app-detail', appId }, '', `/app/${appId}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      closeMenu();
    } else {
      setIsClosing(false);
      setActiveMenu(menuName);
    }
  };

  const closeMenu = () => {
    if (activeMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setActiveMenu(null);
        setIsClosing(false);
      }, 320);
    }
  };

  const handlePageNav = (page) => {
    closeMenu();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolutionNav = (sectionId) => {
    closeMenu();
    setMobileMenuOpen(false);
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        if (onScrollToSection) onScrollToSection(sectionId || 'solutions');
      }, 150);
    } else if (onScrollToSection) {
      onScrollToSection(sectionId || 'solutions');
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* ODOO-STYLE GREY BACKDROP OVERLAY (Gentle & Slow Cinematic Fade) */}
      {/* ========================================================================= */}
      <div 
        onClick={closeMenu}
        className={`backdrop-overlay ${(activeMenu && !isClosing) ? 'backdrop-visible' : ''}`}
        aria-hidden="true"
      />

      <header 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: activeMenu ? '1px solid #E2E8F0' : '1px solid #E2E8F0',
          boxShadow: activeMenu ? '0 16px 36px -4px rgba(15, 23, 42, 0.12)' : (scrolled ? '0 2px 8px rgba(15, 23, 42, 0.04)' : 'none'),
          zIndex: 60
        }}
      >
        <div style={{ backgroundColor: '#FFFFFF', position: 'relative', zIndex: 61 }}>
          <div style={{ width: '100%', padding: '0 1.75rem', margin: 0 }} className="nav-header-full">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', position: 'relative', width: '100%' }}>
              
              {/* Left Side Brand Logo */}
              <div 
                onClick={() => handlePageNav('home')}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  zIndex: 10,
                  userSelect: 'none',
                  padding: '4px 0'
                }}
                className="nav-logo-wrap"
                title="G Mark"
              >
                <img 
                  src={logoBlack} 
                  alt="G Mark" 
                  style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              {/* Clean Navigation Bar Links */}
              <nav 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '2.5rem',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
                className="desktop-nav"
              >
                {/* SOLUTIONS BUTTON */}
                <div>
                  <button 
                    onClick={() => toggleMenu('solutions')}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: activeMenu === 'solutions' ? '700' : '600',
                      color: activeMenu === 'solutions' ? '#0B3A70' : '#1E293B',
                      cursor: 'pointer',
                      padding: '0.65rem 0.85rem',
                      fontFamily: 'inherit',
                      borderRadius: '8px',
                      backgroundColor: activeMenu === 'solutions' ? '#F1F5F9' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    Solutions
                  </button>
                </div>

                {/* TECHNOLOGY BUTTON */}
                <div>
                  <button 
                    onClick={() => toggleMenu('technology')}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: activeMenu === 'technology' ? '700' : '600',
                      color: activeMenu === 'technology' ? '#0B3A70' : '#1E293B',
                      cursor: 'pointer',
                      padding: '0.65rem 0.85rem',
                      fontFamily: 'inherit',
                      borderRadius: '8px',
                      backgroundColor: activeMenu === 'technology' ? '#F1F5F9' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    Technology
                  </button>
                </div>

                {/* INDUSTRIES BUTTON */}
                <div>
                  <button 
                    onClick={() => toggleMenu('industries')}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: activeMenu === 'industries' ? '700' : '600',
                      color: activeMenu === 'industries' ? '#0B3A70' : '#1E293B',
                      cursor: 'pointer',
                      padding: '0.65rem 0.85rem',
                      fontFamily: 'inherit',
                      borderRadius: '8px',
                      backgroundColor: activeMenu === 'industries' ? '#F1F5F9' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    Industries
                  </button>
                </div>

                {/* ABOUT BUTTON (Full Page View) */}
                <div>
                  <button 
                    onClick={() => handlePageNav('about')}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: currentPage === 'about' ? '700' : '600',
                      color: currentPage === 'about' ? '#0B3A70' : '#1E293B',
                      cursor: 'pointer',
                      padding: '0.65rem 0.85rem',
                      fontFamily: 'inherit',
                      borderRadius: '8px',
                      backgroundColor: currentPage === 'about' ? '#F1F5F9' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    About
                  </button>
                </div>

                {/* HELP BUTTON (Full Page View) */}
                <div>
                  <button 
                    onClick={() => handlePageNav('help')}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: currentPage === 'help' ? '700' : '600',
                      color: currentPage === 'help' ? '#0B3A70' : '#1E293B',
                      cursor: 'pointer',
                      padding: '0.65rem 0.85rem',
                      fontFamily: 'inherit',
                      borderRadius: '8px',
                      backgroundColor: currentPage === 'help' ? '#F1F5F9' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    Help
                  </button>
                </div>

              </nav>

              {/* Right Spacer for Desktop Layout Symmetry */}
              <div style={{ width: '120px' }} className="desktop-right-spacer" />

              {/* Mobile hamburger toggle */}
              <div style={{ position: 'absolute', right: 0 }} className="mobile-nav-toggle-wrap">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    background: 'none',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    padding: '6px',
                    color: '#334155',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className="mobile-nav-toggle"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MEGA-MENU EXPANSION CONTAINER (Extra Slow & Smooth Curtain Transition) */}
        {/* ========================================================================= */}
        <div 
          className={`mega-menu-wrapper ${activeMenu && !isClosing ? 'mega-menu-expanded' : 'mega-menu-collapsed'}`}
          style={{
            backgroundColor: '#FFFFFF',
            position: 'relative',
            zIndex: 62,
            overflow: 'hidden'
          }}
        >
          <div className="mega-menu-inner">

            {/* 1. SOLUTIONS MEGA-MENU (ODOO STYLE MINIMALIST 8-CATEGORY DIRECTORY FOR MARKG APPS) */}
            {activeMenu === 'solutions' && (
              <div className="mega-menu-content-fade" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 2rem 2rem', backgroundColor: '#FFFFFF' }}>
                  
                  {/* 8-Category Clean Responsive Grid (4 columns across, 2 rows) */}
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      columnGap: '2.75rem',
                      rowGap: '2.25rem',
                      alignItems: 'start'
                    }}
                    className="solutions-odoo-grid"
                  >
                    
                    {/* CATEGORY 1: CORE ERP & FINANCE */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0D9488', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0D9488', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          CORE ERP & FINANCE
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'Enterprise ERP Core', appId: 'erp' },
                          { name: 'Double-Entry Accounting', appId: 'erp' },
                          { name: 'GST & E-Way Invoicing', appId: 'erp' },
                          { name: 'Sales & Purchase Orders', appId: 'erp' },
                          { name: 'Multi-Warehouse Inventory', appId: 'erp' },
                          { name: 'Branch Ledger & Cashflow', appId: 'erp' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 2: 4M OPERATIONS & CMMS */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #E11D48', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#E11D48', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          4M OPERATIONS & CMMS
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: '4M Smart CMMS Suite', appId: 'cmms' },
                          { name: 'Machine Health & MTBF/MTTR', appId: 'cmms' },
                          { name: 'Preventive Maintenance', appId: 'cmms' },
                          { name: 'Digital SOPs & Checklists', appId: 'cmms' },
                          { name: 'Spare Parts & Inventory', appId: 'cmms' },
                          { name: 'Downtime Reduction Engine', appId: 'cmms' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 3: INDUSTRIAL IOT & G-NOVA */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0284C7', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0284C7', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          INDUSTRIAL IOT & G-NOVA
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'G-Nova IoT Dashboard', appId: 'g-nova-iot' },
                          { name: 'Sub-Second 50Hz Telemetry', appId: 'g-nova-iot' },
                          { name: 'Terrace Booster Automation', appId: 'g-nova-iot' },
                          { name: 'Fire Hydrant Safety G-Nova', appId: 'g-nova-iot' },
                          { name: 'STP & Water Automation', appId: 'g-nova-iot' },
                          { name: 'AI Vibration Diagnostics', appId: 'g-nova-iot' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 4: SUPPLY CHAIN & LOGISTICS */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #7C3AED', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#7C3AED', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          SUPPLY CHAIN & LOGISTICS
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'Transporter Middle-Mile Fleet', appId: 'transporter-app' },
                          { name: 'SHG Rural Delivery Network', appId: 'shg-app' },
                          { name: 'QR & Barcode Scan Ingest', appId: 'transporter-app' },
                          { name: 'Cluster Batch Routing', appId: 'transporter-app' },
                          { name: 'Village Node Ingestion', appId: 'shg-app' },
                          { name: 'Doorstep Buyer OTP Handover', appId: 'shg-app' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 5: FIELD FORCE & TELEMETRY */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #16A34A', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#16A34A', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          FIELD FORCE & TELEMETRY
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'G Track Field Operations', appId: 'g-track' },
                          { name: 'Live GPS Telemetry & Trails', appId: 'g-track' },
                          { name: 'Geo-Fenced Mobile Attendance', appId: 'g-track' },
                          { name: 'Beat & Route Planning', appId: 'g-track' },
                          { name: 'On-Field Digital Order Booking', appId: 'g-track' },
                          { name: 'Client Visit Verification', appId: 'g-track' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 6: AGRI-COMMERCE & RURAL */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #15803D', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#15803D', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          AGRI-COMMERCE & RURAL
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'GramUnnati Marketplace', appId: 'gram-unnati' },
                          { name: 'Farmer & FPO Producer App', appId: 'gram-unnati' },
                          { name: 'B2B Bulk Buyer Platform', appId: 'gram-unnati' },
                          { name: 'Digital Mandi Price Discovery', appId: 'gram-unnati' },
                          { name: 'Master Product Catalog', appId: 'gram-unnati' },
                          { name: 'T+1 Direct Bank Payouts', appId: 'gram-unnati' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 7: TASK MANAGEMENT & RACI */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #EA580C', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#EA580C', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          TASK MANAGEMENT (SYNKRO)
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'SynkroBoard Workspace', appId: 'task-management' },
                          { name: 'Interactive Kanban & Sprints', appId: 'task-management' },
                          { name: 'RACI Governance Matrix', appId: 'task-management' },
                          { name: 'Gantt Timelines & Calendar', appId: 'task-management' },
                          { name: 'Absence & Leave Scheduling Sync', appId: 'task-management' },
                          { name: 'Role-Based Dashboards', appId: 'task-management' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CATEGORY 8: PLATFORM & EDGE CLOUD */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #7B5872', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '0.85rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#7B5872', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          PLATFORM & EDGE CLOUD
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: 'Real-Time WebSocket Bus', appId: 'task-management' },
                          { name: 'Multi-Channel Alert Engine', appId: 'g-nova-iot' },
                          { name: 'TimescaleDB Timeseries', appId: 'g-nova-iot' },
                          { name: 'Digital Document Vault', appId: 'erp' },
                          { name: 'Enterprise REST & Webhook APIs', appId: 'erp' },
                          { name: 'Edge Microservice Gateways', appId: 'g-nova-iot' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ 
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              color: '#475569',
                              fontWeight: '400',
                              transition: 'color 0.15s ease'
                            }}
                            className="hover:text-slate-900 transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Utility Row (Exact Odoo Style for MarkG) */}
                  <div 
                    style={{
                      marginTop: '2.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid #EDF2F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '3.5rem',
                      flexWrap: 'wrap',
                      fontSize: '0.88rem',
                      color: '#475569'
                    }}
                    className="stagger-bottom"
                  >
                    <div 
                      onClick={() => { closeMenu(); handleSolutionNav('solutions'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Package size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>Connected Ecosystem Apps</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); onOpenExpertModal?.(); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Edit3 size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>G Mark Studio & Custom ERP</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); handleSolutionNav('solutions'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Cloud size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>G Mark Edge & Cloud Platform</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 2. TECHNOLOGY MEGA-MENU (AUTHENTIC MARKG ENTERPRISE TECH STACK) */}
            {activeMenu === 'technology' && (
              <div className="mega-menu-content-fade" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 2rem 2.25rem', backgroundColor: '#FFFFFF' }}>
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      columnGap: '3.5rem',
                      rowGap: '2rem',
                      alignItems: 'start'
                    }}
                    className="technology-odoo-grid"
                  >
                    {/* COLUMN 1: CORE STACK & CLOUD PLATFORM */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0B3A70', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0B3A70', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          CORE STACK & CLOUD PLATFORM
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'React 18 & Vite Architecture', desc: 'Fast, modular single-page interface with dynamic UI states', appId: 'erp' },
                          { label: 'NestJS Enterprise Backend', desc: 'Scalable TypeScript microservices with event-driven architecture', appId: 'erp' },
                          { label: 'PostgreSQL & TimescaleDB', desc: 'Relational ledger storage and high-concurrency timeseries telemetry', appId: 'g-nova-iot' },
                          { label: 'Redis Event Streaming & Cache', desc: 'Sub-15ms real-time state pub/sub and distributed job queues', appId: 'task-management' },
                          { label: 'Prisma ORM & Multi-Tenancy', desc: 'Type-safe data layer with tenant-level data isolation', appId: 'erp' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 2: EDGE TELEMETRY & PROTOCOLS */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0284C7', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0284C7', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          EDGE TELEMETRY & PROTOCOLS
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'MQTT Telemetry Broker (QoS 2)', desc: 'Guaranteed edge sensor pub/sub for booster & fire systems', appId: 'g-nova-iot' },
                          { label: 'Modbus RTU / TCP Field Bus', desc: 'Direct industrial RS485 connection to PLCs and digital meters', appId: 'g-nova-iot' },
                          { label: 'Real-Time WebSocket Engine', desc: 'Bidirectional live telemetry streams and collaborative Kanban sync', appId: 'task-management' },
                          { label: 'AIPCU Hardware Edge Gateways', desc: 'Embedded microcontroller telemetry capture & automated trip relays', appId: 'g-nova-iot' },
                          { label: 'GPS Telemetry & Geo-Fencing', desc: 'Sub-second field vehicle trails and mobile radius verification', appId: 'g-track' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 3: ENTERPRISE LOGIC & GOVERNANCE */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #16A34A', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#16A34A', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          ENTERPRISE LOGIC & GOVERNANCE
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'RACI Governance & Sprint Engine', desc: 'Role-based ownership matrix, Kanban boards & team timeline sync', appId: 'task-management' },
                          { label: '4M Asset Governance Framework', desc: 'Integrated Man, Machine, Material & Method maintenance tracking', appId: 'cmms' },
                          { label: 'QR Code Scanning & OTP Dispatch', desc: 'Package custody verification and secure doorstep delivery', appId: 'transporter-app' },
                          { label: 'Double-Entry GST & Invoicing Engine', desc: 'Automated tax invoicing, E-Way bills and financial ledgers', appId: 'erp' },
                          { label: 'RESTful APIs & Webhook Webbus', desc: 'Secure third-party enterprise integrations, SAP & data exports', appId: 'erp' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Utility Row (Odoo Style) */}
                  <div 
                    style={{
                      marginTop: '2.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid #EDF2F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '3.5rem',
                      flexWrap: 'wrap',
                      fontSize: '0.88rem',
                      color: '#475569'
                    }}
                    className="stagger-bottom"
                  >
                    <div 
                      onClick={() => { closeMenu(); handleSolutionNav('solutions'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Zap size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>Sub-Second 50Hz MQTT Streams</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); onOpenExpertModal?.(); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <ShieldCheck size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>Enterprise Multi-Tenant Security</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); handleSolutionNav('solutions'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Cloud size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>Open REST & Webhook APIs</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 3. INDUSTRIES MEGA-MENU (AUTHENTIC MARKG ENTERPRISE VERTICALS) */}
            {activeMenu === 'industries' && (
              <div className="mega-menu-content-fade" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '2.5rem 2rem 2.25rem', backgroundColor: '#FFFFFF' }}>
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      columnGap: '3.5rem',
                      rowGap: '2rem',
                      alignItems: 'start'
                    }}
                    className="industries-odoo-grid"
                  >
                    {/* COLUMN 1: FACILITIES & INFRASTRUCTURE */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0B3A70', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0B3A70', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          FACILITIES & INFRASTRUCTURE
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'Residential Societies & Townships', desc: 'Centralized domestic booster water pumps, STP & sump automation', appId: 'g-nova-iot' },
                          { label: 'Commercial Complexes & IT Parks', desc: '24/7 Energy monitoring, HVAC baseline & multi-facility dashboards', appId: 'g-nova-iot' },
                          { label: 'Life Safety & Fire Protection', desc: 'Real-time hydrant pressure, jockey pump monitoring & zero-fault alarms', appId: 'g-nova-iot' },
                          { label: 'Water & Sewage Treatment (STP)', desc: 'Level transmitter telemetry, automated pump cycling & effluent logs', appId: 'g-nova-iot' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 2: RURAL COMMERCE & AGRI-SUPPLY */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #16A34A', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#16A34A', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          RURAL COMMERCE & AGRI-SUPPLY
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'Farmers & Producer Groups (FPOs)', desc: 'Direct digital mandi price discovery, product combos & bulk trade', appId: 'gram-unnati' },
                          { label: 'Self-Help Groups (SHG Networks)', desc: 'Rural women micro-entrepreneur order aggregation & doorstep delivery', appId: 'shg-app' },
                          { label: 'Agri-Inputs & Rural Distribution', desc: 'Verified vendor KYC, batch purchasing and T+1 direct bank payouts', appId: 'gram-unnati' },
                          { label: 'Cold Chain & Perishables Storage', desc: 'Live temperature & humidity logging during rural transit', appId: 'g-track' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 3: MANUFACTURING & FLEET OPERATIONS */}
                    <div>
                      <div style={{ 
                        borderBottom: '1.5px solid #0284C7', 
                        paddingBottom: '0.45rem', 
                        marginBottom: '1.25rem' 
                      }}>
                        <span style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: '700', 
                          color: '#0284C7', 
                          letterSpacing: '0.08em', 
                          textTransform: 'uppercase' 
                        }}>
                          MANUFACTURING & FLEET OPERATIONS
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                        {[
                          { label: 'Industrial Manufacturing Plants', desc: '4M CMMS preventive maintenance, MTTR tracking & downtime reduction', appId: 'cmms' },
                          { label: 'Middle-Mile Transporter Fleets', desc: 'Cluster batch routing, vehicle capacity fill & barcode manifests', appId: 'transporter-app' },
                          { label: 'Field Force & Sales Operations', desc: 'Geo-fenced attendance, beat planning & on-field digital order booking', appId: 'g-track' },
                          { label: 'Multi-Branch Corporate Enterprises', desc: 'Consolidated ERP accounting, branch ledgers & task boards', appId: 'erp' }
                        ].map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => handleAppItemClick(item.appId)}
                            style={{ cursor: 'pointer' }}
                            className="group transition-all"
                          >
                            <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0F172A', transition: 'color 0.15s ease' }} className="group-hover:text-blue-700">
                              {item.label}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', fontWeight: '400' }}>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Utility Row (Odoo Style) */}
                  <div 
                    style={{
                      marginTop: '2.5rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid #EDF2F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '3.5rem',
                      flexWrap: 'wrap',
                      fontSize: '0.88rem',
                      color: '#475569'
                    }}
                    className="stagger-bottom"
                  >
                    <div 
                      onClick={() => { closeMenu(); handleSolutionNav('solutions'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Building2 size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>50+ Smart Facility Deployments</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); handleAppItemClick('gram-unnati'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Sprout size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>100k+ Farmers & Rural SHGs</span>
                    </div>
                    <div 
                      onClick={() => { closeMenu(); handleAppItemClick('g-track'); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }} 
                      className="hover:text-slate-900 transition-colors"
                    >
                      <Truck size={16} style={{ color: '#475569' }} />
                      <span style={{ fontWeight: '500' }}>10M+ Logistics & Fleet Pings</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 62
          }}>
            <button 
              onClick={() => { toggleMenu('solutions'); setMobileMenuOpen(false); }}
              style={{ background: 'none', border: 'none', padding: '8px 0', fontWeight: '700', fontSize: '1.05rem', color: '#0F172A', cursor: 'pointer' }}
            >
              Solutions
            </button>
            <button 
              onClick={() => { toggleMenu('technology'); setMobileMenuOpen(false); }}
              style={{ background: 'none', border: 'none', padding: '8px 0', fontWeight: '700', fontSize: '1.05rem', color: '#0F172A', cursor: 'pointer' }}
            >
              Technology
            </button>
            <button 
              onClick={() => { toggleMenu('industries'); setMobileMenuOpen(false); }}
              style={{ background: 'none', border: 'none', padding: '8px 0', fontWeight: '700', fontSize: '1.05rem', color: '#0F172A', cursor: 'pointer' }}
            >
              Industries
            </button>
            <button 
              onClick={() => handlePageNav('about')}
              style={{ background: 'none', border: 'none', padding: '8px 0', fontWeight: currentPage === 'about' ? '800' : '600', fontSize: '1.05rem', color: currentPage === 'about' ? '#0B3A70' : '#0F172A', cursor: 'pointer' }}
            >
              About
            </button>
            <button 
              onClick={() => handlePageNav('help')}
              style={{ background: 'none', border: 'none', padding: '8px 0', fontWeight: currentPage === 'help' ? '800' : '600', fontSize: '1.05rem', color: currentPage === 'help' ? '#0B3A70' : '#0F172A', cursor: 'pointer' }}
            >
              Help
            </button>
          </div>
        )}
      </header>

      <style>{`
        /* Smooth Slow Luxury Curtain Expansion */
        .mega-menu-wrapper {
          display: grid;
          transition: 
            grid-template-rows 0.58s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.58s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mega-menu-expanded {
          grid-template-rows: 1fr;
          opacity: 1;
          transform: translateY(0);
        }

        .mega-menu-collapsed {
          grid-template-rows: 0fr;
          opacity: 0;
          transform: translateY(-8px);
        }

        .mega-menu-inner {
          min-height: 0;
        }

        .mega-menu-content-fade {
          animation: contentGentleFade 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes contentGentleFade {
          0% {
            opacity: 0;
            transform: translateY(-12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Staggered Column Cascade for Luxury Slow Reveal */
        .stagger-col-1 { animation: colGentleFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.08s backwards; }
        .stagger-col-2 { animation: colGentleFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.14s backwards; }
        .stagger-col-3 { animation: colGentleFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.20s backwards; }
        .stagger-bottom { animation: colGentleFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.26s backwards; }

        @keyframes colGentleFade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Odoo-style Grey Backdrop (Behind Header and Mega Menu) */
        .backdrop-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(2.5px);
          -webkit-backdrop-filter: blur(2.5px);
          z-index: 40;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .backdrop-visible {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mega menu links hover effect */
        .mega-menu-link:hover div:first-child {
          color: #0B3A70 !important;
          transform: translateX(4px);
        }
        .mega-menu-link div:first-child {
          transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (max-width: 900px) {
          .mega-menu-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .mega-menu-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle-wrap {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-right-spacer {
            display: none !important;
          }
          .mobile-nav-toggle-wrap {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

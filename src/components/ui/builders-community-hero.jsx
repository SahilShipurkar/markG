import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { ArrowUp, CircleCheck } from 'lucide-react';

const STAGE_W = 1200;
const STAGE_H = 460;
const CENTER = { x: 600, y: 590 };
const RADIUS = { outer: 492, inner: 404 };

const dy = CENTER.y - STAGE_H;
const dx = Math.sqrt(RADIUS.outer * RADIUS.outer - dy * dy);

function positionOnRing(ring, angle) {
  const rad = (angle * Math.PI) / 180;
  const r = RADIUS[ring];
  return {
    left: CENTER.x + r * Math.cos(rad),
    top: CENTER.y - r * Math.sin(rad),
  };
}

function arcPath(r) {
  const d_y = CENTER.y - STAGE_H;
  const d_x = Math.sqrt(r * r - d_y * d_y);
  return `M ${CENTER.x - d_x} ${STAGE_H} A ${r} ${r} 0 0 1 ${CENTER.x + d_x} ${STAGE_H}`;
}

function OrbitAvatar({ src, alt, color, size = 68 }) {
  return (
    <div
      className="rounded-full border border-black/[0.07] bg-white p-[3px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#161616]"
      style={{ width: size, height: size }}
    >
      <div
        className="h-full w-full overflow-hidden rounded-full"
        style={{ backgroundColor: color }}
      >
        <img
          src={src}
          alt={alt ?? ''}
          draggable={false}
          className="h-full w-full translate-y-[8%] scale-[1.08] select-none object-cover object-top"
        />
      </div>
    </div>
  );
}

function OrbitPill({ icon, label }) {
  return (
    <div className="flex min-h-[26px] items-center gap-2 whitespace-nowrap rounded-full border border-black/[0.08] bg-white py-[4px] px-2.5 text-[12px] font-medium text-[#6c6c78] shadow-[0_2px_6px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#161616] dark:text-white/60">
      <span className="flex shrink-0 items-center text-[13px] leading-none">{icon}</span>
      <span className="leading-none">{label}</span>
    </div>
  );
}

function OrbitCard({ emoji, badge }) {
  return (
    <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-black/[0.08] bg-[#f7f7f8] text-[20px] leading-none shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#1c1c1c]">
      <span className="select-none">{emoji}</span>
      {badge !== undefined && (
        <span className="absolute -bottom-[5px] -right-2 flex h-[18px] items-center gap-0.5 rounded-[5px] border border-black/[0.08] bg-white px-1.5 text-[10px] font-medium leading-none text-[#7a7a7a] shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#222] dark:text-white/60">
          <ArrowUp size={9} strokeWidth={2.2} />
          {badge}
        </span>
      )}
    </div>
  );
}

function OrbitStatus({ label }) {
  return (
    <div className="flex h-[28px] items-center gap-1.5 whitespace-nowrap rounded-full border border-[#a3d5b3] bg-[#cbe8d3] px-2.5 text-[13px] font-medium text-[#2f5b3a] shadow-[0_2px_6px_rgba(0,0,0,0.05)] dark:border-[#2f5b3a] dark:bg-[#17301f] dark:text-[#a8e0b8]">
      <CircleCheck size={14} strokeWidth={2.2} className="fill-[#2e7d3e] text-[#cbe8d3] dark:fill-[#3fa456] dark:text-[#17301f]" />
      {label}
    </div>
  );
}

function OrbitCheck() {
  return (
    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#a9d8b8] bg-[#c3e5cd] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:border-[#2f5b3a] dark:bg-[#1c3a26]">
      <CircleCheck size={16} strokeWidth={2.4} className="fill-[#2e7d3e] text-[#c3e5cd] dark:fill-[#3fa456] dark:text-[#1c3a26]" />
    </div>
  );
}

function renderItem(item) {
  switch (item.kind) {
    case 'avatar':
      return <OrbitAvatar {...item} />;
    case 'pill':
      return <OrbitPill {...item} />;
    case 'card':
      return <OrbitCard {...item} />;
    case 'status':
      return <OrbitStatus {...item} />;
    case 'check':
      return <OrbitCheck />;
    default:
      return null;
  }
}

function splitValue(value) {
  const m = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const raw = m[2].replace(/,/g, '');
  const decimals = (raw.split('.')[1] ?? '').length;
  return { prefix: m[1], target: parseFloat(raw), decimals, suffix: m[3] };
}

function CountUp({ value, delay }) {
  const parts = splitValue(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!parts) return;
    const controls = animate(0, parts.target, {
      delay,
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [value, delay]);

  if (!parts) return <>{value}</>;
  return (
    <>
      {parts.prefix}
      {n.toFixed(parts.decimals)}
      {parts.suffix}
    </>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function CommunityOrbit({
  items,
  stats,
  headline,
  tags = [],
  minScale = 0.55,
  className,
}) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => {
      const parentW = frame.parentElement ? frame.parentElement.clientWidth : window.innerWidth;
      const targetW = Math.min(parentW - 32, 1100);
      setScale(Math.min(1, Math.max(minScale, targetW / STAGE_W)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(frame);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [minScale]);

  return (
    <div
      className={`w-full flex-1 flex flex-col items-center justify-between text-center text-[#1f1f1f] bg-[#e8e8e8] pt-16 sm:pt-28 md:pt-36 ${className ?? ''}`}
      style={{ backgroundColor: '#e8e8e8' }}
    >
      {/* Orbit Visual Stage (Grey background above arc, white dome inside arc) */}
      <div
        ref={frameRef}
        className="relative mx-auto w-full max-w-[1100px] overflow-hidden flex justify-center bg-[#e8e8e8]"
        style={{ height: STAGE_H * scale, backgroundColor: '#e8e8e8' }}
      >
        <div
          className="absolute left-1/2 top-0"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            fill="none"
          >
            {/* White dome fill below the outer arc */}
            <path
              d={`M -20 ${STAGE_H + 2} L ${CENTER.x - dx} ${STAGE_H} A ${RADIUS.outer} ${RADIUS.outer} 0 0 1 ${CENTER.x + dx} ${STAGE_H} L ${STAGE_W + 20} ${STAGE_H + 2} L ${STAGE_W + 20} ${STAGE_H + 200} L -20 ${STAGE_H + 200} Z`}
              fill="#ffffff"
            />

            {/* Outer Arc Stroke */}
            <motion.path
              d={arcPath(RADIUS.outer)}
              className="stroke-[#d1d5db]"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />

            {/* Inner Arc Stroke */}
            <motion.path
              d={arcPath(RADIUS.inner)}
              className="stroke-[#e5e7eb]"
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
            />
          </svg>

          {/* Floating Orbit Badges & Avatars */}
          {items && items.map((item, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={positionOnRing(item.ring, item.angle)}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4 + (i % 4) * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (i * 0.4) % 2,
                }}
                whileHover={{ scale: 1.06 }}
              >
                {renderItem(item)}
              </motion.div>
            </motion.div>
          ))}

          {/* Centered Numeric Stats inside White Dome */}
          <div className="absolute left-1/2 top-[365px] grid -translate-x-1/2 auto-cols-fr grid-flow-col gap-8 sm:gap-12 justify-center items-center text-center z-10">
            {stats && stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center justify-center text-center"
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.6, delay: 0.9 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[38px] sm:text-[44px] font-semibold leading-none tracking-[-0.02em] text-[#0b2921] tabular-nums">
                  <CountUp value={s.value} delay={0.9 + i * 0.12} />
                </span>
                <span className="mt-2.5 text-[13px] sm:text-[14px] font-medium leading-none text-[#5e6966]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Section (Pure White extending all the way to bottom) */}
      <div className="w-full flex-1 bg-white flex flex-col items-center justify-center pt-2 pb-14 sm:pb-20 -mt-[1px]">
        {/* Centralized Headline */}
        {headline && (
          <motion.div
            className="w-full flex flex-col items-center justify-center text-center mt-1 sm:mt-2 px-4"
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="w-full max-w-[700px] text-center text-[26px] sm:text-[32px] md:text-[36px] font-semibold leading-snug tracking-tight text-neutral-900 mx-auto">
              {headline}
            </h2>
          </motion.div>
        )}

        {/* Centralized Tags */}
        {tags && tags.length > 0 && (
          <div className="w-full mt-4 sm:mt-5 flex max-w-[760px] flex-wrap items-center justify-center gap-2.5 sm:gap-3 mx-auto px-4">
            {tags.map((t, i) => {
              const Tag = t.href ? motion.a : motion.button;
              return (
                <Tag
                  key={t.label}
                  {...(t.href ? { href: t.href } : { type: 'button' })}
                  onClick={t.onClick}
                  variants={reveal}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="group flex h-9 sm:h-10 items-center gap-2 sm:gap-2.5 rounded-full border border-black/[0.08] bg-white pl-1.5 pr-3.5 sm:pr-4 text-[13px] sm:text-[14px] font-medium text-[#3a3a3a] shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:border-black/[0.14] hover:shadow-[0_6px_16px_-6px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e7d3e]/40 active:shadow-none cursor-pointer"
                >
                  <span className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#eef4f0] text-[#2e7d3e] transition-colors group-hover:bg-[#2e7d3e] group-hover:text-white [&>svg]:h-[14px] [&>svg]:w-[14px] sm:[&>svg]:h-[15px] sm:[&>svg]:w-[15px]">
                    {t.icon}
                  </span>
                  <span>{t.label}</span>
                </Tag>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export { CommunityOrbit as Component };

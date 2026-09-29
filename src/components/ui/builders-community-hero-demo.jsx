import React from 'react';
import { Cpu, Activity } from 'lucide-react';
import CommunityOrbit from './builders-community-hero';

const memoji = (n) =>
  `https://raw.githubusercontent.com/alohe/memojis/main/png/memo_${n}.png`;

function TelemetryIcon() {
  return (
    <span className="flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full bg-[#dfe6f5]">
      <Activity className="h-3.5 w-3.5 text-blue-600" />
    </span>
  );
}

const items = [
  // Outer ring, left to right
  { kind: 'status', ring: 'outer', angle: 132, label: 'Telemetry Active' },
  { kind: 'card', ring: 'outer', angle: 112.6, emoji: '⚡', badge: 99 },
  { kind: 'pill', ring: 'outer', angle: 90, icon: <TelemetryIcon />, label: 'Edge Nodes Synced' },
  { kind: 'pill', ring: 'outer', angle: 67.6, icon: '🛡️', label: '0 Downtime' },
  { kind: 'avatar', ring: 'outer', angle: 50.9, src: memoji(9), alt: 'Plant Engineer', color: '#c4bceb' },
  { kind: 'pill', ring: 'outer', angle: 35.2, icon: <Cpu size={13} strokeWidth={2} />, label: '4M Matrix' },
  // Inner ring, left to right
  { kind: 'avatar', ring: 'inner', angle: 137.2, src: memoji(19), alt: 'Industrial Architect', color: '#ffdcb6' },
  { kind: 'pill', ring: 'inner', angle: 116.6, icon: '✨', label: 'AI Predictive' },
  { kind: 'avatar', ring: 'inner', angle: 90, src: memoji(35), alt: 'Operations Lead', color: '#c0cef3', size: 48 },
  { kind: 'card', ring: 'inner', angle: 63.3, emoji: '🏭' },
  { kind: 'check', ring: 'inner', angle: 41.8 },
];

const stats = [
  { value: '99.9%', label: 'Telemetry Uptime' },
  { value: '500K+', label: 'Connected Assets' },
  { value: '<10ms', label: 'Edge Latency' },
];

export default function CommunityOrbitDemo() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between text-center">
      <CommunityOrbit
        items={items}
        stats={stats}
        headline={
          <>
            <span>Where Industrial Intelligence </span>
            <br className="hidden sm:block" />
            <span>Comes </span>
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Together</span>
              {/* Hand-drawn marker brush stroke highlight matching hero */}
              <svg
                className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2.5 sm:h-3.5 pointer-events-none z-0 overflow-visible"
                viewBox="0 0 160 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M 3,13 Q 80,4 157,11 Q 80,18 4,15"
                  fill="#00A3FF"
                />
              </svg>
            </span>
          </>
        }
      />
    </div>
  );
}

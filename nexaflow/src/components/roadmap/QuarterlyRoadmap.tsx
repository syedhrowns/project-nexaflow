import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  GitBranch, Cpu, ShieldAlert, Zap, Network
} from 'lucide-react';

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export interface Milestone {
  id: string;
  quarter: string;
  year: string;
  status: 'Live Beta' | 'In Testing' | 'Building' | 'Planned';
  statusType: 'active' | 'testing' | 'building' | 'planned';
  title: string;
  subtitle: string;
  metric: string;
  progressPercent: number;
  icon: React.ElementType;
  deliverables: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: 'q3-2026',
    quarter: 'Q3',
    year: '2026',
    status: 'Live Beta',
    statusType: 'active',
    title: 'Autonomous Swarms & Self-Healing',
    subtitle: 'Byzantine voting protocols and automated payload schema repair...',
    metric: '3 Features Ready',
    progressPercent: 100,
    icon: Cpu,
    deliverables: ['Byzantine Consensus', 'Auto-Repair Shims']
  },
  {
    id: 'q4-2026',
    quarter: 'Q4',
    year: '2026',
    status: 'In Testing',
    statusType: 'testing',
    title: 'Generative UI & Spatial CAD Perception',
    subtitle: 'Dynamic runtime component synthesis and spatial multi-modal perception.',
    metric: '2 In Review',
    progressPercent: 72,
    icon: ShieldAlert,
    deliverables: ['Generative Canvas', 'Spatial Vector OCR']
  },
  {
    id: 'q1-2027',
    quarter: 'Q1',
    year: '2027',
    status: 'Building',
    statusType: 'building',
    title: 'Edge WASM & Post-Quantum Enclaves',
    subtitle: 'Sub-millisecond local execution with Kyber lattice cryptographic security.',
    metric: '4 Sprints Left',
    progressPercent: 38,
    icon: Zap,
    deliverables: ['Kyber-1024 Lattice', 'Sub-ms WASM Core']
  },
  {
    id: 'q2-2027',
    quarter: 'Q2',
    year: '2027',
    status: 'Planned',
    statusType: 'planned',
    title: 'Conversational Voice & EU AI Act',
    subtitle: 'Full-duplex real-time voice streaming with automated sovereign compliance.',
    metric: 'Architecting',
    progressPercent: 12,
    icon: Network,
    deliverables: ['Full-Duplex Voice', 'Sovereign Audit Trail']
  }
];

export default function QuarterlyRoadmap() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth } = carouselRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.75));
      setActiveMobileIdx(Math.min(Math.max(index, 0), MILESTONES.length - 1));
    }
  };

  const scrollToMilestone = (idx: number) => {
    if (carouselRef.current) {
      const cardEl = carouselRef.current.children[idx] as HTMLElement;
      if (cardEl) {
        cardEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        setActiveMobileIdx(idx);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: LUXURY_EASE }}
      className="mb-14 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm border border-slate-200/90 relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-900 shadow-2xs">
              <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              Quarterly Delivery Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2 max-w-xl leading-relaxed">
            Active deployment milestones with verified CI/CD releases and testing targets.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[11px] sm:text-[13px] font-semibold text-blue-900 bg-blue-50/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200/80 flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Q3 2026 Releases on Track
          </span>
        </div>
      </div>

      {/* Mobile-Only Segmented Quarter Pills */}
      <div className="sm:hidden flex items-center justify-between gap-1 p-1 mb-4 bg-slate-100/90 rounded-2xl border border-slate-200/60">
        {MILESTONES.map((item, idx) => {
          const isCurrent = activeMobileIdx === idx;
          return (
            <button
              key={item.id}
              onClick={() => scrollToMilestone(idx)}
              className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-mono font-bold transition-all text-center cursor-pointer ${
                isCurrent
                  ? 'bg-white text-blue-900 shadow-2xs border border-slate-200/70'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {item.quarter} &apos;{item.year.slice(2)}
            </button>
          );
        })}
      </div>

      {/* 4 Clean, Still Milestone Cards (Responsive Swipe Carousel on Mobile, Grid on Tablet/Desktop) */}
      <div className="relative z-10">
        <div 
          ref={carouselRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-1 px-1 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0"
        >
          {MILESTONES.map((item) => {
            const Icon = item.icon;
            const isActiveMilestone = item.statusType === 'active';

            return (
              <div
                key={item.id}
                className="w-[82vw] max-w-[305px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center bg-white rounded-2xl p-4.5 sm:p-5 border border-slate-200/80 shadow-2xs relative flex flex-col justify-between select-none"
              >
                {/* Node & Quarter Tag Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                    {/* Integrated Milestone Icon */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center relative shrink-0 ${
                      isActiveMilestone
                        ? 'bg-blue-900 text-white shadow-sm'
                        : item.statusType === 'testing'
                        ? 'bg-sky-50 text-sky-800 border border-sky-200/70 shadow-2xs'
                        : item.statusType === 'building'
                        ? 'bg-purple-50 text-purple-800 border border-purple-200/70 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border border-slate-200/70 shadow-2xs'
                    }`}>
                      <Icon className="w-5 h-5" />
                      {isActiveMilestone && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                      )}
                    </div>

                    {/* Quarter Badge */}
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                        {item.quarter} {item.year}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border mt-1 uppercase tracking-wide inline-flex items-center gap-1 ${
                        item.statusType === 'active'
                          ? 'bg-blue-50 text-blue-900 border-blue-200'
                          : item.statusType === 'testing'
                          ? 'bg-sky-50 text-sky-800 border-sky-200'
                          : item.statusType === 'building'
                          ? 'bg-purple-50 text-purple-800 border-purple-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-[14px] sm:text-[15px] leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3.5 sm:mb-4">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Details & Progress Bar */}
                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-slate-700 text-[11px]">
                      {item.metric}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 font-medium">
                      {item.progressPercent}%
                    </span>
                  </div>

                  {/* Sleek Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        isActiveMilestone 
                          ? 'bg-blue-900' 
                          : item.statusType === 'testing' 
                          ? 'bg-sky-600' 
                          : item.statusType === 'building' 
                          ? 'bg-purple-600' 
                          : 'bg-slate-400'
                      }`}
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>

                  {/* Deliverable Micro-tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.deliverables.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium text-slate-600 bg-slate-50/80 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-50/50 px-1.5 py-0.5 rounded-md border border-slate-200/50">
                      +1
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-Only Swipe Indicator Dots */}
        <div className="sm:hidden flex items-center justify-between pt-3 px-1">
          <div className="flex items-center gap-1.5">
            {MILESTONES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMilestone(idx)}
                aria-label={`Go to milestone ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileIdx === idx 
                    ? 'w-6 bg-blue-900' 
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            Swipe for roadmap →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

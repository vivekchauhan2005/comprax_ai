import React from 'react';
import { Scale, Heart, Compass, Cpu, Palette, Zap } from 'lucide-react';

/**
 * About page detailing features, tech stack, and engineering choices
 */
export const About = () => {
  const features = [
    {
      title: 'Spec-by-Spec Matrix',
      desc: 'Side-by-side specs comparison table mapping CPU, RAM, display, and camera parameters.',
      icon: Scale,
    },
    {
      title: 'Algorithmic Scoring',
      desc: 'Programmatic calculations checking hardware wins and displaying overall WinnerBadge.',
      icon: Cpu,
    },
    {
      title: 'Wishlist Bookmarks',
      desc: 'Bookmark devices using browser local storage to save details for later review.',
      icon: Heart,
    },
    {
      title: 'Design Aesthetics',
      desc: 'Beautiful Vercel/Linear dark dashboard layout built using Tailwind utility classes.',
      icon: Palette,
    },
    {
      title: 'Performance Mock Layer',
      desc: 'Asynchronous Axios layer with custom delay to mimic REST API database query performance.',
      icon: Zap,
    },
    {
      title: 'Catalog Index Filters',
      desc: 'Responsive sidebar filters and quick search indexing matching all device specifications.',
      icon: Compass,
    },
  ];

  return (
    <div className="space-y-12 py-4 animate-in fade-in duration-300">
      
      {/* Page Title */}
      <div className="select-none">
        <h1 className="text-2xl font-bold text-slate-955 dark:text-white font-display">
          About CompareX AI
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-550 mt-0.5">
          Learn more about the technology stack and features powering our specifications engine
        </p>
      </div>

      {/* Core Platform Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
        <div className="space-y-4 flex-1 select-none">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-105 font-display">
            The Smartphone Evaluation Platform
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
            CompareX AI was engineered to solve a common consumer problem: spec sheet fatigue. By mapping detailed hardware values programmatically, it provides quick, readable summaries of device advantages, allowing you to pick a smartphone with complete confidence.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
            The frontend architecture is modularly decoupled from data fetching, using Axios services and clean Context states, making it ready to scale from static JSON to full REST databases without visual layout modifications.
          </p>
        </div>
        <div className="h-40 w-40 rounded-full bg-indigo-500/10 dark:bg-indigo-950/20 flex items-center justify-center text-indigo-650 dark:text-indigo-400 border border-indigo-200/30 dark:border-indigo-900/30 select-none flex-shrink-0">
          <Scale className="h-20 w-20 animate-pulse" />
        </div>
      </div>

      {/* Features Overview */}
      <section className="space-y-6">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500 select-none font-display">
          Features Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.title} 
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-5 shadow-sm space-y-3 hover:border-slate-305 dark:hover:border-slate-750 transition-all duration-300"
              >
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-650 dark:text-indigo-400 rounded-xl inline-block select-none">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm font-display select-none">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech stack list */}
      <section className="space-y-4 bg-slate-50/50 dark:bg-slate-900/20 p-6 rounded-3xl border border-slate-150 dark:border-slate-850 select-none">
        <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500 text-center">
          Built Using Modern Web Specifications
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'React 19 (Hooks & Context)',
            'Vite Compilers',
            'Tailwind CSS v3 (Utility layers)',
            'React Router DOM v6',
            'Axios Services wrapper',
            'Context API providers',
            'Lucide Icons',
            'LocalStorage persistence',
          ].map((tech) => (
            <span 
              key={tech} 
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-650 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850/60 rounded-xl shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Award, Sparkles, Scale } from 'lucide-react';

/**
 * WinnerBadge banner displaying the comparative score outcome
 */
export const WinnerBadge = ({ winner, scoreA, scoreB, isTie }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-indigo-500/10 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-indigo-950/20 border border-indigo-100/80 dark:border-indigo-900/40 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
      <div className="flex items-center gap-3.5 text-center sm:text-left flex-col sm:flex-row">
        
        {/* Outcome icon */}
        <div className="p-3 bg-indigo-650 text-white rounded-xl shadow-md shadow-indigo-650/15">
          {isTie ? (
            <Scale className="h-5 w-5" />
          ) : (
            <Award className="h-5 w-5 animate-pulse" />
          )}
        </div>
        
        {/* Outcome text */}
        <div className="space-y-0.5">
          {isTie ? (
            <>
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 font-display">
                Specification Tie
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Both devices match on hardware score metrics ({scoreA} vs {scoreB})
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-sm text-slate-905 dark:text-white font-display flex items-center justify-center sm:justify-start gap-1.5">
                <span>Winner: {winner?.name}!</span>
                <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-550">
                Highly recommended based on compared key specifications wins
              </p>
            </>
          )}
        </div>
      </div>
      
      {/* Comparative Score meters */}
      <div className="flex items-center gap-2.5">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Hardware Wins:
        </span>
        <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm select-none">
          <span className="px-3.5 py-1.5 text-xs font-bold text-indigo-650 dark:text-indigo-400 bg-slate-50 dark:bg-slate-950/40">
            {scoreA}
          </span>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-805" />
          <span className="px-3.5 py-1.5 text-xs font-bold text-slate-650 dark:text-slate-350">
            {scoreB}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WinnerBadge;

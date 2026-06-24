import React from 'react';

/**
 * LoadingSpinner component with inline and full-page layout support
 */
export const LoadingSpinner = ({ fullPage = false }) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800" />
        <div className="absolute inset-0 rounded-full border-4 border-t-indigo-650 animate-spin" />
      </div>
      <p className="text-xs text-slate-450 dark:text-slate-500 font-medium select-none animate-pulse">
        Loading insights...
      </p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-55 flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-16 w-full">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;

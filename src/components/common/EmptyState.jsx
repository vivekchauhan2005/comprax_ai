import React from 'react';
import Button from '../ui/Button';

/**
 * Premium EmptyState placeholder for empty queries or lists
 */
export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionText,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm max-w-md mx-auto my-10 animate-in fade-in duration-300">
      <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl text-indigo-650 dark:text-indigo-450 mb-5 shadow-sm">
        {Icon && <Icon className="h-8 w-8" />}
      </div>
      <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50 font-display mb-1.5">
        {title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-[280px]">
        {description}
      </p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="secondary" size="sm" className="font-semibold px-5">
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

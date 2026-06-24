import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * ThemeToggle button for flipping between dark and light themes
 */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl text-slate-550 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850/80 transition-all active:scale-95 duration-200"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4.5 w-4.5 animate-in spin-in-45 duration-300" />
      ) : (
        <Moon className="h-4.5 w-4.5 animate-in spin-in-45 duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;

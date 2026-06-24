import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

/**
 * Footer component with brand identification and navigation links
 */
export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-850/60 mt-auto transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 select-none">
          <div className="flex items-center justify-center h-7.5 w-7.5 rounded-lg bg-indigo-650 text-white shadow-sm">
            <Scale className="h-4 w-4" />
          </div>
          <span className="font-display font-bold text-sm text-slate-950 dark:text-white">CompareX AI</span>
        </div>
        
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} CompareX AI. Engineered for next-gen product intelligence. All rights reserved.
        </p>
        
        <div className="flex gap-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Link to="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Catalog</Link>
          <Link to="/compare" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Compare</Link>
          <Link to="/wishlist" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Wishlist</Link>
          <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

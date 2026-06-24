import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

/**
 * 404 Page Not Found screen
 */
export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-[60vh] max-w-md mx-auto animate-in fade-in duration-300 select-none">
      <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl text-indigo-650 dark:text-indigo-400 mb-6 shadow-sm">
        <HelpCircle className="h-10 w-10 animate-bounce" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-950 dark:text-white font-display mb-2">404</h1>
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-205 font-display mb-1.5">
        Page Not Found
      </h2>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 max-w-[280px]">
        The page you are looking for does not exist or has been relocated. Let's get you back.
      </p>
      <div className="flex gap-3 w-full justify-center">
        <Link to="/" className="flex-1 max-w-[140px]">
          <Button variant="secondary" size="sm" className="w-full font-semibold">
            Dashboard
          </Button>
        </Link>
        <Link to="/products" className="flex-1 max-w-[140px]">
          <Button variant="primary" size="sm" className="w-full font-semibold flex items-center gap-1.5">
            Catalog <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

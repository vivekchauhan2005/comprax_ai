import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Scale, Menu } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import ThemeToggle from '../common/ThemeToggle';

/**
 * Responsive Navbar with active navigation links, compare and wishlist badges.
 */
export const Navbar = ({ onMobileMenuToggle }) => {
  const location = useLocation();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Compare', path: '/compare' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full glass border-b border-slate-200/60 dark:border-slate-850/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-base tracking-tight text-slate-950 dark:text-white">
              <span className="flex items-center justify-center h-8.5 w-8.5 rounded-xl bg-indigo-650 text-white shadow-md shadow-indigo-650/15">
                <Scale className="h-4.5 w-4.5" />
              </span>
              <span>
                CompareX <span className="text-[10px] font-sans font-semibold tracking-wider uppercase ml-1 px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-950">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-indigo-650 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Toolbar Actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle />

            {/* Compare Counter Widget */}
            <Link
              to="/compare"
              className="p-2 rounded-xl text-slate-550 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850/80 transition-all relative"
              title="Comparison Board"
            >
              <Scale className="h-4.5 w-4.5" />
              {compareList.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-650 text-[9px] font-extrabold text-white animate-in zoom-in duration-300">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* Wishlist Heart Widget */}
            <Link
              to="/wishlist"
              className="p-2 rounded-xl text-slate-550 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850/80 transition-all relative"
              title="Saved Products"
            >
              <Heart className="h-4.5 w-4.5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-600 text-[9px] font-extrabold text-white animate-in zoom-in duration-300">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={onMobileMenuToggle}
              className="p-2 rounded-xl text-slate-550 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-850/80 transition-colors md:hidden"
              aria-label="Toggle Mobile Menu"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

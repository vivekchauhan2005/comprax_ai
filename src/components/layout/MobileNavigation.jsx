import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, LayoutDashboard, Phone, Scale, Heart, Info } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';

/**
 * Slide-out drawer navigation for tablet and mobile screens.
 */
export const MobileNavigation = ({ isOpen, onClose }) => {
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  if (!isOpen) return null;

  const menuItems = [
    { name: 'Home', path: '/', icon: LayoutDashboard },
    { name: 'Products Catalog', path: '/products', icon: Phone },
    { name: 'Compare Board', path: '/compare', icon: Scale, badge: compareList.length },
    { name: 'Wishlist', path: '/wishlist', icon: Heart, badge: wishlist.length },
    { name: 'About CompareX', path: '/about', icon: Info },
  ];

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Sidebar Drawer */}
      <div className="relative flex flex-col w-full max-w-xs bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full p-5 space-y-6 shadow-xl animate-in slide-in-from-left duration-200 z-10">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-slate-950 dark:text-white text-base">
            CompareX AI
          </span>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-400'
                      : 'text-slate-650 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="px-2 py-0.5 text-[9px] font-extrabold rounded-full bg-indigo-650 text-white animate-in zoom-in duration-300">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;

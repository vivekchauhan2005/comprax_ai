import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Phone, Scale, Heart, Info, Star } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import { useProducts } from '../../context/ProductContext';

/**
 * Desktop Sidebar Navigation showing navigation links and quick stats.
 */
export const Sidebar = () => {
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();
  const { products } = useProducts();

  const menuItems = [
    { name: 'Home', path: '/', icon: LayoutDashboard },
    { name: 'Products Catalog', path: '/products', icon: Phone },
    { name: 'Compare Board', path: '/compare', icon: Scale, badge: compareList.length },
    { name: 'Wishlist', path: '/wishlist', icon: Heart, badge: wishlist.length },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200/60 dark:border-slate-850/80 bg-white/30 dark:bg-slate-950/20 h-[calc(100vh-4rem)] sticky top-16 p-4 space-y-6 overflow-y-auto select-none">
      {/* Menu Navigation */}
      <div className="space-y-1">
        <h4 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 mb-2">
          Menu
        </h4>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-450 hover:bg-slate-100 dark:hover:bg-slate-850/70 hover:text-slate-900 dark:hover:text-slate-200'
                }`
              }
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="px-1.5 py-0.5 text-[9px] font-extrabold rounded-full bg-indigo-650 text-white animate-in zoom-in duration-300">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Platform Stats Widget */}
      <div className="border border-slate-200/60 dark:border-slate-850/60 rounded-xl p-4 bg-white/60 dark:bg-slate-900/40 shadow-sm space-y-3">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" /> Platform Insights
        </h4>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-slate-50/50 dark:bg-slate-900/80 rounded-lg p-2.5 border border-slate-100 dark:border-slate-850">
            <span className="block text-base font-bold text-slate-950 dark:text-white font-display">
              {products.length}
            </span>
            <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
              Catalog
            </span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/80 rounded-lg p-2.5 border border-slate-100 dark:border-slate-850">
            <span className="block text-base font-bold text-slate-950 dark:text-white font-display">
              8
            </span>
            <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
              Brands
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

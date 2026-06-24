import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, Star, Eye } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import Button from '../ui/Button';

/**
 * Premium dashboard card rendering product information
 */
export const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare } = useCompare();

  const isLiked = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      {/* Wishlist Toggle Button */}
      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-3.5 right-3.5 z-10 p-2 rounded-xl border backdrop-blur-md transition-all duration-200 shadow-sm ${
          isLiked
            ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-200/50 dark:border-rose-900/50 text-rose-600'
            : 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-450 hover:bg-white dark:hover:bg-slate-850'
        }`}
        aria-label="Toggle Wishlist"
      >
        <Heart className={`h-4 w-4 transition-transform duration-250 active:scale-125 ${isLiked ? 'fill-rose-500 text-rose-600' : ''}`} />
      </button>

      {/* Image Block */}
      <div className="relative pt-[72%] bg-slate-50 dark:bg-slate-950/20 overflow-hidden border-b border-slate-100 dark:border-slate-850 select-none">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
        {/* Brand Tag */}
        <span className="absolute bottom-3 left-3 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-slate-950/80 text-white dark:bg-slate-900/80 dark:text-indigo-300 rounded-lg backdrop-blur-md border border-white/10 dark:border-slate-800/40">
          {product.brand}
        </span>
      </div>

      {/* Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Star Ratings */}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            <span className="text-xs font-semibold text-slate-850 dark:text-slate-250">
              {product.rating}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">/ 5.0</span>
          </div>

          {/* Name & Route */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-sm group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 font-display">
              {product.name}
            </h3>
          </Link>

          {/* Quick Specifications Info Panel */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-400 dark:text-slate-550 uppercase text-[9px]">RAM:</span>
              <span className="font-semibold">{product.ram} GB</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-400 dark:text-slate-550 uppercase text-[9px]">Storage:</span>
              <span className="font-semibold">{product.storage} GB</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2">
              <span className="font-bold text-slate-400 dark:text-slate-550 uppercase text-[9px]">CPU:</span>
              <span className="font-semibold truncate max-w-[170px]">{product.processor}</span>
            </div>
          </div>
        </div>

        {/* Footer & Actions */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between gap-3">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block leading-tight">
              Value
            </span>
            <span className="text-base font-bold text-slate-950 dark:text-white font-display">
              ${product.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Compare Selector Toggle */}
            <button
              onClick={() => toggleCompare(product)}
              className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                isCompared
                  ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200/60 dark:border-indigo-900/60 text-indigo-650 dark:text-indigo-400 shadow-sm shadow-indigo-500/5'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:border-slate-350 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
              title={isCompared ? "Deselect from Comparison" : "Select to Compare"}
              aria-label="Toggle Compare"
            >
              <Scale className="h-4 w-4" />
            </button>

            {/* Product Details Route */}
            <Link to={`/product/${product.id}`}>
              <Button variant="outline" size="sm" className="px-3 py-1.5 font-bold text-xs flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" /> Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { Heart, Scale, Star, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import Button from '../ui/Button';

/**
 * Details card rendering all key specs, images, descriptions and ratings meters
 */
export const ProductDetailsCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare } = useCompare();

  const isLiked = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  // Specifications breakdown rating details
  const specMeters = [
    { label: 'Product Rating', value: product.rating, max: 5, unit: '/ 5.0' },
    { label: 'System Memory (RAM)', value: product.ram, max: 16, unit: 'GB' },
    { label: 'Storage Capacity', value: product.storage, max: 512, unit: 'GB' },
    { label: 'Battery Capacity', value: product.battery, max: 6000, unit: 'mAh' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Navigation Return Button */}
      <Link 
        to="/products" 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors uppercase tracking-wider select-none"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8">
        
        {/* Left Gallery & Delivery trust tags */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative pt-[75%] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850 select-none">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/10 border border-slate-100 dark:border-slate-850 text-xs text-slate-500 dark:text-slate-400 select-none">
            <div className="flex items-center gap-1.5 flex-1 justify-center font-medium">
              <ShieldCheck className="h-4 w-4 text-indigo-650 dark:text-indigo-400" />
              <span>1 Year Warranty</span>
            </div>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-805" />
            <div className="flex items-center gap-1.5 flex-1 justify-center font-medium">
              <Truck className="h-4 w-4 text-indigo-650 dark:text-indigo-400" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Info pane & Action buttons */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Product Tag chips */}
            <div className="flex items-center gap-2 select-none">
              <span className="px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-350 rounded-lg">
                {product.brand}
              </span>
              <span className="px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/20 text-indigo-650 dark:text-indigo-400 rounded-lg">
                {product.category}
              </span>
            </div>

            {/* Title display */}
            <h1 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white font-display tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Rating Stars preview */}
            <div className="flex items-center gap-1.5 select-none">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {product.rating}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">out of 5.0 rating</span>
            </div>

            {/* Value pricing card */}
            <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-950/10 border border-slate-100 dark:border-slate-850 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block leading-tight">
                  Suggested MSRP
                </span>
                <span className="text-2xl font-bold text-slate-950 dark:text-white font-display">
                  ${product.price}
                </span>
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/15 border border-emerald-100 dark:border-emerald-950/40 px-2.5 py-1 rounded-xl select-none">
                In Stock
              </span>
            </div>

            {/* Description content */}
            <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action triggers */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-100 dark:border-slate-850 mt-6">
            <Button
              onClick={() => toggleCompare(product)}
              variant={isCompared ? 'secondary' : 'primary'}
              className="flex-1 font-semibold text-sm h-11"
            >
              <Scale className="h-4.5 w-4.5" />
              {isCompared ? 'Deselect Compare' : 'Add to Compare'}
            </Button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`h-11 px-4 rounded-xl border flex items-center justify-center transition-all duration-200 select-none ${
                isLiked
                  ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900 text-rose-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-rose-500 hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
              title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
              aria-label="Toggle Wishlist"
            >
              <Heart className={`h-5 w-5 transition-transform duration-250 active:scale-125 ${isLiked ? 'fill-rose-500 text-rose-600' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Technical Specs Details */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white mb-4 uppercase tracking-wider text-slate-450 dark:text-slate-500 font-display">
            Technical Specifications
          </h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-850">
            {[
              { label: 'Processor (CPU)', value: product.processor },
              { label: 'System Memory (RAM)', value: `${product.ram} GB` },
              { label: 'Internal Storage', value: `${product.storage} GB` },
              { label: 'Battery Capacity', value: `${product.battery} mAh` },
              { label: 'Camera Resolution', value: product.camera },
              { label: 'Display Panel', value: product.display },
            ].map((spec) => (
              <div key={spec.label} className="py-3.5 flex justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-450 dark:text-slate-500">{spec.label}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-right ml-4">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Capability Meters */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-6 shadow-sm space-y-5">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white mb-2 uppercase tracking-wider text-slate-450 dark:text-slate-500 font-display">
            Hardware Ratings Breakdown
          </h2>
          <div className="space-y-4 pt-1">
            {specMeters.map((meter) => {
              const pct = Math.min((meter.value / meter.max) * 100, 100);
              return (
                <div key={meter.label} className="space-y-1.5 select-none">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500 dark:text-slate-400">{meter.label}</span>
                    <span className="text-slate-900 dark:text-slate-200 font-semibold">
                      {meter.value} <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">{meter.unit}</span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-650 rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;

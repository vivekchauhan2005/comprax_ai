import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, Star, Eye } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';
import Button from '../ui/Button';

/**
 * List layout display rendering product rows
 */
export const ProductList = ({ products }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare } = useCompare();

  return (
    <div className="space-y-4">
      {products.map((product) => {
        const isLiked = isInWishlist(product.id);
        const isCompared = isInCompare(product.id);

        return (
          <div
            key={product.id}
            className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-750 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row p-4 gap-5 relative animate-in fade-in duration-300"
          >
            {/* Image Block */}
            <div className="w-full sm:w-48 h-32 bg-slate-50 dark:bg-slate-950/20 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-850 flex-shrink-0 relative select-none">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wider bg-slate-950/80 text-white dark:bg-slate-900/80 dark:text-indigo-300 rounded-md backdrop-blur-sm">
                {product.brand}
              </span>
            </div>

            {/* Info details */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  {/* Rating & Name */}
                  <div className="flex items-center gap-2.5">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-slate-950 dark:text-slate-50 text-base group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors truncate font-display">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-850 px-2 py-0.5 rounded-lg border border-slate-100 dark:border-slate-800">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-semibold text-slate-755 dark:text-slate-300">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <span className="text-lg font-bold text-slate-950 dark:text-white font-display">
                    ${product.price}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 max-w-2xl">
                  {product.description}
                </p>

                {/* Specs tag panel */}
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-850/80 pt-3">
                  <div>
                    <span className="font-bold uppercase text-[9px] mr-1.5 text-slate-400 dark:text-slate-550">CPU:</span>
                    <span className="font-semibold text-slate-650 dark:text-slate-350">{product.processor}</span>
                  </div>
                  <div>
                    <span className="font-bold uppercase text-[9px] mr-1.5 text-slate-400 dark:text-slate-550">Memory:</span>
                    <span className="font-semibold text-slate-650 dark:text-slate-350">{product.ram} GB</span>
                  </div>
                  <div>
                    <span className="font-bold uppercase text-[9px] mr-1.5 text-slate-400 dark:text-slate-550">Storage:</span>
                    <span className="font-semibold text-slate-650 dark:text-slate-350">{product.storage} GB</span>
                  </div>
                  <div>
                    <span className="font-bold uppercase text-[9px] mr-1.5 text-slate-400 dark:text-slate-550">Battery:</span>
                    <span className="font-semibold text-slate-650 dark:text-slate-350">{product.battery} mAh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions panel */}
            <div className="flex flex-row sm:flex-col justify-end items-center sm:items-end gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-850 pt-3 sm:pt-0 sm:pl-4 justify-between sm:justify-center">
              <div className="flex items-center gap-2 sm:mb-2">
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    isLiked
                      ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900 text-rose-600'
                      : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 text-slate-400 dark:text-slate-500 hover:text-rose-500'
                  }`}
                  title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
                  aria-label="Toggle Wishlist"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-rose-500' : ''}`} />
                </button>

                {/* Compare Button */}
                <button
                  onClick={() => toggleCompare(product)}
                  className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    isCompared
                      ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200/60 dark:border-indigo-900/60 text-indigo-650 dark:text-indigo-400'
                      : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:border-indigo-600'
                  }`}
                  title={isCompared ? "Deselect from Comparison" : "Select to Compare"}
                  aria-label="Toggle Compare"
                >
                  <Scale className="h-4 w-4" />
                </button>
              </div>

              <Link to={`/product/${product.id}`} className="w-auto">
                <Button variant="outline" size="sm" className="font-bold text-xs py-2 px-3 flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" /> Details
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

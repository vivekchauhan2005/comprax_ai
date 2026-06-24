import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useNavigate } from 'react-router-dom';
import ProductGrid from '../../components/product/ProductGrid';
import EmptyState from '../../components/common/EmptyState';
import { Heart, Trash2 } from 'lucide-react';

/**
 * Wishlist management page listing saved smartphone bookmarks
 */
export const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 py-4 animate-in fade-in duration-300">
      
      {/* Header section */}
      <div className="flex items-center justify-between select-none">
        <div>
          <h1 className="text-2xl font-bold text-slate-950 dark:text-white font-display">
            Saved Wishlist
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-550 mt-0.5">
            Manage your bookmarked smartphones ({wishlist.length} saved)
          </p>
        </div>
        {wishlist.length > 0 && (
          <button
            onClick={clearWishlist}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-450 transition-colors bg-rose-50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-900/40 px-3 py-2 rounded-xl cursor-pointer active:scale-98"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="Wishlist is Empty"
          description="Save smartphones while browsing the catalog to review or compare them here later."
          actionText="Browse Catalog"
          onAction={() => navigate('/products')}
        />
      ) : (
        <ProductGrid products={wishlist} />
      )}
    </div>
  );
};

export default Wishlist;

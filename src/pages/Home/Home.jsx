import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Star, Smartphone, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import Button from '../../components/ui/Button';
import ProductCard from '../../components/product/ProductCard';

/**
 * CompareX AI dashboard home screen landing page
 */
export const Home = () => {
  const { products, loading } = useProducts();

  // Pick three top flagships for visual featured grid representation
  const featuredProducts = products
    .filter((p) => ['iphone-16-pro-max', 'galaxy-s24-ultra', 'pixel-9-pro-xl'].includes(p.id))
    .slice(0, 3);

  const stats = [
    { label: 'Devices Tracked', value: '20+', icon: Smartphone },
    { label: 'Analyses Run', value: '15k+', icon: Scale },
    { label: 'User Recommendation', value: '98%', icon: Star },
    { label: 'Data Authenticity', value: '100%', icon: ShieldCheck },
  ];

  const popularBrands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Nothing', 'Xiaomi', 'ASUS', 'Sony'];

  return (
    <div className="space-y-16 py-4 animate-in fade-in duration-300">
      
      {/* 1. Beautiful Hero landing block */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 md:p-16 border border-slate-850 shadow-xl bg-grid-pattern select-none">
        {/* Glowing ambient blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-650/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-650/10 rounded-full blur-[90px]" />
        
        <div className="max-w-2xl relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight tracking-tight">
            Compare Smartphones <br />
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
              With Absolute Clarity.
            </span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg">
            Stop scrolling through endless spec sheets. CompareX AI analyzes CPU architectures, memory channels, battery rates, and display panels side-by-side to highlight the real value winner.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/products">
              <Button variant="primary" size="lg" className="px-6 font-semibold">
                Browse Catalog
              </Button>
            </Link>
            <Link to="/compare">
              <Button variant="outline" size="lg" className="border-slate-800 hover:bg-slate-900 text-white px-6 font-semibold">
                Compare Devices
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Platform Statistics grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 select-none">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-650 dark:text-indigo-400 rounded-xl">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-950 dark:text-white font-display leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Popular Brands Slider/Display */}
      <section className="space-y-4 select-none">
        <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-450 dark:text-slate-500">
          Supported Brands
        </h3>
        <div className="flex flex-wrap gap-3">
          {popularBrands.map((brand) => (
            <span 
              key={brand} 
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850/80 rounded-xl shadow-sm hover:border-slate-350 dark:hover:border-slate-750 transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Featured Products Catalog snippet */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950 dark:text-white font-display flex items-center gap-1.5 select-none">
              <Flame className="h-5 w-5 text-rose-500 fill-rose-500" /> Featured Flagships
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Top performing smartphones compared this week
            </p>
          </div>
          <Link to="/products" className="text-xs font-bold text-indigo-650 dark:text-indigo-400 hover:underline select-none">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-8 text-xs text-slate-450">Loading flagships...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* 5. Platform Call To Action Banner */}
      <section className="rounded-3xl border border-indigo-100 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-950/10 dark:to-purple-950/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-lg text-center md:text-left select-none">
          <h3 className="text-lg font-bold text-slate-955 dark:text-white font-display">
            Ready to find your next smartphone?
          </h3>
          <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
            Select any two devices on our compare board and let CompareX AI compute the value winner automatically.
          </p>
        </div>
        <Link to="/compare" className="w-full md:w-auto select-none">
          <Button variant="primary" size="md" className="w-full md:w-auto font-semibold px-6 h-11">
            Open Compare Board
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

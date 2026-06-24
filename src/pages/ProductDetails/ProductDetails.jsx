import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProducts } from '../../services/api';
import ProductDetailsCard from '../../components/product/ProductDetailsCard';
import ProductCard from '../../components/product/ProductCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { Smartphone } from 'lucide-react';
import EmptyState from '../../components/common/EmptyState';

/**
 * Product Details Page fetching details for a single smartphone model
 */
export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndRelated = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch current product details
        const resProduct = await getProductById(id);
        const currentProduct = resProduct.data;
        setProduct(currentProduct);

        // Fetch other products to build related options list
        const resAll = await getProducts();
        const allProducts = resAll.data;
        
        // Select related items: same brand or same category, excluding the current phone
        const relatedItems = allProducts
          .filter(
            (p) =>
              p.id !== id &&
              (p.brand === currentProduct.brand || p.category === currentProduct.category)
          )
          .slice(0, 3);
          
        setRelated(relatedItems);
      } catch (err) {
        console.error('Failed to load product details:', err);
        setError('Smartphone details could not be found.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndRelated();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (error || !product) {
    return (
      <EmptyState
        icon={Smartphone}
        title="Product Not Found"
        description="The smartphone details could not be loaded or the device does not exist."
        actionText="Return to Catalog"
        onAction={() => navigate('/products')}
      />
    );
  }

  return (
    <div className="space-y-12 py-4 animate-in fade-in duration-300">
      {/* 1. Main Product Specs Overview */}
      <ProductDetailsCard product={product} />

      {/* 2. Alternative Options Section */}
      {related.length > 0 && (
        <section className="space-y-6">
          <div className="select-none">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white font-display">
              Alternative Options
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-550 mt-0.5">
              Similar smartphones that you might want to consider
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getProducts } from '../services/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Grid items per page

  // Fetch products on mount
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  // Compute unique brands and categories for filter controls
  const brands = useMemo(() => {
    return [...new Set(products.map((p) => p.brand))].sort();
  }, [products]);

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))].sort();
  }, [products]);

  // Apply filters, search, and sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.processor.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, searchQuery, selectedBrands, selectedCategories, sortBy]);

  // Reset pagination when filter criteria changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedBrands, selectedCategories, sortBy]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSortBy('default');
    setCurrentPage(1);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        selectedBrands,
        setSelectedBrands,
        toggleBrand,
        selectedCategories,
        setSelectedCategories,
        toggleCategory,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        totalPages,
        brands,
        categories,
        filteredProducts,
        paginatedProducts,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['全部', '肉类', '海鲜', '蔬菜'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProducts = useMemo(() => {
    if (activeCategory === '全部') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] font-bold">全系列食材目录</h2>
          <p className="text-[#5D5A53] max-w-xl font-light">
            共计 {PRODUCTS.length} 种优质食材，每日凌晨直采，江西商会品质监督。
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 w-full max-w-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-sm tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#1A3C34] text-white border-[#1A3C34]' 
                    : 'bg-white text-[#1A3C34] border-[#1A3C34]/10 hover:border-[#1A3C34]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#A8A29E]">暂无相关分类食材</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

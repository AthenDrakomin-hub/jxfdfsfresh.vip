
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer bg-white p-4 shadow-sm hover:shadow-xl transition-all" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-square overflow-hidden bg-[#EBE7DE]">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
            <span className="bg-[#1A3C34] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                每日鲜配
            </span>
        </div>
      </div>
      
      <div className="text-left">
        <h3 className="text-xl font-bold text-[#1A3C34] mb-1 group-hover:text-[#DAA520] transition-colors">{product.name}</h3>
        <p className="text-xs text-[#5D5A53] mb-4 h-10 overflow-hidden">{product.tagline}</p>
        <div className="flex justify-between items-end border-t border-gray-100 pt-4">
            <span className="text-lg font-bold text-[#DAA520]">每日实价</span>
            <span className="text-[10px] text-[#A8A29E] uppercase tracking-widest">点击查看详情</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

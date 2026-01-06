
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#1A3C34]/30 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#F5F2EB] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#D6D1C7] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D6D1C7]">
          <h2 className="text-xl font-serif text-[#1A3C34] font-bold">我的询价清单 ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-[#A8A29E] hover:text-[#1A3C34] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-[#A8A29E]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="font-light text-[#5D5A53]">清单空空如也，请先添加食材。</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up bg-white p-3 rounded-xl border border-[#D6D1C7]/30">
                <div className="w-20 h-20 bg-[#EBE7DE] flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#1A3C34]">{item.name}</h3>
                    <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest mt-1">{item.category} · 每日鲜配</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-xs text-[#A8A29E] hover:text-red-500 self-start underline underline-offset-4 transition-colors"
                  >
                    移出清单
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#D6D1C7] bg-[#EBE7DE]/30">
          <p className="text-xs text-[#1A3C34] mb-4 text-center">注：生鲜价格随市场波动，点击下方按钮生成订单后通过 Telegram 获取实时报价。</p>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[#DAA520] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#1A3C34] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl rounded-full"
          >
            提交询价单 ({items.length} 件)
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

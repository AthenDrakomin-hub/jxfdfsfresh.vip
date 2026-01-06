
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';
import { CONTACTS, BRAND_NAME, CHAMBER_NAME, CHAIRMAN_NAME } from '../constants';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const generateTelegramLink = () => {
    const list = items.map((item, idx) => `【${idx + 1}】${item.name}`).join('\n');
    const message = `尊敬的【${CHAMBER_NAME}】邱总及大丰收业务团队：\n\n我是来自（${formData.address || '未填公司/地址'}）的客户 ${formData.name || '（未填）'}。\n\n我方通过“大丰收”平台生成了以下采购询价清单：\n------------------------\n${list}\n------------------------\n\n联系电话：${formData.phone || '未填写'}\n特别说明：${formData.note || '无'}\n\n请按【今日实时行情】告知我方报价及配送方案，感谢支持！`;
    const encodedMessage = encodeURIComponent(message);
    return `${CONTACTS.telegram}?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateTelegramLink();
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F9F7F2] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A8A29E] hover:text-[#1A3C34] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          返回食材目录
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-4xl font-serif text-[#1A3C34] font-bold mb-4">采购询价函</h1>
            <p className="text-sm text-[#5D5A53] mb-12">请填写对接人信息。点击提交后将自动为您生成标准化询价单，并跳转 Telegram 直接通知邱总业务团队。</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-[10px] uppercase tracking-widest text-[#A8A29E] mb-2">对接人姓名 / 职位</label>
                   <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="例如：张经理" 
                    className="w-full bg-white border border-[#D6D1C7] rounded-lg px-4 py-3 text-[#1A3C34] outline-none focus:border-[#DAA520] transition-colors"
                   />
                </div>
                <div>
                   <label className="block text-[10px] uppercase tracking-widest text-[#A8A29E] mb-2">联系电话 / Telegram</label>
                   <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="您的有效联系方式" 
                    className="w-full bg-white border border-[#D6D1C7] rounded-lg px-4 py-3 text-[#1A3C34] outline-none focus:border-[#DAA520] transition-colors"
                   />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#A8A29E] mb-2">单位名称 / 配送地址</label>
                <input 
                  required
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="例如：中资企业园区 / 某单位食堂" 
                  className="w-full bg-white border border-[#D6D1C7] rounded-lg px-4 py-3 text-[#1A3C34] outline-none focus:border-[#DAA520] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#A8A29E] mb-2">特别要求（选填）</label>
                <textarea 
                  value={formData.note}
                  onChange={(e) => setFormData({...formData, note: e.target.value})}
                  placeholder="例如：需要按军队标准切割、需要月结发票等" 
                  rows={4}
                  className="w-full bg-white border border-[#D6D1C7] rounded-lg px-4 py-3 text-[#1A3C34] outline-none focus:border-[#DAA520] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#DAA520] text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-[#1A3C34] transition-all shadow-xl"
              >
                唤起 Telegram 询价 (通知邱总团队)
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-[#A8A29E] uppercase tracking-widest">
                 <svg className="w-3 h-3 text-[#DAA520]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                 商会背书 · 诚信供应 · 邱总监制
              </div>
            </form>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#1A3C34] font-bold mb-8">询价清单内容 ({items.length})</h2>
            
            <div className="space-y-4 mb-8 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-[#D6D1C7]/30">
                    <div className="w-12 h-12 bg-[#EBE7DE] rounded-lg overflow-hidden flex-shrink-0">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                       <h3 className="font-bold text-[#1A3C34] text-base">{item.name}</h3>
                       <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest">符合商会质检标准</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-[#1A3C34] p-8 rounded-3xl text-white">
              <h4 className="font-bold text-[#DAA520] mb-4">关于报价说明</h4>
              <p className="text-sm text-white/70 leading-relaxed space-y-2">
                生鲜价格受市场波动较大。业务团队收到您的 Telegram 清单后，会立即匹配【今日邱总签批价格】并与您取得联系。
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                 <span className="text-xs font-serif italic">大丰收配送有限公司</span>
                 <span className="text-[10px] opacity-50">SINCE 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

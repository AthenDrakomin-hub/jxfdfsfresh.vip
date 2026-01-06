
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME, CONTACTS } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#1A3C34] pt-24 pb-12 px-6 text-white/70">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 8L82 22V50C82 70 68 88 50 94C32 88 18 70 18 50V22L50 8Z" fill="white" fillOpacity="0.05" stroke="#DAA520" strokeWidth="2"/>
              <path d="M42 45C42 45 40 35 50 30M50 30C60 35 58 45 58 45M50 30V75M38 55C38 55 35 48 45 45M62 55C62 55 65 48 55 45M40 70C40 70 38 62 48 60M60 70C60 70 62 62 52 60" stroke="#DAA520" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <h4 className="text-3xl font-serif text-[#DAA520] font-bold tracking-tighter leading-none">{BRAND_NAME}</h4>
              <span className="text-[10px] text-white/50 uppercase tracking-[0.3em] mt-1 font-bold">食材批发配送有限公司</span>
            </div>
          </div>
          <p className="max-w-md font-light leading-relaxed mb-10 text-sm">
            成立于 2019 年，由菲律宾江西商会荣誉背书。致力于为政府部门、军队机构及在菲华人企业提供最高安全等级的食材供应链解决方案。
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-4 border-b border-white/5 pb-3">
                <span className="text-[#DAA520] font-bold min-w-[100px]">董事长热线:</span>
                <a href={`tel:${CONTACTS.chairman}`} className="text-white font-mono hover:text-[#DAA520] transition-colors">{CONTACTS.chairman}</a>
            </p>
            <p className="flex items-center gap-4 border-b border-white/5 pb-3">
                <span className="text-[#DAA520] font-bold min-w-[100px]">业务咨询:</span>
                <a href={`tel:${CONTACTS.chef}`} className="text-white font-mono hover:text-[#DAA520] transition-colors">{CONTACTS.chef}</a>
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-8 tracking-widest text-xs uppercase">分类采购</h4>
          <ul className="space-y-5 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#DAA520] transition-colors">新鲜肉类</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#DAA520] transition-colors">精选蔬菜</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#DAA520] transition-colors">海鲜水产</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#DAA520] transition-colors">干货调料</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-8 tracking-widest text-xs uppercase">关于我们</h4>
          <ul className="space-y-5 font-light text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#DAA520] transition-colors">商会简介</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#DAA520] transition-colors">最新动态</a></li>
            <li>质量认证</li>
            <li>加入商会</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-white mb-8 tracking-widest text-xs uppercase">在线询价</h4>
          <p className="text-xs mb-8 opacity-60 leading-relaxed">由于生鲜行情每日变动，请点击下方按钮直接跳转 Telegram 获取邱总团队为您提供的实时报价单。</p>
          <a 
            href={CONTACTS.telegram} 
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#DAA520] text-white rounded-full font-bold hover:bg-white hover:text-[#1A3C34] transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.22z"/></svg>
            跳转 Telegram 询价
          </a>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] opacity-40">
        <p>© 2025 大丰收食材批发配送有限公司 | 菲律宾江西商会 荣誉出品</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span>始于 2019</span>
          <span>菲律宾驻华大使馆商务背书</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { CONTACTS, CHAMBER_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#1A3C34]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000" 
            alt="Fresh Market" 
            className="w-full h-full object-cover brightness-[0.4] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34] via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#DAA520]"></span>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-[#DAA520]">
                {CHAMBER_NAME}荣誉出品
            </span>
            <span className="h-[1px] w-8 bg-[#DAA520]"></span>
          </div>

          <h1 className="text-6xl md:text-9xl font-serif font-bold text-white tracking-tighter mb-8 drop-shadow-2xl">
            大丰收 <span className="text-[#DAA520] font-light">Fresh</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed mb-12">
            顶级餐饮供应链，每日实时行情。<br/>
            菲律宾驻华大使馆商务背书 · 全马尼拉新鲜达
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#products" 
              className="px-14 py-5 bg-[#DAA520] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A3C34] transition-all duration-500 shadow-[0_0_20px_rgba(218,165,32,0.4)]"
            >
              浏览 90+ 种食材
            </a>
            <a 
              href={CONTACTS.telegram}
              target="_blank"
              className="px-14 py-5 bg-white/5 backdrop-blur-xl text-white border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Telegram 实时询价
            </a>
          </div>

          <div className="mt-20 flex gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
             <div className="flex flex-col items-center">
                <span className="text-[10px] text-white/60 tracking-widest mb-2 uppercase">信任背书</span>
                <span className="text-xs text-white font-bold tracking-widest">江西商会</span>
             </div>
             <div className="w-[1px] h-8 bg-white/20"></div>
             <div className="flex flex-col items-center">
                <span className="text-[10px] text-white/60 tracking-widest mb-2 uppercase">官方推荐</span>
                <span className="text-xs text-white font-bold tracking-widest">菲律宾驻华大使馆</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white/40">向下滚动查看目录</span>
        <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

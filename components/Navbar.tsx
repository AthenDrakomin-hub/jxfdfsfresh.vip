
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME, CONTACTS } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const activeColor = (scrolled || mobileMenuOpen) ? 'text-[#1A3C34]' : 'text-white';
  const logoGold = '#DAA520';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo Section */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
            }}
            className="flex items-center gap-3 group z-50"
          >
            <div className="relative">
              {/* 大丰收定制 Logo: 盾牌 + 麦穗 */}
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110">
                <path d="M50 8L82 22V50C82 70 68 88 50 94C32 88 18 70 18 50V22L50 8Z" fill={scrolled || mobileMenuOpen ? '#1A3C34' : '#1A3C34'} fillOpacity="0.05" stroke={scrolled || mobileMenuOpen ? '#1A3C34' : logoGold} strokeWidth="3"/>
                <path d="M42 45C42 45 40 35 50 30M50 30C60 35 58 45 58 45M50 30V75M38 55C38 55 35 48 45 45M62 55C62 55 65 48 55 45M40 70C40 70 38 62 48 60M60 70C60 70 62 62 52 60" stroke={logoGold} strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter transition-colors duration-500 ${activeColor}`}>
                {BRAND_NAME} <span className="text-[#DAA520]">生鲜</span>
              </span>
              <span className={`text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${activeColor} opacity-80`}>
                食材批发配送有限公司
              </span>
            </div>
          </a>
          
          <div className={`hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${activeColor}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-[#DAA520] transition-colors">食材目录</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#DAA520] transition-colors">关于商会</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#DAA520] transition-colors">商会动态</a>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white transition-all rounded-full">
                实时询价
            </a>
          </div>

          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${activeColor}`}>
            <button 
              onClick={(e) => { e.preventDefault(); onOpenCart(); }}
              className="relative flex items-center gap-2 group"
            >
              <div className="p-2 rounded-full border border-current group-hover:bg-[#DAA520] group-hover:border-[#DAA520] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">询价清单 ({cartCount})</span>
            </button>
            
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${activeColor}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-10 text-2xl font-serif font-bold text-[#1A3C34]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')}>食材目录</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>关于商会</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')}>商会动态</a>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="text-[#DAA520]">实时询价 (TG)</a>
          </div>
      </div>
    </>
  );
};

export default Navbar;

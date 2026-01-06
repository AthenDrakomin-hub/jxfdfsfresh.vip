
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';
import { BRAND_NAME } from '../constants';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] animate-fade-in-up">
       {/* Hero Image */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className="bg-[#F5F2EB] p-8 md:p-20 shadow-2xl rounded-3xl">
             <div className="flex justify-between items-center mb-12 border-b border-[#D6D1C7] pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A8A29E] hover:text-[#1A3C34] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  返回动态列表
                </button>
                <span className="text-xs font-bold uppercase tracking-widest text-[#DAA520]">{article.date}</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-12 leading-tight text-center font-bold">
               {article.title}
             </h1>

             <div className="prose prose-stone prose-lg mx-auto font-light leading-loose text-[#5D5A53]">
               {article.content}
             </div>
             
             <div className="mt-20 pt-12 border-t border-[#D6D1C7] flex flex-col items-center gap-4">
                 <div className="flex items-center gap-2">
                   <span className="h-[1px] w-8 bg-[#DAA520]"></span>
                   <span className="text-2xl font-serif font-bold text-[#1A3C34]">{BRAND_NAME}</span>
                   <span className="h-[1px] w-8 bg-[#DAA520]"></span>
                 </div>
                 <span className="text-[10px] uppercase tracking-[0.4em] text-[#A8A29E]">官方权威发布</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;

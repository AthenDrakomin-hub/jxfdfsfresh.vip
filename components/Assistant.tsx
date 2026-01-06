
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { FAQ_TEMPLATES, CONTACTS } from '../constants';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#F5F2EB] rounded-2xl shadow-2xl w-[90vw] sm:w-[400px] h-[600px] mb-6 flex flex-col overflow-hidden border border-[#D6D1C7] animate-slide-up-fade">
          {/* Header */}
          <div className="bg-[#1A3C34] p-6 text-white flex justify-between items-center">
            <div>
                <h3 className="font-serif italic text-xl">服务中心</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-white/60 uppercase tracking-widest">自助问答中</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Contacts Bar */}
          <div className="bg-[#EBE7DE] px-6 py-3 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-[#D6D1C7]">
            <a href={`tel:${CONTACTS.chairman}`} className="hover:text-[#DAA520]">董事长: {CONTACTS.chairman}</a>
            <span className="text-[#D6D1C7]">|</span>
            <a href={`tel:${CONTACTS.chef}`} className="hover:text-[#DAA520]">顾问: {CONTACTS.chef}</a>
          </div>

          {/* FAQ List Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
            <p className="text-xs text-[#A8A29E] uppercase tracking-widest mb-6 border-b pb-2">常见问题解答 (FAQ)</p>
            {FAQ_TEMPLATES.map((item, idx) => (
              <div key={idx} className="border border-[#D6D1C7] rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className={`w-full text-left p-4 text-sm font-bold flex justify-between items-center transition-colors ${activeFaq === idx ? 'bg-[#F5F2EB] text-[#1A3C34]' : 'bg-white text-[#5D5A53] hover:bg-gray-50'}`}
                >
                  {item.question}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-[300px] p-4 bg-[#F9F7F2]' : 'max-h-0'}`}>
                   <p className="text-sm text-[#5D5A53] leading-relaxed italic">
                     {item.answer}
                   </p>
                </div>
              </div>
            ))}
            
            <div className="pt-8 text-center">
                <p className="text-xs text-[#A8A29E] mb-4">以上没能解决您的问题？</p>
                <a 
                    href={CONTACTS.telegram} 
                    target="_blank"
                    className="inline-block px-8 py-3 bg-[#DAA520] text-white text-xs font-bold rounded-full uppercase tracking-widest hover:bg-[#1A3C34] transition-colors shadow-lg"
                >
                    直接联系业务员
                </a>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#DAA520] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-all duration-500 z-50 group"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
            </div>
        )}
      </button>
    </div>
  );
};

export default Assistant;

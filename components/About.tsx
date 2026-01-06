
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { CHAMBER_NAME, FOUNDER_NAME, CHAIRMAN_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F9F7F2]">
      
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A3C34] leading-tight font-bold">
            团结赣商，<br/>服务全菲。
          </h2>
          <div className="mt-12 p-6 bg-white border border-[#D6D1C7] rounded-2xl">
            <span className="block text-xs uppercase tracking-widest text-[#A8A29E] mb-2">创办历史</span>
            <p className="text-[#1A3C34] font-bold">自 2019 年起</p>
          </div>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            <strong>{CHAMBER_NAME}</strong>于 2019 年在<strong>{FOUNDER_NAME}</strong>带领下，由江西省内各地领域企业大家共同于菲律宾创建。商会旨在团结在菲律宾的江西籍企业家和华侨华人，促进经贸合作与交流，推动两地经济发展。
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            旗下<strong>大丰收配送有限公司</strong>董事长由江西商会促进经济会长<strong>{CHAIRMAN_NAME}</strong>担任。公司旨在为该国政府机关部门、军队食堂及国内在菲华人企业提供高标准的食材配送服务。
          </p>
          
          <div className="p-8 bg-white border-l-4 border-[#DAA520] shadow-sm mb-12">
            <h4 className="font-bold text-[#1A3C34] mb-4">核心业务架构</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#5D5A53]">
                <li>• <strong>政府/军队配送：</strong>高标准的资质与供应体系</li>
                <li>• <strong>华人企业集采：</strong>助力国内企业在菲食堂建设</li>
                <li>• <strong>经贸合作交流：</strong>商会会长单位直接领导与背书</li>
                <li>• <strong>邱总亲自监制：</strong>团结赣籍力量，保障餐桌安全</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
             <img 
              src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=600" 
              alt="Quality Control" 
              className="w-full h-[300px] object-cover rounded-3xl grayscale-[0.2] shadow-lg"
             />
             <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
              alt="Supply Logistics" 
              className="w-full h-[300px] object-cover rounded-3xl grayscale-[0.2] shadow-lg"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

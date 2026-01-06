
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const BRAND_NAME = '大丰收';
export const CHAMBER_NAME = '菲律宾江西商会';
export const FOUNDER_NAME = '许俊华先生';
export const CHAIRMAN_NAME = '邱总';

export const CONTACTS = {
  chairman: '9614964569',
  chef: '09552461263',
  telegram: 'https://t.me/gd55599999'
};

export const FAQ_TEMPLATES = [
  {
    question: "关于菲律宾江西商会创始背景",
    answer: "菲律宾江西商会于 2019 年在许俊华先生带领下，由江西省内各地领域企业大家共同于菲律宾创建。旨在团结在菲律宾的江西籍企业家和华侨华人，促进经贸合作。"
  },
  {
    question: "大丰收配送有限公司的背景",
    answer: "大丰收配送有限公司董事长由江西商会促进经济会长邱总亲自担任。作为商会旗下的核心配送实体，我们承载着推动两地经济发展的重要使命。"
  },
  {
    question: "我们的核心服务对象",
    answer: "我们专业为菲律宾政府机关部门、军队食堂以及国内在菲华人企业提供高标准的食材配送服务。拥有完善的政府/军队供应资质。"
  },
  {
    question: "大宗采购及发票合规性",
    answer: "我们提供符合菲律宾法律要求的 BIR 正规发票。针对政府、军队及大型企业，我们支持公对公结算及定制化的对账流程。"
  },
  {
    question: "关于配送的安全性保障",
    answer: "所有配送食材均通过商会品质小组与邱总亲自监督。我们不仅配送食材，更是在传递江西商会的信誉与乡情，确保每一份物资的安全、准时。"
  }
];

const createProduct = (id: string, name: string, category: '肉类' | '海鲜' | '蔬菜', url: string, tagline: string = '新鲜直采 · 每日送达'): Product => ({
  id,
  name,
  category,
  imageUrl: url,
  tagline,
  description: `${name}，由江西商会品质小组严格监制，符合政府、军队及中资企业供应标准。`,
  price: 0,
  features: ['商会监制', '政府/军队标准', '中资企业集采']
});

export const PRODUCTS: Product[] = [
  // 猪肉类
  createProduct('p1', '瘦肉', '肉类', 'https://aka.doubaocdn.com/s/39U81vo5jo'),
  createProduct('p2', '五花肉', '肉类', 'https://aka.doubaocdn.com/s/nrJC1vo5jo'),
  createProduct('p3', '排骨', '肉类', 'https://aka.doubaocdn.com/s/cFam1vo5jo'),
  createProduct('p4', '里脊肉', '肉类', 'https://aka.doubaocdn.com/s/jLca1vo5jo'),
  createProduct('p5', '大骨', '肉类', 'https://aka.doubaocdn.com/s/CCd71vo5jo'),
  createProduct('p6', '龙骨', '肉类', 'https://aka.doubaocdn.com/s/UScw1vo5jo'),
  createProduct('p7', '猪手', '肉类', 'https://aka.doubaocdn.com/s/ZDJx1vo5k4'),
  createProduct('p8', '猪脚', '肉类', 'https://aka.doubaocdn.com/s/TexJ1vo5k3'),
  createProduct('p9', '猪耳朵', '肉类', 'https://aka.doubaocdn.com/s/oK2d1vo5k3'),
  createProduct('p10', '猪尾巴', '肉类', 'https://aka.doubaocdn.com/s/yruf1vo5k4'),
  createProduct('p11', '猪腰', '肉类', 'https://aka.doubaocdn.com/s/z9RP1vo5k3'),
  createProduct('p12', '猪肝', '肉类', 'https://aka.doubaocdn.com/s/izNu1vo5k3'),
  createProduct('p13', '猪心', '肉类', 'https://aka.doubaocdn.com/s/8LTC1vo5kK'),
  createProduct('p14', '猪大肠', '肉类', 'https://aka.doubaocdn.com/s/Ls9f1vo5kK'),
  createProduct('p15', '肥肠', '肉类', 'https://aka.doubaocdn.com/s/lmUU1vo5kJ'),
  createProduct('p16', '小肠', '肉类', 'https://aka.doubaocdn.com/s/RHE01vo5kJ'),
  // 牛肉类
  createProduct('b1', '牛肉', '肉类', 'https://aka.doubaocdn.com/s/PnVO1vo5kJ'),
  createProduct('b2', '牛排', '肉类', 'https://aka.doubaocdn.com/s/rJOp1vo5kK'),
  createProduct('b3', '牛腱子', '肉类', 'https://aka.doubaocdn.com/s/ArVo1vo5kZ'),
  createProduct('b4', '牛脚', '肉类', 'https://aka.doubaocdn.com/s/0lJP1vo5kZ'),
  createProduct('b5', '牛心', '肉类', 'https://aka.doubaocdn.com/s/CI8y1vo5ka'),
  createProduct('b6', '牛百叶', '肉类', 'https://aka.doubaocdn.com/s/4XGe1vo5kZ'),
  createProduct('b7', '牛筋', '肉类', 'https://aka.doubaocdn.com/s/Idtm1vo5ka'),
  createProduct('b8', '牛肚', '肉类', 'https://aka.doubaocdn.com/s/FyLw1vo5kZ'),
  createProduct('b9', '牛鞭', '肉类', 'https://aka.doubaocdn.com/s/LvGE1vo5kq'),
  createProduct('b10', '牛杂', '肉类', 'https://aka.doubaocdn.com/s/sJug1vo5kq'),
  createProduct('b11', '牛里脊', '肉类', 'https://aka.doubaocdn.com/s/YxIr1vo5kp'),
  // 其他肉类
  createProduct('o1', '羊肉', '肉类', 'https://aka.doubaocdn.com/s/RFBO1vo5kp'),
  createProduct('o2', '鸭子', '肉类', 'https://aka.doubaocdn.com/s/byyn1vo5kq'),
  createProduct('o3', '新鲜土鸡', '肉类', 'https://aka.doubaocdn.com/s/gQKq1vo5kq'),
  createProduct('o4', '鹅肉', '肉类', 'https://aka.doubaocdn.com/s/7D4E1vo5l7'),
  createProduct('o5', '大番鸭', '肉类', 'https://aka.doubaocdn.com/s/huXr1vo5l7'),
  createProduct('o6', '新鲜青蛙', '肉类', 'https://aka.doubaocdn.com/s/r5P31vo5l8'),
  createProduct('o7', '生态甲鱼', '肉类', 'https://aka.doubaocdn.com/s/6yTJ1vo5l7'),
  // 海鲜类
  createProduct('s1', '黑鱼', '海鲜', 'https://aka.doubaocdn.com/s/BmT01vo5l6'),
  createProduct('s2', '石斑鱼', '海鲜', 'https://aka.doubaocdn.com/s/zMXS1vo5l8'),
  createProduct('s3', '沙尖鱼', '海鲜', 'https://aka.doubaocdn.com/s/LGEk1vo5lP'),
  createProduct('s4', '罗非鱼', '海鲜', 'https://aka.doubaocdn.com/s/QUIz1vo5lP'),
  createProduct('s5', '鸡腿', '肉类', 'https://aka.doubaocdn.com/s/JZSN1vo5lO'),
  createProduct('s6', '鸡翅', '肉类', 'https://aka.doubaocdn.com/s/KLeS1vo5lP'),
  createProduct('s7', '鸡胸肉', '肉类', 'https://aka.doubaocdn.com/s/pSdU1vo5lP'),
  createProduct('s8', '鸡脚', '肉类', 'https://aka.doubaocdn.com/s/v8ow1vo5lP'),
  createProduct('s9', '鸡胗', '肉类', 'https://aka.doubaocdn.com/s/kVzE1vo5li'),
  createProduct('s10', '花甲', '海鲜', 'https://aka.doubaocdn.com/s/jhQI1vo5li'),
  createProduct('s11', '丁螺', '海鲜', 'https://aka.doubaocdn.com/s/9UP21vo5li'),
  createProduct('s12', '鱿鱼', '海鲜', 'https://aka.doubaocdn.com/s/97dr1vo5li'),
  createProduct('s13', '鲜虾', '海鲜', 'https://aka.doubaocdn.com/s/eIfA1vo5lj'),
  // 蔬菜
  createProduct('v1', '茄子', '蔬菜', 'https://aka.doubaocdn.com/s/EqcV1vo5li'),
  createProduct('v2', '白萝卜', '蔬菜', 'https://aka.doubaocdn.com/s/Fobl1vo5m1'),
  createProduct('v3', '红萝卜', '蔬菜', 'https://aka.doubaocdn.com/s/98nv1vo5m1'),
  createProduct('v4', '玉米', '蔬菜', 'https://aka.doubaocdn.com/s/0w8H1vo5m2'),
  createProduct('v5', '南瓜', '蔬菜', 'https://aka.doubaocdn.com/s/HeMg1vo5m1'),
  createProduct('v6', '冬瓜', '蔬菜', 'https://aka.doubaocdn.com/s/hdeM1vo5m1'),
  createProduct('v7', '西红柿', '蔬菜', 'https://aka.doubaocdn.com/s/DXV91vo5m1'),
  createProduct('v8', '小黄瓜', '蔬菜', 'https://aka.doubaocdn.com/s/DVRE1vo5mL'),
  createProduct('v9', '土豆', '蔬菜', 'https://aka.doubaocdn.com/s/2f0b1vo5md'),
  createProduct('v10', '洋葱', '蔬菜', 'https://aka.doubaocdn.com/s/dWNE1vo5md'),
  createProduct('v11', '山药', '蔬菜', 'https://aka.doubaocdn.com/s/VAjl1vo5nC'),
  createProduct('v12', '四季豆', '蔬菜', 'https://aka.doubaocdn.com/s/ivOw1vo5mL'),
  createProduct('v13', '长豆角', '蔬菜', 'https://aka.doubaocdn.com/s/OLV81vo5mL'),
  createProduct('v14', '尖椒', '蔬菜', 'https://aka.doubaocdn.com/s/ivvd1vo5mL'),
  createProduct('v15', '小米椒', '蔬菜', 'https://aka.doubaocdn.com/s/TJEZ1vo5mM'),
  createProduct('v16', '大青椒', '蔬菜', 'https://aka.doubaocdn.com/s/tuoA1vo5mL'),
  createProduct('v17', '大红椒', '蔬菜', 'https://aka.doubaocdn.com/s/seUD1vo5mc'),
  createProduct('v18', '韭菜', '蔬菜', 'https://aka.doubaocdn.com/s/xRcK1vo5mc'),
  createProduct('v19', '小葱', '蔬菜', 'https://aka.doubaocdn.com/s/lzCC1vo5mc'),
  createProduct('v20', '去皮蒜', '蔬菜', 'https://aka.doubaocdn.com/s/US7z1vo5mc'),
  createProduct('v21', '大白菜', '蔬菜', 'https://aka.doubaocdn.com/s/Gcju1vo5mu'),
  createProduct('v22', '包菜', '蔬菜', 'https://aka.doubaocdn.com/s/Cs971vo5mv'),
  createProduct('v23', '生姜', '蔬菜', 'https://aka.doubaocdn.com/s/vRCz1vo5mv'),
  createProduct('v24', '小油菜', '蔬菜', 'https://aka.doubaocdn.com/s/s4og1vo5mu'),
  createProduct('v25', '大葱', '蔬菜', 'https://aka.doubaocdn.com/s/woZN1vo5mu'),
  createProduct('v26', '油麦菜', '蔬菜', 'https://aka.doubaocdn.com/s/DSv01vo5mv'),
  createProduct('v27', '莴笋', '蔬菜', 'https://aka.doubaocdn.com/s/sU0J1vo5nC'),
  createProduct('v28', '蒜薹', '蔬菜', 'https://aka.doubaocdn.com/s/5zHW1vo5nC'),
  createProduct('v29', '蒜苗', '蔬菜', 'https://aka.doubaocdn.com/s/5gCK1vo5nC'),
  createProduct('v30', '菜心', '蔬菜', 'https://aka.doubaocdn.com/s/05do1vo5na'),
  createProduct('v31', '芥兰', '蔬菜', 'https://aka.doubaocdn.com/s/BGsc1vo5nb'),
  createProduct('v32', '娃娃菜', '蔬菜', 'https://aka.doubaocdn.com/s/iSLI1vo5nb'),
  createProduct('v33', '空心菜', '蔬菜', 'https://aka.doubaocdn.com/s/HXpS1vo5ns'),
  createProduct('v34', '香菇', '蔬菜', 'https://aka.doubaocdn.com/s/sWLd1vo5nC'),
  createProduct('v35', '金针菇', '蔬菜', 'https://aka.doubaocdn.com/s/8LaA1vo5na'),
  createProduct('v36', '白玉菇', '蔬菜', 'https://aka.doubaocdn.com/s/5FWP1vo5o9'),
  createProduct('v37', '莲藕', '蔬菜', 'https://aka.doubaocdn.com/s/mbUI1vo5nC'),
  createProduct('v38', '绿豆芽', '蔬菜', 'https://aka.doubaocdn.com/s/4eRq1vo5na'),
  createProduct('v39', '黄豆芽', '蔬菜', 'https://aka.doubaocdn.com/s/Nit81vo5nb'),
  createProduct('v40', '香干', '蔬菜', 'https://aka.doubaocdn.com/s/oJV81vo5nr'),
  createProduct('v41', '千张', '蔬菜', 'https://aka.doubaocdn.com/s/4E8d1vo5nr'),
  createProduct('v42', '魔芋', '蔬菜', 'https://aka.doubaocdn.com/s/FaoS1vo5nr'),
  createProduct('v43', '茭白', '蔬菜', 'https://aka.doubaocdn.com/s/jVVC1vo5oA')
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "大丰收：江西商会的品质承诺",
        date: "2025年5月",
        excerpt: "由邱总带领的大丰收配送有限公司，不仅服务广大在菲华人，更深入服务政府机关与部队食堂。",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "信誉是商人的生命，新鲜是食材的灵魂。作为江西商会旗下的重点项目，‘大丰收’不仅是一个食材供应平台，更是团结江西籍企业家、推动两地经济发展的桥梁。"
            )
        )
    }
];

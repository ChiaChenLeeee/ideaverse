
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-gradient-to-r from-purple-100 via-white to-purple-100 text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 头像容器：在横向渐变背景下使用纯白边框，通过强化的投影效果营造悬浮感 */}
          <div className="w-48 h-48 rounded-full overflow-hidden bg-white flex-shrink-0 border-4 border-white shadow-2xl">
            <img 
              src="https://picsum.photos/400/400" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">关于我</h2>
            <p className="text-lg text-zinc-800 mb-6 leading-relaxed">
              跨领域探索的产品经理，从设计到开发，尝试复合行业的可能性：目前已涉及建筑、地理、广告、金融科技......
            </p>
            <div className="flex gap-4">
              {/* 主要按钮：采用纯黑色，与淡紫色背景形成强烈的视觉重心 */}
              <a href="#" className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg">
                联系我
              </a>
              {/* 次要按钮：采用白底，边框颜色稍微加深以适应更深的背景色 */}
              <a href="#" className="px-6 py-2 bg-white text-black border border-purple-200 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors shadow-sm">
                下载简历
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

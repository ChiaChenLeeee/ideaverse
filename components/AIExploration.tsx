
import React from 'react';

const AIExploration: React.FC = () => {
  const cards = [
    {
      title: 'AI+建筑',
      desc: 'AI辅助评估测评户型、室内布局设计',
      link: '#'
    },
    {
      title: 'AI+娱乐',
      desc: 'AI辅助生产小游戏',
      link: '#'
    },
    {
      title: 'AI+其他',
      desc: 'AI辅助生产解决用户需求的产品',
      link: '#'
    }
  ];

  return (
    <div className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
      {/* 装饰性背景光晕 - 保持极其淡雅的紫色点缀 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-zinc-200/40 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-black">AI 探索</h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          探索AI+全领域的落地与实践
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col p-10 rounded-[2.5rem] bg-white border border-zinc-200/60 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">{card.title}</h3>
            <p className="text-zinc-500 leading-relaxed mb-8 text-sm md:text-base min-h-[3rem]">
              {card.desc}
            </p>
            <div className="mt-auto">
              <button 
                className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group/btn"
                onClick={() => console.log(`Navigate to ${card.title}`)}
              >
                查看详情
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIExploration;

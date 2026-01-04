
import React from 'react';

const WealthManagement: React.FC = () => {
  const cards = [
    {
      title: '理财体验金',
      desc: '用户获得虚拟本金，模拟某基金买入的收益情况',
      link: '#'
    },
    {
      title: '积分激励',
      desc: '激励用户买入、活跃的好行为，增强用户对产品的粘性',
      link: '#'
    },
    {
      title: '新手如何理财',
      desc: '对于理财小白的教育思考',
      link: '#'
    }
  ];

  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">理财产品</h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          公募基金产品的一些思考
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col p-10 rounded-[2.5rem] bg-zinc-50 border border-transparent hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
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

export default WealthManagement;

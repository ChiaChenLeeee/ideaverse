
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Designed with Passion. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-black transition-colors">Github</a>
          <a href="#" className="hover:text-black transition-colors">Wechat</a>
          <a href="#" className="hover:text-black transition-colors">Zhihu</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-navy-900/80 backdrop-blur-md border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-teal-400">MinSoft<span className="text-white">.</span></div>
        
        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#service" className="hover:text-teal-400 transition-colors">Service</a>
          <a href="#team" className="hover:text-teal-400 transition-colors">Team</a>
          <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio</a>
          <button className="px-5 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-all font-bold">
            무료 상담
          </button>
        </div>

        {/* 모바일 아이콘 */}
        <div className="md:hidden text-2xl text-teal-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
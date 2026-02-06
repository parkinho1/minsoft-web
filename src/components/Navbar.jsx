import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 로고: 필터 제거 및 깔끔한 배치 */}
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1.5 rounded-lg shadow-sm">
          <img src="/logo.png" alt="MinSoft Logo" className="h-8 md:h-10 object-contain" />
        </div>
        
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
          <button className={`px-6 py-2 rounded-lg transition-all shadow-xl font-black ${isScrolled ? "bg-slate-900 text-white shadow-slate-200" : "bg-blue-600 text-white shadow-blue-500/20"}`}>
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
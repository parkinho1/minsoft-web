import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX } from "react-icons/fi";

// --- 공통 상담 함수 ---
const openChat = () => window.open('https://open.kakao.com/o/sjhhq7ei');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1 rounded-lg shadow-sm border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-7 md:h-10 object-contain" />
        </div>
        
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#team" className="hover:text-blue-400">Our Team</a>
          <button onClick={openChat} className={`px-6 py-2 rounded-lg font-black transition-all ${isScrolled ? "bg-slate-900 text-white" : "bg-blue-600 text-white"}`}>
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-2xl p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX className="text-slate-900" /> : <FiMenu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-6 gap-6 font-black text-slate-900 uppercase tracking-widest text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)}>Our Team</a>
              <button onClick={openChat} className="w-full py-4 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">Get a Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. Hero: 모바일 폰트 크기 대폭 하향 조정 (뚫고 나감 방지) */}
      <section className="relative min-h-[100svh] flex items-center px-5 overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="Tech" className="w-full h-full object-cover opacity-30 md:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/90 to-slate-950"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.2em]">SI & Solution Expert</div>
            {/* 모바일에서 글자가 깨지지 않도록 text-4xl로 시작 */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 italic break-keep">
              From <span className="text-blue-400 font-normal">Landing Pages</span> <br className="hidden md:block" /> 
              To <span className="text-blue-400 font-normal">Expert Systems.</span>
            </h1>
            <p className="text-sm md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 mb-8 font-medium leading-relaxed">
              가벼운 랜딩페이지부터 복잡한 기업용 시스템까지. <br className="hidden md:block" />
              **금융권 차세대 프로젝트 투입 예정**인 정예 기술진이 직접 책임지고 구축합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button onClick={openChat} className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg font-black bg-white text-slate-900 px-8 py-4 rounded-xl shadow-2xl">
                1:1 상담 시작하기 <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Services: 모바일 패딩 및 카드 너비 최적화 */}
      <section id="services" className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <span className="text-blue-600">Services.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">프로젝트의 크기가 아닌, 해결의 가치에 집중합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 md:p-10 rounded-[30px] bg-slate-50 border border-slate-100 flex flex-col justify-between h-auto min-h-[300px]">
              <FiZap className="text-blue-600 text-3xl mb-6" />
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-3 italic">Landing & Micro</h3>
                <p className="text-slate-500 text-sm leading-relaxed">효율 중심의 랜딩페이지와 이벤트 페이지를 고퀄리티로 신속하게 제작합니다.</p>
              </div>
            </div>
            <div className="p-8 md:p-10 rounded-[30px] bg-slate-900 text-white flex flex-col justify-between h-auto min-h-[300px]">
              <FiActivity className="text-blue-400 text-3xl mb-6" />
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-3 italic">Business Tools</h3>
                <p className="text-slate-400 text-sm leading-relaxed">업무 자동화, 데이터 대시보드 등 실질적인 비즈니스 효용을 주는 도구를 구축합니다.</p>
              </div>
            </div>
            <div className="p-8 md:p-10 rounded-[30px] bg-slate-50 border border-slate-100 flex flex-col justify-between h-auto min-h-[300px]">
              <FiLayers className="text-blue-600 text-3xl mb-6" />
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-3 italic">System Integration</h3>
                <p className="text-slate-500 text-sm leading-relaxed">엔터프라이즈급 ERP 및 복잡한 시스템 통합 설계를 전문가 그룹이 직접 수행합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team & Reliability */}
      <section id="team" className="py-20 md:py-32 px-5 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 italic">The <span className="text-blue-600">Network.</span></h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold mb-8 break-keep">
              민소프트는 박인호 대표를 중심으로 **금융권 대규모 시스템 통합(SI)** 참여 예정 기술진이 <br className="hidden md:block" /> 프로젝트 단위로 뭉치는 정예 전문가 그룹입니다.
            </p>
            <div className="flex flex-col gap-4 items-center md:items-start text-sm md:text-base font-bold text-slate-500">
              <span className="flex items-center gap-3"><FiDollarSign className="text-blue-600" /> 합리적 비용 정책</span>
              <span className="flex items-center gap-3"><FiCheckCircle className="text-blue-600" /> 직접 책임 설계 시스템</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-[30px] shadow-sm text-center">
              <FiDollarSign className="text-blue-600 text-3xl mx-auto mb-4" />
              <h5 className="font-black text-xl italic">Rational Cost</h5>
            </div>
            <div className="bg-slate-900 p-8 rounded-[30px] text-white text-center">
              <FiTarget className="text-blue-400 text-3xl mx-auto mb-4" />
              <h5 className="font-black text-xl italic">Precision</h5>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer: 사업자 정보 반영 */}
      <footer className="py-16 md:py-24 px-5 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center md:items-end">
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="MinSoft" className="h-8 mb-8 mx-auto md:mx-0" />
            <p className="text-base font-bold text-slate-700 leading-relaxed mb-8">
              작은 랜딩페이지부터 고도의 시스템까지 <br />
              민소프트가 가장 합리적으로 해결합니다.
            </p>
            <button onClick={openChat} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-sm font-black rounded-xl shadow-lg shadow-blue-200">무료 상담 신청하기</button>
          </div>
          <div className="text-center md:text-right space-y-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase">
            <p>상호명: 민소프트 (MinSoft) | 대표자: 박인호</p>
            <p>사업자등록번호: 835-51-00903</p>
            <p>© 2026 MINSOFT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX } from "react-icons/fi";

// --- Navbar: 모바일 햄버거 메뉴 추가 ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
  ];

  const openChat = () => window.open('https://open.kakao.com/o/sjhhq7ei');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1.5 rounded-lg shadow-md border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-7 md:h-10 object-contain" />
        </div>
        
        {/* 데스크톱 메뉴 */}
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</a>
          ))}
          <button onClick={openChat} className={`px-6 py-2 rounded-lg transition-all shadow-xl font-black ${isScrolled ? "bg-slate-900 text-white shadow-slate-200" : "bg-blue-600 text-white shadow-blue-500/20"}`}>
            Get a Quote
          </button>
        </div>

        {/* 모바일 토글 버튼 */}
        <button className="md:hidden text-2xl p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX className="text-slate-900" /> : <FiMenu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-black text-slate-900 uppercase tracking-widest text-center">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
              <button onClick={openChat} className="w-full py-4 bg-blue-600 text-white rounded-xl shadow-lg">Get a Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />

      {/* 1. Hero Section: 모바일 폰트 크기 최적화 */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-5 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="MinSoft Tech" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">Full-Spectrum Digital Partner</div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 italic">
              From <span className="text-blue-400 font-normal">Landing Pages</span> <br className="hidden md:block" /> To <span className="text-blue-400 font-normal">Expert Systems.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 mb-10 font-medium leading-relaxed">
              가벼운 랜딩페이지부터 복잡한 기업용 시스템까지. <br className="hidden md:block" />
              정예 팀의 기술력을 거품 없는 합리적인 비용으로 경험하세요.
            </p>
            <button onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} className="w-full md:w-auto group flex items-center justify-center gap-3 text-lg md:text-xl font-black bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              1:1 맞춤 상담 시작하기 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Services: 모바일 간격 조정 */}
      <section id="services" className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <span className="text-blue-600">Services.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm">프로젝트의 크기가 아닌, 해결의 가치에 집중합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <div className="p-8 md:p-10 bg-slate-50 rounded-[30px] md:rounded-[40px] border border-slate-100">
              <FiZap className="text-blue-600 w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8" />
              <h3 className="text-xl md:text-2xl font-black mb-4 italic">Landing & Micro</h3>
              <p className="text-slate-500 text-sm leading-relaxed">광고 효율을 극대화하는 자잘한 랜딩페이지, 이벤트 페이지도 고퀄리티로 제작합니다.</p>
            </div>
            <div className="p-8 md:p-10 bg-slate-900 rounded-[30px] md:rounded-[40px] text-white">
              <FiActivity className="text-blue-400 w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8" />
              <h3 className="text-xl md:text-2xl font-black mb-4 italic">Business Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">업무 자동화, 대시보드, API 연동 등 비즈니스 도구를 합리적으로 구축합니다.</p>
            </div>
            <div className="p-8 md:p-10 bg-slate-50 rounded-[30px] md:rounded-[40px] border border-slate-100">
              <FiLayers className="text-blue-600 w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8" />
              <h3 className="text-xl md:text-2xl font-black mb-4 italic">Expert Solutions</h3>
              <p className="text-slate-500 text-sm leading-relaxed">규모 있는 기업용 ERP, CRM 및 고가용성 설계를 정예 팀이 직접 수행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Network: 모바일 레이아웃 최적화 */}
      <section id="team" className="py-20 md:py-32 px-5 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">MinSoft Collective</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">Not a Solo, <br /> <span className="text-blue-600">But a Team.</span></h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-bold">민소프트는 박인호 대표를 중심으로 각 분야의 시니어 개발자들이 모이는 정예 전문가 네트워크입니다.</p>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-center gap-3 font-bold text-slate-500"><FiDollarSign className="text-blue-600" /> 합리적 비용 정책</li>
                <li className="flex items-center gap-3 font-bold text-slate-500"><FiCheckCircle className="text-blue-600" /> 시니어급 인력의 직접 책임 설계</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[30px] shadow-xl shadow-slate-200/50 text-center">
                <FiDollarSign className="text-blue-600 w-8 h-8 mx-auto mb-4" />
                <h5 className="font-black text-xl italic text-slate-900">Rational</h5>
              </div>
              <div className="bg-slate-900 p-8 rounded-[30px] text-white text-center">
                <FiTarget className="text-blue-400 w-8 h-8 mx-auto mb-4" />
                <h5 className="font-black text-xl italic">Precision</h5>
              </div>
              <div className="sm:col-span-2 bg-blue-600 p-8 md:p-10 rounded-[30px] text-white">
                <p className="text-blue-100 text-sm leading-loose">"거품을 걷어내고 기술의 본질에 집중하여 고객의 비용을 가치로 바꿉니다."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer: 모바일 정렬 최적화 */}
      <footer className="py-16 md:py-24 px-5 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="text-center md:text-left">
              <div className="bg-white inline-block p-1.5 rounded-lg border border-slate-100 mb-8 shadow-sm">
                <img src="/logo.png" alt="MinSoft" className="h-8 md:h-10 object-contain" />
              </div>
              <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8">작은 랜딩페이지부터 큰 시스템까지 <br />민소프트 팀이 가장 합리적으로 해결합니다.</p>
              <button onClick={openChat} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-sm font-black rounded-xl hover:bg-slate-900 transition-all shadow-xl">무료 상담 신청하기</button>
            </div>
            <div className="text-center md:text-right flex flex-col justify-end">
              <div className="space-y-2 text-[11px] md:text-xs font-bold text-slate-500 leading-loose">
                <p>상호명: 민소프트 (MinSoft) | 대표자: 박인호</p>
                <p>사업자등록번호: 835-51-00903</p>
                <p>업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center md:text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <p>© 2026 MINSOFT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
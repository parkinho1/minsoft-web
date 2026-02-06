import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX } from "react-icons/fi";

// --- 공통 상담 함수 ---
const openChat = () => window.open('https://open.kakao.com/o/sjhhq7ei');

// --- Navbar: 모바일 전용 햄버거 메뉴 포함 ---
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
        {/* 로고: 모바일 대응 크기 조절 */}
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1 rounded-lg shadow-sm border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-7 md:h-10 object-contain" />
        </div>
        
        {/* 데스크톱 메뉴 */}
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#team" className="hover:text-blue-400">Our Team</a>
          <button onClick={openChat} className={`px-6 py-2 rounded-lg font-black transition-all ${isScrolled ? "bg-slate-900 text-white" : "bg-blue-600 text-white"}`}>
            Get a Quote
          </button>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-2xl p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)}>Our Team</a>
              <button onClick={openChat} className="w-full py-4 bg-blue-600 text-white rounded-xl">Get a Quote</button>
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

      {/* 1. Hero: 모바일 텍스트 및 간격 최적화 */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center px-5 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="Tech" className="w-full h-full object-cover opacity-30 md:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.2em]">Full-Spectrum Digital Partner</div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 italic">
              From <span className="text-blue-400 font-normal">Landing Pages</span> <br className="hidden md:block" /> 
              To <span className="text-blue-400 font-normal">Expert Systems.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 mb-10 font-medium leading-relaxed">
              가벼운 랜딩페이지부터 복잡한 기업용 시스템까지. <br className="hidden md:block" />
              정예 팀의 기술력을 합리적인 비용으로 경험하세요.
            </p>
            <button onClick={openChat} className="w-full md:w-auto flex items-center justify-center gap-3 text-lg md:text-xl font-black bg-white text-slate-900 px-8 py-4 rounded-xl shadow-2xl">
              1:1 맞춤 상담 시작하기 <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Services: 모바일 1열 카드 배치 */}
      <section id="services" className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <span className="text-blue-600">Services.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">프로젝트의 크기가 아닌, 해결의 가치에 집중합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <FiZap />, title: "Landing & Micro", desc: "자잘한 랜딩페이지, 이벤트 페이지도 고퀄리티로 빠르게 제작합니다.", bg: "bg-slate-50" },
              { icon: <FiActivity />, title: "Business Tools", desc: "업무 자동화, 관리용 대시보드, API 연동 등 비즈니스 도구를 구축합니다.", bg: "bg-slate-900", dark: true },
              { icon: <FiLayers />, title: "Expert Solutions", desc: "규모 있는 기업용 ERP, CRM 등 고가용성 설계를 정예 팀이 수행합니다.", bg: "bg-slate-50" }
            ].map((item, i) => (
              <div key={i} className={`p-8 md:p-10 rounded-[30px] md:rounded-[40px] ${item.bg} ${item.dark ? "text-white" : "text-slate-900"} border border-slate-100`}>
                <div className={`${item.dark ? "text-blue-400" : "text-blue-600"} text-3xl mb-6`}>{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-black mb-3 italic">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.dark ? "text-slate-400" : "text-slate-500"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Network */}
      <section id="team" className="py-20 md:py-32 px-5 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">Not a Solo, <br /> <span className="text-blue-600">But a Team.</span></h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold mb-8">박인호 대표를 중심으로 각 분야의 시니어 개발자들이 <br className="hidden md:block" /> 프로젝트 단위로 뭉치는 정예 전문가 네트워크입니다.</p>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <span className="flex items-center gap-3 font-bold text-slate-500"><FiDollarSign className="text-blue-600" /> 합리적 비용 정책</span>
              <span className="flex items-center gap-3 font-bold text-slate-500"><FiCheckCircle className="text-blue-600" /> 시니어급 인력의 직접 책임 설계</span>
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
            <div className="sm:col-span-2 bg-blue-600 p-8 md:p-10 rounded-[30px] text-white text-center md:text-left">
              <p className="text-sm md:text-base font-bold opacity-90 leading-loose">"많은 인원보다 중요한 것은 실력입니다. 민소프트는 거품을 걷어내고 기술의 본질에 집중합니다."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-16 md:py-24 px-5 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center md:items-end">
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="MinSoft" className="h-8 mb-8 mx-auto md:mx-0" />
            <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8">작은 일도, 큰 프로젝트도 <br />민소프트 팀이 가장 합리적으로 해결합니다.</p>
            <button onClick={openChat} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-sm font-black rounded-xl">무료 상담 신청하기</button>
          </div>
          <div className="text-center md:text-right space-y-2 text-[10px] md:text-xs font-bold text-slate-500">
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
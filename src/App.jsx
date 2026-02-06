import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer } from "react-icons/fi";

// --- Navbar 컴포넌트 (로고 문제 해결 버전) ---
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
        
        {/* 로고: 필터 대신 '하얀 박스'를 입혀 어디서든 잘 보이게 수정 */}
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1.5 rounded-lg shadow-md border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-8 md:h-10 object-contain" />
        </div>
        
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
          <button 
            onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} 
            className={`px-6 py-2 rounded-lg transition-all shadow-xl font-black ${
              isScrolled 
              ? "bg-slate-900 text-white shadow-slate-200" 
              : "bg-blue-600 text-white shadow-blue-500/20"
            }`}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

const ScrollingText = () => (
  <div className="py-8 bg-white border-y border-slate-100 overflow-hidden flex whitespace-nowrap">
    <motion.div 
      initial={{ x: 0 }} animate={{ x: "-50%" }} 
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex text-3xl md:text-5xl font-black text-slate-100 uppercase space-x-20 pr-20 italic"
    >
      <span>System Integration</span> <span>Custom Build</span> <span>Legacy Modernization</span> <span>Scalable Architecture</span> 
      <span>System Integration</span> <span>Custom Build</span> <span>Legacy Modernization</span> <span>Scalable Architecture</span>
    </motion.div>
  </div>
);

function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. Hero: 테크 배경 이미지 레이어 */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/hero-bg.png" 
            alt="MinSoft Tech Background" 
            className="w-full h-full object-cover opacity-50"
            onError={(e) => e.target.style.display = 'none'} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">SI & Solution Expert</div>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">We Build <br /><span className="text-blue-400">Systems</span> <br />That Scale.</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-md mb-10 font-medium leading-relaxed">파편화된 아이디어를 하나의 완성된 시스템으로 통합! <br />설계부터 구축, 운영 최적화까지 <br />SI 실전 경험으로 증명합니다.</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} 
                className="group flex items-center gap-3 text-xl font-black bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-blue-500/20"
              >
  프로젝트 시작하기 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
</button>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollingText />

      {/* 2. Solutions (Bento Grid) */}
      <section id="solutions" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-slate-900">Our <br /><span className="text-blue-600">Solutions.</span></h2>
            <p className="text-slate-400 font-bold max-w-xs text-sm uppercase leading-loose">단순 외주를 넘어, 비즈니스 최적화 시스템을 구축합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]">
            <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-[40px] p-12 flex flex-col justify-between group"><FiLayers className="text-blue-600 w-8 h-8 mb-8" /><div><h3 className="text-3xl font-black mb-4">Enterprise Integration</h3><p className="text-slate-500 text-sm leading-relaxed">사내 데이터를 하나로 통합하고 업무 효율을 극대화합니다.</p></div></div>
            <div className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-[40px] p-10 text-white flex flex-col justify-between relative overflow-hidden"><FiRefreshCw className="text-blue-400 w-12 h-12 relative z-10" /><div className="relative z-10"><h3 className="text-3xl font-black mb-6">Legacy Modernization</h3><p className="text-slate-400 text-sm leading-relaxed">구형 시스템을 최신 클라우드로 안전하게 마이그레이션합니다.</p></div></div>
            <div className="md:col-span-1 bg-blue-600 rounded-[40px] p-10 text-white flex flex-col justify-between"><FiCpu className="text-white w-10 h-10" /><h3 className="text-2xl font-black">Hyper Automation</h3></div>
            <div className="md:col-span-2 bg-white border-2 border-slate-900 rounded-[40px] p-12 flex items-center justify-between"><div className="max-w-xs"><FiServer className="text-slate-900 w-12 h-12 mb-6" /><h3 className="text-3xl font-black mb-4">Infrastructure & Stability</h3><p className="text-slate-500 text-sm">고성능 서버 환경과 강력한 보안 체계를 구축합니다.</p></div></div>
          </div>
        </div>
      </section>

      {/* 3. Process */}
      <section id="process" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The <span className="text-blue-600">Process.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[ 
              { num: "01", title: "요구사항 진단", bg: "bg-white" },
              { num: "02", title: "아키텍처 설계", bg: "bg-slate-900", text: "text-white", mt: "md:mt-8" },
              { num: "03", title: "집중 개발", bg: "bg-blue-600", text: "text-white" },
              { num: "04", title: "통합 테스트", bg: "bg-white", mt: "md:mt-8" },
              { num: "05", title: "운영 및 인계", bg: "bg-slate-200" }
            ].map((step, idx) => (
              <div key={idx} className={`${step.bg} ${step.text || "text-slate-900"} ${step.mt || ""} p-8 rounded-[30px] border border-slate-100 flex flex-col justify-between h-64 shadow-sm`}>
                <span className={`text-4xl font-black italic ${idx === 1 ? "text-blue-600" : "text-slate-200"}`}>{step.num}</span>
                <h4 className="font-black text-xl">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer: 사업자 정보 반영 */}
      <footer className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white inline-block p-1.5 rounded-lg border border-slate-100 mb-8 shadow-sm">
                <img src="/logo.png" alt="MinSoft" className="h-8 md:h-10 object-contain" />
              </div>
              <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8">시스템 통합부터 비즈니스 최적화까지, <br />검증된 기술력으로 결과물을 증명합니다.</p>
              <button onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} className="px-8 py-4 bg-blue-600 text-white text-sm font-black rounded-xl hover:bg-slate-900 transition-all shadow-xl">카카오톡 상담하기</button>
            </div>
            <div className="md:text-right flex flex-col justify-end">
              <div className="space-y-2 text-xs font-bold text-slate-500 leading-loose">
                <p>상호명: 민소프트 (MinSoft) | 대표자: 박인호</p>
                <p>사업자등록번호: 835-51-00903</p>
                <p>업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업</p>
                <p className="text-slate-400 italic">온라인 원격 지원 서비스 제공</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <p>© 2026 MINSOFT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
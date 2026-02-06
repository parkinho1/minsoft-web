import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign } from "react-icons/fi";

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
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1.5 rounded-lg shadow-md border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-8 md:h-10 object-contain" />
        </div>
        <div className={`hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#items" className="hover:text-blue-400 transition-colors">Items</a>
          <a href="#strengths" className="hover:text-blue-400 transition-colors">Strengths</a>
          <button 
            onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} 
            className={`px-6 py-2 rounded-lg transition-all shadow-xl font-black ${isScrolled ? "bg-slate-900 text-white shadow-slate-200" : "bg-blue-600 text-white shadow-blue-500/20"}`}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />

      {/* 1. Hero: 메시지 강화 */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="MinSoft Tech" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">No Scale Limit Partner</div>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic">
              Any Task. <br /> <span className="text-blue-400">Any Scale.</span> <br /> Pure Logic.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-md mb-10 font-medium leading-relaxed">
              작은 기능 수정부터 대규모 시스템 구축까지. <br />
              거품을 뺀 합리적인 비용으로 최상의 코드를 제공합니다.
            </p>
            <button onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} className="group flex items-center gap-3 text-xl font-black bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              가벼운 상담 시작하기 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Items: 소규모 업무 포함 */}
      <section id="items" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <span className="text-blue-600">Services.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-sm">작은 디테일부터 거대한 설계까지 모두 가능합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-blue-200 transition-all">
              <FiZap className="text-blue-600 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black mb-4">Quick Fix & Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">작은 버그 수정, 간단한 기능 추가, 기존 코드 최적화 등 가벼운 업무도 정성껏 수행합니다.</p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[40px] text-white hover:bg-slate-800 transition-all">
              <FiActivity className="text-blue-400 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black mb-4">API & Automation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">반복되는 업무를 줄여주는 자동화 도구와 외부 서비스 연동을 합리적인 비용으로 제안합니다.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-blue-200 transition-all">
              <FiLayers className="text-blue-600 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black mb-4">Full-Scale System</h3>
              <p className="text-slate-500 text-sm leading-relaxed">비즈니스 성장에 발맞춘 견고한 아키텍처 설계와 엔터프라이즈급 시스템 구축을 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strengths: 합리성 강조 */}
      <section id="strengths" className="py-32 px-6 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">MinSoft <span className="text-blue-400">Values.</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[50px] border border-white/10">
              <FiDollarSign className="text-blue-400 w-12 h-12 mb-8" />
              <h4 className="text-3xl font-black mb-6 italic">Rational Pricing</h4>
              <p className="text-slate-400 leading-loose">
                불필요한 영업비와 관리 운영비를 걷어냈습니다. <br />
                '대표 직접 소통'을 통해 거품 없는 가격으로 <br />
                대형 업체 수준의 결과물을 보장합니다.
              </p>
            </div>
            <div className="bg-blue-600 p-12 rounded-[50px] shadow-2xl shadow-blue-500/20">
              <FiSmile className="text-white w-12 h-12 mb-8" />
              <h4 className="text-3xl font-black mb-6 italic">Scale-Friendly</h4>
              <p className="text-blue-100 leading-loose">
                "너무 작은 일이라 안 해주면 어쩌지?" 고민하지 마세요. <br />
                민소프트는 고객의 성장을 함께하는 동반자로써 <br />
                '규모에 상관없는 최선의 책임감'을 보여드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-white inline-block p-1.5 rounded-lg border border-slate-100 mb-8 shadow-sm">
                <img src="/logo.png" alt="MinSoft" className="h-8 md:h-10 object-contain" />
              </div>
              <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8">작은 일도, 큰 프로젝트도 <br />대표가 책임지고 함께합니다.</p>
              <button onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} className="px-8 py-4 bg-blue-600 text-white text-sm font-black rounded-xl hover:bg-slate-900 transition-all shadow-xl">무료 상담 신청하기</button>
            </div>
            <div className="md:text-right flex flex-col justify-end">
              <div className="space-y-2 text-xs font-bold text-slate-500 leading-loose">
                <p>상호명: 민소프트 (MinSoft) | 대표자: 박인호</p>
                <p>사업자등록번호: 835-51-00903</p>
                <p>업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업</p>
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
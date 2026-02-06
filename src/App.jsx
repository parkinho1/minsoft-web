import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-black text-slate-900 tracking-tighter italic underline decoration-blue-600 decoration-4 underline-offset-4">MINSOFT.</div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-bold text-slate-600 uppercase tracking-widest">
          <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
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

      {/* 1. Hero: SI 전문가의 묵직한 카피 */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">
              SI & Solution Expert
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
              We Build <br /> 
              <span className="text-blue-600 underline decoration-slate-200 underline-offset-8">Systems</span> <br />
              That Scale.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-md mb-10 font-medium leading-relaxed">
              파편화된 아이디어를 하나의 완성된 시스템으로 통합합니다. <br />
              설계부터 구축, 운영 최적화까지 <br />
              실전 SI 프로젝트 경험으로 증명합니다.
            </p>
            <div className="flex items-center gap-6">
              <button className="group flex items-center gap-3 text-xl font-black bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-slate-900 transition-all">
                프로젝트 시작하기 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* 우측 그래픽: 좀 더 공학적인 느낌으로 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
            className="relative hidden lg:block justify-self-end"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="w-40 h-40 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-end font-black text-slate-200 text-4xl italic">01</div>
              <div className="w-40 h-40 bg-blue-600 rounded-3xl p-6 flex items-end font-black text-white text-4xl italic shadow-2xl shadow-blue-200">02</div>
              <div className="w-40 h-40 bg-slate-900 rounded-3xl p-6 flex items-end font-black text-white text-4xl italic">03</div>
              <div className="w-40 h-40 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-end font-black text-slate-200 text-4xl italic">04</div>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollingText />

      {/* 2. Bento Grid: SI 특화 서비스 섹션 */}
      <section id="solutions" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <br /><span className="text-blue-600">Solutions.</span></h2>
            <p className="text-slate-400 font-bold max-w-xs text-sm uppercase leading-loose">
              우리는 단순 외주를 넘어, <br /> 비즈니스 최적화 시스템을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]">
            {/* 카드 1: 엔터프라이즈 시스템 통합 (가로 긴 카드) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-[40px] p-12 flex flex-col justify-between group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <FiLayers className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 leading-tight">Enterprise <br /> Integration</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">사내 흩어진 데이터를 하나로 통합하고, 자동화된 워크플로우를 구축하여 업무 효율을 극대화합니다.</p>
              </div>
            </motion.div>

            {/* 카드 2: 시스템 현대화 (세로 긴 카드) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-[40px] p-10 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <FiRefreshCw className="text-blue-400 w-12 h-12 relative z-10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 leading-tight">Legacy <br /> Modernization</h3>
                <p className="text-slate-400 text-sm leading-relaxed">오래되고 느린 시스템을 최신 클라우드 기반 아키텍처로 안전하게 마이그레이션합니다.</p>
              </div>
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
            </motion.div>

            {/* 카드 3: 하이퍼 오토메이션 (정사각형) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-1 bg-blue-600 rounded-[40px] p-10 text-white flex flex-col justify-between"
            >
              <FiCpu className="text-white w-10 h-10" />
              <h3 className="text-2xl font-black leading-tight">Hyper <br /> Automation</h3>
            </motion.div>

            {/* 카드 4: 고성능 인프라 & 보안 (가로 긴 카드) */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 bg-white border-2 border-slate-900 rounded-[40px] p-12 flex items-center justify-between group"
            >
              <div className="max-w-xs">
                <FiServer className="text-slate-900 w-12 h-12 mb-6" />
                <h3 className="text-3xl font-black mb-4 leading-tight">Infrastructure <br /> & Stability</h3>
                <p className="text-slate-500 text-sm font-medium">초당 수만 건의 트래픽도 견디는 고성능 서버 환경과 강력한 보안 체계를 구축합니다.</p>
              </div>
              <div className="hidden lg:flex gap-2">
                <div className="w-1 h-20 bg-slate-100 rounded-full"></div>
                <div className="w-1 h-32 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-16 bg-slate-900 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2-1. Process Section: SI 전문가의 워크플로우 */}
<section id="process" className="py-32 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="mb-20">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
        The <span className="text-blue-600">Process.</span>
      </h2>
      <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-sm">
        체계적인 설계가 완벽한 시스템을 만듭니다.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Step 1: 진단 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-slate-50 p-8 rounded-[30px] border border-slate-100 flex flex-col justify-between h-64"
      >
        <span className="text-4xl font-black text-slate-200 italic">01</span>
        <div>
          <h4 className="font-black text-xl mb-2">요구사항 진단</h4>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">비즈니스 목표를 분석하고 최적의 기술 스택을 제안합니다.</p>
        </div>
      </motion.div>

      {/* Step 2: 설계 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-slate-900 p-8 rounded-[30px] text-white flex flex-col justify-between h-64 md:mt-8"
      >
        <span className="text-4xl font-black text-blue-600 italic">02</span>
        <div>
          <h4 className="font-black text-xl mb-2">아키텍처 설계</h4>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">확장성과 보안을 고려한 탄탄한 시스템 구조를 설계합니다.</p>
        </div>
      </motion.div>

      {/* Step 3: 개발 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-blue-600 p-8 rounded-[30px] text-white flex flex-col justify-between h-64"
      >
        <span className="text-4xl font-black text-white/30 italic">03</span>
        <div>
          <h4 className="font-black text-xl mb-2">집중 개발</h4>
          <p className="text-blue-100 text-xs font-medium leading-relaxed">민소프트만의 Deep Work 방식으로 고품질 코드를 생산합니다.</p>
        </div>
      </motion.div>

      {/* Step 4: 검증 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-slate-50 p-8 rounded-[30px] border border-slate-100 flex flex-col justify-between h-64 md:mt-8"
      >
        <span className="text-4xl font-black text-slate-200 italic">04</span>
        <div>
          <h4 className="font-black text-xl mb-2">통합 테스트</h4>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">다양한 환경에서 시스템의 안정성과 성능을 검증합니다.</p>
        </div>
      </motion.div>

      {/* Step 5: 운영 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-slate-200 p-8 rounded-[30px] flex flex-col justify-between h-64"
      >
        <span className="text-4xl font-black text-white italic">05</span>
        <div>
          <h4 className="font-black text-xl mb-2">운영 및 인계</h4>
          <p className="text-slate-600 text-xs font-medium leading-relaxed">안정적인 가동을 확인하고 매뉴얼과 함께 시스템을 인계합니다.</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

        {/* 3. Footer: 필수 비즈니스 정보만 노출 */}
          <footer className="py-20 px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="text-3xl font-black italic mb-6 tracking-tighter">MINSOFT.</div>
                  <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8">
                    시스템 통합부터 비즈니스 최적화까지, <br />
                    검증된 기술력으로 결과물을 증명합니다.
                  </p>
                  <div className="flex gap-4">
                    <button onClick={() => window.open('https://open.kakao.com/...')} className="px-6 py-3 bg-blue-600 text-white text-sm font-black rounded-lg hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                      카카오톡 상담하기
                    </button>
                  </div>
                </div>

                <div className="md:text-right flex flex-col justify-end">
                  <div className="space-y-2 text-xs font-bold text-slate-500 leading-loose">
                    <p>상호명: 민소프트 (MinSoft) | 대표자: 박인호</p>
                    <p>사업자등록번호: 835-51-00903</p>
                    <p>업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업</p>
                    <p className="text-slate-400">온라인 원격 지원 서비스 제공</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 gap-4 uppercase tracking-widest">
                <p>© 2026 MINSOFT. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-blue-600">Terms</a>
                  <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX, FiPackage, FiCode, FiSmartphone } from "react-icons/fi";

const openChat = () => window.open('https://open.kakao.com/o/sjhhq7ei');

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
    { name: "Tech", href: "#tech" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer bg-white p-1 rounded-lg shadow-sm border border-slate-100">
          <img src="/logo.png" alt="MinSoft Logo" className="h-7 md:h-10 object-contain" />
        </div>
        <div className={`hidden md:flex items-center space-x-10 text-xs font-black uppercase tracking-[0.2em] ${isScrolled ? "text-slate-600" : "text-white"}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</a>
          ))}
          <button onClick={openChat} className={`px-6 py-2 rounded-lg transition-all ${isScrolled ? "bg-slate-900 text-white" : "bg-blue-600 text-white shadow-lg shadow-blue-500/20"}`}>
            Contact
          </button>
        </div>
        <button className="md:hidden text-2xl p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX className="text-slate-900" /> : <FiMenu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-8 flex flex-col gap-8 font-black text-slate-900 uppercase tracking-widest text-center shadow-2xl">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
            <button onClick={openChat} className="w-full py-4 bg-blue-600 text-white rounded-xl">Inquiry</button>
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

      {/* 1. Hero */}
      <section className="relative min-h-[100svh] flex items-center px-5 bg-slate-950 pt-20">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="Tech" className="w-full h-full object-cover opacity-30 md:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.2em]">R&D Based SI & Solutions</div>
            <h1 className="text-[clamp(2.2rem,8vw,8rem)] font-black text-white leading-[1.1] md:leading-[1] tracking-tighter mb-8 italic uppercase break-keep">
              Pure <span className="text-blue-400 font-normal">Technology</span> <br className="hidden md:block" /> For Business.
            </h1>
            <p className="text-[clamp(0.9rem,2.5vw,1.1rem)] text-slate-300 max-w-lg mx-auto md:mx-0 mb-10 font-medium leading-relaxed break-keep">
              민소프트는 자체 비즈니스 솔루션 개발 역량을 바탕으로, <br className="hidden md:block" />
              자잘한 랜딩페이지부터 고성능 엔터프라이즈 시스템까지 가장 정교한 아키텍처를 설계합니다.
            </p>
            <button onClick={openChat} className="w-full md:w-auto flex items-center justify-center gap-3 text-lg font-black bg-white text-slate-900 px-10 py-5 rounded-2xl shadow-2xl transition-transform active:scale-95">
              프로젝트 컨설팅 신청 <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Solutions: 자체 솔루션 비중 강화 */}
      <section id="services" className="py-24 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The <span className="text-blue-600">Focus.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase text-[10px] tracking-widest">SI 실적을 넘어 자체 기술력을 확보한 정예 팀입니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[40px] bg-blue-600 text-white flex flex-col justify-between min-h-[380px] shadow-2xl shadow-blue-200">
              <FiPackage className="text-4xl mb-8" />
              <div>
                <span className="text-[10px] font-black uppercase bg-white/20 px-2 py-1 rounded">R&D Progress</span>
                <h3 className="text-2xl font-black mt-4 mb-4 italic">In-house Solution</h3>
                <p className="text-blue-100 text-sm leading-relaxed break-keep">비즈니스 프로세스를 혁신할 민소프트만의 자체 솔루션을 개발 중입니다. 곧 공개될 테크 라인업을 기대해 주세요.</p>
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-slate-900 text-white flex flex-col justify-between min-h-[380px]">
              <FiZap className="text-blue-400 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">Agile & Micro</h3>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">자잘한 랜딩페이지나 간단한 기능 추가도 환영합니다. 정예 인력이 합리적인 가격으로 빠르게 해결해 드립니다.</p>
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-slate-50 text-slate-900 border border-slate-100 flex flex-col justify-between min-h-[380px]">
              <FiLayers className="text-blue-600 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">Expert SI</h3>
                <p className="text-slate-500 text-sm leading-relaxed break-keep">대규모 금융·공공 프로젝트 설계 경험이 있는 시니어 급 기술진이 안정적이고 확장 가능한 시스템을 구축합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack: 모바일 가독성 최적화 */}
      <section id="tech" className="py-24 md:py-32 px-5 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 italic">The <span className="text-blue-400">Stack.</span></h2>
              <p className="text-slate-400 text-base md:text-lg mb-12 font-medium break-keep">
                민소프트는 트렌드보다 **본질과 안정성**에 집중합니다. <br /> 유지보수가 용이하고 확장에 강한 기술 스택만을 사용합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                <div><h5 className="text-blue-400 text-[10px] font-black mb-2 tracking-widest uppercase opacity-60">Backend</h5><p className="text-sm font-bold">Java, Spring Boot, Node.js</p></div>
                <div><h5 className="text-blue-400 text-[10px] font-black mb-2 tracking-widest uppercase opacity-60">Frontend</h5><p className="text-sm font-bold">React, Next.js, Tailwind</p></div>
                <div><h5 className="text-blue-400 text-[10px] font-black mb-2 tracking-widest uppercase opacity-60">Infra</h5><p className="text-sm font-bold">AWS, Docker, CI/CD</p></div>
                <div><h5 className="text-blue-400 text-[10px] font-black mb-2 tracking-widest uppercase opacity-60">Database</h5><p className="text-sm font-bold">PostgreSQL, Redis</p></div>
              </div>
            </div>
            <div className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 relative">
               <FiCode className="text-blue-600 text-4xl md:text-6xl absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-slate-950 p-3 md:p-4 rounded-full border border-white/10" />
               <h4 className="text-xl md:text-2xl font-black mb-6 italic underline decoration-blue-500 underline-offset-8">Technical Blueprint</h4>
               <ul className="space-y-6 text-left">
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">확장형 마이크로 서비스(MSA) 기반 설계</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">정규 가이드라인을 준수하는 강력한 보안 체계</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">클린 코드를 지향하는 높은 유지보수 편의성</p></li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ: 모바일에서 간격 확보 */}
      <section id="faq" className="py-24 md:py-32 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-16 text-center">Questions <span className="text-blue-600">&</span> Answers.</h2>
          <div className="space-y-12">
            {[
              { q: "정말 작은 일도 정성껏 해주시나요?", a: "네, 랜딩페이지 한 장이나 간단한 오류 수정 같은 가벼운 업무도 환영합니다. 민소프트는 프로젝트의 크기가 아닌 고객 만족을 최우선으로 합니다." },
              { q: "자체 솔루션은 언제 공개되나요?", a: "현재 사내 업무 효율을 극대화할 독자적인 툴을 개발 중이며, 런칭 시 사이트와 SNS를 통해 정식으로 안내드릴 예정입니다." },
              { q: "대형 업체와 비교했을 때의 장점은?", a: "영업이나 관리 오피스 거품을 제거했습니다. 대표가 직접 소통하고 실무진이 바로 코딩하기에 소통 비용과 실제 비용이 모두 합리적입니다." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-50 pb-10 text-left">
                <h4 className="text-lg md:text-xl font-black mb-4 flex items-start gap-3">
                  <span className="text-blue-600 italic">Q.</span> 
                  <span className="break-keep leading-tight">{faq.q}</span>
                </h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed pl-7 break-keep">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer: 모바일 가독성 보강 */}
      <footer className="py-20 px-5 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 text-center md:text-left">
            <div>
              <img src="/logo.png" alt="MinSoft" className="h-8 mb-10 mx-auto md:mx-0" />
              <p className="text-xl font-black text-slate-900 leading-tight mb-8 italic">Architecture First, <br /> Business Successful.</p>
              <button onClick={openChat} className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all">상담 시작하기</button>
            </div>
            <div className="flex flex-col justify-end">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-loose md:text-right">
                <p>상호: 민소프트 (MinSoft) | 대표: 박인호</p>
                <p>사업자등록번호: 835-51-00903</p>
                <p className="mt-4">© 2026 MINSOFT. ALL RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
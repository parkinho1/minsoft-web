import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX, FiPackage, FiSearch, FiCode } from "react-icons/fi";

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
        <div className={`hidden md:flex items-center space-x-10 text-xs font-black uppercase tracking-[0.2em] ${isScrolled ? "text-slate-600" : "text-white"}`}>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#tech" className="hover:text-blue-400">Tech</a>
          <a href="#faq" className="hover:text-blue-400">FAQ</a>
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
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-8 flex flex-col gap-8 font-black text-slate-900 uppercase tracking-widest text-center">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#tech" onClick={() => setIsMenuOpen(false)}>Tech</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
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
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.2em]">High-End SI & Solutions</div>
            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black text-white leading-[1] tracking-tighter mb-8 italic uppercase break-keep">
              Architecture <br /> <span className="text-blue-400 font-normal underline decoration-blue-800 underline-offset-8">Focused.</span>
            </h1>
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-slate-300 max-w-lg mx-auto md:mx-0 mb-10 font-medium leading-relaxed break-keep">
              민소프트는 자체 솔루션 R&D와 정예 전문가 네트워크를 통해 <br className="hidden md:block" />
              비즈니스의 복잡한 문제를 가장 명확한 기술로 해결합니다.
            </p>
            <button onClick={openChat} className="w-full md:w-auto flex items-center justify-center gap-3 text-lg font-black bg-white text-slate-900 px-10 py-5 rounded-2xl shadow-2xl transition-transform active:scale-95">
              프로젝트 컨설팅 신청하기 <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Solutions: 자체 솔루션 강조 */}
      <section id="services" className="py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The <span className="text-blue-600">Focus.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[40px] bg-blue-600 text-white flex flex-col justify-between min-h-[350px] shadow-2xl shadow-blue-200">
              <FiPackage className="text-4xl mb-8" />
              <div>
                <span className="text-[10px] font-black uppercase bg-white/20 px-2 py-1 rounded">Under Development</span>
                <h3 className="text-2xl font-black mt-4 mb-4 italic">Next-Gen SaaS</h3>
                <p className="text-blue-100 text-sm leading-relaxed">비즈니스 효율을 200% 이상 끌어올릴 민소프트 자체 솔루션을 개발 중입니다. 곧 공개됩니다.</p>
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-slate-900 text-white flex flex-col justify-between min-h-[350px]">
              <FiZap className="text-blue-400 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">Agile SI</h3>
                <p className="text-slate-400 text-sm leading-relaxed">자잘한 랜딩페이지 한 장부터 기업용 내부 관리 도구까지 정예 팀이 가장 합리적인 비용으로 구축합니다.</p>
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-slate-50 text-slate-900 border border-slate-100 flex flex-col justify-between min-h-[350px]">
              <FiLayers className="text-blue-600 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">Enterprise SI</h3>
                <p className="text-slate-500 text-sm leading-relaxed">금융·공공 대규모 프로젝트 참여 경험이 있는 시니어 기술진이 고가용성 시스템을 설계합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack: 기술력 상세 (추가 섹션) */}
      <section id="tech" className="py-32 px-5 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 italic">The <span className="text-blue-400">Stack.</span></h2>
              <p className="text-slate-400 text-lg mb-12 font-medium break-keep">
                우리는 유행을 쫓지 않습니다. <br /> 가장 안정적이고 유지보수가 용이한 최적의 기술만을 엄선하여 사용합니다.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div><h5 className="text-blue-400 font-black mb-2 tracking-widest uppercase">Backend</h5><p className="text-slate-500 text-sm">Java, Spring Boot, Node.js</p></div>
                <div><h5 className="text-blue-400 font-black mb-2 tracking-widest uppercase">Frontend</h5><p className="text-slate-500 text-sm">React, Next.js, Tailwind</p></div>
                <div><h5 className="text-blue-400 font-black mb-2 tracking-widest uppercase">Infra</h5><p className="text-slate-500 text-sm">AWS, Docker, Jenkins</p></div>
                <div><h5 className="text-blue-400 font-black mb-2 tracking-widest uppercase">Database</h5><p className="text-slate-500 text-sm">PostgreSQL, Redis, MySQL</p></div>
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 relative">
               <FiCode className="text-blue-600 text-6xl absolute -top-8 -right-8 bg-slate-950 p-4 rounded-full border border-white/10" />
               <h4 className="text-2xl font-black mb-6 italic underline decoration-blue-500 underline-offset-4">Technical Blueprint</h4>
               <ul className="space-y-6">
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300">트래픽 증가에 유연한 확장형 마이크로 서비스 설계</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300">금융권 수준의 보안 가이드라인 준수</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300">배포 자동화(CI/CD)를 통한 신속한 기능 업데이트</p></li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ: 고객이 궁금해할 만한 내용들 (추가 섹션) */}
      <section id="faq" className="py-32 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-16 text-center">Questions <span className="text-blue-600">&</span> Answers.</h2>
          <div className="space-y-8">
            {[
              { q: "정말 작은 일도 해주시나요?", a: "네, 랜딩페이지 수정이나 간단한 폼 구축 같은 '자잘한 일'도 환영합니다. 모든 비즈니스는 작은 시작에서 비롯됨을 알기 때문입니다." },
              { q: "가격이 왜 대형 SI 업체보다 저렴한가요?", a: "영업 인력과 화려한 오피스 비용을 제거했습니다. 대표가 직접 소통하고 실무진이 바로 코딩하는 정예 구조이기에 거품 없는 견적이 가능합니다." },
              { q: "유지보수는 어떻게 보장되나요?", a: "단발성 개발로 끝내지 않습니다. 민소프트는 사업자 등록 정식 업체로서 명문화된 계약서와 사후 관리 가이드를 기본으로 제공합니다." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8">
                <h4 className="text-xl font-black mb-4 flex items-center gap-3"><span className="text-blue-600 font-black italic underline decoration-blue-200">Q.</span> {faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed pl-8 break-keep">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-24 px-5 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div className="text-center md:text-left">
              <img src="/logo.png" alt="MinSoft" className="h-8 mb-10 mx-auto md:mx-0" />
              <p className="text-xl font-black text-slate-900 leading-tight mb-8 italic">Architecture First, <br /> Business Successful.</p>
              <button onClick={openChat} className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all hover:bg-slate-900">1:1 맞춤 컨설팅</button>
            </div>
            <div className="space-y-4 text-center md:text-right flex flex-col justify-end">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-loose">
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
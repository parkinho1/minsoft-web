import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers, FiMenu, FiX, FiPackage, FiCode, FiSmartphone, FiHeart, FiSearch, FiMonitor, FiDatabase, FiLock, FiMessageSquare, FiTrendingUp, FiShield, FiSend } from "react-icons/fi";

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
    { name: "Expertise", href: "#expertise" },
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
      <section className="relative min-h-[100svh] flex items-center px-5 bg-slate-950 pt-20 text-left">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="Tech" className="w-full h-full object-cover opacity-30 md:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.2em]">AI & Engineering Excellence</div>
            <h1 className="text-[clamp(2.1rem,7.5vw,8rem)] font-black text-white leading-[1.1] md:leading-[1] tracking-tighter mb-8 italic uppercase break-keep">
              Pure <span className="text-blue-400 font-normal">Intelligence</span> <br /> For Life.
            </h1>
            <p className="text-[clamp(0.9rem,2.5vw,1.15rem)] text-slate-300 max-w-lg mx-auto md:mx-0 mb-10 font-medium leading-relaxed break-keep">
              민소프트는 AI 기반의 차세대 솔루션과 견고한 시스템 설계를 통해 비즈니스의 가능성을 현실로 만듭니다. 기술의 본질에 집중하며 지속 가능한 성장을 돕습니다.
            </p>
            <button onClick={openChat} className="w-full md:w-auto flex items-center justify-center gap-3 text-lg font-black bg-white text-slate-900 px-10 py-5 rounded-2xl shadow-2xl transition-transform active:scale-95">
              1:1 기술 상담 시작 <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* [보충] 2. Service Commitment: 신뢰를 주는 핵심 서비스 바 */}
      <section className="py-16 md:py-24 px-5 bg-blue-600 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
            <div className="flex gap-5 items-start">
              <FiShield className="text-3xl mt-1 opacity-80" />
              <div>
                <h5 className="text-xl font-black italic mb-3">Maintenance</h5>
                <p className="text-sm text-blue-100 leading-relaxed break-keep">개발 완료 후 1년간 무상 유지보수를 지원하며, 시니어 기술진이 지속적인 보안 업데이트를 책임집니다.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <FiRefreshCw className="text-3xl mt-1 opacity-80" />
              <div>
                <h5 className="text-xl font-black italic mb-3">Scalability</h5>
                <p className="text-sm text-blue-100 leading-relaxed break-keep">단순 구축을 넘어 향후 기능 확장이 용이한 클린 코드와 유연한 아키텍처 설계를 원칙으로 합니다.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <FiSend className="text-3xl mt-1 opacity-80" />
              <div>
                <h5 className="text-xl font-black italic mb-3">Free Consulting</h5>
                <p className="text-sm text-blue-100 leading-relaxed break-keep">기획안이 없어도 괜찮습니다. 구현하고 싶은 아이디어만 공유해 주시면 최적의 기술 로드맵을 제안해 드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions */}
      <section id="services" className="py-24 md:py-32 px-5 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The <span className="text-blue-600 font-normal">Focus.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[35px] bg-blue-600 text-white flex flex-col justify-between min-h-[380px] shadow-2xl shadow-blue-200">
              <FiMessageSquare className="text-4xl mb-8" />
              <div>
                <span className="text-[10px] font-black uppercase bg-white/30 px-2 py-1 rounded inline-block mb-4">AI R&D Phase</span>
                <h3 className="text-2xl font-black mb-4 italic">BebeHelper</h3>
                <p className="text-blue-100 text-sm leading-relaxed break-keep">육아 환경의 데이터를 학습하고 분석하는 AI 기반 지능형 육아 보조 솔루션을 개발 중입니다. 실무와 R&D를 병행하며 쌓은 실전 감각을 담습니다.</p>
              </div>
            </div>
            <div className="p-10 rounded-[35px] bg-slate-900 text-white flex flex-col justify-between min-h-[380px]">
              <FiZap className="text-blue-400 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">Agile SI</h3>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">작은 랜딩페이지부터 실무 중심의 웹 서비스까지, 불필요한 단계를 줄인 핵심 기술진이 합리적인 견적으로 즉시 해결합니다.</p>
              </div>
            </div>
            <div className="p-10 rounded-[35px] bg-slate-50 text-slate-900 border border-slate-100 flex flex-col justify-between min-h-[380px]">
              <FiLayers className="text-blue-600 text-4xl mb-8" />
              <div>
                <h3 className="text-2xl font-black mb-4 italic">System Design</h3>
                <p className="text-slate-500 text-sm leading-relaxed break-keep">금융·공공 대규모 프로젝트 설계 경험을 바탕으로, 비즈니스 성장에 맞춰 유연하게 확장 가능한 엔터프라이즈 아키텍처를 구축합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expertise */}
      <section id="expertise" className="py-24 md:py-32 px-5 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Core <span className="text-blue-600 font-normal">Expertise.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FiCpu className="text-blue-600" />, title: "AI Integration", desc: "OpenAI 최신 모델을 비즈니스 로직에 결합하여 지능형 자동화 서비스를 구현합니다." },
              { icon: <FiDatabase className="text-blue-600" />, title: "Server Stability", desc: "PHP와 Java 기반의 고성능 서버 구축으로 대규모 트래픽에서도 안정성을 보장합니다." },
              { icon: <FiLock className="text-blue-600" />, title: "Data Security", desc: "엄격한 보안 가이드라인을 준수하여 고객사의 소중한 데이터 자산을 안전하게 보호합니다." },
              { icon: <FiMonitor className="text-blue-600" />, title: "Modern Tech", desc: "React, Next.js 등 최신 프론트엔드 기술과 클라우드 인프라를 통합적으로 다룹니다." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[30px] border border-slate-100 shadow-sm hover:translate-y-[-5px] transition-all">
                <div className="text-3xl mb-6">{item.icon}</div>
                <h4 className="text-lg font-black mb-4 italic uppercase">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed break-keep italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [보충] 5. Engineering Values: 전문가적 가치관 강조 */}
      <section className="py-24 md:py-32 px-5 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">Engineering <br /><span className="text-blue-600 font-normal">Philosophy.</span></h2>
              <p className="text-slate-600 font-medium leading-relaxed break-keep mb-8">
                민소프트는 보이지 않는 곳의 완성도가 비즈니스의 격을 결정한다고 믿습니다. 
                단순히 돌아가는 코드를 넘어, 지속 가능한 엔지니어링의 정석을 보여드립니다.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <FiTarget className="text-blue-600" />, title: "Business Alignment", desc: "우리는 기술을 위한 기술이 아닌, 비즈니스 성공을 위한 최적의 기술을 선택합니다." },
                  { icon: <FiRefreshCw className="text-blue-600" />, title: "Clean & Future", desc: "유지보수가 쉽고 향후 기능 확장이 용이한 구조적 설계를 원칙으로 합니다." }
                ].map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{val.icon}</div>
                    <div>
                      <h6 className="font-black italic uppercase text-sm">{val.title}</h6>
                      <p className="text-xs text-slate-500">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block bg-slate-100 h-[400px] rounded-[40px] overflow-hidden">
               <img src="/hero-bg.png" alt="Philosophy" className="w-full h-full object-cover opacity-50 grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tech Stack */}
      <section id="tech" className="py-24 md:py-32 px-5 bg-slate-950 text-white text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8 text-blue-400">The Stack.</h2>
              <p className="text-slate-400 text-base md:text-lg mb-12 font-medium break-keep">
                민소프트는 검증된 기술의 안정성을 최우선으로 합니다. PHP, Java, MySQL 등 숙련된 기술력을 바탕으로 최상의 퍼포먼스를 냅니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 max-w-sm">
                <div>
                  <h5 className="text-blue-400 text-[10px] font-black mb-2 uppercase tracking-widest opacity-60">Backend / AI</h5>
                  <p className="text-sm font-bold leading-relaxed italic">Java, PHP, Node.js, AI / OpenAI</p>
                </div>
                <div>
                  <h5 className="text-blue-400 text-[10px] font-black mb-2 uppercase tracking-widest opacity-60">Database</h5>
                  <p className="text-sm font-bold leading-relaxed italic">PostgreSQL, MySQL, Redis, MsSQL</p>
                </div>
                <div>
                  <h5 className="text-blue-400 text-[10px] font-black mb-2 uppercase tracking-widest opacity-60">Frontend</h5>
                  <p className="text-sm font-bold italic">React, Next.js, Tailwind</p>
                </div>
                <div>
                  <h5 className="text-blue-400 text-[10px] font-black mb-2 uppercase tracking-widest opacity-60">Infra</h5>
                  <p className="text-sm font-bold italic">AWS, Docker, Jenkins</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 relative">
               <FiCode className="text-blue-600 text-4xl md:text-6xl absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-slate-950 p-3 md:p-4 rounded-full border border-white/10" />
               <h4 className="text-xl md:text-2xl font-black mb-6 italic underline decoration-blue-500 underline-offset-8">Technical Blueprint</h4>
               <ul className="space-y-6">
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">데이터 기반 지능형 시스템 설계</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">클라우드 네이티브 환경의 자동화</p></li>
                 <li className="flex gap-4 items-start"><FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" /><p className="text-sm text-slate-300 break-keep">Clean Code 원칙을 준수하는 유지보수성</p></li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-24 md:py-32 px-5 bg-white text-left">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-16 text-center italic">Q <span className="text-blue-600">&</span> A.</h2>
          <div className="space-y-12">
            {[
              { q: "정말 자잘한 일도 맡길 수 있나요?", a: "네, 랜딩페이지 수정이나 간단한 폼 구축 같은 가벼운 업무도 환영합니다. 모든 비즈니스는 작은 디테일에서 시작됨을 잘 알고 있습니다." },
              { q: "베베헬퍼 서비스에는 어떤 AI 기술이 쓰이나요?", a: "사용자의 데이터를 분석하여 맞춤형 가이드를 생성하는 지능형 기술이 도입됩니다. 현재 정교하게 개발 중이며, 런칭 시 공식 안내해 드리겠습니다." },
              { q: "민소프트의 가장 큰 강점은?", a: "영업 비용을 뺀 합리적인 견적과 대표가 직접 소통하는 책임감입니다. 핵심 기술진이 즉각 대응하기에 소통 비용은 낮고 결과물의 퀄리티는 높습니다." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-50 pb-10">
                <h4 className="text-lg md:text-xl font-black mb-4 flex items-start gap-3 italic">
                  <span className="text-blue-600 italic">Q.</span> 
                  <span className="break-keep leading-tight">{faq.q}</span>
                </h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed pl-7 break-keep italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer: 주소 및 사업자 정보 보강 */}
      <footer className="py-20 px-5 bg-slate-50 border-t border-slate-100 text-left">
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
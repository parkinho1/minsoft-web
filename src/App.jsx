import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiRefreshCw, FiServer, FiActivity, FiTarget, FiZap, FiSmile, FiDollarSign, FiUsers } from "react-icons/fi";

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
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#team" className="hover:text-blue-400 transition-colors">Our Team</a>
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

      {/* 1. Hero: 모든 규모의 프로젝트 수용 강조 */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.png" alt="MinSoft Tech" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">Full-Spectrum Digital Partner</div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
              From <span className="text-blue-400 font-normal">Landing Pages</span> <br /> To <span className="text-blue-400 font-normal">Expert Systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg mb-10 font-medium leading-relaxed">
              가벼운 랜딩페이지 한 장부터 복잡한 기업용 시스템까지. <br />
              정예 팀의 기술력을 거품 없는 합리적인 비용으로 경험하세요.
            </p>
            <button onClick={() => window.open('https://open.kakao.com/o/sjhhq7ei')} className="group flex items-center gap-3 text-xl font-black bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              1:1 맞춤 상담 시작하기 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Services: 작은 일부터 큰 일까지 명시 */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our <span className="text-blue-600">Services.</span></h2>
            <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-sm text-balance">프로젝트의 크기가 아닌, 해결의 가치에 집중합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 group hover:bg-blue-600 transition-all duration-500">
              <FiZap className="text-blue-600 w-10 h-10 mb-8 group-hover:text-white" />
              <h3 className="text-2xl font-black mb-4 group-hover:text-white italic">Landing & Micro</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-100">광고 효율을 극대화하는 자잘한 랜딩페이지, 이벤트 페이지도 고퀄리티로 빠르게 제작합니다.</p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[40px] text-white">
              <FiActivity className="text-blue-400 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black mb-4 italic">Business Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">업무 자동화, 관리용 대시보드, API 연동 등 실질적인 비즈니스 도구를 합리적으로 구축합니다.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 group hover:bg-blue-600 transition-all duration-500">
              <FiLayers className="text-blue-600 w-10 h-10 mb-8 group-hover:text-white" />
              <h3 className="text-2xl font-black mb-4 group-hover:text-white italic">Expert Solutions</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-100">규모 있는 기업용 ERP, CRM 및 고가용성 아키텍처 설계를 정예 팀이 직접 수행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team & Network: 팀의 존재와 합리성 강조 */}
      <section id="team" className="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded text-[10px] font-black mb-6 uppercase tracking-[0.3em]">MinSoft Collective</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">
                Not a Solo, <br /> <span className="text-blue-600">But a Team.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-bold">
                민소프트는 박인호 대표를 중심으로 각 분야의 실력 있는 시니어 개발자들이 <br />
                프로젝트 단위로 뭉치는 '정예 전문가 네트워크'입니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-slate-500">
                  <FiUsers className="text-blue-600" /> 대형 업체 대비 40% 이상 낮은 합리적 비용
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-500">
                  <FiCheckCircle className="text-blue-600" /> 시니어급 인력이 직접 설계하고 직접 코딩
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-500">
                  <FiSmile className="text-blue-600" /> 작은 일도 소홀히 하지 않는 유연한 대응
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col justify-center items-center text-center">
                <FiDollarSign className="text-blue-600 w-8 h-8 mb-4" />
                <h5 className="font-black text-xl mb-1 italic text-slate-900">Rational</h5>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing Policy</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] text-white flex flex-col justify-center items-center text-center">
                <FiTarget className="text-blue-400 w-8 h-8 mb-4" />
                <h5 className="font-black text-xl mb-1 italic">Precision</h5>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Direct Control</p>
              </div>
              <div className="col-span-2 bg-blue-600 p-10 rounded-[40px] text-white">
                <h5 className="font-black text-2xl mb-4 italic">Our Philosophy</h5>
                <p className="text-blue-100 text-sm leading-loose">
                  "많은 인원보다 중요한 것은 정확한 실력입니다. 민소프트는 거품을 걷어내고 
                  기술의 본질**에만 집중하여 고객의 비용을 가치로 바꿉니다."
                </p>
              </div>
            </div>
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
              <p className="text-lg font-bold text-slate-700 leading-relaxed mb-8 italic underline decoration-blue-200 underline-offset-8 decoration-4">
                작은 랜딩페이지부터 큰 시스템까지 <br />
                민소프트 팀이 가장 합리적으로 해결합니다.
              </p>
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
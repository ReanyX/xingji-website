import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Calculator,
  Award,
  TrendingUp,
  Clock,
  ShieldCheck,
  PhoneCall,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Users
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/30 overflow-hidden">
      <svg className="w-6 h-6 text-white absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <div className="absolute inset-0 bg-white/20 blur-md rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-2xl tracking-tight text-slate-900 leading-none">星集企服</span>
      <span className="text-[10px] text-slate-500 tracking-widest uppercase font-bold mt-0.5">XingJi Services</span>
    </div>
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (targetId: string) => {
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      id: "company-registration",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "工商注册服务",
      desc: "提供内资 / 外资公司注册、个体工商户注册及正规地址挂靠服务。极速出照，全程代办，让您创业起步省心省力。"
    },
    {
      id: "tax-services",
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      title: "代理记账报税",
      desc: "专业提供代理记账、纳税申报、税务筹划服务。资深会计团队全程把控税务风险，合理优化企业财税成本。"
    },
    {
      id: "license-services",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "工商变更与注销",
      desc: "涵盖公司名称、地址、法人、经营范围等全类型执照变更，以及简易注销、一般注销全程代办，合规高效办结。"
    },
    {
      id: "consulting",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "智能财税软件",
      desc: "销售企业级自动化财务软件，实现记账、报税、报表生成全流程智能化，大幅提升财务工作效率，降低运营成本。"
    }
  ];

  const processSteps = [
    { num: "01", title: "需求沟通", desc: "了解企业工商注册、财税管理等核心诉求，提供专业政策建议。", img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=400" },
    { num: "02", title: "定制方案", desc: "根据行业特点与企业规模，量身定制工商注册、记账报税或变更注销方案。", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" },
    { num: "03", title: "极速办理", desc: "专人对接工商、税务部门，全程代办营业执照、地址挂靠、记账报税等事项。", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" },
    { num: "04", title: "交付与售后", desc: "移交营业执照、公章、税务登记等全套材料，后续持续提供财税咨询支持。", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-blue-600 transition-colors">首页</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-blue-600 transition-colors">核心业务</a>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="hover:text-blue-600 transition-colors">办理流程</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600 transition-colors">关于我们</a>
            </nav>

            <div className="hidden md:block">
              <button onClick={() => scrollToSection('about')} className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                立即咨询
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4 text-center font-medium text-slate-600">
              <a href="#" className="py-2 text-blue-600" onClick={(e) => handleNavClick(e, '#')}>首页</a>
              <a href="#services" className="py-2" onClick={(e) => handleNavClick(e, 'services')}>核心业务</a>
              <a href="#process" className="py-2" onClick={(e) => handleNavClick(e, 'process')}>办理流程</a>
              <a href="#about" className="py-2" onClick={(e) => handleNavClick(e, 'about')}>关于我们</a>
              <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full mx-auto w-[200px] shadow-md shadow-blue-200">
                立即咨询
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#eef1f5]">
    {/* Right side faded office background */}
    <div className="absolute right-0 top-0 w-full md:w-[65%] h-full z-0 pointer-events-none hidden md:block">
      <div
        className="absolute inset-0 opacity-[0.95]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Blending Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/50 via-transparent to-[#eef1f5] opacity-40"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 mb-16 md:mb-28 flex items-center min-h-[40vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-3/5 lg:w-1/2"
      >
        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
          <span className="text-blue-600">工商财税</span> 服务专家
        </h1>

        <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
          依托资深行业经验与数字化技术优势，为客户提供工商注册、变更注销、财税管理及自动化软件一体化等一站式高品质服务，构筑坚实商业基石。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => scrollToSection('about')} className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center border border-blue-600 shadow-md shadow-blue-500/20">
            开启合作
          </button>
          <button onClick={() => scrollToSection('services')} className="bg-transparent text-slate-700 px-8 py-3.5 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 border border-slate-300">
            了解详情 <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </motion.div>
    </div>
      </section>

      {/* Core Services */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-20" id="services">
        {/* Faint Background - Abstract architecture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">核心业务</h2>
              <p className="text-slate-600 text-lg">
                覆盖企业生命全周期的专业服务矩阵，精准匹配不同阶段的核心需求。
              </p>
            </div>
          </div>

          {/* Business Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-48 md:h-56 rounded-2xl overflow-hidden mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
              alt="商务团队协作"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/30"></div>
            <div className="relative z-10 flex items-center h-full px-8 md:px-12">
              <div>
                <p className="text-white/80 text-sm font-medium mb-2 tracking-wider">专业团队 · 值得信赖</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold">10年行业经验，服务超过 10,000+ 企业</h3>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div 
                id={service.id}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden scroll-mt-28"
              >
                {/* Decorative shape inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 [&>*:first-child]:group-hover:text-white transition-all duration-300 shadow-sm text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed h-[4.5rem]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Newly added for trust */}
      <section className="relative py-24 bg-slate-50 overflow-hidden border-y border-slate-200 scroll-mt-20" id="process">
        {/* Faint Background - Handshake/Business connection */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">为您省心的服务流程</h2>
            <p className="text-slate-600 text-lg">
              告别繁琐手续，我们用标准化的流程，让您的创业之路无比顺畅。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-[2.25rem] right-0 left-1/2 w-full h-[2px] bg-slate-200 border-t-2 border-dashed border-slate-300" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-white">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-md">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Data/Trust */}
      <section className="relative py-24 bg-white overflow-hidden scroll-mt-20" id="about">
         {/* Faint Background - Modern Office */}
         <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">为什么选择星集企业服务？</h2>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">价格透明，绝无隐形消费</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">工商注册、代理记账、地址挂靠等所有服务费用签约前清晰公示，报价即底价，不让您多花一分冤枉钱。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">极速出照，最快当天办结</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">优化工商、税务对接流程，最快当天出照、当月完成税务登记，让您的企业快速投入运营。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">专属顾问，全程1对1服务</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">每位客户配备专属工商顾问与资深会计师，从注册到记账报税全程跟进，随时响应您的财税需求。</p>
                    </div>
                  </li>
                </ul>
             </div>
             <div className="w-full lg:w-1/2" id="consultation">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-white scroll-mt-28">
                   <div className="bg-white rounded-[2rem] p-8 md:p-10">
                     <h3 className="text-2xl font-black text-slate-900 mb-2">获取免费定制方案</h3>
                     <p className="text-slate-500 text-sm mb-8">填写信息，我们的专属财务顾问将在5分钟内联系您</p>
                     
                     <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label className="sr-only">您的称呼</label>
                          <input type="text" placeholder="您的称呼 (如：李女士)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium" />
                        </div>
                        <div>
                          <label className="sr-only">联系电话</label>
                          <input type="tel" placeholder="联系电话 (必填)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium" />
                        </div>
                        <div>
                          <label className="sr-only">您需要办理的业务</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-slate-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231E293B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1.25rem_center] bg-no-repeat">
                            <option value="">您需要办理的业务？</option>
                            <option value="reg">公司注册</option>
                            <option value="tax">代理记账</option>
                            <option value="cert">资质代办</option>
                            <option value="other">其他咨询</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold rounded-xl px-5 py-4 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 mt-2 text-lg">
                          立即获取方案与报价
                        </button>
                        <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1.5">
                          <ShieldCheck className="w-4 h-4" /> 您的私人信息将被严格保密，请放心填写。
                        </p>
                     </form>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-8 text-slate-400 text-sm relative overflow-hidden">
        {/* Background dark subtle map/network pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* 公司介绍 */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">星集企服</span>
              </div>
              <p className="leading-relaxed text-slate-400 text-sm">
                专业提供工商注册、地址挂靠、代理记账、税务合规、公司注销及智能财税软件等一站式企业服务，助力企业合规高效运营。
              </p>
            </div>

            {/* 核心业务 */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">核心业务</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>工商注册服务</li>
                <li>代理记账报税</li>
                <li>工商变更与注销</li>
                <li>智能财税软件</li>
              </ul>
            </div>

            {/* 联系我们 */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">联系我们</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                   <div className="p-2 bg-slate-800 rounded-lg text-blue-400 shrink-0">
                     <PhoneCall className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-white font-medium mb-1 text-sm">400-XXX-XXXX</p>
                     <p className="text-slate-500 text-sm">周一至周日 9:00 - 18:00</p>
                   </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1 text-sm">成都总部</p>
                    <p className="text-slate-500 text-sm">成都市锦江区东大街xxx号x层</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">© 2024 四川星集企业服务有限责任公司 版权所有 | 蜀ICP备88888888号</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

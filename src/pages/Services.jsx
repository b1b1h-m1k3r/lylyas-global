import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Monitor,
  ShoppingCart,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, isRTL } = useLanguage();
  const pageT = t.servicesPage;
  const location = useLocation();
  const navigate = useNavigate();

  const pillarOrder = ['business-solutions', 'digital-services', 'e-commerce', 'professional-services'];
  const [activeTab, setActiveTab] = useState(pillarOrder[0]);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      if (pillarOrder.includes(targetId)) {
        setActiveTab(targetId);
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  const getIcon = (id) => {
    switch (id) {
      case 'business-solutions':
        return TrendingUp;
      case 'digital-services':
        return Monitor;
      case 'e-commerce':
        return ShoppingCart;
      case 'professional-services':
      default:
        return Briefcase;
    }
  };

  const handleInquire = (serviceTitle) => {
    navigate(`/contact?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332]">
      
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-[#E3ECE5] bg-[#F2F6F3]/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
            {pageT.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B4332] mt-3 mb-6">
            {pageT.title}
          </h1>
          <p className="text-base sm:text-lg text-[#4D6357] font-light leading-relaxed max-w-2xl mx-auto">
            {pageT.subtitle}
          </p>

          {/* Quick Pillar Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {pillarOrder.map((id) => {
              const Icon = getIcon(id);
              const pData = pageT.pillars[id];
              if (!pData) return null;
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#2D6A4F] text-white shadow-xs'
                      : 'bg-white border border-[#E3ECE5] text-[#4D6357] hover:border-[#2D6A4F]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pData.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
          
          {pillarOrder.map((id, index) => {
            const pData = pageT.pillars[id];
            if (!pData) return null;
            const Icon = getIcon(id);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={id}
                id={id}
                className="scroll-mt-28 bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Category Overview */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F]">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#2D6A4F] uppercase tracking-widest">
                        {pageT.pillarPrefix}{index + 1}
                      </span>
                      <h2 className="text-3xl font-serif font-bold text-[#1B4332] mt-1">
                        {pData.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
                      {pData.subtitle}
                    </p>

                    <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-xs text-[#4D6357]">
                      <strong className="text-[#1B4332]">{pageT.commitmentLabel} </strong>
                      {pageT.commitmentDesc.replace('{title}', pData.title)}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleInquire(pData.title)}
                        className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded-full transition-all group shadow-xs"
                      >
                        {pageT.inquireBtn.replace('{title}', pData.title)}
                        <ArrowRight className="w-3.5 h-3.5 text-[#C4A882] transition-transform group-hover:translate-x-1 rtl-flip" />
                      </button>
                    </div>
                  </div>

                  {/* Sub-Services Checklist */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] mb-4">
                      {pageT.specializedTitle}
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      {pData.items.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E3ECE5] hover:border-[#2D6A4F] transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-base font-semibold text-[#1B4332]">
                                {sub.name}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#4D6357] mt-1 font-light leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Global Collaboration Callout */}
      <section className="py-20 bg-[#163E32] text-white border-t border-[#235344]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C4A882] uppercase">
            {pageT.tailoredEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            {pageT.tailoredTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#D2E4DA] font-light leading-relaxed max-w-xl mx-auto">
            {pageT.tailoredDesc}
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-white text-[#1B4332] text-xs sm:text-sm font-semibold tracking-wider px-8 py-4 rounded-full transition-all shadow-md group"
            >
              {pageT.consultationBtn}
              <ArrowRight className="w-4 h-4 text-[#2D6A4F] transition-transform group-hover:translate-x-1 rtl-flip" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

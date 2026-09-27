import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Compass, Lightbulb, Globe, Gem, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();
  const pageT = t.aboutPage;

  const valueIcons = [Gem, CheckCircle2, Lightbulb, ShieldCheck, Globe];

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
        </div>
      </section>

      {/* Company Introduction & Entity Details */}
      <section className="py-20 border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2D6A4F] uppercase">
                {pageT.profileEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-snug">
                {pageT.profileTitle}
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
                <p>{pageT.p1}</p>
                <p>{pageT.p2}</p>
                <p>{pageT.p3}</p>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[#2D6A4F] font-mono uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F]" />
                  <span>{pageT.tagUS}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F]" />
                  <span>{pageT.tagGlobal}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E3ECE5]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern corporate glass architecture"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163E32]/90 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="text-xs font-mono text-[#C4A882] tracking-wider uppercase">
                      {pageT.governanceTag}
                    </div>
                    <div className="font-serif text-xl font-bold mt-1">
                      {pageT.governanceTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F4F7F5]/40 border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Box */}
            <div className="bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
                {pageT.missionEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-2 mb-4">
                {pageT.missionTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
                {pageT.missionDesc}
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-[#163E32] text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden border border-[#2B6552]">
              <div className="w-12 h-12 rounded-xl bg-[#245444] border border-[#2D6A4F] flex items-center justify-center text-[#C4A882] mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C4A882] uppercase">
                {pageT.visionEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2 mb-4">
                {pageT.visionTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#D2E4DA] font-light leading-relaxed">
                {pageT.visionDesc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values (5 visual blocks) */}
      <section className="py-20 lg:py-28 border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
              {pageT.valuesEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-2 mb-4">
              {pageT.valuesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
              {pageT.valuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pageT.valuesList.map((v, i) => {
              const Icon = valueIcons[i] || CheckCircle2;
              return (
                <div
                  key={i}
                  className="bg-white border border-[#E3ECE5] rounded-2xl p-6 shadow-2xs hover:border-[#2D6A4F] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1B4332] mb-2">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#4D6357] leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 text-[10px] font-mono text-[#2D6A4F]">
                    0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mb-4">
            {pageT.partnerTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4D6357] font-light leading-relaxed max-w-xl mx-auto mb-8">
            {pageT.partnerDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs sm:text-sm font-semibold tracking-wider px-7 py-3.5 rounded-full transition-all shadow-xs group"
            >
              {pageT.exploreBtn}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl-flip" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-[#EBF4EE] text-[#1B4332] border border-[#D0E0D3] text-xs sm:text-sm font-semibold tracking-wider px-7 py-3.5 rounded-full transition-all"
            >
              {pageT.contactBtn}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

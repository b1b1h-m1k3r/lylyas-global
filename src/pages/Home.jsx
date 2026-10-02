import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Monitor,
  ShoppingCart,
  Briefcase,
  Sparkles,
  Globe,
  Shield,
  Users,
  Gem,
  Lightbulb,
  Handshake,
} from 'lucide-react';
import { getServices, getInsights } from '../data/storage';
import ArticleModal from '../components/ArticleModal';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const navigate = useNavigate();
  const services = getServices();
  const allInsights = getInsights();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { t, isRTL } = useLanguage();

  // Latest 3 insights for the home grid
  const latestInsights = allInsights.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332]">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-[#E3ECE5] bg-gradient-to-b from-[#F2F6F3]/50 to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2D6A4F] uppercase font-sans">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-serif font-bold text-[#1B4332] leading-[1.12] tracking-tight">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#374B41] max-w-xl leading-relaxed font-light">
                {t.hero.subtext}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs sm:text-sm font-semibold tracking-wider px-7 py-4 rounded-full transition-all duration-300 shadow-xs hover:shadow-md group"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-[#EBF4EE] text-[#1B4332] border border-[#D0E0D3] text-xs sm:text-sm font-semibold tracking-wider px-7 py-4 rounded-full transition-all duration-300 shadow-2xs hover:shadow-xs"
                >
                  {t.hero.contactBtn}
                </Link>
              </div>
            </div>

            {/* Right Column: Office Skyline View + Vertical Label */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-[#E3ECE5] aspect-[4/3] lg:aspect-[1.15/1]">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern corporate executive suite with desk, plant, and skyline window"
                  className="w-full h-full object-cover"
                />
                {/* Subtle soft eucalyptus ambient glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/20 via-transparent to-emerald-100/10 pointer-events-none" />
              </div>

              {/* Vertical Side Ribbon (matches reference mockup) */}
              <div
                className={`hidden xl:flex absolute ${
                  isRTL ? '-left-16' : '-right-16'
                } top-1/2 -translate-y-1/2 origin-center rotate-90 text-[10px] font-semibold tracking-[0.35em] text-[#2D6A4F] uppercase select-none pointer-events-none whitespace-nowrap`}
              >
                {t.hero.verticalRibbon}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WHO WE ARE SECTION                                     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Corporate Plaque / Architecture Image */}
            <div className="md:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#E3ECE5] group aspect-[4/3] md:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate headquarters architectural facade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#163E32]/50 flex items-center justify-center p-6">
                  <div className="bg-[#FAF9F6]/95 backdrop-blur-md border border-[#C4A882]/70 px-6 py-4 rounded-2xl shadow-xl text-center">
                    <div className="text-[10px] tracking-[0.25em] text-[#2D6A4F] font-semibold uppercase mb-1">
                      {t.whoWeAre.badgeUS}
                    </div>
                    <div className="text-base sm:text-lg font-serif font-bold text-[#1B4332] tracking-wider">
                      LYLYAS GLOBAL
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Mission & Overview */}
            <div className="md:col-span-5 space-y-5">
              <div className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
                {t.whoWeAre.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-snug">
                {t.whoWeAre.title}
              </h2>
              <p className="text-sm sm:text-base text-[#374B41] leading-relaxed font-light">
                {t.whoWeAre.desc}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider px-6 py-3 rounded-full transition-all group shadow-2xs"
                >
                  <span>{t.whoWeAre.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Right: 3 Value Indicators with Circular Icons */}
            <div className="md:col-span-3 space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-white border border-[#E3ECE5] text-[#2D6A4F] shrink-0 shadow-2xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B4332]">{t.whoWeAre.pillars.global.title}</h4>
                  <p className="text-xs text-[#4D6357] mt-0.5 leading-relaxed">
                    {t.whoWeAre.pillars.global.desc}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-white border border-[#E3ECE5] text-[#2D6A4F] shrink-0 shadow-2xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B4332]">{t.whoWeAre.pillars.professional.title}</h4>
                  <p className="text-xs text-[#4D6357] mt-0.5 leading-relaxed">
                    {t.whoWeAre.pillars.professional.desc}
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-white border border-[#E3ECE5] text-[#2D6A4F] shrink-0 shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B4332]">{t.whoWeAre.pillars.client.title}</h4>
                  <p className="text-xs text-[#4D6357] mt-0.5 leading-relaxed">
                    {t.whoWeAre.pillars.client.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR SERVICES / WHAT WE DO                              */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
                {t.whatWeDo.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-1">
                {t.whatWeDo.title}
              </h2>
              <p className="text-sm sm:text-base text-[#374B41] mt-1 font-light max-w-xl">
                {t.whatWeDo.subtitle}
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] hover:text-[#1B4332] tracking-wider transition-colors group"
            >
              <span>{t.whatWeDo.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 rtl:mr-1 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Business Solutions */}
            <div className="bg-white border border-[#E3ECE5] rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-[#2D6A4F] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-6 group-hover:bg-[#2D6A4F] group-hover:text-[#C4A882] transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1B4332] mb-3">
                  {t.whatWeDo.business.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.whatWeDo.business.desc}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E3ECE5]">
                <Link
                  to="/services#business-solutions"
                  className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors"
                >
                  <span>{t.whatWeDo.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Card 2: Digital Services */}
            <div className="bg-white border border-[#E3ECE5] rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-[#2D6A4F] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-6 group-hover:bg-[#2D6A4F] group-hover:text-[#C4A882] transition-colors">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1B4332] mb-3">
                  {t.whatWeDo.digital.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.whatWeDo.digital.desc}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E3ECE5]">
                <Link
                  to="/services#digital-services"
                  className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors"
                >
                  <span>{t.whatWeDo.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Card 3: E-commerce */}
            <div className="bg-white border border-[#E3ECE5] rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-[#2D6A4F] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-6 group-hover:bg-[#2D6A4F] group-hover:text-[#C4A882] transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1B4332] mb-3">
                  {t.whatWeDo.ecommerce.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.whatWeDo.ecommerce.desc}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E3ECE5]">
                <Link
                  to="/services#e-commerce"
                  className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors"
                >
                  <span>{t.whatWeDo.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Card 4: Personal Development & Lifestyle Coaching */}
            <div className="bg-white border border-[#E3ECE5] rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-[#2D6A4F] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-6 group-hover:bg-[#2D6A4F] group-hover:text-[#C4A882] transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#1B4332] mb-3">
                  {t.whatWeDo.coaching.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.whatWeDo.coaching.desc}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-[#E3ECE5]">
                <Link
                  to="/services#personal-development"
                  className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors"
                >
                  <span>{t.whatWeDo.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 rtl:mr-1.5 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

          </div>

          {/* Lifestyle Coaching Highlight & Disclaimer Banner */}
          <div className="mt-12 bg-white border border-[#E3ECE5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Graphic Asset / Visual Presentation */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E3ECE5] max-w-md w-full bg-[#0d1f18]">
                  <img
                    src="/images/personal-coaching.png"
                    alt="Personal Development & Lifestyle Coaching - Lylyas Global"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Information & Required Disclaimer Note */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] tracking-[0.25em] font-semibold text-[#2D6A4F] bg-[#EBF4EE] border border-[#D0E0D3] px-3 py-1 rounded-full uppercase">
                    {t.servicesPage.pillars['personal-development']?.badge || 'NON-MEDICAL SERVICES'}
                  </span>
                  <span className="text-xs text-[#8A9E93] font-mono">
                    {t.servicesPage.pillars['personal-development']?.subheading || 'Mindset • Growth • Balance • Freedom'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                  {t.whatWeDo.coaching.title}
                </h3>

                <p className="text-sm font-serif italic text-[#C4A882] tracking-wide">
                  "{t.servicesPage.pillars['personal-development']?.tagline || 'More Clarity • More Balance • A Brighter You'}"
                </p>

                <p className="text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.whatWeDo.coaching.desc}
                </p>

                {/* Mandatory Non-Medical Disclaimer Note */}
                <div className="p-4 rounded-2xl bg-[#FEF3C7]/40 border border-[#FDE68A] text-xs text-[#92400E] leading-relaxed">
                  <strong className="font-semibold block mb-0.5">
                    {isRTL ? 'إشعار غير طبي مهم:' : (t.nav.home === 'Accueil' ? 'Note importante (non médicale) :' : 'Important Notice:')}
                  </strong>
                  {t.whatWeDo.disclaimerNote}
                </div>

                <div className="pt-2">
                  <Link
                    to="/services#personal-development"
                    className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider px-6 py-3 rounded-full transition-all group shadow-2xs"
                  >
                    <span>{t.whatWeDo.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl-flip" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHY LYLYAS GLOBAL / OUR VALUES                         */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Soft Botanical Forest Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#163E32] text-white p-8 sm:p-12 shadow-lg flex flex-col justify-between min-h-[340px] border border-[#2B6552]">
              {/* Botanical leaves background overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#113127] via-[#163E32]/85 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C4A882] uppercase">
                  {t.values.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  {t.values.title}
                </h2>
                <p className="text-sm sm:text-base text-[#D2E4DA] leading-relaxed font-light max-w-sm">
                  {t.values.subtitle}
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C4A882] tracking-wider uppercase">
                  <span>{t.values.principles}</span>
                  <span className="w-8 h-px bg-[#C4A882]/50" />
                </div>
              </div>
            </div>

            {/* Right: 4 Values Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
              {/* Value 1: Integrity */}
              <div className="bg-white border border-[#E3ECE5] rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#2D6A4F] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-4">
                  <Gem className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#1B4332] mb-1.5">
                  {t.values.integrity.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.values.integrity.desc}
                </p>
              </div>

              {/* Value 2: Innovation */}
              <div className="bg-white border border-[#E3ECE5] rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#2D6A4F] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-4">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#1B4332] mb-1.5">
                  {t.values.innovation.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.values.innovation.desc}
                </p>
              </div>

              {/* Value 3: Professionalism */}
              <div className="bg-white border border-[#E3ECE5] rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#2D6A4F] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-4">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#1B4332] mb-1.5">
                  {t.values.professionalism.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.values.professionalism.desc}
                </p>
              </div>

              {/* Value 4: Global Perspective */}
              <div className="bg-white border border-[#E3ECE5] rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#2D6A4F] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#EBF4EE] border border-[#D0E0D3] flex items-center justify-center text-[#2D6A4F] mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#1B4332] mb-1.5">
                  {t.values.globalPerspective.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4D6357] leading-relaxed font-light">
                  {t.values.globalPerspective.desc}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. OUR APPROACH + LET'S WORK TOGETHER (SPLIT SECTION)     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E3ECE5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Our Approach */}
            <div className="lg:col-span-5 bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
                  {t.approach.eyebrow}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#1B4332]">
                  {t.approach.title}
                </h3>
                <p className="text-sm sm:text-base text-[#374B41] leading-relaxed font-light">
                  {t.approach.desc}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded-full transition-all group"
                >
                  <span>{t.approach.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

            {/* Right Card: Let's Work Together (Soft forest with gold frame accent) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#13382C] text-white p-8 sm:p-12 shadow-lg flex flex-col justify-between border border-[#2B6552]">
              {/* Botanical leaves background overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80')`
                }}
              />
              {/* Gold line border framing */}
              <div className="absolute inset-4 sm:inset-6 border border-[#C4A882]/35 rounded-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4 max-w-lg">
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  {t.cta.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D2E4DA] leading-relaxed font-light">
                  {t.cta.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white border border-[#C4A882]/70 hover:border-[#C4A882] text-xs font-semibold tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 group shadow-md"
                >
                  <span>{t.cta.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4A882] transition-transform group-hover:translate-x-1 rtl-flip" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. LATEST INSIGHTS & VISION CARD                          */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
                {t.insightsSection.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-1">
                {t.insightsSection.title}
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] hover:text-[#1B4332] tracking-wider transition-colors group"
            >
              <span>{t.insightsSection.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 rtl:mr-1 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
            </Link>
          </div>

          {/* 4 Cards Grid (3 Articles + 1 Mountain Vista Card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {latestInsights.map((insight) => (
              <div
                key={insight.id}
                onClick={() => setSelectedArticle(insight)}
                className="bg-white border border-[#E3ECE5] rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#2D6A4F] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#2D6A4F] tracking-wider uppercase border border-[#D0E0D3]">
                      {insight.category}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="text-[11px] text-[#4D6357] font-mono mb-2">
                      {insight.date}
                    </div>
                    <h3 className="font-serif font-bold text-base text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <span className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors">
                    {t.insightsSection.readArticle} <ArrowRight className="w-3 h-3 ml-1 rtl:mr-1 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl-flip" />
                  </span>
                </div>
              </div>
            ))}

            {/* Rightmost 4th Card: Mountain Landscape Vision Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#163E32] text-white p-6 shadow-md flex flex-col justify-between border border-[#2B6552] min-h-[300px]">
              {/* Mountain landscape image background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#113127] via-[#163E32]/80 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#C4A882] uppercase">
                  {t.insightsSection.purposeBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  {t.insightsSection.visionTitle}
                </h3>
                <p className="text-xs text-[#D2E4DA] leading-relaxed font-light">
                  {t.insightsSection.visionDesc}
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#2D6A4F]/90 hover:bg-[#22543E] border border-[#C4A882]/50 text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 px-4 rounded-xl transition-all"
                >
                  <span>{t.insightsSection.exploreBtn}</span>
                  <ArrowRight className="w-3 h-3 text-[#C4A882] rtl-flip" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          allArticles={allInsights}
          onClose={() => setSelectedArticle(null)}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />
      )}

    </div>
  );
}

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Disclaimer() {
  const { t } = useLanguage();
  const legalT = t.legal;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332] py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
          {legalT.eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-2 mb-8">
          Disclaimer
        </h1>
        <div className="text-xs text-[#8A9A94] font-mono mb-8">
          {legalT.lastUpdated}
        </div>

        <div className="bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">1. General Commercial Notice</h2>
            <p>
              The information and services provided by Lylyas Global LLC through this website (lylyasglobal.com), written insights, proposals, or direct correspondence are designed solely for general commercial, strategic, digital, and operational guidance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">2. Non-Medical and Non-Clinical Clarification</h2>
            <p className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E3ECE5] text-xs sm:text-sm text-[#1B4332] font-medium leading-relaxed">
              Our personal development and lifestyle coaching services are non-medical and are not intended to diagnose, treat, or prevent any medical or psychological condition. Lylyas Global LLC does not offer medical, psychological, psychiatric, or therapeutic treatment. None of our personal development sessions, coaching engagements, advisory discussions, or published materials are intended to diagnose, treat, prevent, or substitute for professional medical, psychological, psychiatric, or healthcare treatment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">3. Professional Advisory & Legal Disclaimer</h2>
            <p>
              While Lylyas Global LLC provides commercial business consulting, strategic planning, digital systems architecture, e-commerce management, and professional operational support, we do not function as a licensed law firm or certified public accountancy firm.
            </p>
            <p>
              Clients and website visitors are encouraged to consult certified independent legal counsel, licensed tax advisors, and accredited accountants for jurisdiction-specific legal filings and tax structuring.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">4. No Guarantee of Specific Outcomes</h2>
            <p>
              Commercial success, digital marketing reach, e-commerce revenue, and organizational efficiency depend on various market factors beyond our direct control. Lylyas Global LLC makes no warranties or guarantees regarding specific revenue figures or commercial outcomes resulting from our consulting or professional services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

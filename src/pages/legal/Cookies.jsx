import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Cookies() {
  const { t } = useLanguage();
  const legalT = t.legal;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332] py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
          {legalT.eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-2 mb-8">
          Cookie Policy
        </h1>
        <div className="text-xs text-[#8A9A94] font-mono mb-8">
          {legalT.lastUpdated}
        </div>

        <div className="bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">1. What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to facilitate website operation, enhance navigation speed, and provide general analytical telemetry to website administrators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">2. How We Use Cookies</h2>
            <p>
              Lylyas Global LLC uses minimal, privacy-conscious cookies solely for:
            </p>
            <ul className="list-disc pl-6 rtl:pl-0 rtl:pr-6 space-y-1.5">
              <li><strong>Essential Operation:</strong> Ensuring page transitions and language preferences function correctly.</li>
              <li><strong>Aggregated Analytics:</strong> Understanding aggregate visitor metrics (such as page visit counts and traffic origin) to optimize site performance without profiling individuals.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">3. Managing Cookies</h2>
            <p>
              You can adjust your web browser settings to decline or delete cookies at any time. Please consult your browser's help documentation (e.g., Chrome, Safari, Firefox, Edge) to configure your cookie preferences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Terms() {
  const { t } = useLanguage();
  const legalT = t.legal;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332] py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
          {legalT.eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-2 mb-8">
          Terms & Conditions
        </h1>
        <div className="text-xs text-[#8A9A94] font-mono mb-8">
          {legalT.lastUpdated}
        </div>

        <div className="bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website (lylyasglobal.com), you acknowledge and agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please refrain from using the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, all materials on this website, including designs, text, graphics, logos, images, icons, and software, are the property of Lylyas Global LLC and are protected by applicable intellectual property and copyright laws. Unauthorized reproduction, modification, or distribution is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">3. Nature of Website Information</h2>
            <p>
              The content provided on this website is for general informational and commercial presentation purposes only. While we endeavor to keep information current and accurate, we make no representations or warranties of any kind regarding completeness, suitability, or availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">4. Independent Engagement Contracts</h2>
            <p>
              Any formal business consulting, digital implementation, e-commerce management, or professional service engagement entered into with Lylyas Global LLC shall be governed by an independent, executed Master Services Agreement (MSA) or Statement of Work (SOW). Submission of an inquiry via this website does not constitute a binding contractual commitment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

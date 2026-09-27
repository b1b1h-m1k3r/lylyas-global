import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();
  const legalT = t.legal;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332] py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
          {legalT.eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] mt-2 mb-8">
          Privacy Policy
        </h1>
        <div className="text-xs text-[#8A9A94] font-mono mb-8">
          {legalT.lastUpdated}
        </div>

        <div className="bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">1. Introduction</h2>
            <p>
              Lylyas Global LLC ("Lylyas Global", "we", "us", or "our") respects the privacy of our website visitors and clients. This Privacy Policy outlines the types of information we collect when you visit our website (lylyasglobal.com), submit an inquiry, or interact with our services, and how that information is maintained and protected.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when completing our online contact forms or contacting us via email. This may include:
            </p>
            <ul className="list-disc pl-6 rtl:pl-0 rtl:pr-6 space-y-1.5">
              <li>Full Name and Job Title</li>
              <li>Company / Organization Name</li>
              <li>Email Address</li>
              <li>Country / Jurisdiction of Origin</li>
              <li>Subject and Nature of Inquiry</li>
              <li>Any information provided in message correspondence</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">3. How We Use Your Information</h2>
            <p>
              Information collected is used strictly for legitimate commercial and business operations:
            </p>
            <ul className="list-disc pl-6 rtl:pl-0 rtl:pr-6 space-y-1.5">
              <li>Responding directly to your business inquiries and consultation requests</li>
              <li>Preparing service proposals and commercial agreements</li>
              <li>Maintaining operational records and administrative correspondence</li>
              <li>Complying with applicable legal and regulatory obligations</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal or corporate data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">4. Data Retention and Security</h2>
            <p>
              We maintain commercial-grade organizational and technical security measures to safeguard information against unauthorized access, loss, or alteration. Inquiries and correspondence are retained only as long as necessary to fulfill the operational business purpose or as required by applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#1B4332]">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data updates, please contact us at:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] font-mono text-xs text-[#1B4332]">
              {legalT.entityName}<br />
              {legalT.officialEmail}<br />
              {legalT.wyomingLocation}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

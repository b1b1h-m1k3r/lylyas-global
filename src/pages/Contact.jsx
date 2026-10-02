import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Globe, MapPin, Send, CheckCircle2, Shield, Copy, Check } from 'lucide-react';
import { addInquiry } from '../data/storage';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    country: '',
    reason: 'Business Services',
    subject: '',
    message: '',
    honeypot: '', // anti-bot spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        reason: serviceParam.includes('Digital')
          ? 'Digital Services'
          : serviceParam.includes('E-commerce')
          ? 'E-commerce'
          : serviceParam.includes('Professional')
          ? 'Professional Services'
          : 'Business Services',
        subject: `Inquiry regarding ${serviceParam}`,
      }));
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@lylyasglobal.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const honeypotVal = formData.honeypot || target.elements.honeypot?.value;
    if (honeypotVal) {
      // Bot detected, silently ignore
      return;
    }

    const fullName = formData.fullName || target.elements.fullName?.value || '';
    const company = formData.company || target.elements.company?.value || '';
    const email = formData.email || target.elements.email?.value || '';
    const country = formData.country || target.elements.country?.value || '';
    const reason = formData.reason || target.elements.reason?.value || 'Business Services';
    const subject = formData.subject || target.elements.subject?.value || '';
    const message = formData.message || target.elements.message?.value || '';

    setIsSubmitting(true);
    setTimeout(() => {
      // Store inquiry in storage for Admin inbox
      addInquiry({
        fullName,
        company,
        email,
        country,
        reason,
        subject,
        message,
      });

      setFormData(prev => ({
        ...prev,
        fullName,
        company,
        email,
        country,
        reason,
        subject,
        message,
      }));

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332]">
      
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-[#E3ECE5] bg-[#F2F6F3]/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
            {t.contactPage.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B4332] mt-3 mb-6">
            {t.contactPage.title}
          </h1>
          <p className="text-base sm:text-lg text-[#4D6357] font-light leading-relaxed max-w-2xl mx-auto">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Information */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Corporate Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#2D6A4F] uppercase">
                  {t.contactPage.directChannels}
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#1B4332]">
                  {t.contactPage.letsConnect}
                </h2>
                <p className="text-sm sm:text-base text-[#4D6357] font-light leading-relaxed">
                  {t.contactPage.connectDesc}
                </p>
              </div>

              {/* Verified Email Card with Copy button */}
              <div className="bg-white border border-[#E3ECE5] rounded-3xl p-6 shadow-2xs hover:border-[#2D6A4F] transition-colors space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] text-[#2D6A4F]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
                        {t.contactPage.officialEmail}
                      </div>
                      <div className="font-mono text-sm sm:text-base font-bold text-[#1B4332]">
                        contact@lylyasglobal.com
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#FAF9F6] hover:bg-[#EBF4EE] text-[#1B4332] border border-[#D0E0D3] transition-colors text-xs inline-flex items-center gap-1"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-xs text-[#4D6357] font-light border-t border-[#E3ECE5] pt-3">
                  {t.contactPage.emailNote}
                </div>
              </div>

              {/* Corporate Entity Details */}
              <div className="bg-white border border-[#E3ECE5] rounded-3xl p-6 shadow-2xs space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] text-[#2D6A4F] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B4332]">{t.contactPage.jurisdictionTitle}</h3>
                    <p className="text-xs text-[#4D6357] font-light mt-1 leading-relaxed">
                      {t.contactPage.jurisdictionDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E3ECE5]">
                  <div className="p-2.5 rounded-xl bg-[#EBF4EE] border border-[#D0E0D3] text-[#2D6A4F] shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B4332]">{t.contactPage.confidentialityTitle}</h3>
                    <p className="text-xs text-[#4D6357] font-light mt-1 leading-relaxed">
                      {t.contactPage.confidentialityDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#E3ECE5] rounded-3xl p-8 sm:p-12 shadow-2xs">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                    {t.contactPage.successTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4D6357] font-light max-w-md mx-auto leading-relaxed">
                    {t.contactPage.successMsg
                      .replace('{name}', formData.fullName || '')
                      .replace('{reason}', formData.reason || '')
                      .replace('{email}', formData.email || '')}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          company: '',
                          email: '',
                          country: '',
                          reason: 'Business Services',
                          subject: '',
                          message: '',
                          honeypot: '',
                        });
                      }}
                      className="text-xs font-semibold text-[#2D6A4F] hover:text-[#1B4332] underline transition-colors"
                    >
                      {t.contactPage.anotherBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1B4332]">
                      {t.contactPage.sendMessage}
                    </h3>
                    <p className="text-xs text-[#4D6357] font-light mt-1">
                      {t.contactPage.formDesc}
                    </p>
                  </div>

                  {/* Anti-spam honeypot (hidden from humans) */}
                  <div className="hidden">
                    <label>Do not fill this</label>
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                        {t.contactPage.fullName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                        {t.contactPage.company} <span className="text-[#8A9E93] font-normal">{t.contactPage.optional || '(Optional)'}</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. Acme Corp LLC (or Personal)"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                        {t.contactPage.email} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                        {t.contactPage.country} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        placeholder="e.g. United States, France..."
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Reason for Contact */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                      {t.contactPage.reason}
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    >
                      <option value="Business Services">{t.contactPage.reasons.business}</option>
                      <option value="Digital Services">{t.contactPage.reasons.digital}</option>
                      <option value="E-commerce">{t.contactPage.reasons.ecommerce}</option>
                      <option value="Personal Development Coaching">{t.contactPage.reasons.coaching}</option>
                      <option value="Professional Services">{t.contactPage.reasons.professional}</option>
                      <option value="Partnership">{t.contactPage.reasons.partnership}</option>
                      <option value="Collaboration">{t.contactPage.reasons.collaboration}</option>
                      <option value="General Inquiry">{t.contactPage.reasons.general}</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                      {t.contactPage.subject} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Brief summary of inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1B4332] uppercase tracking-wider mb-2">
                      {t.contactPage.message} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={t.contactPage.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E3ECE5] text-sm text-[#1B4332] focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase py-4 rounded-xl transition-all shadow-xs group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>{t.contactPage.sendingBtn}</span>
                      ) : (
                        <>
                          <span>{t.contactPage.sendBtn}</span>
                          <Send className="w-4 h-4 text-[#C4A882] transition-transform group-hover:translate-x-1 rtl-flip" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-[#4D6357] pt-2">
                    {t.contactPage.secureNote} <span className="font-mono font-medium text-[#1B4332]">contact@lylyasglobal.com</span>.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

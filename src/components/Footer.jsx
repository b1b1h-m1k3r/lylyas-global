import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Logo from './Logo';
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#163E32] text-[#FAF9F6] border-t border-[#235344]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-[#C0D9CD] max-w-sm leading-relaxed font-light">
              {t.footer.tagline}
            </p>
            <div className="pt-2 text-xs text-[#C4A882] font-mono tracking-wider">
              {t.footer.jurisdiction}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C4A882]">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.insights}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#D8EAE1] hover:text-[#C4A882] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C4A882]">
              {t.footer.directTitle}
            </h4>
            <p className="text-xs text-[#C0D9CD] leading-relaxed">
              {t.footer.inquiriesDesc}
            </p>

            <a
              href="mailto:contact@lylyasglobal.com"
              className="inline-flex items-center gap-2.5 text-sm text-white hover:text-[#C4A882] transition-colors group"
            >
              <div className="p-2 rounded-lg bg-[#1F4E3E] border border-[#2B6552] text-[#C4A882] group-hover:border-[#C4A882] transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs sm:text-sm">contact@lylyasglobal.com</span>
            </a>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F4E3E] text-[#C0D9CD] hover:text-[#C4A882] hover:bg-[#2D6A4F] border border-[#2B6552] transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F4E3E] text-[#C0D9CD] hover:text-[#C4A882] hover:bg-[#2D6A4F] border border-[#2B6552] transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F4E3E] text-[#C0D9CD] hover:text-[#C4A882] hover:bg-[#2D6A4F] border border-[#2B6552] transition-all"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1F4E3E] text-[#C0D9CD] hover:text-[#C4A882] hover:bg-[#2D6A4F] border border-[#2B6552] transition-all"
                title="X"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-[#235344] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9DC0B2] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Lylyas Global LLC. {t.footer.rights}</span>
            <span className="hidden sm:inline text-[#2B6552]">|</span>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1 text-[#78A896] hover:text-[#C4A882] transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span className="text-[11px]">{t.footer.portal}</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-[#C4A882] transition-colors">
              {t.footer.privacy}
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#C4A882] transition-colors">
              {t.footer.terms}
            </Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-[#C4A882] transition-colors">
              {t.footer.cookies}
            </Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-[#C4A882] transition-colors">
              {t.footer.disclaimer}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

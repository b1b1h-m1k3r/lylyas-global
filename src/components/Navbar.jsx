import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.insights, path: '/insights' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'ar', label: 'العربية', short: 'AR' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#E3ECE5]'
            : 'bg-[#FAF9F6] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#1B4332] font-bold'
                      : 'text-[#4D6357] hover:text-[#2D6A4F]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D6A4F] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#2D6A4F] bg-white border border-[#D0E0D3] hover:border-[#2D6A4F] transition-all py-1.5 px-3 rounded-full shadow-2xs"
                title="Change language"
              >
                <Globe className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span className="uppercase font-bold tracking-wider">{lang}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langMenuOpen && (
                <div
                  className={`absolute ${
                    isRTL ? 'left-0' : 'right-0'
                  } mt-2 w-40 bg-white border border-[#D0E0D3] rounded-2xl shadow-xl py-2 z-50 animate-fadeIn`}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between ${
                        lang === l.code
                          ? 'font-bold text-[#1B4332] bg-[#EBF4EE]'
                          : 'text-[#4D6357] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span>{l.label}</span>
                      {lang === l.code && (
                        <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#1B4332] hover:text-[#2D6A4F] rounded-full hover:bg-[#EBF4EE] transition-colors"
              title={t.nav.searchTitle}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Contact Us Pill Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-sm"
            >
              {t.nav.contactUs}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#1B4332] hover:bg-[#EBF4EE] rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B4332] hover:bg-[#EBF4EE] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-40 bg-[#FAF9F6] border-b border-[#E3ECE5] shadow-2xl px-6 py-6 animate-slideDown">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium py-2 border-b border-[#E3ECE5]/60 transition-colors ${
                    isActive ? 'text-[#1B4332] font-bold border-[#2D6A4F]' : 'text-[#4D6357]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3 flex items-center justify-between">
              <span className="text-xs text-[#4D6357] font-medium flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#2D6A4F]" />
                Language / Langue / اللغة
              </span>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`text-xs px-3 py-1 rounded-full font-semibold transition-colors ${
                      lang === l.code
                        ? 'bg-[#2D6A4F] text-white shadow-xs'
                        : 'bg-white border border-[#D0E0D3] text-[#4D6357]'
                    }`}
                  >
                    {l.short}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-4 text-center bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider uppercase py-3.5 rounded-full shadow-xs"
            >
              {t.nav.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

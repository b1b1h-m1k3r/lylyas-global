import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import Disclaimer from './pages/legal/Disclaimer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Scroll restoration component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// 404 Component
function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-[#FAF9F6]">
      <span className="text-xs font-mono text-[#2D6A4F] uppercase tracking-widest">404 ERROR</span>
      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B4332] mt-2 mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-[#4D6357] max-w-md mb-8">
        The requested page does not exist or has been relocated within our corporate registry.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#2D6A4F] text-white text-xs font-semibold rounded-full hover:bg-[#22543E] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

function MainLayout() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1B4332]">
      <ScrollToTop />
      
      {/* Global Header */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Page Body */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Legal routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Corporate Footer */}
      <Footer />

      {/* Global Search Dialog (Cmd+K) */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

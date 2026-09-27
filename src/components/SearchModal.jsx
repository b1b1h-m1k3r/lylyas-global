import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen, Layers, Briefcase } from 'lucide-react';
import { getServices, getInsights, getProjects } from '../data/storage';
import { useLanguage } from '../context/LanguageContext';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = getServices();
  const insights = getInsights();
  const projects = getProjects();

  const filteredServices = query.trim()
    ? services.filter(s =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
        s.items?.some(i => i.name.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const filteredInsights = query.trim()
    ? insights.filter(i =>
        i.title.toLowerCase().includes(query.toLowerCase()) ||
        i.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredProjects = query.trim()
    ? projects.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const hasResults = filteredServices.length > 0 || filteredInsights.length > 0 || filteredProjects.length > 0;

  const handleSelect = (path) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  const defaultTags = [
    t.whatWeDo.business.title,
    t.whatWeDo.digital.title,
    t.whatWeDo.ecommerce.title,
    t.whatWeDo.professional.title,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF9F6] border border-[#E3ECE5] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-slideDown">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-[#E3ECE5] bg-white">
          <Search className="w-5 h-5 text-[#2D6A4F] mr-3 rtl:mr-0 rtl:ml-3" />
          <input
            type="text"
            placeholder={t.search.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-[#1B4332] placeholder-[#8BAAA0] text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#8BAAA0] hover:text-[#1B4332] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() && (
            <div className="py-8 text-center text-sm text-[#4D6357]">
              <p>{t.search.hint}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {defaultTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-white border border-[#E3ECE5] hover:border-[#2D6A4F] px-3.5 py-1.5 rounded-full text-[#1B4332] transition-colors shadow-2xs"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && !hasResults && (
            <div className="py-10 text-center text-sm text-[#4D6357]">
              {t.search.noResults} "<span className="font-semibold text-[#1B4332]">{query}</span>".
            </div>
          )}

          {/* Services Results */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> {t.search.servicesTitle} ({filteredServices.length})
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(`/services#${service.id}`)}
                    className="w-full text-left rtl:text-right p-3 rounded-xl bg-white hover:bg-[#EBF4EE] border border-[#E3ECE5] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-medium text-[#1B4332] text-sm group-hover:text-[#2D6A4F] transition-colors">
                        {service.title}
                      </div>
                      <div className="text-xs text-[#4D6357] line-clamp-1">{service.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity rtl-flip" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Insights Results */}
          {filteredInsights.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> {t.search.insightsTitle} ({filteredInsights.length})
              </div>
              <div className="space-y-1">
                {filteredInsights.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleSelect(`/insights#${article.id}`)}
                    className="w-full text-left rtl:text-right p-3 rounded-xl bg-white hover:bg-[#EBF4EE] border border-[#E3ECE5] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-medium text-[#1B4332] text-sm group-hover:text-[#2D6A4F] transition-colors">
                        {article.title}
                      </div>
                      <div className="text-xs text-[#4D6357] line-clamp-1">{article.excerpt}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity rtl-flip" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> {t.search.projectsTitle} ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleSelect(`/projects#${project.id}`)}
                    className="w-full text-left rtl:text-right p-3 rounded-xl bg-white hover:bg-[#EBF4EE] border border-[#E3ECE5] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-medium text-[#1B4332] text-sm group-hover:text-[#2D6A4F] transition-colors">
                        {project.title}
                      </div>
                      <div className="text-xs text-[#4D6357] line-clamp-1">{project.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity rtl-flip" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-[#F2F6F3] border-t border-[#E3ECE5] flex items-center justify-between text-[11px] text-[#4D6357]">
          <span>{t.search.escClose}</span>
          <span className="font-mono text-[#1B4332]">LYLYAS GLOBAL LLC</span>
        </div>
      </div>
    </div>
  );
}

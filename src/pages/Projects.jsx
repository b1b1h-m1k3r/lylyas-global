import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProjects } from '../data/storage';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const pageT = t.projectsPage;
  const projects = getProjects();

  const categoryKeys = [
    { key: 'all', match: 'all' },
    { key: 'business', match: 'Business Solutions' },
    { key: 'digital', match: 'Digital Services' },
    { key: 'ecommerce', match: 'E-commerce' },
    { key: 'professional', match: 'Professional Services' }
  ];

  const [activeCategoryKey, setActiveCategoryKey] = useState('all');

  const selectedCategoryObj = categoryKeys.find(c => c.key === activeCategoryKey) || categoryKeys[0];

  const filtered = selectedCategoryObj.key === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategoryObj.match.toLowerCase());

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332]">
      
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-[#E3ECE5] bg-[#F2F6F3]/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#2D6A4F] uppercase">
            {pageT.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B4332] mt-3 mb-6">
            {pageT.title}
          </h1>
          <p className="text-base sm:text-lg text-[#4D6357] font-light leading-relaxed max-w-2xl mx-auto">
            {pageT.subtitle}
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categoryKeys.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategoryKey(c.key)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full font-semibold transition-all ${
                  activeCategoryKey === c.key
                    ? 'bg-[#2D6A4F] text-white shadow-xs'
                    : 'bg-white border border-[#E3ECE5] text-[#4D6357] hover:border-[#2D6A4F]'
                }`}
              >
                {pageT.categories[c.key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="bg-white border border-[#E3ECE5] rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#2D6A4F] tracking-wider uppercase border border-[#D0E0D3]">
                      {project.category}
                    </div>
                    {project.year && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-mono">
                        {project.year}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-4">
                    {project.clientType && (
                      <div className="text-[11px] font-semibold text-[#2D6A4F] uppercase tracking-wider">
                        {pageT.clientFocus}: {project.clientType}
                      </div>
                    )}

                    <h2 className="text-2xl font-serif font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[#4D6357] leading-relaxed font-light">
                      {project.summary}
                    </p>

                    {/* Services Delivered Tag Pills */}
                    {project.services && project.services.length > 0 && (
                      <div className="pt-2">
                        <div className="text-xs font-semibold text-[#2D6A4F] mb-2 uppercase tracking-wider">
                          {pageT.scope}:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E3ECE5] text-[#1B4332]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Results Bar */}
                {project.results && (
                  <div className="px-8 py-4 bg-[#F2F6F3] border-t border-[#E3ECE5] flex items-center gap-2.5 text-xs text-[#1B4332] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                    <span><strong>{pageT.keyOutcome}:</strong> {project.results}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-sm text-[#4D6357]">
              {pageT.noProjects}
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F2F6F3]/50 border-t border-[#E3ECE5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mb-3">
            {pageT.ctaTitle}
          </h2>
          <p className="text-sm text-[#4D6357] font-light max-w-lg mx-auto mb-6">
            {pageT.ctaDesc}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#22543E] text-white text-xs font-semibold tracking-wider px-7 py-3.5 rounded-full transition-all shadow-xs group"
          >
            {pageT.ctaBtn}
            <ArrowRight className="w-3.5 h-3.5 text-[#C4A882] transition-transform group-hover:translate-x-1 rtl-flip" />
          </Link>
        </div>
      </section>

    </div>
  );
}

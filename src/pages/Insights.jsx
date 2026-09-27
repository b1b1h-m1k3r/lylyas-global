import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { getInsights } from '../data/storage';
import ArticleModal from '../components/ArticleModal';
import { useLanguage } from '../context/LanguageContext';

export default function Insights() {
  const { t, isRTL } = useLanguage();
  const pageT = t.insightsPage;
  const allInsights = getInsights();
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryKeys = [
    { key: 'all', match: 'ALL' },
    { key: 'business', match: 'BUSINESS' },
    { key: 'digital', match: 'DIGITAL' },
    { key: 'ecommerce', match: 'E-COMMERCE' },
    { key: 'professional', match: 'PROFESSIONAL' }
  ];

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const found = allInsights.find(a => a.id === targetId);
      if (found) {
        setSelectedArticle(found);
      }
    }
  }, [location, allInsights]);

  const selectedCategoryObj = categoryKeys.find(c => c.key === activeCategoryKey) || categoryKeys[0];

  const filtered = allInsights.filter((item) => {
    const matchesCategory = selectedCategoryObj.match === 'ALL' || item.category.toUpperCase() === selectedCategoryObj.match;
    const matchesSearch = !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#2D6A4F] absolute left-4 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-4" />
            <input
              type="text"
              placeholder={pageT.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 rtl:pl-4 rtl:pr-11 py-3 bg-white border border-[#E3ECE5] rounded-full text-xs sm:text-sm text-[#1B4332] placeholder-[#8A9A94] focus:outline-none focus:border-[#2D6A4F] shadow-xs transition-colors"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categoryKeys.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategoryKey(c.key)}
                className={`text-xs px-4 py-1.5 rounded-full font-semibold transition-all ${
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

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white border border-[#E3ECE5] rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#2D6A4F] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#2D6A4F] tracking-wider uppercase border border-[#D0E0D3]">
                      {article.category}
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#8A9A94] font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#2D6A4F]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-xl text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#4D6357] font-light leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Read Action */}
                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#E3ECE5]">
                  <span className="text-xs text-[#2D6A4F] font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {article.author}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold text-[#2D6A4F] group-hover:text-[#1B4332] transition-colors">
                    {pageT.readArticle} <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1 rtl-flip" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-sm text-[#4D6357]">
              {pageT.noInsights}
            </div>
          )}

        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          allArticles={allInsights}
          onClose={() => setSelectedArticle(null)}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />
      )}

    </div>
  );
}

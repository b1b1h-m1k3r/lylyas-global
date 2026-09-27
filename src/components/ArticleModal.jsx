import React from 'react';
import { X, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ArticleModal({ article, onClose, onSelectArticle, allArticles }) {
  const { t, isRTL } = useLanguage();
  const pageT = t.insightsPage;

  if (!article) return null;

  const related = allArticles
    ? allArticles.filter(a => a.id !== article.id).slice(0, 2)
    : [];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(pageT.copied);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#FAF9F6] border border-[#E3ECE5] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1B4332] shadow-md border border-[#E3ECE5] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163E32]/90 via-[#163E32]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-[#2D6A4F] text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-3 shadow">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="px-6 py-4 border-b border-[#E3ECE5] flex flex-wrap items-center justify-between text-xs text-[#4D6357] gap-4 bg-[#F2F6F3]">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2D6A4F]" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#2D6A4F]" />
              {article.author}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-[#1B4332] hover:text-[#2D6A4F] font-semibold transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> {pageT.share}
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-6">
          <p className="text-lg font-medium text-[#1B4332] leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#2D6A4F] pl-4 rtl:pl-0 rtl:pr-4">
            {article.excerpt}
          </p>

          <div className="text-[#374B41] leading-relaxed space-y-5 text-base font-light">
            {article.content ? (
              article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-serif font-bold text-[#1B4332] pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              })
            ) : (
              <p>Content for this article is being finalized by the editorial team.</p>
            )}
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="pt-8 border-t border-[#E3ECE5]">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#2D6A4F] mb-4">
                {pageT.relatedReading}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map(r => (
                  <div
                    key={r.id}
                    onClick={() => onSelectArticle(r)}
                    className="p-4 rounded-2xl bg-white border border-[#E3ECE5] hover:border-[#2D6A4F] cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#2D6A4F] uppercase">{r.category}</span>
                      <h5 className="font-serif font-bold text-sm text-[#1B4332] mt-1 group-hover:text-[#2D6A4F] transition-colors">
                        {r.title}
                      </h5>
                    </div>
                    <span className="inline-flex items-center text-xs text-[#1B4332] font-semibold mt-3">
                      {pageT.readArticle} <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#2D6A4F] rtl-flip" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

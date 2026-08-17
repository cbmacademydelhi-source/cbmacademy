import React, { useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && post) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, onClose]);

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-[#E5E7EB] overflow-hidden z-10 my-8">
        {/* Header Image & Close Button */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072B57]/90 via-[#072B57]/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 text-white hover:bg-black/60 backdrop-blur-xs focus-ring cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Hero */}
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="px-2.5 py-1 bg-[#FF6B00] text-white text-xs font-semibold rounded-md">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-2 leading-snug">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-slate-300">By CBM Academy Faculty</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-left">
          {/* Summary Lead */}
          <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-[#E5E7EB]">
            {post.summary}
          </p>

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-bold text-[#072B57] uppercase tracking-wider">
              Key Insights for Marketers:
            </h4>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-[#E5E7EB] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-[#E5E7EB] hover:bg-slate-100 rounded-xl focus-ring cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <span className="text-xs text-slate-500 hidden sm:inline">
            CBM Academy Knowledge Series • New Delhi
          </span>
        </div>
      </div>
    </div>
  );
};

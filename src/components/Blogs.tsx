import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/academyData';
import { BlogPost } from '../types';
import { BlogDetailModal } from './BlogDetailModal';

export const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blogs" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Knowledge & Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Latest From CBM Academy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Actionable strategies, industry updates, and practical AI marketing breakdowns written by our experienced mentors.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.id}
              id={`blog-card-${idx + 1}`}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs hover:border-[#072B57]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 text-[#072B57] text-xs font-bold rounded-md shadow-xs border border-[#E5E7EB]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta date & read time */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#072B57] leading-snug mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  id={`read-blog-btn-${idx + 1}`}
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#072B57] hover:text-[#FF6B00] transition-colors focus-ring py-1 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Reading Modal */}
      <BlogDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};

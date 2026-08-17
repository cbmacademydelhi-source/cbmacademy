import React from 'react';
import {
  Sparkles,
  FileText,
  Image,
  Palette,
  Search,
  Cpu,
  PenTool,
  MessageSquare,
  TrendingUp,
  Layers,
  Zap,
  CheckSquare
} from 'lucide-react';
import { AI_TOOLS } from '../data/academyData';

const toolIconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-5 h-5 text-[#FF6B00]" />,
  'file-text': <FileText className="w-5 h-5 text-[#072B57]" />,
  image: <Image className="w-5 h-5 text-[#FF6B00]" />,
  palette: <Palette className="w-5 h-5 text-[#072B57]" />,
  search: <Search className="w-5 h-5 text-[#072B57]" />,
  cpu: <Cpu className="w-5 h-5 text-[#FF6B00]" />,
  'pen-tool': <PenTool className="w-5 h-5 text-[#072B57]" />,
  'message-square': <MessageSquare className="w-5 h-5 text-[#FF6B00]" />,
  'trending-up': <TrendingUp className="w-5 h-5 text-[#072B57]" />,
  layers: <Layers className="w-5 h-5 text-[#FF6B00]" />,
  zap: <Zap className="w-5 h-5 text-[#FF6B00]" />,
  'check-square': <CheckSquare className="w-5 h-5 text-[#072B57]" />
};

export const AITools: React.FC = () => {
  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Industry Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            AI Tools You'll Learn
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Master real-world AI applications across copywriting, graphic design, SEO research, audience analysis, and workflow automation.
          </p>
        </div>

        {/* Clean Responsive Grid of Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {AI_TOOLS.map((tool, idx) => (
            <div
              key={tool.id}
              id={`ai-tool-card-${idx + 1}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-xs hover:border-[#072B57]/30 hover:shadow-sm transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-[#E5E7EB] flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                    {toolIconMap[tool.iconType] || <Sparkles className="w-5 h-5 text-[#FF6B00]" />}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {tool.category}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-base font-bold text-[#072B57] mb-1 group-hover:text-[#FF6B00] transition-colors">
                  {tool.name}
                </h3>

                {/* Short Practical Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Integrated in Course</span>
                <span className="text-[#FF6B00] font-semibold">{tool.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

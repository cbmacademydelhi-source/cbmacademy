import React, { useState } from 'react';
import {
  LayoutGrid,
  Search,
  Globe,
  Target,
  Share2,
  Megaphone,
  Palette,
  BarChart3,
  Bot,
  Cpu,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Check
} from 'lucide-react';
import { COURSE_MODULES } from '../data/academyData';
import { CourseModule } from '../types';
import { ModuleDetailModal } from './ModuleDetailModal';

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#072B57]" />,
  Search: <Search className="w-5 h-5 text-[#072B57]" />,
  Globe: <Globe className="w-5 h-5 text-[#072B57]" />,
  Target: <Target className="w-5 h-5 text-[#072B57]" />,
  Share2: <Share2 className="w-5 h-5 text-[#072B57]" />,
  Megaphone: <Megaphone className="w-5 h-5 text-[#072B57]" />,
  Palette: <Palette className="w-5 h-5 text-[#072B57]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#072B57]" />,
  Bot: <Bot className="w-5 h-5 text-[#072B57]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#072B57]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#072B57]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#072B57]" />
};

interface CourseSectionProps {
  onApplyClick: () => void;
  onDownloadBrochure: () => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({ onApplyClick, onDownloadBrochure }) => {
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);

  return (
    <section id="course" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Flagship Program
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Digital Marketing Course
          </h2>
          <p className="mt-3 text-lg font-semibold text-[#FF6B00]">
            Pro Digital Marketing Course
          </p>
          <p className="mt-2 text-base text-slate-600">
            A comprehensive, industry-aligned curriculum covering 12 core modules with AI integrations, practical assignments, and portfolio building.
          </p>
        </div>

        {/* Program Feature Strip */}
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Curriculum</p>
              <p className="text-sm font-bold text-[#072B57]">12 Intensive Modules</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">AI Integration</p>
              <p className="text-sm font-bold text-[#072B57]">Modern AI Marketing Tools</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Execution</p>
              <p className="text-sm font-bold text-[#072B57]">Live Practical Projects</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Batches</p>
              <p className="text-sm font-bold text-[#072B57]">Weekday & Weekend Batches</p>
            </div>
          </div>
        </div>

        {/* 12 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((module, index) => (
            <div
              key={module.id}
              id={`course-module-card-${index + 1}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs hover:border-[#072B57]/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Top Row: Module number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                    {iconMap[module.iconName] || <BookOpen className="w-5 h-5 text-[#072B57]" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Module {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                {/* Module Name */}
                <h3 className="text-lg font-bold text-[#072B57] tracking-tight mb-2 group-hover:text-[#FF6B00] transition-colors">
                  {module.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {module.shortDesc}
                </p>

                {/* Key Topic Highlights */}
                <div className="space-y-1.5 mb-5">
                  {module.topics.slice(0, 2).map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500 truncate">
                      <Check className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedModule(module)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#072B57] hover:text-[#FF6B00] transition-colors focus-ring py-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[11px] text-slate-500 font-medium">
                  {module.toolsCovered.length} Tools Practiced
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="mt-14 p-8 bg-[#072B57] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to master all 12 modules?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Get complete syllabus details, upcoming batch timings in New Delhi, and fee structure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onDownloadBrochure}
              className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors focus-ring cursor-pointer"
            >
              Get Full Syllabus PDF
            </button>
            <button
              type="button"
              onClick={onApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
            >
              <span>Apply for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Module Detail Modal */}
      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onApplyForCourse={onApplyClick}
      />
    </section>
  );
};

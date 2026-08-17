import React, { useEffect } from 'react';
import { X, CheckCircle2, Wrench, Clock, FileText, ArrowRight } from 'lucide-react';
import { CourseModule } from '../types';

interface ModuleDetailModalProps {
  module: CourseModule | null;
  onClose: () => void;
  onApplyForCourse: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onApplyForCourse
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && module) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [module, onClose]);

  useEffect(() => {
    if (module) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [module]);

  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#E5E7EB] overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 bg-[#072B57] text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-xs font-semibold text-orange-300 uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{module.duration || 'Pro Digital Marketing Module'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {module.name}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Part of the Pro Digital Marketing Course at CBM Academy
            </p>
          </div>
          <button
            id="close-module-modal-btn"
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-ring cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-left">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Module Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-[#E5E7EB]">
              {module.shortDesc}
            </p>
          </div>

          {/* Key Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#072B57]" />
              <span>Key Topics Covered</span>
            </h4>
            <ul className="space-y-2.5">
              {module.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Tools Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#072B57]" />
              <span>Tools & Platforms Practiced</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.toolsCovered.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-[#072B57] text-xs font-semibold rounded-lg border border-[#E5E7EB]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Practical Assignment */}
          <div className="bg-orange-50/70 border border-orange-200/80 p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-1">
              Hands-On Practical Assignment
            </h4>
            <p className="text-sm text-slate-800">
              {module.practicalAssignment}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-[#E5E7EB] hover:bg-slate-100 rounded-xl focus-ring cursor-pointer"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onApplyForCourse();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] rounded-xl shadow-xs focus-ring cursor-pointer"
          >
            <span>Enroll in This Module</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

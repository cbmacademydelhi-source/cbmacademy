import React, { useState, useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Mail, Sparkles, BookOpen } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyForCourse: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onApplyForCourse
}) => {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadProgress(true);

    setTimeout(() => {
      setDownloadProgress(false);
      setIsDownloaded(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-[#E5E7EB] overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 bg-[#072B57] text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/10 text-xs font-semibold text-orange-300 uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official Syllabus & Guide</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Pro Digital Marketing Course Brochure
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Includes module breakdown, AI tools list, project briefs & fee structure.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-ring cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-left">
          {isDownloaded ? (
            <div className="text-center py-6 space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#FF6B00] flex items-center justify-center mx-auto border border-orange-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#072B57]">
                Brochure Request Confirmed
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                The comprehensive course syllabus guide has been dispatched to <span className="font-semibold">{email || 'your email'}</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  Close Window
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onApplyForCourse();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] rounded-lg shadow-xs"
                >
                  Apply for Admission
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownloadTrigger} className="space-y-4">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-[#072B57] text-sm">Brochure Highlights:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>12 Comprehensive Module Breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>AI Prompt Library & Tool Stacks Practiced</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Live Project Workflows & Batch Schedule</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="brochure-email-input"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Enter Your Email Address
                </label>
                <div className="relative">
                  <input
                    id="brochure-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E7EB] bg-slate-50 focus:bg-white focus-ring transition-colors"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={downloadProgress}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] disabled:opacity-60 rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
                >
                  {downloadProgress ? (
                    <span>Preparing Document...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Course Brochure</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                PDF file connection: Real PDF asset file can be mounted directly to this handler.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

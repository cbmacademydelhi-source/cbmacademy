import React from 'react';
import { ArrowRight, Download, CheckCircle2, MapPin, Sparkles, BookOpen } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
  onDownloadBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onDownloadBrochure }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-[#E5E7EB] overflow-hidden"
    >
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-[#F8FAFC] opacity-70 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-[#E5E7EB] text-[#072B57] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>AI-POWERED DIGITAL MARKETING TRAINING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#072B57] tracking-tight leading-[1.18]">
              Become Job Ready with <span className="text-[#FF6B00]">AI-Powered</span> Digital Marketing Training
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Learn modern Digital Marketing with AI, practical projects, real-world tools, and career-focused training at CBM Academy.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-apply-now-btn"
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-download-brochure-btn"
                type="button"
                onClick={onDownloadBrochure}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#072B57] bg-white border border-[#072B57] hover:bg-slate-50 active:bg-slate-100 rounded-xl transition-colors focus-ring cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#072B57]" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Trust Badges / Key Pillars */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Practical Live Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Real AI Marketing Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>New Delhi Campus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Educational Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Educational Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Students and professionals learning digital marketing and AI tools at CBM Academy in New Delhi"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="eager"
                />

                {/* Clean Bottom Overlay Card */}
                <div className="p-4 bg-white border-t border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Track</p>
                    <p className="text-sm font-bold text-[#072B57]">Pro Digital Marketing Course</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[#FF6B00] text-xs font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI-Integrated</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill 1 */}
              <div className="absolute -top-4 -left-4 bg-white border border-[#E5E7EB] rounded-xl p-3 shadow-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#072B57] text-white flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Curriculum</div>
                  <div className="text-sm font-bold text-[#072B57]">12 Comprehensive Modules</div>
                </div>
              </div>

              {/* Floating Stat Pill 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#E5E7EB] rounded-xl p-3 shadow-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B00] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Training Focus</div>
                  <div className="text-sm font-bold text-[#072B57]">100% Practical & Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

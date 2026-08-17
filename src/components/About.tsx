import React from 'react';
import { Target, Compass, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Educational/Classroom Visual */}
          <div className="lg:col-span-5 relative text-left">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
                alt="Practical classroom discussion and mentoring session at CBM Academy in New Delhi"
                className="w-full h-96 sm:h-[480px] object-cover"
                loading="lazy"
              />

              {/* Bottom location badge */}
              <div className="p-4 bg-white border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0 border border-orange-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#072B57]">New Delhi Center</h4>
                  <p className="text-xs text-slate-500">Dedicated Classroom & Practical Lab</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About CBM Academy Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
                About CBM Academy
              </h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                CBM Academy is an educational academy based in New Delhi focused on practical Digital Marketing education, modern tools, AI integration, and career-focused learning. We provide step-by-step training designed to bridge the gap between textbook concepts and live industry execution.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Mission */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#072B57] mb-3">
                  <Target className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h3 className="text-base font-bold text-[#072B57] mb-1.5">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Help learners develop practical Digital Marketing skills using modern tools and real-world learning.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#072B57] mb-3">
                  <Compass className="w-5 h-5 text-[#072B57]" />
                </div>
                <h3 className="text-base font-bold text-[#072B57] mb-1.5">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Build confident professionals who can apply Digital Marketing and AI skills in real-world environments.
                </p>
              </div>
            </div>

            {/* Why CBM Academy Highlights */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#072B57]">
                Why Learn at CBM Academy?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Practical, hands-on learning</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>AI integration in daily marketing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Industry-relevant marketing tools</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Real portfolio-ready projects</span>
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>Dedicated career guidance and interview support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

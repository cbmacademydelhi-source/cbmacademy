import React from 'react';
import { GraduationCap, Laptop, FolderKanban, Users } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/academyData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#072B57]" />,
  Laptop: <Laptop className="w-6 h-6 text-[#072B57]" />,
  FolderKanban: <FolderKanban className="w-6 h-6 text-[#072B57]" />,
  Users: <Users className="w-6 h-6 text-[#072B57]" />
};

export const WhyChooseCBM: React.FC = () => {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Why Choose CBM Academy?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A practical learning environment built around live marketing tools, hands-on assignments, and career readiness.
          </p>
        </div>

        {/* 4 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              id={`why-choose-card-${idx + 1}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-xs hover:border-[#072B57]/30 transition-all duration-200 flex flex-col text-left group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-[#E5E7EB] flex items-center justify-center mb-5 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                <div className="text-[#072B57] group-hover:text-[#FF6B00] transition-colors">
                  {iconMap[item.icon]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#072B57] mb-2 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

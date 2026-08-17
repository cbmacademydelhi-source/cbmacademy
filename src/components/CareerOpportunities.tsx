import React from 'react';
import { Briefcase, MapPin, ArrowRight, UserCheck, CheckCircle2, Clock } from 'lucide-react';
import { JOB_LISTINGS } from '../data/academyData';

interface CareerOpportunitiesProps {
  onApplyForJob: (jobTitle: string) => void;
}

export const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({ onApplyForJob }) => {
  return (
    <section id="jobs" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Career Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Career Opportunities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Explore industry career tracks and upcoming placement opportunities for CBM Academy trainees across New Delhi and hybrid environments.
          </p>
        </div>

        {/* Informational Guidance Banner */}
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#072B57]">Placement Guidance & Career Support</h3>
              <p className="text-xs text-slate-500">
                We assist trainees with portfolio building, interview preparation, and connecting with hiring teams.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-[#E5E7EB] shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
            <span>Interview Prep & Mock Sessions</span>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOB_LISTINGS.map((job, idx) => (
            <div
              key={job.id}
              id={`job-card-${idx + 1}`}
              className={`rounded-xl p-6 border transition-all duration-200 flex flex-col justify-between text-left ${
                job.isPlaceholder
                  ? 'bg-slate-50/70 border-dashed border-slate-300'
                  : 'bg-white border-[#E5E7EB] shadow-xs hover:border-[#072B57]/30 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      job.isPlaceholder
                        ? 'bg-slate-200 text-slate-600'
                        : 'bg-blue-50 text-[#072B57] border border-blue-100'
                    }`}
                  >
                    {job.roleType}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.experienceLevel}</span>
                  </div>
                </div>

                {/* Job Title */}
                <h3
                  className={`text-lg font-bold mb-2 tracking-tight ${
                    job.isPlaceholder ? 'text-slate-500 italic' : 'text-[#072B57]'
                  }`}
                >
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                  <span>{job.location}</span>
                </div>

                {/* Key Skills Tags */}
                <div className="space-y-1.5 mb-6">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Core Skills Profile:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.keySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs rounded border border-[#E5E7EB]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <button
                  type="button"
                  id={`apply-job-btn-${idx + 1}`}
                  onClick={() => onApplyForJob(job.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-xl transition-colors focus-ring cursor-pointer ${
                    job.isPlaceholder
                      ? 'bg-white border border-[#E5E7EB] text-slate-700 hover:bg-slate-100'
                      : 'bg-white border border-[#072B57] text-[#072B57] hover:bg-orange-50 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                  }`}
                >
                  <span>{job.isPlaceholder ? 'Inquire for Placement' : 'Apply for Role'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on live job openings */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Hiring partner openings are updated per batch cycle. Registered CBM Academy trainees receive direct notification of new career openings.
          </p>
        </div>
      </div>
    </section>
  );
};

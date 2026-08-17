import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#E5E7EB] overflow-hidden z-10 my-8">
        <div className="p-6 bg-[#072B57] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#FF6B00]" />
            ) : (
              <FileText className="w-5 h-5 text-[#FF6B00]" />
            )}
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
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

        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-left text-xs sm:text-sm text-slate-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-900">
                1. Information Collection & Usage
              </p>
              <p>
                CBM Academy collects personal contact details (such as full name, phone number, and email address) submitted voluntarily through our admission and enquiry forms solely for the purpose of communicating course details, batch schedules, and educational updates.
              </p>
              <p className="font-semibold text-slate-900">
                2. Data Protection & Privacy
              </p>
              <p>
                We do not sell, rent, or trade student personal information to third-party marketing entities. Information is stored securely and processed exclusively by authorized academy admissions coordinators.
              </p>
              <p className="font-semibold text-slate-900">
                3. Contact Information
              </p>
              <p>
                If you have questions regarding your stored information or wish to request data updates, please contact us at cbmacademydelhi@gmail.com.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">
                1. Program Enrollment & Conduct
              </p>
              <p>
                Enrollment in CBM Academy training programs grants access to classroom sessions, lab resources, and course materials. Students are expected to maintain professional conduct and actively participate in practical assignments.
              </p>
              <p className="font-semibold text-slate-900">
                2. Course Curriculum & AI Tool Updates
              </p>
              <p>
                To maintain alignment with evolving digital marketing standards and generative AI tools, CBM Academy reserves the right to update or enhance course modules and software practiced during batches.
              </p>
              <p className="font-semibold text-slate-900">
                3. Certificate Issuance
              </p>
              <p>
                Certificates of completion are issued upon successful submission and review of required practical capstone assignments and attendance criteria.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-[#E5E7EB] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#072B57] bg-white border border-[#E5E7EB] hover:bg-slate-100 rounded-xl focus-ring cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

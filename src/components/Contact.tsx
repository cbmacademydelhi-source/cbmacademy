import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

export interface ContactRef {
  focusForm: (courseName?: string) => void;
}

export const Contact = forwardRef<ContactRef, {}>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    courseInterestedIn: 'Pro Digital Marketing Course',
    preferredBatch: 'Weekend Batch',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useImperativeHandle(ref, () => ({
    focusForm: (courseName?: string) => {
      if (courseName) {
        setFormData((prev) => ({ ...prev, courseInterestedIn: courseName }));
      }
      const element = document.getElementById('contact-name-input');
      if (element) {
        element.focus();
      }
    }
  }));

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number.';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number format.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.courseInterestedIn.trim()) {
      newErrors.courseInterestedIn = 'Please select a course or track.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message or question.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate standard submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      courseInterestedIn: 'Pro Digital Marketing Course',
      preferredBatch: 'Weekend Batch',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Admissions & Enquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Get in Touch With CBM Academy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions regarding upcoming batches, course curriculum, or admissions? Submit an enquiry and our team will get in touch.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Academy Location & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-[#072B57] tracking-tight">
                Academy Campus & Hours
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072B57]">Location</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      New Delhi, Delhi, India
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Classroom sessions and hands-on computer lab training
                    </p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
                    <Mail className="w-5 h-5 text-[#072B57]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072B57]">Direct Email</h4>
                    <a
                      href="mailto:cbmacademydelhi@gmail.com"
                      className="text-xs sm:text-sm text-[#072B57] font-semibold hover:text-[#FF6B00] transition-colors"
                    >
                      cbmacademydelhi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Training Schedule */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57]">
                    <Clock className="w-5 h-5 text-[#072B57]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072B57]">Training Schedules</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      • Regular Weekday Batches (Mon - Thu)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      • Executive Weekend Batches (Sat - Sun)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Frame */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F8FAFC]">
              <div className="p-3 bg-slate-100 border-b border-[#E5E7EB] flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Campus Region: New Delhi</span>
                </span>
                <span className="text-[11px] text-slate-500">Capital Region Campus</span>
              </div>
              <iframe
                title="CBM Academy Location New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact & Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-orange-50 text-[#FF6B00] rounded-full flex items-center justify-center mx-auto border border-orange-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#072B57]">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. We have received your application details for <span className="font-semibold text-slate-800">{formData.courseInterestedIn}</span>. Our admission coordinator will reach out to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-sm font-semibold text-[#072B57] bg-slate-100 hover:bg-slate-200 rounded-xl focus-ring cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-[#E5E7EB] pb-4 mb-2">
                    <h3 className="text-lg font-bold text-[#072B57]">
                      Admission & Course Enquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out your details below to receive the complete course syllabus and batch schedule.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 focus:bg-white focus-ring transition-colors ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email (2 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone-input"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Phone Number <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 focus:bg-white focus-ring transition-colors ${
                          errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email-input"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Email Address <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 focus:bg-white focus-ring transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label
                      htmlFor="contact-course-select"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Course Interested In <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      id="contact-course-select"
                      value={formData.courseInterestedIn}
                      onChange={(e) => setFormData({ ...formData, courseInterestedIn: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E7EB] bg-slate-50 focus:bg-white focus-ring transition-colors"
                    >
                      <option value="Pro Digital Marketing Course">Pro Digital Marketing Course (Complete 12 Modules)</option>
                      <option value="AI Tools & Automation Module">AI Tools & Automation for Marketers</option>
                      <option value="Performance Marketing (Meta & Google Ads)">Performance Marketing (Meta & Google Ads)</option>
                      <option value="SEO & Website Development">SEO & WordPress Website Development</option>
                      <option value="Career & Placement Support Inquiry">Career & Placement Support Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Message or Questions <span className="text-[#FF6B00]">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background, career goals, or any specific questions..."
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 focus:bg-white focus-ring transition-colors ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-base font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] disabled:opacity-60 rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Submission...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    Your details are securely transmitted to CBM Academy admissions. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

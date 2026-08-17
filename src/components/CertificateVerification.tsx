import React, { useState } from 'react';
import { ShieldCheck, Search, AlertCircle, CheckCircle2, FileCheck, RefreshCw } from 'lucide-react';

export const CertificateVerification: React.FC = () => {
  const [certNumber, setCertNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCert = certNumber.trim();

    if (!cleanCert) {
      setErrorMessage('Please enter a valid Certificate Identification Number.');
      setHasSearched(false);
      return;
    }

    setErrorMessage('');
    setIsVerifying(true);

    // Simulate standard lookup delay for natural feedback
    setTimeout(() => {
      setIsVerifying(false);
      setHasSearched(true);
    }, 600);
  };

  const handleReset = () => {
    setCertNumber('');
    setHasSearched(false);
    setErrorMessage('');
  };

  return (
    <section
      id="verify-certificate"
      className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#072B57] text-xs font-semibold uppercase tracking-wider mb-3">
            Credential Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Certificate Verification
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Verify the authenticity of digital certificates issued by CBM Academy for completed course programs.
          </p>
        </div>

        {/* Centered Professional Verification Card */}
        <div className="max-w-xl mx-auto bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden text-left">
          {/* Card Top Banner */}
          <div className="p-6 bg-[#072B57] text-white flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
              <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Official Credential Verification
              </h3>
              <p className="text-xs text-slate-300">
                Enter the unique certificate serial number provided on the physical or digital certificate.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-6 sm:p-8 space-y-6">
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label
                  htmlFor="certificate-input"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                >
                  Certificate Identification Number
                </label>
                <div className="relative">
                  <input
                    id="certificate-input"
                    type="text"
                    value={certNumber}
                    onChange={(e) => {
                      setCertNumber(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="e.g. CBM-2025-DM-1042"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E5E7EB] bg-slate-50 focus:bg-white focus-ring transition-colors font-mono uppercase placeholder:font-sans placeholder:normal-case placeholder:text-slate-400"
                    autoComplete="off"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                </div>
                {errorMessage && (
                  <p className="mt-2 text-xs text-red-600 flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errorMessage}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  id="verify-certificate-submit-btn"
                  type="submit"
                  disabled={isVerifying}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] disabled:opacity-60 rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Record...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Verify Certificate</span>
                    </>
                  )}
                </button>

                {hasSearched && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors focus-ring cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>

            {/* Verification Result Area */}
            {hasSearched && (
              <div
                id="certificate-verification-result"
                className="mt-6 pt-6 border-t border-[#E5E7EB] space-y-4 animate-fadeIn"
              >
                <div className="p-4 rounded-xl bg-slate-50 border border-[#E5E7EB] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Lookup Query
                    </span>
                    <span className="font-mono text-xs font-bold text-[#072B57] bg-white px-2.5 py-1 rounded border border-[#E5E7EB]">
                      {certNumber.toUpperCase()}
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                      <AlertCircle className="w-4 h-4 text-[#FF6B00]" />
                      <span>Verification Backend Integration Notice</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Certificate verification service will be connected here.
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      This interface is structured to link seamlessly with the academy's central student database & LMS registry.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer note inside card */}
          <div className="px-6 py-4 bg-slate-50 border-t border-[#E5E7EB] text-center text-xs text-slate-500">
            For manual verification assistance, please contact the academy administration.
          </div>
        </div>
      </div>
    </section>
  );
};

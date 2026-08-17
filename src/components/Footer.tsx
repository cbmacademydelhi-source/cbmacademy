import React from 'react';
import { ArrowRight, MapPin, Mail, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onApplyClick }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#course' },
    { name: 'About', href: '#about' },
    { name: 'Certificate Verification', href: '#verify-certificate' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#072B57] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#072B57] flex items-center justify-center font-bold text-lg">
                <span className="text-[#FF6B00]">C</span>BM
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  CBM <span className="text-[#FF6B00]">ACADEMY</span>
                </span>
                <span className="text-[11px] font-medium text-slate-300 tracking-wider uppercase mt-0.5">
                  Digital Marketing & AI Academy
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Learn modern Digital Marketing with AI, practical projects, real tools, and career-focused training at CBM Academy, New Delhi.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>New Delhi, Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>cbmacademydelhi@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#FF6B00] transition-colors focus-ring rounded py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Admissions Open
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Enroll in our upcoming weekend or weekday batch for the Pro Digital Marketing Course.
            </p>
            <button
              id="footer-apply-btn"
              type="button"
              onClick={onApplyClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
            >
              <span>Apply for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CBM Academy. All rights reserved. New Delhi, India.
          </p>

          <div className="flex items-center gap-6">
            <button
              id="footer-privacy-policy-btn"
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors focus-ring cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">•</span>
            <button
              id="footer-terms-btn"
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors focus-ring cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

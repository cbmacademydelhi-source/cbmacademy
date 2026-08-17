import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'course', 'about', 'verify-certificate', 'jobs', 'blogs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Course', href: '#course', id: 'course' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Certificate Verification', href: '#verify-certificate', id: 'verify-certificate' },
    { name: 'Jobs', href: '#jobs', id: 'jobs' },
    { name: 'Blogs', href: '#blogs', id: 'blogs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white border-b ${
          isScrolled
            ? 'py-3 border-[#E5E7EB] shadow-sm'
            : 'py-4 border-[#E5E7EB]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="header-brand-logo"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus-ring rounded-lg py-1 px-1.5"
              aria-label="CBM Academy Home"
            >
              {/* Clean Vector Monogram Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#072B57] flex items-center justify-center text-white font-bold text-lg shadow-xs tracking-wider border border-[#072B57]">
                <span className="text-[#FF6B00]">C</span>
                <span>BM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-[#072B57] leading-none">
                  CBM <span className="text-[#FF6B00]">ACADEMY</span>
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
                  Digital Marketing & AI • Delhi
                </span>
              </div>
            </a>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors focus-ring ${
                      isActive
                        ? 'text-[#072B57] bg-slate-100 font-semibold'
                        : 'text-slate-700 hover:text-[#072B57] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="header-apply-btn"
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] active:bg-[#CC5400] rounded-xl shadow-xs transition-colors focus-ring cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-[#072B57] hover:bg-slate-100 focus-ring cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-xl flex flex-col z-50 border-l border-[#E5E7EB]">
            <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#072B57] flex items-center justify-center text-white font-bold text-sm">
                  <span className="text-[#FF6B00]">C</span>BM
                </div>
                <span className="font-bold text-[#072B57] text-base">CBM Academy</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-[#072B57] hover:bg-slate-100 focus-ring"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#072B57] bg-slate-100 font-semibold'
                        : 'text-slate-700 hover:text-[#072B57] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="p-4 border-t border-[#E5E7EB] bg-slate-50">
              <button
                id="mobile-drawer-apply-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-[#FF6B00] hover:bg-[#E65F00] rounded-xl shadow-xs focus-ring cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">
                New Delhi Campus • Practical AI & Marketing
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

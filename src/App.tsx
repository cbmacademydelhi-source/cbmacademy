import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseCBM } from './components/WhyChooseCBM';
import { CourseSection } from './components/CourseSection';
import { AITools } from './components/AITools';
import { CareerOpportunities } from './components/CareerOpportunities';
import { CertificateVerification } from './components/CertificateVerification';
import { Blogs } from './components/Blogs';
import { About } from './components/About';
import { Contact, ContactRef } from './components/Contact';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { PolicyModal } from './components/PolicyModals';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);
  const contactRef = useRef<ContactRef>(null);

  const handleApplyClick = (courseTitle?: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        contactRef.current?.focusForm(courseTitle);
      }, 400);
    }
  };

  const handleDownloadBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleApplyForJob = (jobTitle: string) => {
    handleApplyClick(`Job Inquiry: ${jobTitle}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B] antialiased selection:bg-[#FF6B00]/20 selection:text-[#072B57]">
      {/* Sticky Header */}
      <Header onApplyClick={() => handleApplyClick()} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onApplyClick={() => handleApplyClick()}
          onDownloadBrochure={handleDownloadBrochure}
        />

        {/* 2. Why Choose CBM Academy */}
        <WhyChooseCBM />

        {/* 3. Course Section (Pro Digital Marketing Course - 12 Modules) */}
        <CourseSection
          onApplyClick={() => handleApplyClick()}
          onDownloadBrochure={handleDownloadBrochure}
        />

        {/* 4. AI Tools You'll Learn Grid */}
        <AITools />

        {/* 5. Career Opportunities */}
        <CareerOpportunities onApplyForJob={handleApplyForJob} />

        {/* 6. Certificate Verification */}
        <CertificateVerification />

        {/* 7. Latest From CBM Academy (Blogs) */}
        <Blogs />

        {/* 8. About CBM Academy */}
        <About />

        {/* 9. Contact & Admissions Enquiry Form */}
        <Contact ref={contactRef} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(type) => setActivePolicy(type)}
        onApplyClick={() => handleApplyClick()}
      />

      {/* Global Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onApplyForCourse={() => handleApplyClick()}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}

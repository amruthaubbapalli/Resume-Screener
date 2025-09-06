import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';
import ProblemSolutionSection from './ProblemSolutionSection';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <HeroSection onGetStarted={onGetStarted} />
      <main>
        <ProblemSolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection onGetStarted={onGetStarted} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
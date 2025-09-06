import React from 'react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b dark:border-slate-800">
       <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-teal-100 dark:from-slate-900 dark:via-slate-800 dark:to-teal-900/30"></div>
       </div>
      <div className="container mx-auto px-6 pt-24 pb-32 relative text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tighter">
          Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">Smarter</span>, Not Harder.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300">
          Our AI-powered screener instantly finds the perfect candidates by matching resumes to your job description with unparalleled accuracy.
        </p>
        <div className="mt-10">
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transform transition-transform duration-300 hover:scale-105"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
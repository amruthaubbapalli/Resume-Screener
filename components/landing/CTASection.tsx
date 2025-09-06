import React from 'react';

interface CTASectionProps {
  onGetStarted: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6 py-20">
            <div className="bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl shadow-xl text-white p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Revolutionize Your Hiring Process?
                </h2>
                <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
                    Stop wasting time on manual screening and start interviewing your best candidates today.
                </p>
                <div className="mt-8">
                    <button
                        onClick={onGetStarted}
                        className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-200 transform transition-transform duration-300 hover:scale-105"
                    >
                        Try the AI Screener Now
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CTASection;

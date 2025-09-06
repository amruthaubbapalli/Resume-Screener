import React from 'react';
import ClockIcon from '../icons/ClockIcon';
import SparklesIcon from '../icons/SparklesIcon';
import TargetIcon from '../icons/TargetIcon';
import ScaleIcon from '../icons/ScaleIcon';

const features = [
  {
    icon: <ClockIcon />,
    title: 'Save Countless Hours',
    description: 'Automate the most time-consuming part of your recruitment process. Go from hundreds of resumes to a qualified shortlist in minutes.',
  },
  {
    icon: <TargetIcon />,
    title: 'Improve Quality of Hire',
    description: 'Our AI analyzes skills and experience against your job description to ensure you only interview the most relevant candidates.',
  },
  {
    icon: <ScaleIcon />,
    title: 'Reduce Unconscious Bias',
    description: 'Make data-driven decisions based on qualifications, not demographics. Build a more diverse and inclusive team, effortlessly.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Gain Deeper Insights',
    description: 'Receive a detailed breakdown of each candidate\'s strengths and weaknesses, enabling more productive interviews.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            A Powerful Assistant for Every Recruiter
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Unlock features designed to make your hiring process faster, fairer, and more effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

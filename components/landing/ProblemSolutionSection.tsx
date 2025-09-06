import React from 'react';

const ProblemSolutionSection: React.FC = () => {
  const painPoints = [
    { title: "Resume Overload", description: "Drowning in hundreds of resumes for a single open role." },
    { title: "Time-Consuming Process", description: "Spending countless hours on manual, repetitive screening tasks." },
    { title: "Hidden Bias", description: "Unconscious bias influencing candidate selection and hindering diversity." },
    { title: "Inconsistent Evaluations", description: "Lack of a standardized process leads to inconsistent candidate reviews." },
  ];

  const solutions = [
    { title: "Automated Shortlisting", description: "Our AI reads and ranks every resume in seconds, surfacing top talent instantly." },
    { title: "Increased Efficiency", description: "Reclaim up to 80% of your screening time to focus on engaging with candidates." },
    { title: "Objective & Fair Analysis", description: "Focus on skills and experience, reducing bias for a more diverse talent pool." },
    { title: "Data-Driven Decisions", description: "Get consistent, data-backed insights on every candidate's strengths and weaknesses." },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Say Goodbye to Hiring Headaches
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Manual screening is slow, biased, and inefficient. Our AI provides a fast, fair, and intelligent solution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">The Problem</h3>
            <ul className="space-y-4">
              {painPoints.map((item, index) => (
                <li key={index}>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</p>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-4">The Solution</h3>
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index}>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</p>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

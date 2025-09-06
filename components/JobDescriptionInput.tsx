
import React from 'react';

interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ value, onChange, disabled }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">
      <label htmlFor="job-description" className="block text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
        Job Description
      </label>
      <textarea
        id="job-description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Paste the full job description here..."
        className="w-full h-48 p-4 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-slate-700 dark:text-slate-300 resize-y disabled:opacity-50"
      />
    </div>
  );
};

export default JobDescriptionInput;


import React from 'react';
import type { Resume } from '../types';
import PlusIcon from './icons/PlusIcon';
import TrashIcon from './icons/TrashIcon';

interface ResumeInputAreaProps {
  resumes: Resume[];
  onResumeChange: (id: string, field: 'name' | 'content', value: string) => void;
  onAddResume: () => void;
  onRemoveResume: (id: string) => void;
  disabled: boolean;
}

const ResumeInputArea: React.FC<ResumeInputAreaProps> = ({
  resumes,
  onResumeChange,
  onAddResume,
  onRemoveResume,
  disabled
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 mt-6">
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">Candidate Resumes</h2>
      <div className="space-y-6">
        {resumes.map((resume, index) => (
          <div key={resume.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg relative">
            <input
              type="text"
              value={resume.name}
              onChange={(e) => onResumeChange(resume.id, 'name', e.target.value)}
              disabled={disabled}
              placeholder={`Candidate ${index + 1}`}
              className="w-full mb-3 p-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-slate-700 dark:text-slate-300 disabled:opacity-50"
            />
            <textarea
              value={resume.content}
              onChange={(e) => onResumeChange(resume.id, 'content', e.target.value)}
              disabled={disabled}
              placeholder="Paste resume text here..."
              className="w-full h-40 p-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-slate-700 dark:text-slate-300 resize-y disabled:opacity-50"
            />
             {resumes.length > 1 && (
              <button
                onClick={() => onRemoveResume(resume.id)}
                disabled={disabled}
                className="absolute top-3 right-3 p-1.5 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 bg-slate-100 dark:bg-slate-700 hover:bg-red-100 dark:hover:bg-red-900 rounded-full transition-colors duration-200 disabled:opacity-50"
                aria-label="Remove resume"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={onAddResume}
        disabled={disabled}
        className="mt-4 flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-indigo-500 hover:text-indigo-500 transition-colors duration-200 disabled:opacity-50"
      >
        <PlusIcon className="w-5 h-5 mr-2" />
        Add another resume
      </button>
    </div>
  );
};

export default ResumeInputArea;

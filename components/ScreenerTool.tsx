import React, { useState, useCallback } from 'react';
import type { Resume, AnalysisResult } from '../types';
import { analyzeResume } from '../services/geminiService';
import { exampleJobDescription, exampleResumes } from '../data/exampleData';
import JobDescriptionInput from './JobDescriptionInput';
import ResumeInputArea from './ResumeInputArea';
import ResultCard from './ResultCard';
import XCircleIcon from './icons/XCircleIcon';

const ScreenerTool: React.FC = () => {
  const initialResumeState = [{ id: '1', name: 'Candidate A', content: '' }];
  const [jobDescription, setJobDescription] = useState<string>('');
  const [resumes, setResumes] = useState<Resume[]>(initialResumeState);
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddResume = () => {
    setResumes(prev => [...prev, { id: Date.now().toString(), name: `Candidate ${prev.length + 1}`, content: '' }]);
  };

  const handleRemoveResume = (id: string) => {
    setResumes(prev => prev.filter(resume => resume.id !== id));
  };

  const handleResumeChange = (id: string, field: 'name' | 'content', value: string) => {
    setResumes(prev => prev.map(resume => resume.id === id ? { ...resume, [field]: value } : resume));
  };

  const handleLoadExample = () => {
    setJobDescription(exampleJobDescription);
    const resumesWithIds = exampleResumes.map((resume, index) => ({
      ...resume,
      id: `example-${index}-${Date.now()}`,
    }));
    setResumes(resumesWithIds);
    setError(null);
    setResults([]);
  };
  
  const handleClearAll = () => {
    setJobDescription('');
    setResumes(initialResumeState);
    setResults([]);
    setError(null);
  }

  const handleAnalyze = useCallback(async () => {
    if (!jobDescription.trim()) {
      setError('Job description cannot be empty.');
      return;
    }
    const resumesToAnalyze = resumes.filter(r => r.content.trim());
    if (resumesToAnalyze.length === 0) {
      setError('Please provide at least one resume with content.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const analysisPromises = resumesToAnalyze.map(resume =>
        analyzeResume(jobDescription, resume.content, resume.name)
      );
      
      const analysisSettledResults = await Promise.allSettled(analysisPromises);
      
      const successfulResults: AnalysisResult[] = [];
      const failedResumes: string[] = [];

      analysisSettledResults.forEach((settledResult, index) => {
        if (settledResult.status === 'fulfilled') {
          successfulResults.push(settledResult.value);
        } else {
          console.error(`Failed to analyze ${resumesToAnalyze[index].name}:`, settledResult.reason);
          failedResumes.push(resumesToAnalyze[index].name);
        }
      });

      setResults(successfulResults.sort((a, b) => b.matchScore - a.matchScore));

      if (failedResumes.length > 0) {
        setError(`Could not analyze: ${failedResumes.join(', ')}. Please check the console for details.`);
      }

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [jobDescription, resumes]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <JobDescriptionInput value={jobDescription} onChange={setJobDescription} disabled={isLoading} />
            <ResumeInputArea 
              resumes={resumes} 
              onAddResume={handleAddResume} 
              onRemoveResume={handleRemoveResume}
              onResumeChange={handleResumeChange}
              disabled={isLoading}
            />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button
                  onClick={handleAnalyze}
                  disabled={isLoading}
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-3.5 text-center transition-all duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center col-span-1 sm:col-span-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : 'Analyze Resumes'}
                </button>
                <button
                  onClick={handleLoadExample}
                  disabled={isLoading}
                  className="w-full text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900 font-medium rounded-lg text-lg px-5 py-3.5 text-center transition-colors duration-300 disabled:opacity-50"
                >
                  Try with an Example
                </button>
                <button
                  onClick={handleClearAll}
                  disabled={isLoading}
                  className="w-full text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 font-medium rounded-lg text-lg px-5 py-3.5 text-center transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <XCircleIcon className="w-6 h-6" />
                  Clear All
                </button>
            </div>
             {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
          
          {/* Results Section */}
          <div className="space-y-6">
            {!isLoading && results.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-600">
                <svg className="w-16 h-16 text-slate-400 dark:text-slate-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Analysis Results</h2>
                <p className="text-slate-500 dark:text-slate-400 text-center mt-2">
                  Results will be displayed here after you enter a job description, resumes, and click "Analyze".
                </p>
              </div>
            )}
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-600">
                 <svg className="animate-spin h-12 w-12 text-indigo-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Generating Insights...</h2>
                 <p className="text-slate-500 dark:text-slate-400 text-center mt-2">
                  Our AI is carefully reviewing each candidate. This may take a moment.
                </p>
              </div>
            )}
            {results.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScreenerTool;
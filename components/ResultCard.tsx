
import React from 'react';
import type { AnalysisResult } from '../types';
import ScoreDonutChart from './ScoreDonutChart';

interface ResultCardProps {
  result: AnalysisResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 w-full transition-transform hover:scale-[1.02] duration-300">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
        <ScoreDonutChart score={result.matchScore} />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{result.resumeName}</h3>
          <p className="text-slate-600 dark:text-slate-400 mt-1">{result.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">Strengths</h4>
          <ul className="space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">&#10003;</span>
                <p className="text-slate-700 dark:text-slate-300 flex-1">{strength}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">Weaknesses</h4>
          <ul className="space-y-2">
            {result.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">&#10007;</span>
                <p className="text-slate-700 dark:text-slate-300 flex-1">{weakness}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

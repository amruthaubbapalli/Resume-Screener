
import React from 'react';

interface ScoreDonutChartProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

const ScoreDonutChart: React.FC<ScoreDonutChartProps> = ({ score, size = 100, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (value: number) => {
    if (value >= 85) return 'stroke-green-500';
    if (value >= 60) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          className="stroke-slate-200 dark:stroke-slate-700"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`transition-all duration-1000 ease-out ${getScoreColor(score)}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <span className="absolute text-2xl font-bold text-slate-700 dark:text-slate-200">
        {score}
        <span className="text-sm">%</span>
      </span>
    </div>
  );
};

export default ScoreDonutChart;

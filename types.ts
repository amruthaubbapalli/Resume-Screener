
export interface Resume {
  id: string;
  name: string;
  content: string;
}

export interface AnalysisResult {
  resumeName: string;
  matchScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
}

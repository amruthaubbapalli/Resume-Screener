
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    matchScore: {
      type: Type.INTEGER,
      description: "A score from 0 to 100 indicating how well the resume matches the job description."
    },
    summary: {
      type: Type.STRING,
      description: "A brief, one-paragraph summary of the candidate's fit for the role, written in a professional and objective tone."
    },
    strengths: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A bulleted list of the key skills and experiences from the resume that directly align with the job description's requirements."
    },
    weaknesses: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A bulleted list of the key skills or requirements from the job description that are missing, not clearly articulated, or underdeveloped in the resume."
    }
  },
  required: ["matchScore", "summary", "strengths", "weaknesses"]
};

export const analyzeResume = async (jobDescription: string, resumeContent: string, resumeName: string): Promise<AnalysisResult> => {
  try {
    const prompt = `
      Job Description:
      ---
      ${jobDescription}
      ---

      Resume:
      ---
      ${resumeContent}
      ---

      Based on the provided job description and resume, please perform a detailed analysis and return the results in the specified JSON format.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2,
      },
    });

    const jsonText = response.text.trim();
    const parsedResult = JSON.parse(jsonText);
    
    return {
      resumeName,
      ...parsedResult
    };

  } catch (error) {
    console.error(`Error analyzing resume for ${resumeName}:`, error);
    throw new Error(`Failed to analyze resume for ${resumeName}. Please check the console for details.`);
  }
};


import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  // Always use a named parameter and direct process.env.API_KEY access
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getCropAdvisory = async (query: string, history: {role: string, text: string}[]) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';
  
  // Map history to the format expected by Gemini API
  const contents = history.map(h => ({
    role: h.role === 'model' ? 'model' : 'user',
    parts: [{ text: h.text }]
  }));
  
  contents.push({
    role: 'user',
    parts: [{ text: query }]
  });

  try {
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: "You are an expert agricultural advisor named AgriBot. Provide concise, practical, and scientific advice to farmers about crop diseases, fertilizers, and modern farming techniques. Use bullet points for clarity.",
        temperature: 0.7,
      }
    });
    // Access text property directly as per guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my agricultural database right now. Please try again later.";
  }
};

export const get15DayWeather = async (lat: number, lon: number) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';
  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Provide a detailed 15-day agricultural weather forecast for coordinates: ${lat}, ${lon}. For each day, provide the expected temperature range, sky condition, and a specific tip for farmers (e.g. 'Good day for fertilizer application', 'Avoid sowing due to rain', 'High evaporation, increase irrigation'). Format as a clean list.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    // Extracting grounding sources for search-based queries
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || [];
    return { text: response.text, sources };
  } catch (error) {
    console.error("Weather Gemini Error:", error);
    return { text: "Failed to fetch 15-day forecast. Please check your connection.", sources: [] };
  }
};

export const getAgriSchemes = async () => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';
  try {
    const response = await ai.models.generateContent({
      model,
      contents: "List all major current Indian government schemes for farmers (Central and State). Group them by category: Financial Support, Insurance, Irrigation, and Technology. Provide clear application steps for each. Focus on 2024-2025 updates.",
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || [];
    return { text: response.text, sources };
  } catch (error) {
    console.error("Schemes Gemini Error:", error);
    return { text: "Failed to fetch government schemes. Please try again later.", sources: [] };
  }
};

export const identifyProblemFromImage = async (base64Image: string) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';

  try {
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: "Identify any crop diseases or pests in this image. Provide the name, symptoms, and recommended treatment." }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Image Processing Error:", error);
    return "Could not analyze the image. Ensure the plant is clearly visible.";
  }
};

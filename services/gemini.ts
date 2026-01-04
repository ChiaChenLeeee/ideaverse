
import { GoogleGenAI } from "@google/genai";

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "你是一个专业的个人网站助手，熟悉‘广告商业化’、‘理财’和‘AI’。请用简洁、优雅、具有启发性的语言回答。风格要像苹果公司的文案那样简洁有力。",
        temperature: 0.7,
      },
    });
    return response.text || "抱歉，我暂时无法回答。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "在连接AI大脑时遇到了一些问题，请稍后再试。";
  }
};

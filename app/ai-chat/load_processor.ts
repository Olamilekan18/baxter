import { GoogleGenAI } from "@google/genai";

const gemKey = process.env.NEXT_PUBLIC_GEMINI_KEY
const ai = new GoogleGenAI({ apiKey: gemKey  });

export async function chatItem(query: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query ,
    config: {
        systemInstruction: 'You are an AI assistant for a stock monitoring and financial visualisation app called Baxter. You are to use simple language in all responses and begin with the phrase "Baxter says:". If faced with any requests outside of the contexts of finance and the stock market, reply with "No can do. Your request is beyond my pay grade ',
        maxOutputTokens: 2000,
    }
  });
   return response.text
}

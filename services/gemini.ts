
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Ти — розумний помічник автомийки "AquaGloss Pro". 
Твоя мета: допомагати клієнтам обирати послуги, давати поради щодо догляду за авто та відповідати на питання про мийку.
Наші послуги: 
1. Експрес (250 грн) — зовнішнє миття.
2. Комплекс (550 грн) — салон + кузов.
3. Преміум (900 грн) — віск, диски, гума.
4. Хімчистка (від 2500 грн) — повне очищення салону.
Будь ввічливим, професійним та лаконічним. Мова: українська.
`;

export async function getAIChatResponse(history: ChatMessage[], newUserMessage: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    // Construct simplified history for API
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Add current message
    contents.push({ role: 'user', parts: [{ text: newUserMessage }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Вибачте, я не зміг обробити ваш запит. Спробуйте ще раз.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Сталася помилка при з'єднанні з AI-помічником.";
  }
}

import { GoogleGenAI } from "@google/genai";
import { POPULAR_DESTINATIONS, APP_NAME } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid runtime errors on client without key
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getTravelAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I'm currently offline. Please contact our support team directly via WhatsApp!";
  }

  try {
    const destinationsContext = POPULAR_DESTINATIONS.map(d => `${d.title}: ${d.description}`).join("; ");
    
    const systemInstruction = `You are a helpful travel assistant for "${APP_NAME}", a travel agency in India. 
    Your tone is warm, professional, and inviting.
    
    Company Context:
    - We offer PAN India tours.
    - Key Destinations: ${destinationsContext}.
    - Values: Safety, Authentic Experiences, Transparent Pricing.
    
    User Query: "${query}"
    
    Task: Provide a helpful, concise response (max 150 words). If the user asks for an itinerary, suggest a rough outline based on our destinations. Always encourage them to contact us on WhatsApp for booking.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemInstruction,
    });

    return response.text || "I couldn't generate a response at the moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an issue connecting to the travel brain. Please try again later.";
  }
};
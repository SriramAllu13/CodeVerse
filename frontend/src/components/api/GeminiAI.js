const { GoogleGenerativeAI } = require("@google/generative-ai");

const api_key = "AIzaSyAMVAqYsC48uTF7lWySay3sZktSjR2uurs";

const genAI = new GoogleGenerativeAI(api_key);

export const generateChatResponse = async (input) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating chat response:", error);
    throw error;
  }
};

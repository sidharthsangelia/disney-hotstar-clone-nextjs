import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function getAiSuggestions(term: string): Promise<string> {
  const prompt = `You're a cool AI friend who gives short movie suggestions. A user searched for "${term}". Recommend 2-3 movies in a single sentence or two. Keep it casual, clever, and brief — like a DM from a friend. No lists. No overexplaining. Maybe add 1-2 emojis.`;

  const res = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [{ role: "user", content: prompt }],
  });

  const message = res?.choices?.[0]?.message?.content;

  if (!message) {
    throw new Error("AI response is empty or malformed.");
  }

  return message.trim();
}
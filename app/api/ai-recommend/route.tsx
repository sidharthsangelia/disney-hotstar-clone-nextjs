// app/api/ai-recommend/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const movieName = body.movieName;

  if (!movieName) {
    return NextResponse.json({ error: 'Movie name required' }, { status: 400 });
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a fun, witty movie expert. Recommend similar movies based on the user's taste using casual tone and emojis!",
        },
        {
          role: "user",
          content: `I really like the movie ${movieName}. Suggest some similar ones.`,
        },
      ],
      temperature: 0.9,
    }),
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content;

  return NextResponse.json({ suggestion: message || "Couldn't think of anything fun right now 😅" });
}

"use client";
// components/AiSuggestionsWrapper.tsx (this is a server component)
import dynamic from "next/dynamic";

// Dynamically import the client component
const AiSuggestions = dynamic(() => import("./AiSuggestions"), { ssr: false });

type Props = {
  term: string;
};

export default function AiSuggestionsWrapper({ term }: Props) {
  return <AiSuggestions term={term} />;
}

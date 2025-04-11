"use client";

import { useEffect, useState } from "react";
import { getAiSuggestions } from "@/lib/getAiSuggestions";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  term: string;
};

export default function AiSuggestions({ term }: Props) {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchSuggestion = async () => {
      setLoading(true);
      try {
        const res = await getAiSuggestions(term);
        if (isMounted) setSuggestion(res || "");
      } catch {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (isMounted) setSuggestion("Couldn't fetch suggestions right now.");
      }
    };

    fetchSuggestion();

    return () => {
      isMounted = false;
    };
  }, [term]);

  return (
    <div className="px-10 max-w-3xl text-muted-foreground italic text-sm min-h-[40px]">
      {loading ? (
        <span className="animate-pulse">Fetching cool picks... 🎬</span>
      ) : (
        <AnimatePresence>
          <motion.p
            key={suggestion}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {suggestion}
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
}

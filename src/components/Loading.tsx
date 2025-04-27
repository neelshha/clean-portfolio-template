import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Loading({
  setIsLoading,
}: {
  setIsLoading: (loading: boolean) => void;
}) {
  const [typingDone, setTypingDone] = useState(false);

  // once typing is done, wait 1s then flip isLoading → false
  useEffect(() => {
    if (typingDone) {
      const t = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(t);
    }
  }, [typingDone, setIsLoading]);

  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 flex items-center justify-center p-10 bg-neutral-200 dark:bg-black z-[200]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <TypingText setTypingDone={setTypingDone} />
    </motion.div>
  );
}

function TypingText({
  setTypingDone,
}: {
  setTypingDone: (done: boolean) => void;
}) {
  const text = "Neel Shah *";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeInt = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(typeInt);
        setTypingDone(true);
      }
    }, 150);

    const blink = setInterval(() => setShowCursor((v) => !v), 500);

    return () => {
      clearInterval(typeInt);
      clearInterval(blink);
    };
  }, [setTypingDone]);

  return (
    <div className="text-4xl sm:text-6xl font-gambarino text-neutral-900 dark:text-white tracking-tight leading-tight">
      {displayedText}
      <span className="inline-block w-2">{showCursor && "|"}</span>
    </div>
  );
}
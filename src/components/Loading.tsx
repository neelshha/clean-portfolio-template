import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Loading({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // small pause after typing done
      return () => clearTimeout(timer);
    }
  }, [typingDone, setIsLoading]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 flex items-center justify-center p-10 bg-neutral-200 dark:bg-black z-[200]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <TypingText setTypingDone={setTypingDone} />
      </motion.div>
    </AnimatePresence>
  );
}

function TypingText({ setTypingDone }: { setTypingDone: (done: boolean) => void }) {
  const text = "Neel Shah *";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(typingInterval);
        setTypingDone(true); // Signal that typing is finished
      }
    }, 150); // Typing speed

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [setTypingDone]);

  return (
    <motion.div
      className="text-4xl sm:text-6xl font-gambarino text-neutral-900 dark:text-white tracking-tight leading-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      <span className="inline-block w-2">
        {showCursor && <motion.span>|</motion.span>}
      </span>
    </motion.div>
  );
}
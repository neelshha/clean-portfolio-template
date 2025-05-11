import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const rotation = useTransform(scrollY, [0, 1000], [0, 360], { clamp: false });

  return (
    <motion.button
      onClick={toggleTheme}
      style={{ rotate: rotation }}
      className="p-2 rounded-lg text-orange-600 dark:text-orange-600 hover:text-orange-800 dark:hover:text-orange-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
}
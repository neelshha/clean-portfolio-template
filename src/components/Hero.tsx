import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="intro"
      aria-label="Hero section: I code. I design. I adapt. I create digital experiences that feel alive."
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-4 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-5xl mx-auto"
      >
        <h1 className="font-gambarino text-5xl sm:text-6xl md:text-7xl leading-tight text-neutral-900 dark:text-white mb-8">
          I code.<br />
          I design.<br />
          I adapt.<br />
          I create digital<br/>
          experiences that<br/>
          feel alive.
        </h1>
      </motion.div>
    </section>
  );
}
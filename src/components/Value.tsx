import { motion } from 'framer-motion';

export default function Value() {
  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries and exploring new possibilities in every project."
    },
    {
      title: "Quality",
      description: "Delivering excellence through attention to detail and best practices."
    },
    {
      title: "Collaboration",
      description: "Working together to create solutions that exceed expectations."
    }
  ];

  return (
    <section
      id="values"
      aria-label="Core values section"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto"
      >
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <h3 className="font-gambarino text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

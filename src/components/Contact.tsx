import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/neelshha',
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/neelshha',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/neelshha/',
    },
    {
      name: 'Email',
      href: 'mailto:contact@neelshha.com',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="contact-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-gambarino text-4xl sm:text-5xl md:text-6xl text-neutral-900 dark:text-white leading-tight">
            Let's
            <br />
            Connect
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl max-w-xl">
            Available for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative inline-block">
                <div className="flex items-baseline gap-2">
                  <span className="font-gambarino text-2xl sm:text-3xl text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {link.name === 'Email' ? 'contact@neelshha.com' : '@neelshha'}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-neutral-600 dark:bg-neutral-600 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
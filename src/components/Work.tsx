import { motion } from "framer-motion";
import aiotize from '../assets/aiotize.jpeg';
import cyber from '../assets/cyber.jpeg';
import vulnsniff from '../assets/vulnsniff.jpeg';
import uipath from '../assets/uipath.jpeg';
import threatlens from '../assets/threatlens.jpeg';
export default function Work() {
  const projects = [
    {
      title: "ThreatLens AI",
      description: "Analyze and summarize threat intelligence reports with AI. Extract IOCs, map MITRE ATT&CK techniques, and export DOCX in a sleek, secure interface.",
      image: threatlens, // replace with your actual import reference
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth", "SWR", "docx", "Markdown"],
      demoLink: "https://github.com/neelshha/threatlens-ai",
    },
    {
      title: "VulnSniff",
      description: "Scan websites for common security issues like XSS or missing headers. Get instant AI explanations and fixes using Groq LLM.",
      image: vulnsniff,
      technologies: ["Javascript", "Chrome Extensions API", "HTML/CSS", "DOM APIs", "Fetch API"],
      demoLink: "https://github.com/neelshha/vulnsniff.git",
    },
    {
      title: "Aiotize Inc.",
      description: "Logo creation and brand guidelines for Aiotize Inc.",
      image: aiotize,
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      demoLink: "https://www.behance.net/gallery/218932957/Aiotize-Inc-Branding",
    },
    {
      title: "UiPath Vulnerability Assessment Bot",
      description: "A UiPath bot that automates website vulnerability assessments using Nmap and OpenAI. Generates detailed, AI-powered security reports.",
      image: uipath,
      technologies: ["UiPath", "Nmap", "OpenAI", "Python"],
      demoLink: "https://github.com/aadyamo/uipath-vulnerability-assessment-bot.git",
    },
    {
      title: "Cyber Chakravyuh",
      description: "Website for MPSTME's official Cybersecurity Club",
      image: cyber,
      technologies: ["HTML", "CSS", "Javascript"],
      demoLink: "https://www.cyberchakravyuh.in/",
    },
  ];

  return (
    <motion.section
      id="work"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-200 dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="portfolio-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.div
        className="w-full max-w-2xl mx-auto space-y-16"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-gambarino text-2xl text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full border border-neutral-700 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-900 dark:text-white text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  View Project
                  <span>→</span>
                </a>

                <hr className="mt-10 border-t border-neutral-500 dark:border-neutral-700 w-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
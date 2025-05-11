import { motion } from "framer-motion";
import aiotize from '../assets/aiotize.jpeg';
import cyber from '../assets/cyber.jpeg';
import vulnsniff from '../assets/vulnsniff.jpeg';
import uipath from '../assets/uipath.jpeg';
import threatlens from '../assets/threatlens.jpeg';
import tapthatapp from '../assets/tta.jpeg';
export default function Work() {
  const projects = [
    {
      title: "TapThatApp",
      description: "A lightweight macOS menu bar app for instant app launching via a radial Option + Space interface. Features customizable settings, hotkey support, and autostart at login.",
      image: tapthatapp, // replace with your actual import reference
      technologies: ["Swift", "SwiftUI", "AppKit", "Launch Agents", "Login Items", "HotKey", "Xcode"],
      demoLink: "https://github.com/neelshha/TapThatApp",
    },
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
      className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-200 dark:bg-black transition-colors px-5 py-12 sm:py-8 md:pl-[12%]"
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
        className="w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group h-full flex flex-col p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex flex-col gap-4 flex-1">
                <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-2">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <h3 className="font-gambarino text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex-1" />
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 py-2  text-white dark:text-neutral-200 text-sm font-semibold  hover:opacity-80 transition"
                >
                  View Project
                  <span>→</span>
                </a>
              </div>
              <hr className="mt-6 border-t border-neutral-200 dark:border-neutral-700 w-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
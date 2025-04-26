import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Aiotize Inc.",
    role: "UI/UX Designer",
    period: "Feb 2025 - Present",
    description: "Designing intuitive, accessible, and visually appealing user interfaces for IoT platforms, collaborating closely with developers to enhance user experience and brand identity.",
  },
  {
    company: "Spark a Change",
    role: "Volunteer",
    period: "Jun 2023",
    description: "Provided academic support to underprivileged students, fostering a positive learning environment and promoting education through creative and interactive teaching methods.",
  },
];

const positionsOfResponsibility = [
  {
    organization: "MUN Society, MPSTME",
    role: "Joint General Secretary for Creatives",
    period: "May 2024 - May 2025",
    description: "Directed the creative and branding efforts for the MUN Society, conceptualizing visual content, event designs, and promotional material to enhance engagement and outreach.",
  },
  {
    organization: "Mumbai MUN",
    role: "Chief Information Officer",
    period: "May 2024 - May 2025",
    description: "Oversaw the digital operations, managed website updates, social media communications, and ensured secure and effective information flow within the organization.",
  },
  {
    organization: "Social Conclave",
    role: "Vice-Chair Person",
    period: "Nov 2024 - Jan 2025",
    description: "Co-led event planning and execution, coordinated between organizing teams, moderated sessions, and helped expand outreach to maximize participation and visibility.",
  },
  {
    organization: "Cyber Chakravyuh",
    role: "Technical Head",
    period: "Sep 2024 - May 2025",
    description: "Led the cybersecurity event’s technical strategy, including problem-setting, platform management, and workshop curation to foster interest and participation in cybersecurity.",
  },
  {
    organization: "Editorial Board, MPSTME",
    role: "Joint General Secretary",
    period: "Jul 2023 - Aug 2024",
    description: "Managed editorial operations, contributed to college publications, organized creative writing events, and ensured high editorial standards across student-led initiatives.",
  },
  {
    organization: "IIT Bombay's Techfest World MUN",
    role: "Under Secretariat General for Design",
    period: "Aug 2023 - Dec 2024",
    description: "Led the design and branding efforts for Techfest World MUN, creating event graphics, delegate handbooks, promotional material, and ensuring cohesive visual identity across all platforms.",
  },
];

export function Background() {
  return (
    <section
      id="background"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-white dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="experience-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto w-full"
      >

        <div className="space-y-32 w-full">
          {/* Work Experience - Simple Layout, Smaller Fonts */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-neutral-900 dark:text-white"
            >
              WORK EXPERIENCE
            </motion.h3>
            <div className="flex flex-col gap-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-row items-start gap-4"
                >
                  {/* Logo Placeholder */}
                  {/* <div className="flex-shrink-0 w-20 h-20 rounded-full bg-emerald-400 flex items-center justify-center mt-1 mr-6" /> */}
                  <div className="space-y-2">
                    <div className="text-base text-neutral-900 dark:text-white font-gambarino">{exp.company}</div>
                    <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">{exp.role}</div>
                    <div className="flex flex-row items-center gap-4 text-xs text-neutral-500 mb-1">
                      <span>{exp.period}</span>
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility - Simple Layout, Smaller Fonts */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-gambarino text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-neutral-900 dark:text-white"
            >
              POSITIONS OF RESPONSIBILITY
            </motion.h3>
            <div className="flex flex-col gap-8">
              {positionsOfResponsibility.map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-row items-start gap-4"
                >
                  {/* Logo Placeholder */}
                  {/* <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center mt-1 mr-6" /> */}
                  <div className="space-y-2">
                    <div className="text-base text-neutral-900 dark:text-white font-gambarino">{pos.organization}</div>
                    <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">{pos.role}</div>
                    <div className="flex flex-row items-center gap-4 text-xs text-neutral-500 mb-1">
                      <span>{pos.period}</span>
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-300 text-sm max-w-2xl leading-relaxed">
                      {pos.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

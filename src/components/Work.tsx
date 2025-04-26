import aiotize from '../assets/aiotize.png';
import cyber from '../assets/cyber.png';

export function Work() {
  const projects = [
    {
      title: "Aiotize Inc.",
      description: "Logo creation and brand guidelines for Aiotize Inc.",
      image: aiotize,
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      demoLink: "https://www.behance.net/gallery/218932957/Aiotize-Inc-Branding",
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
    <section
      id="work"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="portfolio-title"
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
                        className="text-xs px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
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

                  <hr className="my-2 border-t border-neutral-300 dark:border-neutral-700 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
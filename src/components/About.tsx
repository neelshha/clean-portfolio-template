export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-neutral-200 dark:bg-black text-neutral-900 dark:text-white transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto py-24">
        {/* Center: Bio */}
        <div className="w-full flex items-start justify-center">
          <div className="max-w-xl text-base leading-relaxed">
            <p>
            I'm a Computer Science student specializing in Cybersecurity, blending a passion for tech, design, and building real-world solutions. From developing a vulnerability assessment bot with UiPath and OpenAI, to managing the Cybersecurity Club's website and creating my portfolio at neelshha.com, I love projects that merge innovation with impact. I've led digital strategy as Joint General Secretary of my college's MUN Society and as CIO of Mumbai MUN. Skilled in React, Tailwind CSS, Python, and SQL, I'm driven by curiosity, creativity, and the challenge of turning ideas into meaningful digital experiences. Based in Mumbai, I believe thoughtful technology can change the world — one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
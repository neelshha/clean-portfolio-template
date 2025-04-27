import { useState, useEffect, useRef } from 'react';
import { Menu, X, } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import resume from '../assets/NeelShahResume.pdf';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.current?.observe(section));

    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  const navLinkClass = (section: string) => 
    `block text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-md font-gambarino tracking-tight leading-none ${
      isActive(section) ? '!text-neutral-900 dark:!text-white font-medium' : ''
    }`;

  const mobileNavLinkClass = (section: string) =>
    `block text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-xl font-gambarino tracking-tight leading-none ${
      isActive(section) ? '!text-neutral-900 dark:!text-white font-medium' : ''
    }`;

  return (
    <>
      {/* Mobile/Tablet menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 right-0 h-screen bg-neutral-200 dark:bg-black transform transition-all duration-500 ease-out z-[100] ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`h-full flex flex-col justify-center items-start px-8 transform transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Menu Items */}
          <div className="space-y-3">
            <a
              href="#intro"
              className={mobileNavLinkClass('intro')}
              onClick={() => setIsMenuOpen(false)}
            >
              Intro
            </a>
            <a
              href="#work"
              className={mobileNavLinkClass('work')}
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#values"
              className={mobileNavLinkClass('values')}
              onClick={() => setIsMenuOpen(false)}
            >
              Values
            </a>
            <a
              href="#background"
              className={mobileNavLinkClass('background')}
              onClick={() => setIsMenuOpen(false)}
            >
              Background
            </a>
            <a
              href="#about"
              className={mobileNavLinkClass('about')}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={mobileNavLinkClass('contact')}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href= {resume}
              download
              onClick={() => setIsMenuOpen(false)}
              className="underline decoration-dotted underline-offset-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-xl font-gambarino tracking-tight leading-none flex items-center gap-1"
            >
              Resume*
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 z-[101] hidden lg:flex flex-col">
        <div className="p-8 flex flex-col h-full">
          {/* Logo/Name */}
          <a href="#intro" className="text-xl font-gambarino text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors tracking-tight leading-none">
            N.
          </a>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <a
              href="#intro"
              className={navLinkClass('intro')}
            >
              Intro
            </a>
            <a
              href="#work"
              className={navLinkClass('work')}
            >
              Work
            </a>
            <a
              href="#values"
              className={navLinkClass('values')}
            >
              Values
            </a>
            <a
              href="#background"
              className={navLinkClass('background')}
            >
              Background
            </a>
            <a
              href="#about"
              className={navLinkClass('about')}
            >
              About
            </a>
            <a
              href="#contact"
              className={navLinkClass('contact')}
            >
              Contact
            </a>
            <a
              href= {resume}
              download
              className="underline decoration-dotted underline-offset-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-md font-gambarino tracking-tight leading-none flex items-center gap-1"
            >
              Resume*
            </a>
          </div>

          {/* Bottom Section */}
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[101] flex items-center justify-between px-6 py-4 bg-gradient-to-b from-neutral-200 to-transparent dark:from-black dark:to-transparent">
        <a href="#intro" className="text-xl font-gambarino text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors tracking-tight leading-none">
          N.
        </a>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-neutral-900 dark:text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}
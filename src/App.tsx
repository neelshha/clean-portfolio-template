import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Value } from './components/Value';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';
import { Background } from './components/Background';
import { Loading } from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 transition-colors relative z-0">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <>
            <Navigation />
            <main>
              <Hero />
              <Work />
              <Value />
              <Background />
              <About />
              <Contact />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
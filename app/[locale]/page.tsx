"use client";
import { useEffect, useState } from "react";
import Desktop from "../components/desktop/Desktop";
import Mobile from "../components/mobiile/Mobile";
import { AppContext } from "../hooks/useIntersectionObsercer";

function Home() {
  const [activeSection, setActiveSection] = useState('heading');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(screen.width > 767 ? ".section" : '.mobile-section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 300 && sectionTop > 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main className="w-full bg-neutral-900 scroll-smooth">
      <AppContext.Provider value={{idElementFocus: activeSection}}>
        <Desktop/>
        <Mobile />
      </AppContext.Provider>

    </main>
  );
}
export default Home;

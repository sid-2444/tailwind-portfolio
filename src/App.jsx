import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-all duration-700 bg-[#e8e6df] text-[#1a1a1a] dark:bg-[#0b0b0c] dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <section className="bg-[#e2dfd6] dark:bg-[#121212] transition-all duration-700">
        <About />
      </section>

      <section className="bg-[#dcd8cf] dark:bg-[#0f172a] transition-all duration-700">
        <Projects />
      </section>

      <section className="bg-[#e2dfd6] dark:bg-[#121212] transition-all duration-700">
        <Contact />
      </section>
    </div>
  );
}
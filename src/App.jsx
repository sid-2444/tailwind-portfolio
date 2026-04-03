import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 
    bg-[#f1efe9] text-[#1a1a1a] 
    dark:bg-[#0b0b0c] dark:text-[#e5e5e5]">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}
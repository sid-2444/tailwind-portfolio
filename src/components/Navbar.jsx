export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-black/30 border-b border-white/10 dark:border-white/5 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold tracking-wide text-[#b8893c]">
          Siddhanth.dev
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#c9a75d] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[#c9a75d] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#c9a75d] transition">
            Contact
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-4 py-2 rounded-full bg-[#1a1a1a] text-white dark:bg-[#c9a75d] dark:text-black transition-all duration-500 shadow-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
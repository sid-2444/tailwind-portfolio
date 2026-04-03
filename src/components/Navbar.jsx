export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md 
    bg-white/70 dark:bg-black/60 
    border-b border-black/10 dark:border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-lg font-bold text-[#c9a75d]">
          Siddhanth.dev
        </h1>

        <div className="flex items-center gap-6 text-sm">

          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-full 
            bg-black text-white 
            dark:bg-white dark:text-black transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </nav>
  );
}
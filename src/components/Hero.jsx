export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden transition-all duration-700
    bg-gradient-to-br from-[#e8e6df] via-[#dcd8cf] to-[#cfcac0]
    dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#020617]">

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,90,0.15),transparent_60%)]"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Siddhanth
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Building premium web experiences with modern tech
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 rounded-full 
          bg-gradient-to-r from-[#c9a75d] to-[#b8893c] 
          text-black font-medium shadow-lg 
          hover:scale-105 transition duration-300"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
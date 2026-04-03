import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 
    bg-[#dcd8cd] dark:bg-[#0f172a] transition-all duration-700">

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">

        {/* PROFILE IMAGE */}
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D5603AQF0XlXC3YhadA/profile-displayphoto-scale_400_400/B56ZqYT1l_HYAk-/0/1763491930750?e=1776902400&v=beta&t=j7JMMrbSQx3Ou5Pryt1wKgjblSQpWs0r5RJS71f75Zs"   // 🔥 put your image in public folder
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full 
          border-4 border-[#c9a75d] shadow-2xl"
        />

        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-[#1a1a1a] dark:text-white">
            Siddhanth
          </h1>

          <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg">
            Building premium web experiences with modern tech
          </p>

          <button
            className="mt-6 px-6 py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-[#c9a75d] to-[#b8893c] 
            text-black shadow-lg hover:scale-105 transition"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
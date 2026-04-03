import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-24 min-h-[90vh] flex flex-col justify-center items-center text-center px-6
    bg-[#f1efe9] dark:bg-[#0b0b0c] transition">

      <img
        src="https://your-image-link.jpg"
        alt="profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-[#c9a75d]"
      />

      <h1 className="text-4xl md:text-6xl font-bold">
        Siddhanth
      </h1>

      <p className="mt-4 text-gray-700 dark:text-gray-400">
        Frontend Developer | MERN Intern
      </p>

      <div className="flex gap-4 mt-6">
        <a href="#projects" className="px-6 py-3 bg-[#c9a75d] text-black rounded-full">
          View Projects
        </a>

        <a href="/resume.pdf" download className="px-6 py-3 border border-[#c9a75d] rounded-full">
          Resume
        </a>
      </div>

      {/* SOCIALS */}
      <div className="flex gap-6 mt-8 text-xl">
        <a href="https://github.com/YOUR_USERNAME" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/YOUR_USERNAME" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
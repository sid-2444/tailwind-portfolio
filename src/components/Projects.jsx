import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Explore World",
      desc: "Travel UI app",
      github: "#",
      live: "#",
    },
    {
      title: "Crypto Dashboard",
      desc: "Crypto analytics UI",
      github: "#",
      live: "#",
    },
    {
      title: "Expense Tracker",
      desc: "Track expenses easily",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center bg-[#f1efe9] dark:bg-[#0b0b0c] transition">

      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl 
            bg-white dark:bg-[#141414] 
            border border-gray-300 dark:border-[#2a2a2a] 
            transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {p.desc}
            </p>

            <div className="flex gap-3 mt-4 justify-center">
              <a href={p.live} target="_blank">
                <FiExternalLink />
              </a>
              <a href={p.github} target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
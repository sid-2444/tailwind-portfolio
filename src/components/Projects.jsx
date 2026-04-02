import { motion } from "framer-motion";

const projects = [
  {
    title: "Loan Approval Predictor",
    desc: "ML-based approval system with frontend UI",
  },
  {
    title: "Price Predictor",
    desc: "Predicts house prices using regression",
  },
  {
    title: "Personal Portfolio",
    desc: "Modern responsive portfolio website",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-2xl 
            bg-[#1a2233] 
            hover:bg-[#202a3f]
            text-white
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
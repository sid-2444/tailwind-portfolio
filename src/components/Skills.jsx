export default function Skills() {
  const skills = ["React", "Tailwind", "JavaScript", "Python", "ML"];

  return (
    <section className="py-20 text-center bg-[#e7e3da] dark:bg-[#111] transition">

      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full 
            bg-white dark:bg-[#1a1a1a] 
            border border-gray-300 dark:border-[#333]"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
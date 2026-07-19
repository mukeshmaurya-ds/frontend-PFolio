type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
      <h3 className="mb-6 text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-black"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
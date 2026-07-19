import Image from "next/image";
import Link from "next/link";

type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mb-6 text-slate-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            GitHub
          </Link>

          <Link
            href={project.liveUrl}
            target="_blank"
            className="rounded-lg border border-cyan-500 px-5 py-2 transition hover:bg-cyan-500 hover:text-black"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
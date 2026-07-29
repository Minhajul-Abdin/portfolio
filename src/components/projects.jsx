"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="bg-[#0d0d0d] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Recent Work
          </h2>

          <p className="mt-4 text-gray-400">Some of my recent work.</p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-orange-500/30"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-5 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition hover:bg-orange-600"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

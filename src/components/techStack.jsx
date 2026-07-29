import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaPython,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="bg-[#0e0e0e] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technological Foundation
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Modern technologies I use to design, build and deploy
            high-performance web applications.
          </p>
        </div>

        {/* Tech Pills */}

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                backdrop-blur-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-400/40
                hover:bg-orange-500/10
                hover:shadow-[0_0_25px_rgba(251,146,60,.15)]
              "
            >
              <span className="text-lg text-orange-400 transition-transform duration-300 group-hover:rotate-12">
                {tech.icon}
              </span>

              <span className="text-sm font-medium text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] px-6 py-20 md:px-10 lg:px-20 xl:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <p className="mb-10 text-sm font-semibold uppercase tracking-wider text-[#d4a64a]">
          About Me
        </p>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Im a{" "}
              <span className="text-[#d4a64a]">
                Front End Focused Full Stack Developer
              </span>{" "}
              creating modern web experiences with thoughtful design and
              user-focused solutions.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              I build responsive websites and web applications using modern
              technologies like React, Next.js, Tailwind CSS, Node.js and
              MongoDB. My goal is to create fast, scalable and visually engaging
              digital products.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <Link
              href={"#projects"}
              className="group inline-flex items-center gap-3 border border-[#d4a64a]/40 px-6 py-4 text-[#d4a64a] transition-all duration-300 hover:bg-[#d4a64a] hover:text-black"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

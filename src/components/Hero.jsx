import Image from "next/image";
import minhaj from "@/assets/minhaj.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative bg-gradient-to-b from-[#d9d6d2] via-[#cbc5be] to-[#bdb5ab]"
    >
      {/* Background Text */}
      <h1
        className="
          absolute
          left-1/2
          top-50
          md:top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[15vw]
          sm:text-[10vw]
          md:text-[14vw]
          lg:text-[12vw]
          font-black
          uppercase
          tracking-widest
          text-white/60
          select-none
          whitespace-nowrap
          z-0
        "
      >
        DEVELOPER
      </h1>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-end px-0 lg:pt-10">
        {/* Left Card */}
        <div className="order-2 mt-8 w-full max-w-sm lg:absolute lg:bottom-28 lg:left-8 lg:mt-0">
          <div className="rounded-2xl border border-white/30 bg-white/20 p-5 backdrop-blur-xl">
            <h3 className="text-3xl font-bold">Goal</h3>

            <p className="mt-2 text-sm leading-6 text-black/70">
              Eager to contribute to a collaborative team while building
              scalable, user-focused web applications with modern technologies.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="order-3 z-1 mt-6 w-full max-w-sm lg:absolute lg:bottom-36 lg:right-8 lg:mt-0">
          <div className="rounded-2xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-bold">10+</h3>

            <p className="font-semibold text-orange-500">Projects Built</p>

            <p className="mt-3 text-sm leading-6 text-black/70">
              Developing modern, responsive web applications while continuously
              improving my skills with real-world projects.
            </p>
            <div className="py-5">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/30 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="font-semibold">Download Resume</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-y-1">
                  <Download size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative order-1 h-[420px] w-full md:h-[620px] md:w-[440px] lg:order-4 lg:w-full">
          <div className="relative h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:[mask-image:none]">
            <Image
              src={minhaj}
              alt="Developer"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="pb-8 md:pb-0 order-5 z-1 mt-6 lg:absolute lg:bottom-10 lg:left-8 lg:mt-0">
          <div className="flex items-center gap-4 ">
            <Link
              href="https://github.com/Minhajul-Abdin"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-orange-500 hover:shadow-lg"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohammed-minhajul/"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-orange-500 hover:shadow-lg"
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              href="https://leetcode.com/u/MohammedMinhajul/"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-gray-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-orange-500 hover:shadow-lg"
            >
              <SiLeetcode size={20} />
            </Link>
          </div>
        </div>

        {/* Resume */}
      </div>
    </section>
  );
}

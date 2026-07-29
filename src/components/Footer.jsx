import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#d9d6d2] via-[#cbc5be] to-[#bdb5ab] text-black">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left */}
          <div className="max-w-sm text-center md:text-left">
            <h2 className="text-3xl font-bold">
              <span className="">{`{•}`}</span> Minhajul
            </h2>

            <p className="mt-5 text-base leading-7 text-black/75">
              Passionate Full Stack Developer creating modern, responsive, and
              user-focused web applications with clean code.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Minhajul-Abdin"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white hover:text-[#d4a64a]"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohammed-minhajul/"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white hover:text-[#d4a64a]"
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              href="https://leetcode.com/u/MohammedMinhajul/"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white hover:text-[#d4a64a]"
            >
              <SiLeetcode size={20} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-black/10" />

        {/* Copyright */}
        <p className="text-center text-sm text-black/70">
          © {new Date().getFullYear()} Minhajul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

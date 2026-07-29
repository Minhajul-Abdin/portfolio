"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#120B1D] via-[#13111F] to-[#0A1420] shadow-2xl">
        <div className="grid items-center gap-10 p-6 sm:p-8 md:grid-cols-2 md:gap-12 md:p-16">
          {/* Left Content */}
          <div className="relative z-10">
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Bringing your ideas to life.
              <br />
              <span className="text-[#d4a64a]">
                Lets turn your vision into reality.
              </span>
            </h2>

            <p className="mt-5 max-w-full text-base leading-7 text-gray-400 md:max-w-md">
              Have a project in mind or just want to chat? Lets connect and
              build something amazing together.
            </p>

            {/* Email */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Email Me
              </p>

              <a
                href="mailto:minhajul000abdin@gmail.com"
                className="flex w-full max-w-md items-center gap-3 rounded-xl border border-[#d4a64a]/30 bg-[#d4a64a]/10 px-4 py-4 text-sm font-bold text-[#d4a64a] transition-all duration-300 hover:border-[#d4a64a] hover:bg-[#d4a64a]/20 sm:text-base md:text-lg"
              >
                <Mail size={22} className="shrink-0" />

                <span className="break-all">minhajul000abdin@gmail.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/mohammed-minhajul/"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#d4a64a] sm:h-12 sm:w-12"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="https://github.com/Minhajul-Abdin"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#d4a64a] sm:h-12 sm:w-12"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://leetcode.com/u/MohammedMinhajul/"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#d4a64a] sm:h-12 sm:w-12"
              >
                <SiLeetcode size={20} />
              </Link>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -left-20 top-20 -z-10 h-56 w-56 rounded-full bg-purple-500/20 blur-[120px]" />
          </div>

          {/* Contact Form */}
          <div className="relative z-10 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-gray-300">Name</label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div className="flex justify-stretch sm:justify-end">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </section>
  );
}

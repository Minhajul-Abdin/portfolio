"use client";

import { Bars, Xmark } from "@gravity-ui/icons";
import { useState } from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  return (
    <header className=" fixed top-6 left-1/2 z-50 w-full  -translate-x-1/2  px-5">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2  font-semibold tracking-wide"
        >
          <span className="text-lg text-gray-400">{`{•}`}</span>

          <span className="text-xl font-bold uppercase tracking-widest ">
            <span className="text-orange-400"> Minhajul</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <div className="rounded-[10px] border border-white/10 bg-white/10 backdrop-blur-xl p-4 shadow-xl">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveMenu(item.name)}
                    className={`rounded-[10px] px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeMenu === item.name
                        ? "bg-gradient-to-r from-orange-500 to-amber-400"
                        : "hover:bg-gradient-to-r hover:from-orange-300 hover:to-amber-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/1 backdrop-blur-xl border border-black/10 text-black"
        >
          {menuOpen ? (
            <Xmark width={22} height={22} />
          ) : (
            <Bars width={22} height={22} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute right-5 top-20 md:hidden w-64 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveMenu(item.name);
                    setMenuOpen(false);
                  }}
                  className={`block rounded-xl px-4 py-3 transition text-white ${
                    activeMenu === item.name
                      ? "bg-gradient-to-r from-orange-500 to-amber-400"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="group flex  items-center gap-3 rounded-full bg-white px-5 py-2 shadow-lg transition-all duration-300 "
          >
            <span className="text-sm font-semibold text-gray-900">
              Get in Touch
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        {/* CTA */}
        <Link
          href="#contact"
          className="hidden group md:flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-lg transition-all duration-300 "
        >
          <span className="text-sm font-semibold text-gray-900">
            Get in Touch
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </Link>
      </nav>
    </header>
  );
}

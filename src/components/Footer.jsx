import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#d9d6d2] via-[#cbc5be] to-[#bdb5ab] text-black">
      <div className="mx-auto max-w-7xl px-6  py-6">
        {/* Copyright */}
        <p className="text-center text-sm text-black/70">
          © {new Date().getFullYear()} Minhajul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

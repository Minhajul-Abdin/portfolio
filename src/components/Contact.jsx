"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0A0A] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#120B1D] via-[#13111F] to-[#0A1420] shadow-2xl">
        <div className="grid items-center gap-12 p-8 md:grid-cols-2 md:p-16">
          {/* Left Content */}
          <div className="relative">
            <h2 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl">
              Bringing your ideas to life.
              <br />
              <span className="text-[#d4a64a]">
                Lets turn your vision into reality.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-gray-400">
              Have a project in mind or just want to chat? Lets connect and
              build something amazing together.
            </p>

            {/* Decorative Blur */}
            <div className="absolute -left-20 top-20 -z-10 h-56 w-56 rounded-full bg-purple-500/20 blur-[120px]" />
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-gray-300">Name</label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-400"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  Send
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

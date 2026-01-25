"use client";

import { motion } from "framer-motion";
import { taglineFont } from "./fonts";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="pt-0 md:pt-0">
        <section className="relative h-screen w-full bg-black overflow-hidden
                    flex flex-col items-center justify-center text-center">

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2
                          w-150 h-150
                          bg-orange-500/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center"
        >
          {/* Title */}
          <motion.h1
            variants={item}
            className="text-7xl md:text-8xl font-extrabold mb-4
                      uppercase tracking-[0.05em]
                      bg-linear-to-r from-red-500 via-yellow-500 to-orange-500
                      bg-clip-text text-transparent"
            style={{ textShadow: "0 0 30px rgba(255,120,50,0.35)" }}
          >
            Dylan Digital Studio
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={item}
            className={`${taglineFont.className}
                      text-4xl md:text-6xl font-extrabold
                      text-orange-400 mb-6`}
          >
            “Crafting Tomorrow&apos;s Visuals”
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-400 text-lg md:text-xl
                      max-w-xl mb-10 leading-relaxed tracking-wide"
          >
            Professional Branding & Digital Solutions
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={item}
            href="/services"
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4
                      bg-orange-600 text-white font-semibold
                      rounded-xl shadow-lg
                      hover:bg-orange-500
                      hover:shadow-orange-500/40
                      focus:outline-none focus:ring-2 focus:ring-orange-400
                      focus:ring-offset-2 focus:ring-offset-black
                      transition-all duration-300"
          >
            See Our Services
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

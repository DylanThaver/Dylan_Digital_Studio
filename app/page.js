"use client";

import { motion } from "framer-motion";
import { taglineFont } from "./fonts";

export default function Home() {
  return (
    <main className="pt-0 md:pt-0">
        <section className="relative h-screen w-full bg-black backdrop-blur-md flex flex-col items-center justify-center text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-7xl md:text-8xl font-extrabold mb-4
                    uppercase tracking-[0.05em]
                    bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500
                    bg-clip-text text-transparent"
          style={{textShadow: '0 0 30px rgba(255, 120, 50, 0.4)'}}
        >
          DYLAN DIGITAL STUDIO
        </motion.h1>

        {/* Animated Slogan */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className={`${taglineFont.className}
                    text-7xl font-extrabold md:text-6xl
                    text-orange-400
                    mb-8 pt-10`}
        >
          &quot;Crafting Tomorrow&apos;s Visuals&quot;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="
            text-gray-400
            text-lg md:text-xl
            max-w-xl
            mb-8
            leading-relaxed
            tracking-wide
          "
        >
          Professional Branding & Digital Solutions
        </motion.p>
        
        {/* Call-to-Action Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          href="/services"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-colors"
        >
          See Our Services
        </motion.a>
      </section>
    </main>
  );
}

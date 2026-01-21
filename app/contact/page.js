"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 md:px-12 pt-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Work Together
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-10 leading-relaxed">
          For fast responses and clear communication, I handle all enquiries
          directly via WhatsApp. This allows me to respond quickly, understand
          your needs better, and keep everything in one place.
        </p>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/27826868532" // ← replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-3 
                     px-8 py-4 rounded-full text-lg font-semibold
                     bg-green-500 hover:bg-green-400 text-black
                     transition-colors"
        >
          Start a WhatsApp Chat
        </motion.a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">
          <motion.a
            href="https://www.instagram.com/dylan_thaver1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-500 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/DylanDigitalStudio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dylan-thaver/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-8">
          Available for freelance and small business projects.
        </p>
      </motion.div>
    </main>
  );
}
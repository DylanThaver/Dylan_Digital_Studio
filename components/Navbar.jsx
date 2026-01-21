"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Me", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black border-t border-white/10"
            >
              <ul className="flex flex-col px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/80 hover:text-white text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-block text-center px-5 py-2 rounded-full
                            border border-white/20 text-white
                            hover:bg-white hover:text-black transition-all"
                >
                  Contact
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEFT: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/dylandigitalstudiologo.svg"
            alt="Dylan Digital Studio Logo"
            width={60}
            height={60}
            className="object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-semibold text-white tracking-wide">
            Dylan Digital Studio
          </span>
        </Link>

        {/* CENTER: Desktop Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>

              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* RIGHT: CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-white/20
                       text-sm text-white hover:bg-white hover:text-black
                       transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Me", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 1. Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* MAIN NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-100 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group z-110">
          <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 
                          group-hover:border-orange-500/50 transition-all duration-500 
                          bg-white/5 flex items-center justify-center">
            <Image
              src="/dylandigitalstudiologo.svg"
              alt="Dylan Digital Studio Logo"
              fill
              className="object-contain scale-125 transition-transform duration-500 group-hover:scale-[1.35]"
            />
          </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-[0.15em] uppercase text-white">
                Dylan Digital
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-orange-500 font-bold">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.path}
                    className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                      isActive ? "text-orange-500" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 
                      rounded-full border border-white/10 bg-white/5
                      text-[10px] uppercase tracking-[0.3em] font-bold text-white 
                      transition-all duration-500 overflow-hidden isolate
                      hover:border-orange-400 hover:shadow-amber-500"
          >
            {/* The Shine Effect (Animated Beam) */}
            <div 
              className="absolute inset-0 w-full h-full 
                        bg-linear-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" 
            />

            <span className="relative z-10">Start a Project</span>
          </Link>
        </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden flex flex-col items-end gap-1.5 z-110 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`block h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-white rounded-sm transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
          </button>
        </div>
      </nav>

{/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-black/70 backdrop-blur-3xl md:hidden z-90 flex flex-col justify-center px-12"
          >
            {/* Background Decorative Blur Orb */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

            <ul className="flex flex-col space-y-10 relative z-10">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-6"
                  >
                    {/* Numbering */}
                    <span className="text-[10px] tracking-[0.2em] text-orange-500 font-mono opacity-80">
                      0{i + 1}
                    </span>
                    
                    {/* Nav Name */}
                    <span className={`text-4xl tracking-tighter transition-all duration-300 ${
                      pathname === item.path 
                        ? "text-white font-bold" 
                        : "text-white/40 font-light group-hover:text-white group-hover:translate-x-2"
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Aesthetic CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-10 border-t border-white/10 relative z-10"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-5 text-orange-500 group"
              >
                <span className="text-sm uppercase tracking-[0.3em] font-bold">
                  Start a Project
                </span>
                <div className="w-12 h-12 rounded-full border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
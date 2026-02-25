"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PageHeader({ title, subtitle, description }) {
  return (
    <motion.header 
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-16 md:mb-20"
    >
      {/* The Main Title */}
      <motion.h1 
        variants={item}
        className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-left uppercase"
      >
        {title}<span className="text-orange-500">.</span>
      </motion.h1>
      
      {/* Optional Subtitle (e.g., "Pricing") */}
      {subtitle && (
        <motion.p 
          variants={item}
          className="text-orange-400 text-lg font-medium tracking-wide mb-2 capitalize"
        >
          {subtitle}
        </motion.p>
      )}

      {/* The Main Description */}
      <motion.p 
        variants={item}
        className="text-gray-400 text-lg max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
      
      <motion.div 
        variants={item}
        className="h-1 w-16 bg-orange-600 mt-8 rounded-full"
      />
    </motion.header>
  );
}
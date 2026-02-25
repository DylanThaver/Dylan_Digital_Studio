"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioItem({ item, index }) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/50 ${item.span}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* 1. Blurred Background */}
      <Image
        src={item.image}
        alt=""
        fill
        className="object-cover opacity-20 blur-xl scale-110"
      />

      {/* 2. The Actual Image */}
      <div className="relative w-full h-full p-8 flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={800}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
      </div>

      {/* 3. Sleek Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
        <h2 className="text-lg font-bold text-white tracking-wide">
          {item.title}
        </h2>
        <p className="text-s text-orange-500 tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
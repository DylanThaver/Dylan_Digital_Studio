"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ service, index, label, features = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Background Hover Glow */}
      <div className="absolute -inset-px bg-linear-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 flex flex-col h-full">
        {label && (
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">
            {label}
          </span>
        )}

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-orange-50 transition-colors">
          {service.name}
        </h3>

        {/* Feature List Section */}
        {features.length > 0 && (
          <ul className="space-y-4 mb-8 grow">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors leading-tight">
                <span className="text-orange-500 mt-0.5 bg-orange-500/10 p-1 rounded-md">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mt-auto pt-6 border-t border-white/10">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Investment</span>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase">Starting from</span>
            <p className="text-3xl font-black text-orange-500 tracking-tighter">
              {service.price.replace("From ", "")}
            </p>
          </div>
        </div>
      </div>
      
      {/* Corner Accent - Now with better visibility on hover */}
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-90">
        <div className="w-10 h-10 border-t-2 border-r-2 border-orange-500 rounded-tr-xl" />
      </div>
    </motion.div>
  );
}
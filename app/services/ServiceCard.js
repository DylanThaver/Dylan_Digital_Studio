// app/services/ServiceCard.js
"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ service, index, label }) {
  return (
    <motion.div
      className="
        bg-black border border-white/20
        p-6 rounded-2xl shadow-lg
        hover:scale-105 transition-transform duration-300
        hover:shadow-xl hover:shadow-amber-600
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      {label && (
        <span className="inline-block mb-3 text-xs uppercase tracking-wider text-white/70">
          {label}
        </span>
      )}

      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {service.name}
      </h2>

      <p className="text-lg md:text-xl font-bold">
        {service.price}
      </p>
    </motion.div>
  );
}
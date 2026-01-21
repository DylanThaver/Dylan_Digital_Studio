"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Brand Identity",
    description: "Logo design, color systems & visual identity.",
    span: "md:col-span-2",
    image: "/portfolio/Evolve_Autobody_Logo.png",
  },
  {
    title: "Social Media Graphics",
    description: "Eye-catching posts, banners & ads.",
    span: "md:row-span-2",
    image: "/portfolio/RXI_Art.png",
  },
  {
    title: "Business Cards",
    description: "Modern, print-ready card designs.",
    span: "",
    image: "/portfolio/EvolveAutobody.png",
  },
  /*{
    title: "Email Signatures",
    description: "Clean, professional branded signatures.",
    span: "",
    image: "/portfolio/email-signature.jpg",
  },*/
  {
    title: "Posters & Flyers",
    description: "High-impact promotional designs.",
    span: "md:col-span-2",
    image: "/portfolio/LandingPage.png",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 md:px-12 pt-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Portfolio
      </motion.h1>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex flex-col border border-white/20 overflow-hidden rounded-md shadow-lg ${item.span}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Title Section (Glassy) */}
            <div className="bg-black/50 backdrop-blur-md p-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                {item.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={600}     // adjust as needed
                height={200}    // adjust as needed
                className="object-contain w-full"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
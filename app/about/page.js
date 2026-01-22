"use client";

import { motion } from "framer-motion";
import { FiPenTool, FiCode } from "react-icons/fi";
import { SiCanva, SiInkscape, SiHtml5, SiCss3, SiAseprite, SiReact, SiNextdotjs } from "react-icons/si";
import ToolItem from "@/components/ToolItem"

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 md:px-12 pt-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-lg">
            Founder & Lead Designer at Dylan Digital Studio
          </p>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m Dylan Thaver, a creative designer and web & branding specialist,
            and the founder of Dylan Digital Studio. I specialize in building
            professional brand identities and digital solutions that help
            individuals and businesses present themselves with confidence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With a strong background in Information & Communications Technology,
            I combine technical expertise with design thinking to deliver
            visually compelling, functional, and user-focused results. Living
            with a disability has shaped my resilience, adaptability, and
            problem-solving mindset — qualities I bring into every project.
          </p>
        </motion.section>

        {/* Skills & Focus */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Brand identity & logo design</li>
              <li>• Web design & development (Next.js, Tailwind)</li>
              <li>• Digital & print marketing materials</li>
              <li>• UI/UX-focused design solutions</li>
            </ul>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">How I Work</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Detail-oriented & analytical approach</li>
              <li>• Clear communication and collaboration</li>
              <li>• Structured project workflow from brief to delivery</li>
              <li>• Adaptable, solution-driven mindset</li>
            </ul>
          </div>
        </motion.section>

        {/* Tools & Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
          <p className="text-gray-400 mb-8">
            Design and development tools I use to craft professional digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Design Tools */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FiPenTool className="text-orange-400 text-xl" />
                <h3 className="text-lg font-semibold">Design & Illustration</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ToolItem icon={<SiCanva />} label="Canva" />
                <ToolItem icon={<SiInkscape />} label="Inkscape" />
                <ToolItem icon={<SiAseprite />} label="Aseprite" />
              </div>
            </div>

            {/* Development Tools */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FiCode className="text-orange-400 text-xl" />
                <h3 className="text-lg font-semibold">Web Development</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ToolItem icon={<SiHtml5 />} label="HTML" />
                <ToolItem icon={<SiCss3 />} label="CSS" />
                <ToolItem icon={<SiReact />} label="React" />
                <ToolItem icon={<SiNextdotjs />} label="NEXT.js" />
              </div>
            </div>

          </div>
        </motion.section>



        {/* Education & Credentials */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I hold a Bachelor’s Degree in Information & Communications Technology
            from Durban University of Technology, where I developed strong
            foundations in software development, data analysis, and UI/UX
            design. I achieved academic distinctions in over 30% of my modules
            and contributed to multiple full-stack development projects.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My technical skill set spans web technologies, databases, analytics,
            and modern development workflows, allowing me to bridge the gap
            between design and implementation.
          </p>
        </motion.section>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/file/d/1TihMW3I-UfTeny1QWqUTLU5et2MJwSgb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold
                       bg-white text-black hover:bg-gray-200 transition-colors"
          >
            View My Resume (PDF)
          </a>
        </motion.div>

      </div>
    </main>
  );
}

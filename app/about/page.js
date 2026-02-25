import PageHeader from "@/components/PageHeader";
import FadeInSection from "@/components/About/FadeInSection";
import ToolItem from "@/components/ToolItem";
import { FiPenTool, FiCode } from "react-icons/fi";
import { SiCanva, SiInkscape, SiHtml5, SiCss3, SiAseprite, SiReact, SiNextdotjs, SiPython } from "react-icons/si";

export default function About() {
  const glassStyle = "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl";

  return (
    <main className="min-h-screen text-white px-6 md:px-12 pt-28 pb-20">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="About Me"
          subtitle="Founder & Creative Digital Specialist"
        />

        {/* 1. Who I Am Section */}
        <FadeInSection>
          <section className={glassStyle}>
            <h2 className="text-2xl font-bold mb-6 text-white">Who I Am</h2>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                I’m Dylan Thaver, a creative designer and web & branding specialist. 
                I specialize in building professional brand identities that help 
                businesses present themselves with absolute confidence.
              </p>
              <p>
                With a strong background in Information & Communications Technology, I combine technical expertise with design thinking to deliver visually compelling, functional, and user-focused results. 
                Living with a disability has shaped my resilience, adaptability, and problem-solving mindset — I don&apos;t just design, I adapt and overcome.
              </p>
            </div>
          </section>
        </FadeInSection>

        {/* 2. Skills & Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FadeInSection delay={0.1} x={-20}>
            <div className={`${glassStyle} mb-0 h-full hover:bg-white/10 transition-colors`}>
              <h3 className="text-xl font-bold mb-4 text-orange-400">What I Do</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Strategic Brand Identity & Logo Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  High-Performance Web Dev (Next.js & React)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  UI/UX Prototyping & Interaction Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  SEO & Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Modern Digital & Print Marketing Assets
                </li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1} x={20}>
            <div className={`${glassStyle} mb-0 h-full hover:bg-white/10 transition-colors`}>
              <h3 className="text-xl font-bold mb-4 text-orange-400">How I Work</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Deep Business & Technical Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Agile Development & Iterative Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Clear, Direct Collaboration & Reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Adaptive Problem Solving & Logic
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> 
                  Post-Launch Support & Technical Troubleshooting
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>

        {/* 3. Tech Stack Section */}
        <FadeInSection delay={0.2}>
          <section className={glassStyle}>
            <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
            <p className="text-gray-400 mb-10">The engine behind the visuals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FiPenTool className="text-orange-500 text-2xl" />
                  <h3 className="text-lg font-semibold uppercase tracking-widest">Design</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <ToolItem icon={<SiCanva />} label="Canva" />
                  <ToolItem icon={<SiInkscape />} label="Inkscape" />
                  <ToolItem icon={<SiAseprite />} label="Aseprite" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FiCode className="text-orange-500 text-2xl" />
                  <h3 className="text-lg font-semibold uppercase tracking-widest">Dev</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <ToolItem icon={<SiHtml5 />} label="HTML" />
                  <ToolItem icon={<SiCss3 />} label="CSS" />
                  <ToolItem icon={<SiReact />} label="React" />
                  <ToolItem icon={<SiNextdotjs />} label="Next" />
                  <ToolItem icon={<SiPython />} label="Python" />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 4. Background & Journey */}
        <FadeInSection delay={0.3}>
          <section className={glassStyle}>
            <div className="flex items-center gap-3 mb-10">
              <h2 className="text-3xl font-bold">Background</h2>
              <div className="h-px grow bg-white/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
              <div className="space-y-8">
                <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Academic Excellence</h3>
                <div className="relative pl-6 border-l border-white/10 space-y-4">
                  <div className="absolute top-0 -left-px h-6 w-0.5 bg-orange-500" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Bachelors in ICT</h4>
                    <p className="text-gray-400 text-sm">Durban University of Technology • Jan 2025</p>
                    
                    <div className="mt-4 space-y-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Specialized in Software Development, maintaining a high academic standards with multiple distinctions across core technical modules.
                      </p>
                      
                      <ul className="grid grid-cols-1 gap-2 text-[13px] text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="text-orange-500">•</span> 
                          Advanced Development in C#, Python, and .NET Framework
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orange-500">•</span> 
                          Relational Database Design & SQL Server Management
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orange-500">•</span> 
                          Information Systems Analysis and SDLC Methodologies
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orange-500">•</span> 
                          Full-Stack Project Development & Technical Documentation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Replaced the 30% with a "Specialization" badge */}
                <div className="flex gap-4">
                  <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-lg font-bold text-orange-500 leading-tight">Software Development</span>
                    <span className="text-[10px] uppercase tracking-tighter text-gray-400">Major Stream</span>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-orange-500">2021</span>
                    <span className="text-[10px] uppercase tracking-tighter text-gray-400">NSC Bachelors Pass</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Professional Path</h3>
                <div className="relative pl-6 border-l border-white/10 space-y-4">
                  <div className="absolute top-0 -left-px h-6 w-0.5 bg-orange-500" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Founder & Lead Designer</h4>
                    <p className="text-gray-400 text-sm">Dylan Digital Studio • 2026 – Present</p>
                    <ul className="mt-3 space-y-3 text-gray-300 text-sm leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-orange-500">•</span>
                        <p>Launching SEO-optimized, mobile-first websites using Next.js and Tailwind CSS.</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500">•</span>
                        <p>Bridging UI/UX prototyping in Figma with high-performance, accessible front-end code.</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500">•</span>
                        <p>Managing end-to-end client project lifecycles, from brand discovery to technical deployment.</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500">•</span>
                        <p>Technical troubleshooting and performance optimization to ensure elite Core Web Vitals.</p>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-orange-500">•</span>
                        <p>Developing custom brand identities including logo design, business cards, and digital assets.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["SDLC", "Agile", "SQL Server", "Problem Solving", "UI/UX Design", "SEO Strategy"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 5. Resume Button */}
        <FadeInSection delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://drive.google.com/file/d/1TihMW3I-UfTeny1QWqUTLU5et2MJwSgb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-4 
                        bg-white/5 border border-orange-500/40 text-white 
                        rounded-full overflow-hidden transition-all duration-500
                        hover:border-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]"
            >
              {/* The Slide-up Background */}
              <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 
                              translate-y-[101%] group-hover:translate-y-0 
                              transition-transform duration-500 ease-out" />
              
              {/* The Content */}
              <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                Download CV
                {/* Small Download Arrow Icon */}
                <svg 
                  className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
import Link from "next/link";
import { AdleryPro } from "./fonts";
import HeroAnimation from "@/components/Home/HeroAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* --- HERO-ONLY READABILITY OVERLAY --- */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* --- CONTENT LAYER --- */}
      <section className="relative z-10 h-screen w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
        
        {/* We wrap only the parts that need Framer Motion */}
        <HeroAnimation>
          <div className="flex flex-col items-start text-left">
            {/* Title - Optimized Gradient */}
            <h1
              className="font-sans text-5xl md:text-7xl font-extrabold mb-2 uppercase tracking-wide bg-linear-to-r from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 40px rgba(255,120,50,0.15)" }}
            >
              Dylan Digital Studio
            </h1>

            {/* Tagline */}
            <h2 className={`${AdleryPro.className} text-3xl md:text-6xl text-orange-400 mb-6`}>
              “Crafting Tomorrow&apos;s Visuals”
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed tracking-wide drop-shadow-md">
              Professional Branding & Digital Solutions for the modern era. 
              We bridge the gap between imagination and execution.
            </p>

            {/* CTA */}
            <div>
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-5 px-10 py-3 
                          bg-white/5 border border-white/10 text-white 
                          rounded-full overflow-hidden transition-all duration-500
                          hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]
                          isolate"
              >
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-400 
                                -translate-x-[105%] -skew-x-12 
                                group-hover:translate-x-0 transition-transform 
                                duration-500 ease-out -z-10" />

                <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em]">
                  See Our Services
                </span>
                
                <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                                group-hover:bg-white group-hover:text-orange-600 transition-all duration-500">
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </div>
              </Link>
            </div>

            {/* THE MASCOT UNIT: Image + Reactive Shadow */}
            <div className="absolute z-10 
                            -right-4 -bottom-16 block 
                            sm:-right-24 md:-right-32 sm:-bottom-30
                            pointer-events-none group">
              
              <div className="relative flex flex-col items-center -scale-x-100">
                {/* The Mascot */}
                <Image 
                  src="/Mascot.png" 
                  alt="Mascot"
                  width={300} 
                  height={300}
                  quality={100}
                  priority
                  className="animate-float -scale-x-100 drop-shadow-2xl 
                            w-30 sm:w-55 md:w-75 h-auto z-10" 
                />

                {/* The Reactive Shadow */}
                <div className="animate-shadow-pulse bg-black blur-md rounded-[100%] 
                                w-15 sm:w-27.5 md:w-37.5 h-2.5 sm:h-3.75 
                                -mt-4 sm:-mt-6 translate-x-[-50]" />
              </div>
            </div>

          </div>
        </HeroAnimation>
      </section>
    </main>
  );
}
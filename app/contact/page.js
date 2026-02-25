import PageHeader from "@/components/PageHeader";
import FadeInSection from "@/components/About/FadeInSection";
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const glassStyle = "bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl";

  return (
    <main className="min-h-screen text-white px-6 md:px-12 pt-28 max-w-7xl mx-auto flex flex-col items-start">
      
      {/* Page Header */}
      <div className="w-full">
        <PageHeader
          title="Let’s Work Together"
          subtitle="Direct Communication • Rapid Turnaround • Digital Excellence"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        
        {/* Left Side: Context & Socials */}
        <div className="space-y-8">
          <FadeInSection delay={0.1} x={-20}>
            <div className={glassStyle}>
              <h2 className="text-2xl font-bold mb-4 text-white">Why WhatsApp?</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                For fast responses and clear communication, I handle all enquiries 
                directly via WhatsApp. This allows me to respond quickly, share 
                concepts instantly, and keep our project momentum high.
              </p>
              
              <div className="flex gap-6 mt-10">
                {[
                  { icon: <FaInstagram />, href: "https://www.instagram.com/dylan_thaver1/", color: "hover:text-pink-500" },
                  { icon: <FaFacebook />, href: "https://www.facebook.com/DylanDigitalStudio", color: "hover:text-blue-600" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dylan-thaver/", color: "hover:text-blue-500" },
                  { icon: <FaEnvelope />, href: "mailto:dylanthaver100@gmail.com", color: "hover:text-orange-500" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-sm text-gray-500 pl-4 border-l border-orange-500/50">
              Available for freelance branding and high-performance web projects.<br />
              Based in South Africa, working globally.
            </p>
          </FadeInSection>
        </div>

{/* Right Side: The "Action" Card */}
        <FadeInSection delay={0.3} x={20}>
          <div className="relative group h-full">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 pt-8 px-8 pb-8 rounded-3xl h-full flex flex-col justify-between">
              
              {/* Horizontal Header Section */}
              <div className="flex items-center gap-5 mb-7 text-left">
                <div className="shrink-0 p-3.5 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                  <FaWhatsapp className="text-3xl text-orange-500" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold leading-tight">Ready to start?</h3>
                  <p className="text-gray-400 text-l mt-1 max-w-md">
                    Connect directly with our lead developer to discuss your project requirements and technical specifications.
                  </p>
                </div>
              </div>

              {/* Action Section */}
              <div className="space-y-6">
                <a
                  href="https://wa.me/27826868532?text=Hi%20Dylan%20Digital%20Studio!%20I%27ve%20got%20a%20project%20in%20mind.%20Can%20we%20discuss%20some%20digital%20solutions%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full py-5 rounded-full 
                            border border-white/10 bg-white/5 
                            text-white font-bold text-sm uppercase tracking-[0.2em]
                            overflow-hidden transition-all duration-500 flex items-center justify-center
                            hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
                >
                  {/* The "Green Glow" fill */}
                  <div className="absolute inset-0 bg-linear-to-r from-[#128C7E] to-[#25D366] 
                                  translate-y-[101%] group-hover:translate-y-0 
                                  transition-transform duration-500 ease-out" />

                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform duration-500" />
                    <span>Send a Message</span>
                  </div>
                </a>
                
                {/* Minimal Status Indicator */}
                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    Avg Response: &lt; 2 Hours
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </FadeInSection>

      </div>
    </main>
  );
}
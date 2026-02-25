// NO "use client" here - Let's keep it fast and SEO-friendly
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/Services/ServiceCard";
import FadeInSection from "@/components/About/FadeInSection";

const designServices = [
  { 
    name: "Professional Logo Designs", 
    price: "From R600",
    features: ["3 Unique Concepts", "High-Res Vector Files", "Full Brand Ownership"] 
  },
  { 
    name: "Professional Business Cards", 
    price: "From R350",
    features: ["Double-Sided Design", "Print-Ready PDF", "Modern Typography"] 
  },
  { 
    name: "Branded Email Signature", 
    price: "From R250", 
    features: ["Clickable Social Links", "Corporate Layout", "Mobile Optimized"]
  },
  { 
    name: "Poster & Social Media Graphics", 
    price: "From R400",
    features: ["Platform Optimized", "High-Impact Visuals", "Custom Branding"]
  },
  { 
    name: "Electronic Invitations", 
    price: "From R200",
    features: ["Interactive PDF/Image", "Themed Aesthetic", "Fast Turnaround"]
  },
  { 
    name: "Formal Price List", 
    price: "From R350",
    features: ["Clean Data Layout", "Studio Aesthetic", "Editable Formats"]
  },
  { 
    name: "Professional Letterhead", 
    price: "From R300",
    features: ["Consistent Branding", "MS Word Compatible", "Official Layout"]
  },
];

const webServices = [
  { 
    name: "Tier 1: The Essentials", 
    price: "From R1200",
    features: [
      "Up to 3 Pages - R500 per page",
      "Custom HTML5 & Responsive CSS",
      "Single or Multi-Page Options",
      "Basic SEO Meta Tags",
      "Integrated Contact Solutions",
      "Mobile-First Architecture"
    ]
  },
  { 
    name: "Tier 2: High Performance", 
    price: "From R9500",
    features: [
      "Up to 5 pages - R1200 per page",
      "Server Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Advanced Image Optimization",
      "Super Fast Load Times & Elite SEO",
      "Custom API Integrations"
    ]
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full text-white pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader
          title="Services"
          subtitle={
            <>
              Transparent pricing for premium digital solutions. <br /> 
              From visual identity to high-performance web development.
            </>
          }
        />
      </div>

      {/* Design Services Section */}
      <section className="mb-24">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white/90">
              Design Suite
            </h2>
            <div className="h-px grow bg-linear-to-r from-orange-500/50 to-transparent" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              label="Visual Design"
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* Web Services Section */}
      <section>
        <FadeInSection delay={0.2}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white/90">
              Web Development
            </h2>
            <div className="h-px grow bg-linear-to-r from-orange-500/50 to-transparent" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-none">
          {webServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              label="Development"
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FadeInSection delay={0.4}>
        <div className="mt-24 p-12 rounded-3xl bg-white/5 border border-white/10 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4">Need a custom package?</h3>
          <p className="text-gray-400 mb-8">If your project doesn&apos;t fit these tiers, let&apos;s discuss a tailored solution.</p>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-orange-600 hover:bg-orange-500 rounded-full font-bold transition-all uppercase tracking-widest text-sm"
          >
            Get a Quote
          </a>
        </div>
      </FadeInSection>
    </main>
  );
}
// app/services/page.js

import ServiceCard from "./ServiceCard";

const designServices = [
  { name: "Professional Logo Designs", price: "From R600" },
  { name: "Professional Business Cards", price: "From R350" },
  { name: "Branded Email Signature", price: "From R250" },
  { name: "Poster & Social Media Graphics", price: "From R400" },
  { name: "Electronic Invitations", price: "From R200" },
  { name: "Formal Price List", price: "From R350" },
  { name: "Professional Letterhead", price: "From R300" },
];

const webServices = [
  { name: "Single Page Landing Site", price: "From R1200" },
  { name: "Multi-Page Business Website", price: "From R3500" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white py-20 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our Services
      </h1>

      {/*Design Services */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white/90">
          Design Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              label="Design Service"
            />
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-white/10 my-20" />

      {/*Web Services */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white/90">
          Web Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {webServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              label="Web Service"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
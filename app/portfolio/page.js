import PortfolioItem from "@/components/PortfolioItem";
import PageHeader from "@/components/PageHeader";

const items = [
  {
    title: "Brand Identity",
    description: "Logo design & visual identity.",
    span: "md:col-span-2 md:row-span-1",
    image: "/portfolio/Evolve_Autobody_Logo.webp",
  },
  {
    title: "Social Media Graphics",
    description: "Eye-catching posts & ads.",
    span: "md:col-span-1 md:row-span-2",
    image: "/portfolio/RXI_Art.webp",
  },
  {
    title: "Business Cards",
    description: "Modern print-ready designs.",
    span: "md:col-span-1 md:row-span-1",
    image: "/portfolio/EvolveAutobody.webp",
  },
  {
    title: "Basic Website",
    description: "High-impact promotions.",
    span: "md:col-span-2 md:row-span-1",
    image: "/portfolio/LandingPage.webp",
  },
  {
    title: "Formal Price List",
    description: "Categorzed Price List so your clients know what they're getting",
    span: "md:col-span-2 md:row-span-1",
    image: "/portfolio/WebPriceList.webp",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen text-white px-6 md:px-12 pt-24 pb-20">
      <div className="max-w-7xl mx-auto mb-16">
        <PageHeader
          title="Portfolio"
          subtitle="A collection of digital excellence and visual storytelling."
        />
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {items.map((item, index) => (
          <PortfolioItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </main>
  );
}
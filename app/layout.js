import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL('https://www.dylandigitalstudio.co.za'),
  title: "Dylan Digital Studio",
  description: "Professional Branding & Digital Solutions",
  keywords: "branding, digital solutions, web design, visual design, business cards, logos, letterheads, invitations, portfolio, next.js developer, react developer, ui/ux design, website design south africa, professional logo design, custom web development, seo optimization, startup branding, e-commerce websites, responsive web design, dylan digital studio, kwazulu-natal web design",
  authors: [{ name: "Dylan Thaver" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/ico" },
    ],
    // This tells Apple devices to also use your png
    apple: [
      { url: "/favicon.ico", type: "image/ico" },
    ],
  },
  openGraph: {
    title: "Dylan Digital Studio",
    description: "Professional Branding & Digital Solutions",
    url: "https://www.dylandigitalstudio.co.za",
    siteName: "Dylan Digital Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dylan Digital Studio" }],
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
  card: "summary_large_image",
  title: "Dylan Digital Studio",
  description: "Professional Branding & Digital Solutions",
  images: ["/og-image.png"],
},

  verification: { google: "njBvtSgGXEagi0DQrtfzfQVOSCgMTxzX-NDWCe7Ufv8" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-orange-500">
        
    {/* GLOBAL BACKGROUND LAYER */}
    {/* We use a linear gradient from a deep navy to a very dark burgundy */}
    <div className="fixed inset-0 z-0 pointer-events-none 
                    bg-linear-to-br from-[#012ce7] via-black to-[#ed0202]" />

    {/* OPTIONAL: One slightly brighter spot so it's not 'flat' */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] 
                  rounded-full bg-orange-500 blur-[120px] animate-pulse" 
        style={{ animationDuration: '10s' }} // This forces the pulse to be slow
      />
    </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            {children}
          </main>
        </div>

        <footer className="w-full py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Dylan Digital Studio
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Crafting Tomorrow&apos;s Visuals
              </p>
            </div>

            {/* Copyright & Quick Links */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="/services" className="hover:text-orange-500 transition-colors">Services</a>
                <a href="/about" className="hover:text-orange-500 transition-colors">About</a>
                <a href="mailto:dylanthaver100@gmail.com" className="hover:text-orange-500 transition-colors">Contact</a>
              </div>
              <p className="text-xs text-orange-500">
                © 2026 Dylan Digital Studio. All rights reserved.
              </p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
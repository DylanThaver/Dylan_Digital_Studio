import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dylan Digital Studio",
  description: "Professional Branding & Digital Solutions",
  keywords: "branding, digital solutions, web design, visual design, business cards, logos, letterheads, invitations, portfolio",
  authors: [{ name: "Dylan Thaver" }],

  //Favicon (optional but explicit)
  icons: {
    icon: "/favicon.png",
  },

  //Open Graph (social sharing)
  openGraph: {
    title: "Dylan Digital Studio",
    description: "Professional Branding & Digital Solutions",
    url: "https://www.dylandigitalstudio.co.za",
    siteName: "Dylan Digital Studio",
    images: [
      {
        url: "/Logo.png",
        width: 500,
        height: 500,
        alt: "Dylan Digital Studio Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  //Google verification (App Router way)
  verification: {
    google: "njBvtSgGXEagi0DQrtfzfQVOSCgMTxzX-NDWCe7Ufv8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
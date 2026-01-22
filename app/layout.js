import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Dylan Digital Studio",
  description: "Professional Branding & Digital Solutions",
  keywords: "branding, digital solutions, web design, visual design, business cards, logos, letterheads, invitations",
  authors: [{ name: "Dylan Thaver" }],
  // Open Graph (social sharing)
  openGraph: {
    title: "Dylan Digital Studio",
    description: "Professional Branding & Digital Solutions",
    url: "https://www.dylandigitalstudio.co.za",
    siteName: "Dylan Digital Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dylan Digital Studio Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/*Google Search Console Verification */}
        <meta name="google-site-verification" content="njBvtSgGXEagi0DQrtfzfQVOSCgMTxzX-NDWCe7Ufv8" />
      </Head>
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="pt-0"> {/* pt-24 prevents content from hiding behind navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}
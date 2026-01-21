import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="pt-0"> {/* pt-24 prevents content from hiding behind navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}
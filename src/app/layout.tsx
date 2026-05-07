import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothTransitions from "@/components/layout/SmoothTransitions";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import CustomCursor from "@/components/layout/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Media Lift Advisor | Digital Marketing Agency",
  description: "Empowering Brands with Digital Excellence. SEO, Social Media, and Digital Transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-gray-900 antialiased`}>
        <CustomCursor />
        <Navbar />
        <main>
          <SmoothTransitions>{children}</SmoothTransitions>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

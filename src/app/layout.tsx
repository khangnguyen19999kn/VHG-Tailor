import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Logo from "../../public/logo.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "VHG Tailor",
  keywords: "VHG Tailor, VHG, Tailor, VHG, VHG, Tailor, VHG, Tailor, vest, suit",
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-ivorywhite max-w-screen overflow-x-hidden box-border",
          inter.className
        )}
      >
        <Header />
        <div className="min-h-screen bg-ivorywhite">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

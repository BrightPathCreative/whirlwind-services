import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { site } from "@/lib/site-data";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f7f7f5"
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Experienced Executive Support for Melbourne Businesses | Whirlwind Services",
    template: "%s | Whirlwind Services"
  },
  description:
    "Senior administrative and executive support services across Melbourne CBD and Bayside. On-site or remote. 45 years of experience.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={quicksand.variable}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <SchemaMarkup />
      </body>
    </html>
  );
}

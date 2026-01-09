import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Softman - Engineering Excellence & Digital Solutions",
  description: "Empower your business with high-performance software engineering, scalable digital solutions, and strategic technology consulting.",
  keywords: ["Software Development", "Digital Solutions", "Software Engineering", "Tech Consulting", "Scalable Apps", "Enterprise Software"],
  authors: [{ name: "Softman" }],
  openGraph: {
    title: "Softman - Engineering Excellence & Digital Solutions",
    description: "Empower your business with high-performance software engineering and scalable digital solutions.",
    type: "website",
  },
};


import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

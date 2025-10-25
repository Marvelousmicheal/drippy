import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const akira = localFont({
  src: "./fonts/Akira Expanded Demo.otf",
  variable: "--font-akira",
});

export const metadata: Metadata = {
  title: "Driply - The Future of Fashion Commerce",
  description: "Driply is a social commerce platform that connects creators and vendors. Sell, shop, and create all in one place.",
  keywords: "fashion, social commerce, creators, vendors, shopping, selling",
  authors: [{ name: "Driply Team" }],
  openGraph: {
    title: "Driply - The Future of Fashion Commerce",
    description: "Driply is a social commerce platform that connects creators and vendors. Sell, shop, and create all in one place.",
    images: [
      {
        url: "/Hero1.png",
        width: 1200,
        height: 630,
        alt: "Driply - The Future of Fashion Commerce",
      },
    ],
    url: "https://driply.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driply - The Future of Fashion Commerce",
    description: "Driply is a social commerce platform that connects creators and vendors. Sell, shop, and create all in one place.",
    images: ["/Hero1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${akira.variable} antialiased`}
      >
        <main>
          
     
          {children}
       
        </main>
      </body>
    </html>
  );
}

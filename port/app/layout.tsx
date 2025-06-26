import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AnimatedCursor from "./components/AnimatedCursor";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SkipToContent from "./components/SkipToContent";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Your Name | Modern Portfolio",
  description: "A modern, interactive portfolio built with Next.js, React, and Tailwind CSS. Showcasing projects, skills, and more.",
  openGraph: {
    title: "Your Name | Modern Portfolio",
    description: "A modern, interactive portfolio built with Next.js, React, and Tailwind CSS. Showcasing projects, skills, and more.",
    url: "https://yourdomain.com/",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Modern Portfolio",
    description: "A modern, interactive portfolio built with Next.js, React, and Tailwind CSS. Showcasing projects, skills, and more.",
    images: ["/globe.svg"],
    creator: "@yourtwitter",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (replace G-XXXXXXXXXX with your ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageSwitcher>
          <SkipToContent />
          <AnimatedCursor />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <BackToTop />
          <ThemeSwitcher />
        </LanguageSwitcher>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Architects_Daughter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocConsoleBanner from "@/components/ui/SocConsoleBanner";
import { SITE_CONFIG } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-architects-daughter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Analista SOC, Agentes IA & Psicología UX`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.tagline,
  keywords: [...SITE_CONFIG.seoKeywords],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Analista de Ciberseguridad (SOC) & IA`,
    description:
      "Conecto la Psicología Organizacional con Operaciones SOC, Arquitectura Zero Trust, Agentes Autónomos de IA y Diseño UX/UI. 2º Puesto Hackathon ITBA Argentina.",
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.shortName} · Portafolio Profesional`,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Analista SOC & Desarrollador de IA`,
    description: SITE_CONFIG.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F5F7] text-[#1E242B] bg-studio-grid selection:bg-[#F6CE3E] selection:text-[#1E242B]">
        <Navbar />
        <div className="flex-1 relative z-10">{children}</div>
        <Footer />
        <SocConsoleBanner />
        <Analytics />
      </body>
    </html>
  );
}

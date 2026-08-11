import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo Meza | Analista SOC & IA",
  description: "Portafolio de Paulo Cesar Meza Rojas. Psicología Organizacional especializada en Operaciones SOC, Threat Hunting y Agentes de IA.",
  openGraph: {
    title: "Paulo Meza | Analista de Ciberseguridad (SOC) & Desarrollador de IA",
    description: "Conecto el comportamiento humano con defensas digitales infranqueables y sistemas inteligentes. Portafolio de proyectos, Hackathons y certificaciones.",
    url: "https://tech-sec-console.vercel.app",
    siteName: "Paulo Meza Portfolio",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

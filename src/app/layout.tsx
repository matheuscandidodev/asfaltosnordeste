import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Asfaltos Nordeste | Qualidade que sustenta o progresso",
  description:
    "Soluções asfálticas de alto desempenho para grandes construtoras e órgãos públicos. CAP, emulsões asfálticas, DOPE e logística própria no Norte e Nordeste.",
  keywords: [
    "asfaltos nordeste",
    "emulsões asfálticas",
    "cimento asfáltico de petróleo",
    "cap 50 70",
    "dope adesividade",
    "pavimentação",
    "asfalto",
    "maracanaú",
    "nordeste",
  ],
  openGraph: {
    title: "Asfaltos Nordeste",
    description:
      "Qualidade que sustenta o progresso. Soluções asfálticas de alto desempenho para obras que exigem resultado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
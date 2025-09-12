import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getAssetPath } from "../lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITNESS EXCLUSIVE",
  description: "A melhor academia da região com equipamentos modernos, professores qualificados e planos flexíveis. Transforme seu corpo na Fitness Exclusive!",
  icons: {
    icon: [
      { url: getAssetPath('/images/icones/icone3.svg'), type: 'image/svg+xml' },
      { url: getAssetPath('/images/icones/icone3.ico'), sizes: '32x32', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getAssetPath } from "../lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${montserrat.variable} antialiased font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}

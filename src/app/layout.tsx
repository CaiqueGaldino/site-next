import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { getAssetPath } from "../lib/utils";

const lexend = Lexend({
  variable: "--font-lexend",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8DKXL7X');`,
          }}
        />
      </head>
      <body
        className={`${lexend.variable} antialiased font-lexend bg-black`}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8DKXL7X"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

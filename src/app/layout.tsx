import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Fitness Exclusive | A maior academia do interior do Nordeste",
    template: "%s | Fitness Exclusive",
  },
  description:
    "A maior rede de franquias de academias do interior do Nordeste. Estrutura completa, equipamentos modernos, professores qualificados e planos flexíveis. Matricule-se já!",
  metadataBase: new URL("https://fitnessexclusive.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fitnessexclusive.com.br",
    siteName: "Fitness Exclusive",
    title: "Fitness Exclusive | A maior academia do interior do Nordeste",
    description:
      "A maior rede de franquias de academias do interior do Nordeste. Estrutura completa e planos flexíveis. Matricule-se já!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Exclusive — Academia completa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Exclusive | A maior academia do Nordeste",
    description:
      "A maior rede de franquias de academias do interior do Nordeste. Estrutura completa e tecnologia.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: '/images/icones/icone3.ico',
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

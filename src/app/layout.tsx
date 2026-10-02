import type { Metadata } from "next";
import { Inter, Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://editions.atlashub.si";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AtlasHub Editions — Conhecimento para Empresas Reais",
    template: "%s · AtlasHub Editions",
  },
  description:
    "Livros, research, frameworks e inteligência aplicada para transformar tecnologia em resultados.",
  applicationName: "AtlasHub Editions",
  authors: [{ name: "AtlasHub" }],
  creator: "AtlasHub",
  publisher: "AtlasHub",
  keywords: [
    "AtlasHub",
    "AtlasHub Editions",
    "Empresa Aumentada",
    "inteligência artificial",
    "automação",
    "frameworks empresariais",
    "research",
    "executive papers",
    "field guides",
    "transformação empresarial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AtlasHub Editions — Conhecimento para Empresas Reais",
    description:
      "Livros, research, frameworks e inteligência aplicada para transformar tecnologia em resultados.",
    url: siteUrl,
    siteName: "AtlasHub Editions",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtlasHub Editions — Conhecimento para Empresas Reais",
    description:
      "Livros, research, frameworks e inteligência aplicada para transformar tecnologia em resultados.",
  },
  icons: {
    icon: "/assets/atlas/atlashub-logo.png",
    apple: "/assets/atlas/atlashub-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

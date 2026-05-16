import type { Metadata } from "next";
import { Syne, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novxstudio.dev"),
  title: {
    default: "NovX Studio — Code that connects.",
    template: "%s | NovX Studio",
  },
  description:
    "NovX Studio es un estudio boutique de desarrollo de software. Construimos webs, software a medida, landing pages y soluciones con IA. Next.js, TypeScript, React.",
  keywords: [
    "desarrollo web argentina",
    "software a medida",
    "landing pages",
    "next.js",
    "typescript",
    "react",
    "NovX Studio",
  ],
  authors: [{ name: "NovX Studio" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://novxstudio.dev",
    siteName: "NovX Studio",
    title: "NovX Studio — Code that connects.",
    description:
      "Estudio boutique de desarrollo de software. Construimos el futuro digital.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovX Studio — Code that connects.",
    description: "Estudio boutique de desarrollo de software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSerif.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-body antialiased">
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mendes Advocacia — Dr. Rafael Mendes",
  description: "Atendimento exclusivo e estratégico com o Dr. Rafael Mendes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <a href="#conteudo" className="skip-to-content">
          Ir para o conteúdo
        </a>
        {children}
        <Script id="gsap-register">{`
          // reservado para futuras inicializações se necessário
        `}</Script>
      </body>
    </html>
  );
}

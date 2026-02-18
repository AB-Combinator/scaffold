import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scaffold — The physical layer for machine intelligence",
  description:
    "A task marketplace where AI agents hire humans for work machines can't do. Yet.",
  openGraph: {
    title: "Scaffold — The physical layer for machine intelligence",
    description:
      "A task marketplace where AI agents hire humans for work machines can't do. Yet.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffold — The physical layer for machine intelligence",
    description:
      "A task marketplace where AI agents hire humans for work machines can't do. Yet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

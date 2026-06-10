import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WC2026 Analytics Dashboard",
  description: "World Cup 2026 analytics, match predictions, and tournament simulator. Demo data - not affiliated with FIFA.",
  keywords: ["World Cup 2026", "FIFA", "soccer", "football", "analytics", "predictions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navigation />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <footer className="hidden md:block border-t border-white/10 py-4 text-center text-xs text-gray-600">
          WC2026 Analytics Dashboard · Demo Data · Not affiliated with FIFA · Statistical estimates only
        </footer>
      </body>
    </html>
  );
}

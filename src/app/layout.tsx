import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VARIATIC — One Token. Infinite Narratives.",
  description:
    "VARIATIC is the adaptive meme token: one contract, many faces, infinite narratives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" aria-label="VARIATIC Home">
                <div className="relative">
                  <Image src="/logo.png" alt="VARIATIC" width={32} height={32} className="rounded-lg" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-emerald-500 to-cyan-500 rounded-lg blur opacity-30"></div>
                </div>
                <span className="font-bold tracking-tight hidden sm:inline text-xl bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">VARIATIC</span>
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                <Button asChild variant="ghost" className="hover:bg-purple-500/10 text-muted-foreground hover:text-purple-300 transition-colors">
                  <Link href="#problem">Problem</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-300 transition-colors">
                  <Link href="#solution">Solution</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-300 transition-colors">
                  <Link href="#why">Why</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-purple-500/10 text-muted-foreground hover:text-purple-300 transition-colors">
                  <Link href="#how">How</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-pink-500/10 text-muted-foreground hover:text-pink-300 transition-colors">
                  <Link href="#community">Community</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-purple-500/10 text-muted-foreground hover:text-purple-300 transition-colors">
                  <Link href="#tokenomics">Tokenomics</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-300 transition-colors">
                  <Link href="#roadmap">Roadmap</Link>
                </Button>
              </nav>
              <div className="flex items-center gap-3">
                <Button asChild size="sm" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white border-0 shadow-lg">
                  <Link href="#join">🎮 Join Early</Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 backdrop-blur-sm">
                  <Link href="#litepaper">📄 Read Litepaper</Link>
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <Separator className="mt-8" />
          <footer className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} VARIATIC Token</p>
              <div className="flex gap-4">
                <Link href="#terms" className="hover:underline">Terms</Link>
                <Link href="#privacy" className="hover:underline">Privacy</Link>
                <Link href="#contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

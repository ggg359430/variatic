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
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" aria-label="VARIATIC Home">
                <Image src="/logo.png" alt="VARIATIC" width={28} height={28} />
                <span className="font-semibold tracking-tight hidden sm:inline">VARIATIC</span>
              </Link>
              <nav className="hidden md:flex items-center gap-2">
                <Button asChild variant="ghost">
                  <Link href="#problem">Problem</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#solution">Solution</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#why">Why</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#how">How</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#community">Community</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#tokenomics">Tokenomics</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="#roadmap">Roadmap</Link>
                </Button>
              </nav>
              <div className="flex items-center gap-2">
                <Button asChild size="sm">
                  <Link href="#join">🎮 Join Early</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
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

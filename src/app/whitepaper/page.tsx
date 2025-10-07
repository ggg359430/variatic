import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "VARIATIC Whitepaper — One Token. Infinite Narratives.",
  description: "The first adaptive meme token: one smart contract, infinite identities. Instead of chasing the next token, the meme itself evolves.",
};

export default function WhitepaperPage() {
  return (
    <div className="px-4 sm:px-6">
      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto py-16 sm:py-24 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm animate-float mb-6">
            📄 OFFICIAL WHITEPAPER
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            VARIATIC: One Token. Infinite Narratives.
          </h1>
        </div>
      </section>

      {/* Abstract */}
      <section className="max-w-5xl mx-auto py-8">
        <Card className="border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 px-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Abstract</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Memecoins are fun but fragile. Narratives die, liquidity fragments, and communities scatter.
              </p>
              <p className="text-xl font-semibold text-white">
                VARIATIC is the first adaptive meme token: one smart contract, infinite identities. Instead of chasing the next token, the meme itself evolves.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* Problem */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            💀 Problem
          </h2>
        </div>

        <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 px-8">
            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <li className="flex gap-4">
                <span className="text-red-400 text-2xl">⏱️</span>
                <div>
                  <p className="font-semibold text-white mb-2">Memecoins live for weeks, then die.</p>
                  <p>Every meme token has a short lifespan. The narrative fades, liquidity evaporates, and the community moves on to the next hype.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 text-2xl">💸</span>
                <div>
                  <p className="font-semibold text-white mb-2">Each new meme drains liquidity from the last.</p>
                  <p>Capital scatters across hundreds of "next PEPE" tokens with no future. The market is perpetually fragmented.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 text-2xl">🌪️</span>
                <div>
                  <p className="font-semibold text-white mb-2">Communities are split across hundreds of "next PEPEs."</p>
                  <p>Instead of amplifying each other, meme communities compete and cannibalize their own growth potential.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* Solution */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            ⚡️ Solution: VARIATIC
          </h2>
        </div>

        <Card className="border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-8">
          <CardContent className="pt-8 pb-8 px-8">
            <ul className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <li className="flex gap-4">
                <span className="text-emerald-400 text-2xl">🔐</span>
                <div>
                  <p className="font-semibold text-white mb-2">One Contract</p>
                  <p>Liquidity stays, even when the meme changes. No need to migrate or redeploy.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 text-2xl">🧬</span>
                <div>
                  <p className="font-semibold text-white mb-2">Adaptive Identity</p>
                  <p>Token name & symbol evolve with the narrative. Fresh brand, same foundation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 text-2xl">🗳️</span>
                <div>
                  <p className="font-semibold text-white mb-2">DAO Governance</p>
                  <p>The community votes which meme comes next. Democracy meets memeology.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 text-2xl">♾️</span>
                <div>
                  <p className="font-semibold text-white mb-2">Infinite Life</p>
                  <p>Narratives shift, but VARIATIC never dies. The token that evolves, not expires.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Example */}
        <Card className="border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
          <CardContent className="pt-6 pb-6 px-8">
            <p className="text-center text-xl font-mono text-cyan-300">
              PEPE VARIATIC → BANANA VARIATIC → AI DOGE VARIATIC
            </p>
            <p className="text-center text-muted-foreground mt-4 text-lg">
              Same contract. Same liquidity. New story.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* How It Works */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🧬 How It Works
          </h2>
        </div>

        <div className="grid gap-6">
          <Card className="border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-xl font-bold text-purple-300 border border-purple-500/30">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">🚀 Launch</h3>
                  <p className="text-muted-foreground text-lg">Fixed contract, flexible shell. The foundation is set, but the identity is fluid.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl font-bold text-emerald-300 border border-emerald-500/30">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">🗳️ Vote</h3>
                  <p className="text-muted-foreground text-lg">Community chooses the next meme identity through transparent DAO governance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-bold text-cyan-300 border border-cyan-500/30">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">🔄 Shift</h3>
                  <p className="text-muted-foreground text-lg">Branding updates, liquidity stays intact. New narrative, same economic foundation.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-500/20 bg-pink-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-xl font-bold text-pink-300 border border-pink-500/30">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">🔁 Repeat</h3>
                  <p className="text-muted-foreground text-lg">Fresh hype, same token. The cycle continues indefinitely.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* Tokenomics */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
            💎 Tokenomics
          </h2>
        </div>

        <Card className="border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="space-y-5 text-muted-foreground text-lg">
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-2xl">🪙</span>
                <div>
                  <p className="font-semibold text-white mb-1">Total Supply</p>
                  <p>[TBA] — To be announced at genesis launch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-2xl">💧</span>
                <div>
                  <p className="font-semibold text-white mb-1">Liquidity</p>
                  <p>Shared pool across all narratives. Liquidity never fragments, only grows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-2xl">🔥</span>
                <div>
                  <p className="font-semibold text-white mb-1">Burns</p>
                  <p>Supply reduced during narrative shifts. Deflationary mechanics built into evolution.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 text-2xl">🏛️</span>
                <div>
                  <p className="font-semibold text-white mb-1">Governance</p>
                  <p>Token = vote in MemeDAO. Your holdings determine your voice in the narrative.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* Roadmap */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            🗓 Roadmap
          </h2>
        </div>

        <div className="space-y-4">
          <Card className="border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-center gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <p className="text-xl font-semibold text-emerald-300">Q4 2025 – Genesis Launch</p>
                  <p className="text-muted-foreground">Initial contract deployment and first meme identity.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🔜</div>
                <div>
                  <p className="text-xl font-semibold text-purple-300">Q1 2026 – DAO Governance</p>
                  <p className="text-muted-foreground">Community voting system and MemeDAO formation.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🔜</div>
                <div>
                  <p className="text-xl font-semibold text-cyan-300">Q2 2026 – First Narrative Shift</p>
                  <p className="text-muted-foreground">The first evolution — proof of concept for infinite narratives.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-500/20 bg-pink-500/5 backdrop-blur-sm">
            <CardContent className="pt-6 pb-6 px-8">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🔜</div>
                <div>
                  <p className="text-xl font-semibold text-pink-300">Q3 2026 – Memeverse Partnerships</p>
                  <p className="text-muted-foreground">Collaborations with major meme projects and influencers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* Why It Matters */}
      <section className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            🌍 Why It Matters
          </h2>
        </div>

        <Card className="border-green-500/20 bg-green-500/5 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="text-xl text-white font-semibold">
                Memes are crypto's heartbeat — but today they fade too fast.
              </p>
              <p>
                The memecoin market is worth billions, but it's built on a broken foundation. Every new meme drains value from the last. Communities fracture. Liquidity evaporates. The cycle repeats endlessly.
              </p>
              <p className="text-green-300 font-semibold">
                VARIATIC unites fragmented memecoins into a living, evolving narrative.
              </p>
              <p>
                Instead of hundreds of dying tokens, we create one that lives forever. Instead of chasing trends, we become the trend. Instead of fragmented liquidity, we concentrate it into unstoppable momentum.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto my-12" />

      {/* CTA */}
      <section className="max-w-5xl mx-auto py-16 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          🚀 Join the Evolution
        </h3>
        <p className="text-2xl text-muted-foreground mb-10">
          Don't chase the next meme. <span className="text-white font-semibold">Be the meme.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-transform">
            <Link href="/#join">🎮 JOIN EARLY</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
            <Link href="/">📄 READ LITEPAPER</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-cyan-500/10 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
            <Link href="#telegram">💬 JOIN TELEGRAM</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="px-4 sm:px-6">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto py-20 sm:py-32 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 animate-gradient" style={{ backgroundImage: "linear-gradient(120deg, rgba(139,92,246,0.15), rgba(16,185,129,0.15), rgba(6,182,212,0.15))", backgroundSize: "200% 200%" }}>
          <Image
            src={`${basePath}/images/background-pattern.png`}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Image src={`${basePath}/logo.png`} alt="VARIATIC Logo" width={100} height={100} className="rounded-xl shadow-2xl animate-rise" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-emerald-500 to-cyan-500 rounded-xl blur opacity-60 animate-glow"></div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm animate-float">
            🧠 MEME TOKEN REIMAGINED
          </div>

          <h1 className="mt-8 text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            One Token. Infinite Narratives.
          </h1>

          <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One token instead of hundreds of short-lived memes. VARIATIC unifies meme-coin liquidity in a single contract. We change the narrative — not the token.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-xl transform hover:scale-[1.02] transition-transform">
              <Link href="#join">🎮 JOIN EARLY</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm">
              <Link href="#litepaper">📄 READ LITEPAPER</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <Image
                src={`${basePath}/images/hero-variatic.png`}
                alt="VARIATIC Token Evolution"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl border border-purple-500/20 animate-float"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* CEO QUOTE */}
      <section className="max-w-4xl mx-auto py-16">
        <blockquote className="text-xl sm:text-2xl leading-relaxed">
          “The problem with meme-coins is their short lifespan — the narrative dies before the token can grow. We built a token that adapts to the narrative, not the other way around.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">— &lt;PRIVATE_PERSON&gt;, CEO VARIATIC Token</p>
      </section>

      <Separator id="problem" />

      {/* PROBLEM */}
      <section className="max-w-7xl mx-auto py-20 grid gap-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            💀 The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional meme tokens are doomed to fail from the start
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">Every meme token lives for a couple of weeks. Memes change — liquidity leaves. You miss the wave as it crashes.</p>
                  <p className="text-lg leading-relaxed">💸 Capital scatters across hundreds of "next PEPE" with no future. The market is fragmented. Memes compete instead of amplifying each other.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Image
              src={`${basePath}/images/meme-problem.png`}
              alt="The Problem with Meme Coins"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-red-500/20"
            />
          </div>
        </div>
      </section>

      <Separator id="solution" />

      {/* SOLUTION */}
      <section className="max-w-7xl mx-auto py-20 grid gap-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            ⚡️ The Solution — VARIATIC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first living meme token that evolves without dying
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src={`${basePath}/images/variatic-solution.png`}
              alt="VARIATIC Solution"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-emerald-500/20"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <Card className="border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    VARIATIC is the first living meme token that adapts to trends while keeping the same liquidity and contract. When a narrative fades, we simply change the skin.
                  </p>
                  <p className="text-xl font-semibold text-emerald-400">🧬 One contract. 100 faces. Infinite life.</p>
                  <ul className="grid gap-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-400">🔁</span>
                      <span>Change name and symbol without redeploy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-400">💧</span>
                      <span>Liquidity stays inside the token</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-400">🧠</span>
                      <span>Community governs evolution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-emerald-400">⚙️</span>
                      <span>DAO + meme narratives support</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator id="why" />

      {/* WHY IT MATTERS */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">🌍 Why It Matters</h2>
        <Card>
          <CardContent className="pt-6 grid gap-4 text-muted-foreground">
            <p>Memes are crypto’s breath. But the breath shouldn’t be disposable.</p>
            <p>VARIATIC gives a second life to liquidity. Instead of hundreds of dying tokens — one that evolves.</p>
            <p className="font-medium text-foreground">📈 Potential:</p>
            <ul className="list-disc pl-5 grid gap-2">
              <li>Liquidity concentration across meme ecosystems</li>
              <li>Growth by adapting to new trends</li>
              <li>Unifying meme communities under one token</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator id="how" />

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">⚙️ How It Works</h2>
        <Card>
          <CardContent className="pt-6 grid gap-3 text-muted-foreground">
            <ol className="list-decimal pl-5 grid gap-2">
              <li>Token launch — fixed contract, adaptive shell</li>
              <li>Community voting — pick the next narrative</li>
              <li>Brand update — new name, new meme, same token</li>
              <li>New wave — fresh interest, same liquidity</li>
            </ol>
            <p className="text-foreground">🧬 Example: PEPE VARIATIC → BANANA VARIATIC → AI DOGE VARIATIC. Contract stays. Story changes.</p>
          </CardContent>
        </Card>
      </section>

      <Separator id="community" />

      {/* COMMUNITY & DAO */}
      <section className="max-w-7xl mx-auto py-20 grid gap-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            💬 Community & DAO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A living meme-network powered by community governance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    VARIATIC is not a project — it's a living meme-network.
                  </p>
                  <ul className="grid gap-4 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400">🗳️</span>
                      <span>DAO voting for the next narrative</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400">🏭</span>
                      <span>Meme Factory — propose and publish ideas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400">⭐</span>
                      <span>Meme of the Week — weekly challenge</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400">👑</span>
                      <span>Opinion leaders → "Narrative Council"</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Image
              src={`${basePath}/images/ecosystem-network.png`}
              alt="VARIATIC Ecosystem Network"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      <Separator id="tokenomics" />

      {/* TOKENOMICS */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">💎 Tokenomics</h2>
        <Card>
          <CardContent className="pt-6 grid gap-2 text-muted-foreground">
            <p>🚀 Total Supply: [TBA]</p>
            <p>💧 Dynamic Liquidity Pool — shared across all phases</p>
            <p>🔥 Burn Events on narrative shift</p>
            <p>🗳 Governance — voting rights in meme decisions</p>
            <p className="text-foreground">Fair. Transparent. Playful.</p>
          </CardContent>
        </Card>
      </section>

      <Separator id="roadmap" />

      {/* ROADMAP */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">🗓 Roadmap</h2>
        <Card>
          <CardContent className="pt-6 grid gap-2 text-muted-foreground">
            <p>✅ Q4 2025 — Launch & Genesis Meme</p>
            <p>🔜 Q1 2026 — Meme DAO Governance</p>
            <p>🔜 Q2 2026 — First Narrative Shift</p>
            <p>🔜 Q3 2026 — Memeverse Partnerships</p>
          </CardContent>
        </Card>
      </section>

      {/* FINAL CTA */}
      <section className="relative max-w-6xl mx-auto py-24 sm:py-32 text-center" id="join">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 animate-gradient" style={{ backgroundImage: "linear-gradient(120deg, rgba(139,92,246,0.12), rgba(16,185,129,0.12), rgba(6,182,212,0.12))", backgroundSize: "200% 200%" }}>
          <Image
            src="/images/background-pattern.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <h3 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            🚀 Don't chase the next meme. Be the meme.
          </h3>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            VARIATIC — the only meme that survives time and evolves with the narrative.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-transform">
              <Link href="#join">🎮 JOIN EARLY</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
              <Link href="#litepaper">📄 READ LITEPAPER</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-cyan-500/10 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
              <Link href="#telegram">💬 JOIN TELEGRAM</Link>
            </Button>
          </div>

          {/* Floating elements */}
          <div className="mt-16 flex items-center justify-center gap-8 text-6xl opacity-30">
            <span className="animate-rise">🐕</span>
            <span className="animate-rise" style={{ animationDelay: '0.2s' }}>🐸</span>
            <span className="animate-rise" style={{ animationDelay: '0.4s' }}>🍌</span>
            <span className="animate-rise" style={{ animationDelay: '0.6s' }}>🚀</span>
          </div>
        </div>
      </section>
    </div>
  );
}

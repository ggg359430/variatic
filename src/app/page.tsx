import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 sm:px-6">
      {/* HERO */}
      <section className="max-w-6xl mx-auto py-20 sm:py-28 text-center">
        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="VARIATIC Logo" width={80} height={80} className="rounded-sm" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          🧠 MEME TOKEN REIMAGINED
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
          🔥 One Token. Infinite Narratives.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          💧 One token instead of hundreds of short-lived memes. <br />
          🧬 VARIATIC unifies meme-coin liquidity in a single contract. <br />
          🚀 We change the narrative — not the token.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="#join">🎮 JOIN EARLY</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#litepaper">📄 READ LITEPAPER</Link>
          </Button>
        </div>
        <div className="mt-12 h-28 sm:h-40 rounded-xl bg-gradient-to-r from-purple-500/20 via-emerald-500/20 to-cyan-500/20 border flex items-center justify-center text-muted-foreground">
          {/* Placeholder for logo morph animation */}
          DOGE → PEPE → VARIATIC → ???
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
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">💀 The Problem</h2>
        <Card>
          <CardContent className="pt-6 grid gap-3 text-muted-foreground">
            <p>Every meme token lives for a couple of weeks. Memes change — liquidity leaves. You miss the wave as it crashes.</p>
            <p>💸 Capital scatters across hundreds of “next PEPE” with no future. The market is fragmented. Memes compete instead of amplifying each other.</p>
          </CardContent>
        </Card>
      </section>

      <Separator id="solution" />

      {/* SOLUTION */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">⚡️ The Solution — VARIATIC</h2>
        <Card>
          <CardContent className="pt-6 grid gap-4">
            <p>
              VARIATIC is the first living meme token that adapts to trends while keeping the same liquidity and contract. When a narrative fades, we simply change the skin.
            </p>
            <p>🧬 One contract. 100 faces. Infinite life.</p>
            <ul className="list-disc pl-5 grid gap-2 text-muted-foreground">
              <li>🔁 Change name and symbol without redeploy</li>
              <li>💧 Liquidity stays inside the token</li>
              <li>🧠 Community governs evolution</li>
              <li>⚙️ DAO + meme narratives support</li>
            </ul>
          </CardContent>
        </Card>
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
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">💬 Community & DAO</h2>
        <Card>
          <CardContent className="pt-6 grid gap-3 text-muted-foreground">
            <p>VARIATIC is not a project — it’s a living meme-network.</p>
            <ul className="list-disc pl-5 grid gap-2">
              <li>DAO voting for the next narrative</li>
              <li>Meme Factory — propose and publish ideas</li>
              <li>Meme of the Week — weekly challenge</li>
              <li>Opinion leaders → “Narrative Council”</li>
            </ul>
          </CardContent>
        </Card>
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
      <section className="max-w-4xl mx-auto py-20 sm:py-24 text-center" id="join">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          🚀 Don’t chase the next meme. Be the meme.
        </h3>
        <p className="mt-4 text-muted-foreground">
          VARIATIC — the only meme that survives time.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="#join">🎮 JOIN EARLY</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#litepaper">📄 READ LITEPAPER</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#telegram">💬 JOIN TELEGRAM</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

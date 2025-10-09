"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

// Removed basePath for custom domain deployment
const CONTRACT_ADDRESS = "0xD8E46a8d9032b2A1a4dAe75B26D790572457fA34";
const TOKEN_SYMBOL = "TIC";
const TOKEN_NAME = "Variatic";
const TOKEN_DECIMALS = 18;
const TOKEN_IMAGE = "https://variatictoken.com/logo.png";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [addingToWallet, setAddingToWallet] = useState<string | null>(null);
  const [showWalletOptions, setShowWalletOptions] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const detectWallets = () => {
    const hasMetaMask = typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
    const hasTrustWallet = typeof window.ethereum !== "undefined" && window.ethereum.isTrust;
    return { hasMetaMask, hasTrustWallet };
  };

  const showWalletInstallOptions = () => {
    const { hasMetaMask, hasTrustWallet } = detectWallets();

    if (!hasMetaMask && !hasTrustWallet) {
      setShowWalletOptions(true);
      return true;
    }
    return false;
  };

  const addToMetaMask = async () => {
    try {
      setAddingToWallet("metamask");

      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined" || !window.ethereum.isMetaMask) {
        if (showWalletInstallOptions()) return;
        alert("MetaMask is not installed. Please install MetaMask to continue.");
        return;
      }

      // Check if wallet_watchAsset method is supported
      if (!window.ethereum.request) {
        alert("Your wallet doesn't support adding custom tokens.");
        return;
      }

      // Request to add token to MetaMask
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: CONTRACT_ADDRESS,
            symbol: TOKEN_SYMBOL,
            decimals: TOKEN_DECIMALS,
            image: TOKEN_IMAGE,
          },
        },
      });

      if (wasAdded) {
        alert("Token successfully added to MetaMask!");
      } else {
        alert("Token addition was cancelled by user.");
      }
    } catch (error) {
      console.error("Error adding token to MetaMask:", error);

      // More specific error messages
      if (error.code === 4001) {
        alert("Request was rejected by user.");
      } else if (error.code === -32602) {
        alert("Invalid parameters. Please check if MetaMask is properly connected.");
      } else if (error.message?.includes("User rejected")) {
        alert("Token addition was cancelled by user.");
      } else {
        alert(`Failed to add token to MetaMask: ${error.message || "Please try again."}`);
      }
    } finally {
      setAddingToWallet(null);
    }
  };

  const addToTrustWallet = async () => {
    try {
      setAddingToWallet("trustwallet");

      // Check if Web3 provider is available
      if (typeof window.ethereum === "undefined" || !window.ethereum.isTrust) {
        if (showWalletInstallOptions()) return;
        alert("Please open this page in Trust Wallet's DApp browser or install a Web3 wallet.");
        return;
      }

      // Check if wallet_watchAsset method is supported
      if (!window.ethereum.request) {
        alert("Your wallet doesn't support adding custom tokens. Please try using Trust Wallet's DApp browser.");
        return;
      }

      // Request to add token to Trust Wallet with improved parameters
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: CONTRACT_ADDRESS,
            symbol: TOKEN_SYMBOL,
            decimals: TOKEN_DECIMALS,
            image: TOKEN_IMAGE,
          },
        },
      });

      if (wasAdded) {
        alert("Token successfully added to Trust Wallet!");
      } else {
        alert("Token addition was cancelled by user.");
      }
    } catch (error) {
      console.error("Error adding token to Trust Wallet:", error);

      // More specific error messages
      if (error.code === 4001) {
        alert("Request was rejected by user.");
      } else if (error.code === -32602) {
        alert("Invalid parameters. Please check if Trust Wallet is properly connected.");
      } else if (error.message?.includes("User rejected")) {
        alert("Token addition was cancelled by user.");
      } else {
        alert(`Failed to add token to Trust Wallet: ${error.message || "Please try again."}`);
      }
    } finally {
      setAddingToWallet(null);
    }
  };

  return (
    <div className="px-4 sm:px-6">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto py-20 sm:py-32 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 animate-gradient" style={{ backgroundImage: "linear-gradient(120deg, rgba(139,92,246,0.15), rgba(16,185,129,0.15), rgba(6,182,212,0.15))", backgroundSize: "200% 200%" }}>
          <Image
            src="/images/background-pattern.png"
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
              <Image src="/logo.png" alt="VARIATIC Logo" width={100} height={100} className="rounded-xl shadow-2xl animate-rise" />
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
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 px-8 py-3 text-lg font-semibold shadow-xl transform hover:scale-[1.02] transition-transform">
              <Link href="#swap">🔄 SWAP NOW</Link>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-xl transform hover:scale-[1.02] transition-transform">
              <Link href="#join">🎮 JOIN EARLY</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm">
              <Link href="/whitepaper">📄 READ WHITEPAPER</Link>
            </Button>
          </div>

          {/* Contract Address */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground font-medium">📜 Contract Address</p>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-3 max-w-full">
              <code className="text-sm sm:text-base text-purple-300 font-mono break-all">
                {CONTRACT_ADDRESS}
              </code>
              <Button
                onClick={copyToClipboard}
                size="sm"
                variant="ghost"
                className="shrink-0 h-8 w-8 p-0 hover:bg-purple-500/20 text-purple-300"
              >
                {copied ? "✓" : "📋"}
              </Button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-400 animate-in fade-in duration-200">
                Copied to clipboard!
              </p>
            )}

            {/* Add to Wallet Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              <Button
                onClick={addToMetaMask}
                disabled={addingToWallet !== null}
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-6 py-2 font-semibold shadow-lg transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToWallet === "metamask" ? "Adding..." : "🦊 Add to MetaMask"}
              </Button>
              <Button
                onClick={addToTrustWallet}
                disabled={addingToWallet !== null}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-6 py-2 font-semibold shadow-lg transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToWallet === "trustwallet" ? "Adding..." : "🛡️ Add to Trust Wallet"}
              </Button>
            </div>

            {/* Wallet Options Modal */}
            {showWalletOptions && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <Card className="w-full max-w-md border-purple-500/20 bg-background/95 backdrop-blur-sm">
                  <CardContent className="pt-6 pb-6 px-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold text-purple-300">No Wallet Detected</h3>
                      <p className="text-muted-foreground">
                        Install a compatible wallet to add VARIATIC token:
                      </p>

                      <div className="space-y-3">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0"
                        >
                          <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">
                            🦊 Install MetaMask
                          </a>
                        </Button>

                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0"
                        >
                          <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer">
                            🛡️ Install Trust Wallet
                          </a>
                        </Button>

                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
                        >
                          <a href="https://www.coinbase.com/wallet" target="_blank" rel="noopener noreferrer">
                            💎 Install Coinbase Wallet
                          </a>
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        After installing, refresh the page and try again.
                      </p>

                      <Button
                        onClick={() => setShowWalletOptions(false)}
                        variant="outline"
                        size="sm"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                      >
                        Close
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <Image
                src="/images/hero-variatic.png"
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

      <Separator id="swap" />

      {/* SWAP SECTION */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
            🔄 Swap Tokens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for VARIATIC — Swap tokens on PancakeSwap
          </p>
        </div>

        <Card className="border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 px-4 sm:px-8">
            <div className="flex flex-col items-center gap-6">
              <p className="text-center text-muted-foreground">
                🥞 Powered by PancakeSwap — The leading DEX on BNB Chain
              </p>

              <div className="w-full max-w-lg">
                {/* 
                  PancakeSwap Swap Widget
                  Current: USDT (0x55d398326f99059fF775485246999027B3197955) → BNB
                  
                  To update when VARIATIC pair is ready:
                  Replace inputCurrency with your token address and outputCurrency with the pair token
                  Example: ...swap?theme=dark&outputCurrency=YOUR_TOKEN_ADDRESS&inputCurrency=0x55d398326f99059fF775485246999027B3197955
                */}
                <iframe
                  src="https://pancakeswap.finance/swap?theme=dark&outputCurrency=BNB&inputCurrency=0x55d398326f99059fF775485246999027B3197955"
                  height="660px"
                  width="100%"
                  className="border-0 rounded-xl bg-background/50 backdrop-blur-sm"
                  style={{
                    border: 'none',
                    borderRadius: '16px',
                    minWidth: '300px',
                  }}
                />
              </div>

              <p className="text-sm text-muted-foreground text-center max-w-md">
                💡 Once VARIATIC launches, we'll update the swap to support our token pair!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* CEO QUOTE */}
      <section className="max-w-4xl mx-auto py-16">
        <blockquote className="text-xl sm:text-2xl leading-relaxed">
          "The problem with meme-coins is their short lifespan — the narrative dies before the token can grow. We built a token that adapts to the narrative, not the other way around."
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
              src="/images/meme-problem.png"
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
              src="/images/variatic-solution.png"
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
        <Card className="border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
          <CardContent className="pt-6 grid gap-4 text-muted-foreground">
            <p>Memes are crypto's breath. But the breath shouldn't be disposable.</p>
            <p>VARIATIC gives a second life to liquidity. Instead of hundreds of dying tokens — one that evolves.</p>
            <p className="font-medium text-cyan-400">📈 Potential:</p>
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
        <Card className="border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
          <CardContent className="pt-6 grid gap-3 text-muted-foreground">
            <ol className="list-decimal pl-5 grid gap-2">
              <li>Token launch — fixed contract, adaptive shell</li>
              <li>Community voting — pick the next narrative</li>
              <li>Brand update — new name, new meme, same token</li>
              <li>New wave — fresh interest, same liquidity</li>
            </ol>
            <p className="text-purple-300">🧬 Example: PEPE VARIATIC → BANANA VARIATIC → AI DOGE VARIATIC. Contract stays. Story changes.</p>
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
              src="/images/ecosystem-network.png"
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
        <Card className="border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
          <CardContent className="pt-6 grid gap-2 text-muted-foreground">
            <p>🚀 Total Supply: [TBA]</p>
            <p>💧 Dynamic Liquidity Pool — shared across all phases</p>
            <p>🔥 Burn Events on narrative shift</p>
            <p>🗳 Governance — voting rights in meme decisions</p>
            <p className="text-emerald-300">Fair. Transparent. Playful.</p>
          </CardContent>
        </Card>
      </section>

      <Separator id="roadmap" />

      {/* ROADMAP */}
      <section className="max-w-6xl mx-auto py-16 grid gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">🗓 Roadmap</h2>
        <Card className="border-pink-500/20 bg-pink-500/5 backdrop-blur-sm">
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
              <Link href="/whitepaper">📄 READ WHITEPAPER</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-cyan-500/10 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
              <Link href="https://t.me/variatic_token" target="_blank" rel="noopener noreferrer">💬 JOIN TELEGRAM</Link>
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

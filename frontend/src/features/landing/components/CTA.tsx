import { Button } from '@/components/ui/button'
import { Zap, Heart, Code } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-15" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-dark rounded-2xl p-12 md:p-16 text-center border border-purple-400/30 pulse-glow">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
              <Zap className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-semibold text-purple-200">Free Forever</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30">
              <Code className="w-4 h-4 text-pink-300" />
              <span className="text-xs font-semibold text-pink-200">Open Source</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30">
              <Heart className="w-4 h-4 text-orange-300" />
              <span className="text-xs font-semibold text-orange-200">Community Driven</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Getting Predictions{' '}
            <span className="gradient-text">Today</span>
          </h2>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-foreground/70 text-pretty mb-4">
              EngageAI is completely free and open source. No credit card required. No hidden fees. No ads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-semibold">
              <span className="text-emerald-400 flex items-center gap-2">
                ✓ Free Forever
              </span>
              <span className="text-cyan-400 flex items-center gap-2">
                ✓ No Ads
              </span>
              <span className="text-purple-400 flex items-center gap-2">
                ✓ No Subscription
              </span>
              <span className="text-orange-400 flex items-center gap-2">
                ✓ No Credit Card
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-foreground font-semibold text-lg px-8 shadow-lg shadow-purple-500/30 transition-all duration-300"
              >
                Explore Features
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400/30 text-foreground hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300"
              >
                View on GitHub
              </Button>
            </a>
          </div>

          <p className="text-xs text-foreground/60 mt-8">
            EngageAI is open source and free. Self-host it or use the community-maintained version.
          </p>
        </div>
      </div>
    </section>
  )
}

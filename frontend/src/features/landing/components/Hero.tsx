import { Button } from '@/components/ui/button'
import { ChevronRight, Zap, TrendingUp } from "lucide-react";


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Purple Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15" />

      {/* Pink Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-12" />

      {/* Orange Glow */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">           

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground text-balance leading-tight">
              Your AI Copilot for Instagram{' '}
              <span className="gradient-text">Success</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 text-pretty max-w-xl leading-relaxed">
              Predict post performance before you publish. Get AI-powered engagement predictions, caption suggestions, hashtag recommendations, and optimal posting times—all free forever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#features">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-foreground font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300"
                >
                  Explore Features
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-purple-500/30 text-foreground hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  View GitHub
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Floating Dashboard */}
          <div className="relative h-full hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Floating card with glassmorphism */}
              <div className="floating glass-dark rounded-2xl p-7 shadow-2xl pulse-glow border border-purple-400/20">
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground/70">Publish Readiness</h3>
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                  </div>

                  {/* Main Score */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
                    <div className="text-xs text-foreground/60 mb-3">Engagement Prediction</div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-bold gradient-text">9.4</span>
                      <span className="text-sm text-emerald-400 font-semibold">Ready ✓</span>
                    </div>
                    <div className="mt-4 h-2 bg-purple-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 w-11/12 rounded-full" />
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Expected Reach */}
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20">
                      <div className="text-xs text-foreground/60 mb-2">Expected Reach</div>
                      <div className="text-2xl font-bold text-foreground">28.5K</div>
                      <div className="text-xs text-emerald-400 mt-1 font-medium">+34% trend</div>
                    </div>

                    {/* Sentiment */}
                    <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-400/20">
                      <div className="text-xs text-foreground/60 mb-2">Sentiment</div>
                      <div className="text-2xl font-bold text-foreground">Very Positive</div>
                      <div className="text-xs text-pink-300 mt-1 font-medium">+95%</div>
                    </div>
                  </div>

                  {/* Engagement Breakdown */}
                  <div className="space-y-3 bg-white/3 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/70">Likes</span>
                      <span className="text-sm font-semibold text-emerald-400">5.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/70">Saves</span>
                      <span className="text-sm font-semibold text-blue-400">2.1K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/70">Shares</span>
                      <span className="text-sm font-semibold text-purple-400">1.8K</span>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-2 border-t border-purple-400/10 pt-4">
                    <div className="text-xs font-semibold text-foreground/80 mb-3">AI Recommendations</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-purple-400">✓</span>
                        <span className="text-xs text-foreground/70">Post at 7:45 PM today</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-pink-400">✓</span>
                        <span className="text-xs text-foreground/70">Caption includes CTA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-orange-400">✓</span>
                        <span className="text-xs text-foreground/70">15 trending hashtags</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glows */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

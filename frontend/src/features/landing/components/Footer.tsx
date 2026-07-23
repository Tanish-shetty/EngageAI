import { GitBranch, MessageCircle, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-b from-transparent to-purple-500/5">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <span className="text-foreground font-bold text-sm">⚡</span>
              </div>
              <span className="font-bold text-lg text-foreground group-hover:text-purple-300 transition-colors">EngageAI</span>
            </a>
            <p className="text-foreground/70 text-sm">
              Your AI copilot for Instagram creators. Free forever, open source, community-driven.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'How It Works', 'Docs', 'GitHub'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-purple-300 transition text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {['Contribute', 'Discussions', 'Issues', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-pink-300 transition text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'License', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-orange-300 transition text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 EngageAI. MIT License • Open Source
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 flex items-center justify-center transition text-foreground/70 hover:text-purple-300 border border-purple-500/20 hover:border-purple-500/50"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 flex items-center justify-center transition text-foreground/70 hover:text-pink-300 border border-pink-500/20 hover:border-pink-500/50"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center transition text-foreground/70 hover:text-orange-300 border border-orange-500/20 hover:border-orange-500/50"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

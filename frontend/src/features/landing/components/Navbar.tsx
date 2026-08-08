import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-purple-500/10 glass'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
              <span className="text-foreground font-bold text-sm">⚡</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EngageAI
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm text-foreground/70 hover:text-purple-300 transition duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-foreground/70 hover:text-purple-300 transition duration-200"
            >
              How It Works
            </a>
            <a
              href="#why-creators"
              className="text-sm text-foreground/70 hover:text-purple-300 transition duration-200"
            >
              Why Creators Love Us
            </a>
            <a
              href="#faq"
              className="text-sm text-foreground/70 hover:text-purple-300 transition duration-200"
            >
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-foreground text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

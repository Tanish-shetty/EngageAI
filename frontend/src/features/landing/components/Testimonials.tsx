import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Instagram Creator',
      content:
        'EngageAI has transformed how I approach content. My engagement rates increased by 340% in just two months. It&apos;s like having a team of data scientists analyzing every post.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Social Media Manager',
      content:
        'The best investment for our agency. We&apos;ve reduced content planning time by 70% while improving client results significantly. The predictions are incredibly accurate.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Brand Strategist',
      content:
        'EngageAI&apos;s hashtag recommendations and posting time analysis are spot-on. Our reach has grown exponentially, and the ROI is undeniable.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Creators Worldwide
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            See what Instagram creators are saying about EngageAI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="glass-dark rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed text-pretty">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

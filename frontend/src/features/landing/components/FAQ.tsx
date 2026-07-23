import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How accurate are the engagement predictions?',
      answer:
        'Our AI model has been trained on over 50 million Instagram posts and achieves 97% accuracy in predicting engagement metrics. Predictions improve over time as we learn your unique audience patterns and content style.',
    },
    {
      question: 'What data privacy standards does EngageAI follow?',
      answer:
        'We comply with GDPR and follow industry-standard encryption protocols. Your posts and data never leave your device unless you explicitly choose to share predictions. We never sell data and never use your content for training without permission.',
    },
    {
      question: 'Which AI models does EngageAI use?',
      answer:
        'EngageAI uses a combination of transformer-based deep learning models (similar to GPT) for caption generation, along with gradient boosting models for engagement prediction. All models are custom-trained on Instagram-specific data.',
    },
    {
      question: 'How does Instagram integration work?',
      answer:
        'EngageAI connects through Instagram&apos;s official Graph API using OAuth2 authentication. This allows us to analyze your post performance and audience data while maintaining full security and privacy standards.',
    },
    {
      question: 'Can I contribute to EngageAI development?',
      answer:
        'Absolutely! EngageAI is fully open source on GitHub. We welcome contributions of all kinds: bug fixes, new features, documentation, and design improvements. Check out our contribution guidelines for more details.',
    },
    {
      question: 'Is EngageAI really free forever?',
      answer:
        'Yes! EngageAI is completely free with no hidden costs, ads, or premium tiers. It&apos;s open source and community-driven. You can self-host it, contribute features, or use our hosted version at no cost.',
    },
  ]

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Questions?{' '}
            <span className="gradient-text">We&apos;ve Got Answers</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Learn more about how EngageAI works and how to get the most out of it
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-dark rounded-lg overflow-hidden border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-border bg-white/5">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

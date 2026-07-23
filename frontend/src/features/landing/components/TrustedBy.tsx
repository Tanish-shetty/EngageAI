export default function TrustedBy() {
  const companies = [
    { name: 'Instagram', abbr: 'IG' },
    { name: 'Meta', abbr: 'Meta' },
    { name: 'TikTok', abbr: 'TT' },
    { name: 'YouTube', abbr: 'YT' },
    { name: 'X', abbr: 'X' },
    { name: 'LinkedIn', abbr: 'LI' },
  ]

  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-foreground/60 mb-8">
          TRUSTED BY CREATORS AND MARKETERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-border flex items-center justify-center">
                <span className="text-xs font-bold text-foreground/60 select-none">
                  {company.abbr}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

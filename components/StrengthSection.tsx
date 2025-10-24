import { Factory, Headset, Globe } from 'lucide-react'

export default function StrengthSection() {
  const strengths = [
    {
      icon: Factory,
      title: "Full In-House Production",
      description: "From mold tooling to assembly and packaging — complete control over every step."
    },
    {
      icon: Headset,
      title: "Flexible OEM/ODM",
      description: "Flexible MOQ, quick delivery, and over 300 mold options to jump-start your custom project."
    },
    {
      icon: Globe,
      title: "Trusted Worldwide",
      description: "Supplying 50+ countries and over 10 global brands for more than a decade."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          Our Strength
        </h2>

        {/* Strength Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 p-6 bg-gray-100 rounded-full">
                  <Icon className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {strength.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'use client'

import Image from 'next/image'
import CTASection from '@/components/CTASection'

export default function AboutAtaba() {
  return (
    <div>
      {/* Banner Part */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="About Ataba"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Ataba
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Leading Calculator Manufacturer Since 1990
            </p>
          </div>
        </div>
      </section>

      {/* About Us Part */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Ataba Company"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ATABA has been at the forefront of calculator manufacturing for over three decades,
                consistently delivering high-quality computing solutions that meet the evolving needs
                of businesses, educational institutions, and individual users worldwide.
              </p>
              <p>
                Our commitment to innovation, quality, and customer satisfaction has established us
                as a trusted partner in the global calculator industry. With state-of-the-art manufacturing
                facilities and a dedicated team of professionals, we continue to push the boundaries of
                what&#39;s possible in calculator technology.
              </p>
              <p>
                From desktop calculators to advanced scientific models, every product bearing the ATABA
                name represents our dedication to precision, reliability, and excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Product Models</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">ISO</div>
                <div className="text-gray-600">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our facilities and see how we create quality calculators
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/b_ezMoE5h4w"
                title="Ataba Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

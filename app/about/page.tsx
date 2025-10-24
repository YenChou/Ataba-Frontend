'use client'

import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import CTASection from '@/components/CTASection'

export default function AboutAtaba() {
  return (
    <div>
      {/* Banner Part */}
      <PageBanner
        title="About Ataba"
        subtitle="Over 30 years of global experience in calculator manufacturing and OEM/ODM services."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

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
              ATABA
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <b>ATABA is a trusted calculator manufacturer with over 30 years of experience, serving OEM/ODM clients in more than 50 countries.</b>
              </p>
              <p>
                We’ve built long-term partnerships with a number of global brands for over a decade, driven by our consistent quality and dependable service.
              </p>
              <p>
                With headquarters in Taiwan and Hong Kong, and our own factory in Dongguan, China, we manage the entire production process in-house — from tooling and injection to SMT, assembly, and packaging — ensuring full control over quality, cost, and lead time.
              </p>
              <p>
                From office and school use to retail and promotional models, we offer flexible support for both high-volume orders and low-MOQ custom projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/*<div className="text-center mb-12">*/}
          {/*  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">*/}
          {/*    Discover Our Manufacturing Excellence*/}
          {/*  </h2>*/}
          {/*  <p className="text-lg text-gray-600 max-w-2xl mx-auto">*/}
          {/*    Take a virtual tour of our facilities and see how we create quality calculators*/}
          {/*  </p>*/}
          {/*</div>*/}

          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jqZwJeJ7slA"
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

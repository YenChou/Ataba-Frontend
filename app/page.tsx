'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Banner slides data
const bannerSlides = [
  {
    id: 1,
    title: '專業計算機解決方案',
    subtitle: 'Professional Calculator Solutions',
    description: '30年以上專業製造經驗，提供高品質計算機產品與完整的 OEM/ODM 客製化服務',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80', // Calculator on desk
    bgPosition: 'center'
  },
  {
    id: 2,
    title: '精準品質 值得信賴',
    subtitle: 'Precision Quality You Can Trust',
    description: '採用先進技術與嚴格品質控管，為您提供最可靠的計算解決方案',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80', // Business workspace
    bgPosition: 'center'
  },
  {
    id: 3,
    title: '客製化 OEM/ODM 服務',
    subtitle: 'Customized OEM/ODM Services',
    description: '根據您的需求量身打造專屬計算機產品，從設計到生產全程支援',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Data analysis
    bgPosition: 'center'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div>
      {/* Cover Part - Main Banner Section with Carousel */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Images */}
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.bgPosition
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative h-full container mx-auto px-4 flex items-center justify-end">
          <div className="max-w-2xl text-white text-right space-y-6 z-10">
            {bannerSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10 absolute'
                }`}
              >
                <p className="text-sm md:text-base font-medium tracking-wider uppercase opacity-90 mb-4">
                  CALCULATED QUALITY
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-base md:text-lg lg:text-xl opacity-90 mb-8">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Product Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
            <div className="text-gray-600">Certified Quality</div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Product Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Handy Calculators */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Handy Calculators
          </h3>
          <p className="text-gray-600 mb-4">
            Portable and reliable calculators perfect for everyday calculations and professional use.
          </p>
          <Link
            href="/products/handy-calculator"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Learn More →
          </Link>
        </div>

        {/* Desktop Calculators */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Desktop Calculators
          </h3>
          <p className="text-gray-600 mb-4">
            Full-featured desktop calculators designed for office and business environments.
          </p>
          <Link
            href="/products/desktop-calculator"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Learn More →
          </Link>
        </div>

        {/* Scientific Calculators */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Scientific Calculators
          </h3>
          <p className="text-gray-600 mb-4">
            Advanced scientific calculators for education, engineering, and research applications.
          </p>
          <Link
            href="/products/scientific-calculator"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Learn More →
          </Link>
        </div>
        </div>
      </div>

      {/* Why Choose ATABA */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose ATABA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🏭</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Manufacturing</h3>
            <p className="text-gray-600 text-sm">State-of-the-art production facilities with strict quality control</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🔬</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">R&D Innovation</h3>
            <p className="text-gray-600 text-sm">Continuous research and development for cutting-edge technology</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Reach</h3>
            <p className="text-gray-600 text-sm">Worldwide distribution and trusted by customers globally</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600 text-sm">Comprehensive OEM/ODM services for customized products</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Custom Solutions Available
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We offer OEM/ODM services to create customized calculator solutions for your specific needs.
        </p>
        <div className="space-x-4">
          <Link
            href="/about/oem-odm"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Learn About OEM/ODM
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-gray-50 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

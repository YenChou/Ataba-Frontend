'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import bannerSlidesData from '@/mockdata/bannerSlides.json'
import featuredProductsData from '@/mockdata/featuredProducts.json'

// Import mock data
const bannerSlides = bannerSlidesData
const featuredProducts = featuredProductsData

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

      {/* Hero Section & Company Stats */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Calculator Solutions by{' '}
            <span className="text-blue-600">ATABA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Leading manufacturer of high-quality calculators for business, education, and professional use.
            Over 30 years of innovation in computing technology with comprehensive OEM/ODM services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              View Our Products
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-sm hover:shadow-md w-full sm:w-auto text-center"
            >
              About ATABA
            </Link>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                30+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Product Models
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Countries Served
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                ISO
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Certified Quality
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
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
      </section>

    </div>
  );
}

// Featured Products Component with Carousel
function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Use products from imported JSON
  const products = featuredProducts;

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (isDragging) return; // Don't auto-rotate while dragging

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, [products.length, isDragging]);

  // Get visible products based on screen size
  const getVisibleProducts = (startIndex: number) => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(products[(startIndex + i) % products.length]);
    }
    return visible;
  };

  // Mouse/Touch drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    // Determine swipe direction based on drag distance
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (dragOffset > threshold) {
      // Dragged right - go to previous
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    } else if (dragOffset < -threshold) {
      // Dragged left - go to next
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title - Top on desktop */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Feature Products
        </h2>
      </div>

      {/* Products Carousel - Bottom on desktop */}
      <div
        className="relative select-none touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop & Tablet: Show 3 products */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-6 transition-transform duration-200"
          style={{
            transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {getVisibleProducts(currentIndex).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile: Show 1 product */}
        <div
          className="md:hidden transition-transform duration-200"
          style={{
            transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          <ProductCard product={products[currentIndex]} />
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        <Link
          href={product.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          了解更多
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}

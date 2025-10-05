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

      {/* Featured Products Section */}
      <FeaturedProducts />
    </div>
  );
}

// Featured Products Component with Carousel
function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Mock product data - 5 products
  const products = [
    {
      id: 1,
      name: '12 Digit Desktop Calculator',
      nameCn: '12位桌上型計算機',
      description: '大型桌上型計算機，12位數顯示，適合辦公室和商業環境使用',
      icon: '🖩',
      gradient: 'from-gray-100 to-gray-200',
      link: '/products/desktop-calculator'
    },
    {
      id: 2,
      name: 'Handy Pocket Calculator',
      nameCn: '便攜式口袋計算機',
      description: '輕巧便攜式計算機，適合隨身攜帶，提供基本運算功能',
      icon: '📱',
      gradient: 'from-blue-50 to-blue-100',
      link: '/products/handy-calculator'
    },
    {
      id: 3,
      name: 'Scientific Calculator',
      nameCn: '科學計算機',
      description: '專業科學計算機，提供進階數學和科學運算功能',
      icon: '🔬',
      gradient: 'from-purple-50 to-purple-100',
      link: '/products/scientific-calculator'
    },
    {
      id: 4,
      name: 'Financial Calculator',
      nameCn: '金融計算機',
      description: '專業金融計算機，提供財務分析和投資計算功能',
      icon: '💰',
      gradient: 'from-green-50 to-green-100',
      link: '/products/financial-calculator'
    },
    {
      id: 5,
      name: 'Printing Calculator',
      nameCn: '列印型計算機',
      description: '帶列印功能的計算機，適合會計和財務工作使用',
      icon: '🖨️',
      gradient: 'from-orange-50 to-orange-100',
      link: '/products/printing-calculator'
    }
  ];

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
      <div className="lg:flex lg:gap-12 lg:items-center">
        {/* Section Title - Left side on desktop */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Feature Products
          </h2>
          <p className="text-lg text-gray-600">
            精選產品
          </p>
        </div>

        {/* Products Carousel - Right side on desktop */}
        <div
          className="lg:w-3/4 relative select-none touch-none"
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
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className={`relative h-64 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-32 h-32 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center mb-4">
              <span className="text-4xl">{product.icon}</span>
            </div>
            <p className="text-gray-400 font-medium">產品圖片</p>
          </div>
        </div>
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

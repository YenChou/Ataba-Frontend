import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Professional Calculator Solutions by <span className="text-blue-600">ATABA</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Leading manufacturer of high-quality calculators for business, education, and professional use.
          Over 30 years of innovation in computing technology with comprehensive OEM/ODM services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            View Our Products
          </Link>
          <Link
            href="/about"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors font-medium text-lg"
          >
            About ATABA
          </Link>
        </div>
      </div>

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

import Link from 'next/link'

export default function AboutAtaba() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">ATABA</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leading calculator manufacturer with decades of experience in innovative computing solutions
        </p>
      </div>

      {/* Company Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ATABA has been at the forefront of calculator manufacturing for over three decades,
              consistently delivering high-quality computing solutions that meet the evolving needs
              of businesses, educational institutions, and individual users worldwide.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has established us
              as a trusted partner in the global calculator industry.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">30+ years of manufacturing experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Global distribution network</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">ISO certified manufacturing processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Comprehensive OEM/ODM services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ataba Factory */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ataba Factory</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover our state-of-the-art manufacturing facilities, advanced production processes,
              and quality control systems that ensure every calculator meets our high standards.
            </p>
          </div>
          <Link
            href="/about/factory"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Learn About Our Factory →
          </Link>
        </div>

        {/* OEM/ODM Service */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">OEM/ODM Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Partner with us for custom calculator solutions. Our comprehensive OEM/ODM services
              help bring your unique product vision to life with our expertise and manufacturing capabilities.
            </p>
          </div>
          <Link
            href="/about/oem-odm"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Explore OEM/ODM Services →
          </Link>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">Q</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              Uncompromising commitment to delivering products that exceed industry standards
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">I</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Continuous research and development to create cutting-edge calculator technology
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service</h3>
            <p className="text-gray-600">
              Dedicated customer support and partnership throughout the entire product lifecycle
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
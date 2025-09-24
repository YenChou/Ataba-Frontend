import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">ATABA</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional calculator manufacturer specializing in innovative computing solutions for business and education.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
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
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

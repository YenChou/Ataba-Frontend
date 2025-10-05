import Link from 'next/link'

export default function CTASection() {
  return (
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
  )
}
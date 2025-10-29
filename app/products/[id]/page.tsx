'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import productsData from '@/mockdata/products.json'
import type { Product } from '@/types/product'

// Import mock data
const productsList = productsData as Product[]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = String(params.id)

  // Find the product by product_id
  const product = productsList.find((p) => p.product_id === productId)

  // If product not found, show 404
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  // Get related products (same type, excluding current product)
  const relatedProducts = productsList
    .filter((p) => p.type_id === product.type_id && p.product_id !== product.product_id)
    .slice(0, 3)

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.product_name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                {product.primary_image ? (
                  <Image
                    src={product.primary_image}
                    alt={product.product_name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Type Badge */}
                {product.type_name && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                    {product.type_name}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.product_name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                {product.brief}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <div
                className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => {
                    if (!value) return null
                    return (
                      <div key={key} className="flex border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <div className="w-1/3 text-sm font-semibold text-gray-600 capitalize">
                          {key.replace(/_/g, ' ')}
                        </div>
                        <div className="w-2/3 text-sm text-gray-900">
                          {Array.isArray(value) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {value.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            value
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex-1 bg-blue-600 text-white text-center px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="flex-1 bg-white text-blue-600 text-center px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold shadow-sm"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.product_id}
                  href={`/products/${relatedProduct.product_id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    {relatedProduct.primary_image ? (
                      <Image
                        src={relatedProduct.primary_image}
                        alt={relatedProduct.product_name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {relatedProduct.product_name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedProduct.brief}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
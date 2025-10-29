'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import ProductCard from '@/components/ProductCard'
import productsData from '@/mockdata/products.json'
import productTypesData from '@/mockdata/productTypes.json'
import type { Product, ProductType } from '@/types/product'

// Import mock data
const productsList = productsData as Product[]
const productTypes = productTypesData as ProductType[]

function ProductsContent() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  const [selectedType, setSelectedType] = useState<number | null>(null)

  // Update selectedType when URL parameter changes
  useEffect(() => {
    if (typeParam) {
      const typeId = Number(typeParam)
      if (!isNaN(typeId)) {
        setSelectedType(typeId)
      }
    } else {
      setSelectedType(null)
    }
  }, [typeParam])

  // Filter products by type
  const filteredProducts = selectedType
    ? productsList.filter((product) => product.type_id === selectedType)
    : productsList

  // Reset filter
  const handleTypeFilter = (typeId: number | null) => {
    setSelectedType(typeId)
  }

  return (
    <div>
      {/* Part 1: Page Banner */}
      <PageBanner
        title="Our Products"
        subtitle="Discover our comprehensive range of calculators designed for every need - from everyday calculations to advanced scientific and business applications."
        image="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=1920&q=80"
      />

      {/* Part 2: Product Listing Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => handleTypeFilter(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedType === null
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          {productTypes
            .sort((a, b) => a.sort_order - b.sort_order)
            .filter((type) => type.is_active)
            .map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeFilter(type.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.name}
              </button>
            ))}
        </div>

        {/* Product Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedType && (
              <span className="ml-1">
                in <span className="font-semibold text-blue-600">
                  {productTypes.find(t => t.id === selectedType)?.name}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts
              .sort((a, b) => {
                // Sort by type sort_order first, then by product sort_order
                const typeA = productTypes.find(t => t.id === a.type_id)?.sort_order ?? 999
                const typeB = productTypes.find(t => t.id === b.type_id)?.sort_order ?? 999
                if (typeA !== typeB) return typeA - typeB
                return a.sort_order - b.sort_order
              })
              .map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">
              {selectedType
                ? `There are no products in this category yet.`
                : `No products available at the moment.`}
            </p>
            {selectedType && (
              <button
                onClick={() => handleTypeFilter(null)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Products
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-600">Loading...</div></div>}>
      <ProductsContent />
    </Suspense>
  )
}
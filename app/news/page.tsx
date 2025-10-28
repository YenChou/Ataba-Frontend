'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import newsData from '@/mockdata/news.json'
import newsTypesData from '@/mockdata/newsTypes.json'
import type { News } from '@/types/news'

// Import mock data
const newsList = newsData as News[]
const newsTypes = newsTypesData

export default function NewsPage() {
  const [selectedType, setSelectedType] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Filter news by type
  const filteredNews = selectedType
    ? newsList.filter((news) => news.type_id === selectedType)
    : newsList

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) // eslint-disable-line @typescript-eslint/no-unused-vars
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNews = filteredNews.slice(startIndex, endIndex)

  // Reset to page 1 when filter changes
  const handleTypeFilter = (typeId: number | null) => {
    setSelectedType(typeId)
    setCurrentPage(1)
  }

  return (
    <div>
      {/* Part 1: Page Banner */}
      <PageBanner
        title="News & Updates"
        subtitle="Stay informed about our latest products, trade shows, and company announcements."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />

      {/* Part 2: News List */}
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
            All News
          </button>
          {newsTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeFilter(type.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.description}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-6 mb-12">
          {currentNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* No Results */}
        {currentNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No news articles found.</p>
          </div>
        )}

        {/* Part 3: Pagination - To be implemented */}
      </section>
    </div>
  )
}

// News Card Component (List Layout)
function NewsCard({ news }: { news: News }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header with Meta Info and Pinned Badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {news.type_name?.replace('_', ' ')}
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(news.publish_date || news.created_at)}
            </span>
          </div>

          {/* Pinned Badge */}
          {news.is_pinned && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Pinned
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <Link href={`/news/${news.id}`} className="hover:underline">
            {news.subject}
          </Link>
        </h3>

        {/* Summary - Single Line */}
        {news.summary && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-1">
            {news.summary}
          </p>
        )}

        {/* Read More Link */}
        <Link
          href={`/news/${news.id}`}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group"
        >
          Read More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

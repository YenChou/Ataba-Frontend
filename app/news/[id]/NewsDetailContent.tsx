'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { News } from '@/types/news'

export default function NewsDetailContent({ news }: { news: News }) {
  const [imageError, setImageError] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/news" className="text-gray-500 hover:text-blue-600 transition-colors">
              News
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{news.subject}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Pinned Badge */}
          {news.is_pinned && (
            <div className="mb-6">
              <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Pinned
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {news.subject}
          </h1>

          {/* Meta-Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="font-medium">{news.type_name?.replace('_', ' ')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(news.publish_date || news.created_at)}</span>
            </div>
          </div>

          {/* Cover Image */}
          {news.cover_image_url && !imageError && (
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={news.cover_image_url}
                alt={news.subject}
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          )}

          {/* Summary */}
          {news.summary && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {news.summary}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>

          {/* Back to News List */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News List
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

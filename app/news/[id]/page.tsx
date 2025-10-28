import { notFound } from 'next/navigation'
import newsData from '@/mockdata/news.json'
import type { News } from '@/types/news'
import NewsDetailContent from './NewsDetailContent'

const newsList = newsData as News[]

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const news = newsList.find((item) => item.id === parseInt(id))

  if (!news) {
    notFound()
  }

  return <NewsDetailContent news={news} />
}

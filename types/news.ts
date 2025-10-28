// News Type Definition (based on ataba-backend database schema)

export interface NewsType {
  id: number
  type_name: string
  description?: string
  is_active: boolean
  sort_order: number
  created_at: string
}

export type NewsStatus = 'draft' | 'published' | 'archived'

export interface News {
  id: number
  subject: string
  content: string
  summary?: string
  type_id: number
  type_name?: string // For frontend display (from mock data or API join)
  type?: NewsType // Populated from join
  status: NewsStatus
  view_count: number
  publish_date?: string
  sort_order: number
  is_pinned: boolean
  cover_image_url?: string
  cover_image_file_name?: string
  cover_image_file_size?: number
  created_at: string
  updated_at: string
  created_by?: number
  updated_by?: number
}

// Frontend display version (simplified)
export interface NewsListItem {
  id: number
  subject: string
  summary?: string
  type_name: string
  publish_date: string
  cover_image_url?: string
  view_count: number
  is_pinned: boolean
}
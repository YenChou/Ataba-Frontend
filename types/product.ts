// Product Types based on DATABASE_SCHEMA.md

export enum ProductStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DISCONTINUED = 'discontinued'
}

export interface ProductType {
  id: number
  name: string
  description: string
  sort_order: number
  is_active: boolean
  created_at: string
}

export interface ProductSpecifications {
  display?: string
  power?: string
  dimensions?: string
  weight?: string
  functions?: string[]
  memory?: string
  [key: string]: string | string[] | undefined
}

export interface ProductPicture {
  id: number
  product_id: number
  pic_desc: string
  pic_file_name: string
  pic_url: string
  is_primary: boolean
  sort_order: number
  file_size: number
  created_at: string
}

export interface Product {
  id: number
  product_id: string // VARCHAR(200) UNIQUE - unique product identifier
  product_name: string
  type_id: number
  type_name?: string // Joined from product_type
  description: string
  brief: string
  specifications: ProductSpecifications
  sort_order: number
  status: ProductStatus
  created_at: string
  updated_at: string
  pictures?: ProductPicture[]
  primary_image?: string // Convenience field for primary image URL
}

export interface BannerSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  bgPosition: string
}
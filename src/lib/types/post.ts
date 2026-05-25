/**
 * Post type definitions
 */

export type PostType = 'blog' | 'video' | 'social';
export type PostStatus = 'draft' | 'published' | 'scheduled';
export type FeaturedPosition = 'top' | 'banner' | 'carousel';

/**
 * Media information for a post
 */
export interface PostMedia {
  images?: {
    mobile: {
      url: string;
      alt: string;
    };
    desktop: {
      url: string;
      alt: string;
    };
  };
  youtubeUrl?: string;
  socialUrl?: string;
}

/**
 * Featured settings for a post
 */
export interface FeaturedSettings {
  isFeatured: boolean;
  position?: FeaturedPosition;
  priority?: number;
  startDate?: string;
  endDate?: string;
}

/**
 * SEO metadata for a post
 */
export interface PostSEO {
  metaDescription?: string;
  metaKeywords?: string[];
  ogImage?: string;
}

/**
 * User/Author information
 */
export interface PostAuthor {
  id: number;
  documentId: string;
  username: string;
  email: string;
}

/**
 * Unidade (unit/location) information
 */
export interface PostUnidade {
  id: number;
  documentId: string;
  nome: string;
  localizacao?: string;
}

/**
 * Main Post interface
 */
export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  type: PostType;
  status: PostStatus;
  
  // Relations
  unidade: PostUnidade;
  author: PostAuthor;
  
  // Media & Featured
  media?: PostMedia;
  featured?: FeaturedSettings;
  
  // SEO
  seo?: PostSEO;
  
  // Timestamps
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Paginated post list response
 */
export interface PostListResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Strapi API Client - with Mock Data support for offline testing
 * Handles all communication with Strapi CMS
 * Falls back to mock data if Strapi is unavailable
 */

import { Post, PostListResponse, PostFilters, PostUnidade } from './types';
import { getMockPostsResponse, getMockPostBySlug } from './blog-posts';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

interface FetchOptions extends RequestInit {
  revalidate?: number;
}

/**
 * Helper function to build Strapi query params
 */
function buildQueryParams(filters?: PostFilters): URLSearchParams {
  const params = new URLSearchParams();
  
  // Always populate relations and media
  params.append('populate', '*');
  params.append('populate[author]', '*');
  params.append('populate[unidade]', '*');
  params.append('populate[media]', '*');
  params.append('populate[featured]', '*');
  params.append('populate[seo]', '*');
  
  // Sorting
  params.append('sort', '-publishedAt');
  
  // Pagination
  params.append('pagination[pageSize]', filters?.limit?.toString() || '10');
  params.append('pagination[page]', filters?.page?.toString() || '1');
  
  // Filters
  if (filters?.status) {
    params.append('filters[status][$eq]', filters.status);
  }
  
  if (filters?.type) {
    params.append('filters[type][$eq]', filters.type);
  }
  
  if (filters?.unidade) {
    params.append('filters[unidade][documentId][$eq]', filters.unidade);
  }
  
  if (filters?.search) {
    params.append('filters[$or][0][title][$containsi]', filters.search);
    params.append('filters[$or][1][excerpt][$containsi]', filters.search);
  }
  
  return params;
}

/**
 * Helper function to make authenticated requests
 */
async function strapiRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_URL}/api${endpoint}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
  };
  
  const revalidate = options.revalidate ?? 3600;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
      next: { revalidate },
    });
    
    if (!response.ok) {
      throw new Error(
        `Strapi API error: ${response.status} ${response.statusText}`
      );
    }
    
    return response.json();
  } catch (error) {
    console.warn(`Failed to fetch from Strapi: ${endpoint}`, error);
    console.warn('Falling back to mock data for development...');
    throw error;
  }
}

/**
 * Fetch published posts with optional filters
 */
export async function fetchPosts(filters?: PostFilters): Promise<PostListResponse> {
  // Use mock data if enabled or if Strapi is not available
  if (USE_MOCK_DATA) {
    console.log('📊 Using mock data for posts (development mode)');
    return getMockPostsResponse(filters?.limit || 10);
  }

  const params = buildQueryParams({
    ...filters,
    status: 'published', // Always fetch only published posts
  });
  
  try {
    return await strapiRequest<PostListResponse>(
      `/posts?${params.toString()}`,
      { revalidate: parseInt(process.env.REVALIDATE_POSTS || '3600') }
    );
  } catch (error) {
    console.log('📊 Strapi unavailable, using mock data');
    return getMockPostsResponse(filters?.limit || 10);
  }
}

/**
 * Fetch a single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    console.log(`📄 Fetching post "${slug}" from mock data`);
    return getMockPostBySlug(slug) || null;
  }

  const params = new URLSearchParams();
  params.append('filters[slug][$eq]', slug);
  params.append('populate', '*');
  
  try {
    const response = await strapiRequest<PostListResponse>(
      `/posts?${params.toString()}`,
      { revalidate: parseInt(process.env.REVALIDATE_POSTS || '3600') }
    );
    
    return response.data[0] || null;
  } catch (error) {
    console.log(`📄 Strapi unavailable, fetching "${slug}" from mock data`);
    return getMockPostBySlug(slug) || null;
  }
}

/**
 * Fetch featured posts (checks isFeatured and date validity)
 */
export async function fetchFeaturedPosts(limit = 3): Promise<Post[]> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    console.log('⭐ Fetching featured posts from mock data');
    const mockResponse = getMockPostsResponse(10);
    const now = new Date();
    
    return mockResponse.data
      .filter((post) => {
        if (!post.featured?.isFeatured) return false;
        
        const startDate = post.featured.startDate ? new Date(post.featured.startDate) : null;
        const endDate = post.featured.endDate ? new Date(post.featured.endDate) : null;
        
        if (startDate && now < startDate) return false;
        if (endDate && now > endDate) return false;
        
        return true;
      })
      .slice(0, limit);
  }

  const params = new URLSearchParams();
  params.append('populate', '*');
  params.append('filters[status][$eq]', 'published');
  params.append('filters[featured][isFeatured][$eq]', 'true');
  params.append('sort', '-featured.priority,-publishedAt');
  params.append('pagination[pageSize]', limit.toString());
  
  try {
    const response = await strapiRequest<PostListResponse>(
      `/posts?${params.toString()}`,
      { revalidate: parseInt(process.env.REVALIDATE_FEATURED || '300') }
    );
    
    const now = new Date();
    
    // Filter posts where featured dates are still valid
    return response.data.filter((post) => {
      if (!post.featured?.isFeatured) return false;
      
      const startDate = post.featured.startDate ? new Date(post.featured.startDate) : null;
      const endDate = post.featured.endDate ? new Date(post.featured.endDate) : null;
      
      if (startDate && now < startDate) return false;
      if (endDate && now > endDate) return false;
      
      return true;
    });
  } catch (error) {
    console.log('⭐ Strapi unavailable, using mock featured posts');
    const mockResponse = getMockPostsResponse(10);
    const now = new Date();
    
    return mockResponse.data
      .filter((post) => {
        if (!post.featured?.isFeatured) return false;
        
        const startDate = post.featured.startDate ? new Date(post.featured.startDate) : null;
        const endDate = post.featured.endDate ? new Date(post.featured.endDate) : null;
        
        if (startDate && now < startDate) return false;
        if (endDate && now > endDate) return false;
        
        return true;
      })
      .slice(0, limit);
  }
}

/**
 * Fetch posts by a specific unidade
 */
export async function fetchPostsByUnidade(
  unidadeId: string,
  filters?: Omit<PostFilters, 'unidade'>
): Promise<PostListResponse> {
  // Use mock data if enabled
  if (USE_MOCK_DATA) {
    const mockResponse = getMockPostsResponse(10);
    const filtered = mockResponse.data.filter(
      (post) => post.unidade.documentId === unidadeId
    );
    
    return {
      data: filtered,
      meta: mockResponse.meta,
    };
  }

  const params = buildQueryParams({
    ...filters,
    unidade: unidadeId,
    status: 'published',
  });
  
  try {
    return await strapiRequest<PostListResponse>(
      `/posts?${params.toString()}`,
      { revalidate: parseInt(process.env.REVALIDATE_POSTS || '3600') }
    );
  } catch (error) {
    console.log('Strapi unavailable, using mock data');
    const mockResponse = getMockPostsResponse(10);
    const filtered = mockResponse.data.filter(
      (post) => post.unidade.documentId === unidadeId
    );
    
    return {
      data: filtered,
      meta: mockResponse.meta,
    };
  }
}

/**
 * Fetch unidades (locations/units)
 */
export async function fetchUnidades(): Promise<PostUnidade[]> {
  if (USE_MOCK_DATA) {
    const mockResponse = getMockPostsResponse(10);
    const unidades = Array.from(
      new Map(
        mockResponse.data.map((post) => [post.unidade.documentId, post.unidade])
      ).values()
    );
    return unidades;
  }

  const params = new URLSearchParams();
  params.append('populate', '*');
  params.append('pagination[limit]', '100');
  
  try {
    const response = await strapiRequest<{
      data: PostUnidade[];
      meta: Record<string, unknown>;
    }>(
      `/unidades?${params.toString()}`,
      { revalidate: parseInt(process.env.REVALIDATE_POSTS || '3600') }
    );
    
    return response.data;
  } catch (error) {
    console.log('Strapi unavailable, extracting unidades from mock data');
    const mockResponse = getMockPostsResponse(10);
    const unidades = Array.from(
      new Map(
        mockResponse.data.map((post) => [post.unidade.documentId, post.unidade])
      ).values()
    );
    return unidades;
  }
}

/**
 * Increment view count for a post (client-side mutation)
 * This is typically called from the client
 */
export async function incrementPostViewCount(postId: number): Promise<void> {
  if (!API_TOKEN) {
    console.warn('Cannot increment view count: STRAPI_API_TOKEN not set');
    return;
  }
  
  if (USE_MOCK_DATA) {
    console.log('📊 Mock mode: view count not incremented');
    return;
  }
  
  try {
    await strapiRequest(
      `/posts/${postId}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            viewCount: { increment: 1 },
          },
        }),
      }
    );
  } catch (error) {
    // Silently fail - view count is not critical
    console.debug('Failed to increment view count', error);
  }
}

/**
 * Generate static params for dynamic routes
 * Used in generateStaticParams() for blog post pages
 */
export async function generateBlogStaticParams(): Promise<
  Array<{ slug: string }>
> {
  try {
    const posts = await fetchPosts({ limit: 100, status: 'published' });
    return posts.data.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params for blog', error);
    return [];
  }
}

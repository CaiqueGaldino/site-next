/**
 * Blog Service - Business logic for blog operations
 */

import { Post, FeaturedPosition } from './types';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Check if a post is currently featured based on dates
 */
export function isPostCurrentlyFeatured(post: Post): boolean {
  if (!post.featured?.isFeatured) return false;
  
  const now = new Date();
  const startDate = post.featured.startDate ? parseISO(post.featured.startDate) : null;
  const endDate = post.featured.endDate ? parseISO(post.featured.endDate) : null;
  
  if (startDate && now < startDate) return false;
  if (endDate && now > endDate) return false;
  
  return true;
}

/**
 * Sort posts with featured ones first
 */
export function sortPostsWithFeatured(posts: Post[]): Post[] {
  const featured = posts.filter(isPostCurrentlyFeatured);
  const regular = posts.filter((post) => !isPostCurrentlyFeatured(post));
  
  // Sort featured by priority (lower number = higher priority)
  featured.sort((a, b) => {
    const aPriority = a.featured?.priority ?? 999;
    const bPriority = b.featured?.priority ?? 999;
    return aPriority - bPriority;
  });
  
  // Sort regular by publishedAt (newest first)
  regular.sort((a, b) => {
    if (!a.publishedAt || !b.publishedAt) return 0;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  
  return [...featured, ...regular];
}

/**
 * Format a date relative to now (e.g., "há 2 dias")
 */
export function formatPostDate(dateString: string | undefined): string {
  if (!dateString) return 'Data desconhecida';
  
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });
  } catch {
    return 'Data inválida';
  }
}

/**
 * Format a date to a readable format (e.g., "10 de março de 2026")
 */
export function formatPostDateFull(dateString: string | undefined): string {
  if (!dateString) return 'Data desconhecida';
  
  try {
    const date = parseISO(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return 'Data inválida';
  }
}

/**
 * Get featured position badge label
 */
export function getFeaturedPositionLabel(position?: FeaturedPosition): string {
  const labels: Record<FeaturedPosition, string> = {
    top: 'Destaque Principal',
    banner: 'Banner',
    carousel: 'Carrossel',
  };
  
  return labels[position ?? 'top'];
}

/**
 * Get media URL based on device type
 */
export function getPostMediaUrl(post: Post, device: 'mobile' | 'desktop'): string | undefined {
  if (post.type === 'blog' && post.media?.images) {
    return device === 'mobile' ? post.media.images.mobile.url : post.media.images.desktop.url;
  }
  return undefined;
}

/**
 * Get media alt text
 */
export function getPostMediaAlt(post: Post): string {
  if (post.media?.images) {
    return post.media.images.desktop.alt || post.title;
  }
  return post.title;
}

/**
 * Check if post has media/image
 */
export function hasPostMedia(post: Post): boolean {
  return post.type === 'blog' && !!post.media?.images;
}

/**
 * Check if post is a video
 */
export function isVideoPost(post: Post): boolean {
  return post.type === 'video' && !!post.media?.youtubeUrl;
}

/**
 * Check if post is a social media link
 */
export function isSocialPost(post: Post): boolean {
  return post.type === 'social' && !!post.media?.socialUrl;
}

/**
 * Extract YouTube video ID from URL
 */
export function extractYoutubeVideoId(url: string): string | null {
  try {
    const urlObj = new URL(url);
    
    // Handle youtube.com and youtu.be
    if (urlObj.hostname.includes('youtube.com')) {
      return urlObj.searchParams.get('v');
    } else if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.slice(1);
    }
    
    return null;
  } catch {
    return null;
  }
}

/**
 * Generate embed URL for YouTube video
 */
export function getYoutubeEmbedUrl(videoUrl: string): string | null {
  const videoId = extractYoutubeVideoId(videoUrl);
  if (!videoId) return null;
  
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Get post type label in Portuguese
 */
export function getPostTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    blog: 'Blog',
    video: 'Vídeo',
    social: 'Rede Social',
  };
  
  return labels[type] ?? 'Post';
}

/**
 * Filter posts by search term
 */
export function searchPosts(posts: Post[], searchTerm: string): Post[] {
  const term = searchTerm.toLowerCase();
  
  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term)
    );
  });
}

/**
 * Group posts by month/year
 */
export function groupPostsByMonth(
  posts: Post[]
): Record<string, Post[]> {
  const grouped: Record<string, Post[]> = {};
  
  posts.forEach((post) => {
    if (!post.publishedAt) return;
    
    const date = parseISO(post.publishedAt);
    const key = date.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric',
    });
    
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(post);
  });
  
  return grouped;
}

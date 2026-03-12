"use client";

import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPostDate, getPostTypeLabel, isVideoPost, isSocialPost } from "@/lib/blog-service";
import { Play, Link as LinkIcon } from "lucide-react";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const postTypeLabel = getPostTypeLabel(post.type);
  const formattedDate = formatPostDate(post.publishedAt);
  
  let cardImage: React.ReactNode = null;
  
  if (post.type === 'blog' && post.media?.images) {
    cardImage = (
      <div className="relative w-full h-48 md:h-64 bg-gray-800 overflow-hidden rounded-2xl group">
        <Image
          src={post.media.images.desktop.url}
          alt={post.media.images.desktop.alt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EBA730] text-black">
              Destaque
            </span>
          </div>
        )}
      </div>
    );
  } else if (post.type === 'video') {
    cardImage = (
      <div className="relative w-full h-48 md:h-64 bg-gray-900 rounded-2xl flex items-center justify-center group overflow-hidden">
        {post.media?.youtubeUrl && (
          <>
            <Image
              src={`https://img.youtube.com/vi/${new URL(post.media.youtubeUrl).searchParams.get('v') || ''}/maxresdefault.jpg`}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#EBA730] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-black fill-black" />
              </div>
            </div>
          </>
        )}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EBA730] text-black">
              Vídeo
            </span>
          </div>
        )}
      </div>
    );
  } else if (post.type === 'social') {
    cardImage = (
      <div className="relative w-full h-48 md:h-64 bg-gray-900 rounded-2xl flex items-center justify-center group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/20 to-[#FAC934]/20" />
        <LinkIcon className="w-12 h-12 text-[#EBA730]" />
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EBA730] text-black">
              Rede Social
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`} className="group cursor-pointer block">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          {/* Image Section */}
          {cardImage}
          
          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Meta - Type and Date */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#EBA730] uppercase">
                {postTypeLabel}
              </span>
              <span className="text-xs text-gray-500">{formattedDate}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#EBA730] transition-colors">
              {post.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
              {post.excerpt}
            </p>
            
            {/* Unit info */}
            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-xs text-gray-500">{post.unidade.nome}</span>
              <span className="text-xs text-gray-500">{post.viewCount || 0} visualizações</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

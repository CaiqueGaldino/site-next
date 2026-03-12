"use client";

import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPostDateFull, getYoutubeEmbedUrl } from "@/lib/blog-service";
import { ChevronRight, Play } from "lucide-react";

interface FeaturedPostBannerProps {
  post: Post;
}

export function FeaturedPostBanner({ post }: FeaturedPostBannerProps) {
  const formattedDate = formatPostDateFull(post.publishedAt);
  const isVideo = post.type === 'video' && post.media?.youtubeUrl;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 rounded-3xl overflow-hidden"
    >
      <Link href={`/blog/${post.slug}`} className="block group cursor-pointer">
        <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
          {/* Background Image */}
          {post.type === 'blog' && post.media?.images && (
            <Image
              src={post.media.images.desktop.url}
              alt={post.media.images.desktop.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Video Icon (if video) */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 rounded-full bg-[#EBA730] flex items-center justify-center shadow-2xl"
              >
                <Play className="w-12 h-12 text-black fill-black" />
              </motion.div>
            </div>
          )}
          
          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6 w-fit"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#EBA730]"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#EBA730]"></span>
              </span>
              <span className="text-sm font-bold text-[#FAC934]">DESTAQUE PRINCIPAL</span>
            </motion.div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white group-hover:text-[#EBA730] transition-colors">
              {post.title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              {post.excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">{post.unidade.nome}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{formattedDate}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{post.viewCount || 0} visualizações</span>
              </div>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 bg-[#EBA730] text-black font-bold px-6 py-3 rounded-full hover:bg-[#FAC934] transition-colors"
              >
                Ler Agora
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}

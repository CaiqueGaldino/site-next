"use client";

import { Post } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  formatPostDateFull,
  getPostTypeLabel,
  getYoutubeEmbedUrl,
} from "@/lib/blog-service";
import { Calendar, MapPin, Eye } from "lucide-react";

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  const formattedDate = formatPostDateFull(post.publishedAt);
  const postTypeLabel = getPostTypeLabel(post.type);
  const youtubeEmbedUrl = post.type === 'video' && post.media?.youtubeUrl 
    ? getYoutubeEmbedUrl(post.media.youtubeUrl) 
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <header className="mb-12">
        {/* Featured Badge */}
        {post.featured?.isFeatured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-white"></span>
            </span>
            <span className="text-sm font-bold text-black">EM DESTAQUE</span>
          </motion.div>
        )}
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-[#EBA730]">
              {postTypeLabel}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{post.unidade.nome}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{post.viewCount || 0} visualizações</span>
          </div>
        </div>
      </header>
      
      {/* Featured Image / Video / Social */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        {post.type === "blog" && post.media?.images && (
          <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.media.images.desktop.url}
              alt={post.media.images.desktop.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {post.type === "video" && youtubeEmbedUrl && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={youtubeEmbedUrl}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
        
        {post.type === "social" && post.media?.socialUrl && (
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 text-center border-2 border-gray-800">
            <p className="text-gray-300 mb-6">Confira este conteúdo em nossa rede social:</p>
            <a
              href={post.media.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Abrir no Instagram
              <span className="text-lg">→</span>
            </a>
          </div>
        )}
      </motion.div>
      
      {/* Excerpt */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 mb-12 leading-relaxed italic border-l-4 border-[#EBA730] pl-6"
      >
        {post.excerpt}
      </motion.p>
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose prose-invert max-w-none mb-12"
      >
        <div
          className="text-gray-300 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </motion.div>
      
      {/* Author/Unit Info */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-800 pt-8 mt-12"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Publicado por</p>
            <p className="text-white font-bold">{post.author.username}</p>
            <p className="text-sm text-gray-400">{post.unidade.nome}</p>
          </div>
          
          <div className="text-right text-sm text-gray-400">
            <p>Atualizado em</p>
            <p className="text-white font-bold">
              {new Date(post.updatedAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </motion.footer>
    </motion.article>
  );
}

"use client";

import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPostDate, getPostTypeLabel } from "@/lib/blog-service";
import { Calendar, Play } from "lucide-react";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const postTypeLabel = getPostTypeLabel(post.type);
  const formattedDate = formatPostDate(post.publishedAt);

  let cardImage: React.ReactNode = null;

  if (post.type === "blog" && post.media?.images) {
    cardImage = (
      <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
        <Image
          src={post.media.images.desktop.url}
          alt={post.media.images.desktop.alt || post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-[#EBA730] px-3 py-1 text-xs font-extrabold text-black">
              Destaque
            </span>
          </div>
        )}
      </div>
    );
  } else if (post.type === "video") {
    cardImage = (
      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-zinc-900">
        {post.media?.youtubeUrl && (
          <>
            <Image
              src={`https://img.youtube.com/vi/${new URL(post.media.youtubeUrl).searchParams.get("v") || ""}/maxresdefault.jpg`}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/45 transition group-hover:bg-black/55">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EBA730] transition group-hover:scale-105">
                <Play className="h-7 w-7 fill-black text-black" />
              </div>
            </div>
          </>
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
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="brand-card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[#EBA730]/45">
          {cardImage}

          <div className="flex flex-grow flex-col p-6">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-500">
              <span className="font-extrabold uppercase text-[#FAC934]">
                {postTypeLabel}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
            </div>

            <h3 className="font-display mb-3 line-clamp-2 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#FAC934]">
              {post.title}
            </h3>

            <p className="line-clamp-2 flex-grow text-sm leading-relaxed text-zinc-400">
              {post.excerpt}
            </p>

            <div className="mt-5 border-t border-white/10 pt-4">
              <span className="text-xs text-zinc-500">{post.unidade.nome}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

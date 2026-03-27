"use client";

import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { PostCard } from "@/components/blog";
import { fetchPosts } from "@/lib/strapi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecentBlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetchPosts({ limit: 3 });
        setPosts(response.data || []);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 text-center text-zinc-500">
          Carregando blog...
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
              Blog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                Fitness Exclusive
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Conteúdo exclusivo sobre fitness, saúde e bem-estar. Dicas, tutoriais e novidades
              da comunidade Fitness Exclusive.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <div key={post.documentId}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Ver todos os posts
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    );
}

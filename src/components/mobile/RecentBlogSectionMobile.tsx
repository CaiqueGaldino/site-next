"use client";

import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { PostCard } from "@/components/blog";
import { fetchPosts } from "@/lib/strapi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecentBlogSectionMobile() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetchPosts({ limit: 2 });
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
      <section className="py-12 bg-zinc-900 px-6 font-medium text-center text-zinc-500">
        Carregando blog...
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
      <section className="py-12 bg-zinc-900 px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-3 text-white">
            Blog
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
              Fitness Exclusive
            </span>
          </h2>
          <p className="text-sm text-gray-300">
            Dicas, tutoriais e novidades sobre fitness e bem-estar
          </p>
        </div>

        {/* Posts Stack */}
        <div className="space-y-4 mb-8">
          {posts.map((post) => (
            <div key={post.documentId}>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-6 py-3 rounded-full transition-all w-full justify-center text-base shadow-lg"
          >
            Ver todos os posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    );
}

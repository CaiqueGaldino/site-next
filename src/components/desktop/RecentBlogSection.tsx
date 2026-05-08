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
      <section className="bg-zinc-950 py-20">
        <div className="section-shell text-center text-zinc-500">
          Carregando blog...
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-zinc-950 py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <h2 className="section-title">
            Conteúdos para treinar melhor com a{" "}
            <span className="gold-gradient-text">Fitness Exclusive</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            Conteúdo sobre fitness, saúde e bem-estar. Dicas, tutoriais e
            novidades da comunidade Fitness Exclusive.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.documentId}>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            Ver todos os posts
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Post } from "@/lib/types";
import { PostCard } from "@/components/blog";
import { mockPosts } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecentBlogSection() {
  const posts: Post[] = mockPosts.slice(0, 3);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-zinc-950 py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <h2 className="section-title">
            Conteudos para treinar melhor com a{" "}
            <span className="gold-gradient-text">Fitness Exclusive</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            Conteudo sobre fitness, saude e bem-estar. Dicas, tutoriais e
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

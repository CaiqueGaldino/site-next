import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/lib/strapi";
import { Post } from "@/lib/types";
import { formatPostDate, getPostTypeLabel } from "@/lib/blog-service";
import { getAssetPath } from "@/lib/utils";
import { ArrowLeft, Calendar, Eye, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Fitness Exclusive",
  description:
    "Conteúdo exclusivo sobre fitness, saúde e bem-estar. Dicas, tutoriais e novidades da comunidade Fitness Exclusive.",
};

function BlogPostCard({ post }: { post: Post }) {
  const formattedDate = formatPostDate(post.publishedAt);
  const typeLabel = getPostTypeLabel(post.type);
  const imageUrl =
    post.type === "blog" && post.media?.images
      ? post.media.images.desktop.url
      : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#EBA730]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#EBA730]/5 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 w-full bg-zinc-800 overflow-hidden flex-shrink-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.media?.images?.desktop.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#EBA730]/20 to-[#FAC934]/10 flex items-center justify-center">
              <span className="text-4xl opacity-30">
                {post.type === "video" ? "▶" : "📸"}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
          {/* Type badge */}
          <span className="absolute top-3 left-3 bg-[#EBA730] text-black text-xs font-bold px-3 py-1 rounded-full">
            {typeLabel}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {post.viewCount || 0} views
            </span>
          </div>

          <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#EBA730] transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-zinc-400 text-sm line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500">{post.unidade.nome}</span>
            <span className="text-[#EBA730] text-xs font-semibold group-hover:underline">
              Ler mais →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    const response = await fetchPosts({ limit: 100 });
    posts = response.data || [];
  } catch {
    posts = [];
  }

  // Group posts by type
  const featuredPost = posts.find((p) => p.featured?.isFeatured);
  const regularPosts = featuredPost
    ? posts.filter((p) => p.documentId !== featuredPost.documentId)
    : posts;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
          </div>
          <div className="relative w-36 h-10">
            <Image
              src={getAssetPath("/images/logo.webp")}
              alt="Fitness Exclusive"
              fill
              className="object-contain"
            />
          </div>
          <Link
            href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
            target="_blank"
            className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform"
          >
            Matricule-se
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EBA730]/5 via-transparent to-transparent" />
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#EBA730]/5 blur-3xl" />
          <div className="max-w-7xl mx-auto relative">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-5 h-5 text-[#EBA730]" />
              <span className="text-[#EBA730] font-semibold text-sm uppercase tracking-widest">
                Conteúdo Exclusivo
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
              Blog{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                Fitness Exclusive
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Dicas, tutoriais e novidades sobre fitness, saúde e bem-estar
              direto dos nossos coaches e especialistas.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
              <span>{posts.length} artigos publicados</span>
              <span>•</span>
              <span>Atualizado semanalmente</span>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-6 pb-20">
            <div className="max-w-7xl mx-auto">
              <p className="text-[#EBA730] font-semibold text-sm uppercase tracking-widest mb-6">
                Post em destaque
              </p>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#EBA730]/40 transition-all duration-300 hover:shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-72 md:h-full min-h-[300px] overflow-hidden">
                      {featuredPost.media?.images ? (
                        <Image
                          src={featuredPost.media.images.desktop.url}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#EBA730]/20 to-zinc-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80 md:block hidden" />
                    </div>
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="inline-block bg-[#EBA730] text-black text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                        Destaque
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#EBA730] transition-colors leading-snug">
                        {featuredPost.title}
                      </h2>
                      <p className="text-zinc-400 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatPostDate(featuredPost.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="w-4 h-4" />
                          {featuredPost.viewCount || 0} visualizações
                        </span>
                      </div>
                      <span className="text-[#EBA730] font-bold group-hover:underline">
                        Ler artigo completo →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black">
                Todos os{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                  Artigos
                </span>
              </h2>
              <span className="text-zinc-500 text-sm">
                {regularPosts.length} artigos
              </span>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <BlogPostCard key={post.documentId} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-zinc-500 text-lg">
                  Nenhum post encontrado. Volte em breve!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-32 h-10">
            <Image
              src={getAssetPath("/images/logo.webp")}
              alt="Fitness Exclusive"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Fitness Exclusive — Todos os direitos
            reservados.
          </p>
          <Link
            href="/"
            className="text-[#EBA730] hover:underline text-sm font-medium"
          >
            ← Voltar ao site principal
          </Link>
        </div>
      </footer>
    </div>
  );
}

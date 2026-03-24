import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPostBySlug, generateBlogStaticParams } from "@/lib/strapi";
import { fetchPosts } from "@/lib/strapi";
import { Post } from "@/lib/types";
import { formatPostDate, getPostTypeLabel } from "@/lib/blog-service";
import { getAssetPath } from "@/lib/utils";
import { ArrowLeft, Calendar, Eye, User, MapPin } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: "Post não encontrado | Blog Fitness Exclusive" };

  return {
    title: `${post.title} | Blog Fitness Exclusive`,
    description:
      post.seo?.metaDescription || post.excerpt || "Leia no blog da Fitness Exclusive.",
    keywords: post.seo?.metaKeywords?.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images:
        post.type === "blog" && post.media?.images
          ? [{ url: post.media.images.desktop.url }]
          : [],
    },
  };
}

function RelatedPostCard({ post }: { post: Post }) {
  const imageUrl =
    post.type === "blog" && post.media?.images
      ? post.media.images.desktop.url
      : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#EBA730]/40 transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-40 w-full overflow-hidden bg-zinc-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#EBA730]/20 to-zinc-800" />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-sm line-clamp-2 group-hover:text-[#EBA730] transition-colors">
            {post.title}
          </h3>
          <p className="text-zinc-500 text-xs mt-2">
            {formatPostDate(post.publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) notFound();

  const imageUrl =
    post.type === "blog" && post.media?.images
      ? post.media.images.desktop.url
      : null;

  // Fetch related posts
  let relatedPosts: Post[] = [];
  try {
    const allPosts = await fetchPosts({ limit: 100 });
    relatedPosts = (allPosts.data || [])
      .filter((p) => p.documentId !== post.documentId && p.type === "blog")
      .slice(0, 3);
  } catch {
    relatedPosts = [];
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
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
        {/* Hero Image */}
        {imageUrl && (
          <div className="relative h-[50vh] w-full">
            <Image
              src={imageUrl}
              alt={post.media?.images?.desktop.alt || post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#EBA730] text-black text-xs font-bold px-3 py-1 rounded-full">
              {getPostTypeLabel(post.type)}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-500 text-sm">
              <Calendar className="w-4 h-4" />
              {formatPostDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-500 text-sm">
              <Eye className="w-4 h-4" />
              {post.viewCount || 0} visualizações
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-white">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-zinc-400 leading-relaxed mb-8 border-l-4 border-[#EBA730] pl-5">
              {post.excerpt}
            </p>
          )}

          {/* Author & Unit Info */}
          <div className="flex items-center gap-6 py-5 border-t border-b border-zinc-800 mb-10">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EBA730] to-[#FAC934] flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-black" />
              </div>
              <span>@{post.author.username}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="w-4 h-4 text-[#EBA730]" />
              <span>{post.unidade.nome}</span>
            </div>
          </div>

          {/* Content */}
          {post.content ? (
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-zinc-400">Conteúdo indisponível.</p>
          )}

          {/* YouTube embed */}
          {post.type === "video" && post.media?.youtubeUrl && (
            <div className="mt-8 rounded-2xl overflow-hidden aspect-video">
              <iframe
                src={post.media.youtubeUrl.replace("watch?v=", "embed/")}
                className="w-full h-full"
                allowFullScreen
                title={post.title}
              />
            </div>
          )}

          {/* Social link */}
          {post.type === "social" && post.media?.socialUrl && (
            <a
              href={post.media.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 bg-zinc-900 rounded-2xl p-4 border border-zinc-800 hover:border-[#EBA730]/40 transition-all"
            >
              <span className="text-[#EBA730] font-bold">
                Ver nas redes sociais →
              </span>
            </a>
          )}

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-[#EBA730]/20 p-8 text-center">
            <h3 className="text-2xl font-black mb-3">
              Pronto para ir além?
            </h3>
            <p className="text-zinc-400 mb-6">
              Venha treinar com a gente e transforme sua jornada fitness com orientação profissional.
            </p>
            <Link
              href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
              target="_blank"
              className="inline-block bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Matricule-se agora
            </Link>
          </div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-[#EBA730] hover:underline font-medium"
            >
              ← Voltar para todos os artigos
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-zinc-800 py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-black mb-8">
                Artigos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                  Relacionados
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <RelatedPostCard key={p.documentId} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
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

      {/* Prose Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .prose-content {
            color: #a1a1aa;
            font-size: 1.0625rem;
            line-height: 1.8;
          }
          .prose-content h2 {
            color: #ffffff;
            font-size: 1.75rem;
            font-weight: 900;
            margin: 2.5rem 0 1rem;
            line-height: 1.2;
          }
          .prose-content h3 {
            color: #EBA730;
            font-size: 1.25rem;
            font-weight: 700;
            margin: 2rem 0 0.75rem;
          }
          .prose-content p {
            margin: 0 0 1.5rem;
          }
          .prose-content ul, .prose-content ol {
            margin: 0 0 1.5rem;
            padding-left: 1.5rem;
          }
          .prose-content li {
            margin-bottom: 0.5rem;
          }
          .prose-content strong {
            color: #ffffff;
            font-weight: 700;
          }
        `,
        }}
      />
    </div>
  );
}

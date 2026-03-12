"use client";

import { Post } from "@/lib/types";
import { PostCard } from "./PostCard";
import { FeaturedPostBanner } from "./FeaturedPostBanner";
import { sortPostsWithFeatured, isPostCurrentlyFeatured } from "@/lib/blog-service";
import { motion } from "framer-motion";

interface PostListProps {
  posts: Post[];
  showFeaturedBanner?: boolean;
}

export function PostList({ posts, showFeaturedBanner = true }: PostListProps) {
  const sortedPosts = sortPostsWithFeatured(posts);
  
  // Get featured posts for banner
  const featuredForBanner = showFeaturedBanner
    ? sortedPosts.find(
        (post) =>
          isPostCurrentlyFeatured(post) &&
          post.featured?.position === "top"
      )
    : null;
  
  // Get remaining posts
  const displayPosts = featuredForBanner
    ? sortedPosts.filter((post) => post.documentId !== featuredForBanner.documentId)
    : sortedPosts;
  
  const featuredRegular = displayPosts.filter(isPostCurrentlyFeatured);
  const regularPosts = displayPosts.filter((post) => !isPostCurrentlyFeatured(post));

  return (
    <div className="space-y-12">
      {/* Featured Banner */}
      {featuredForBanner && (
        <FeaturedPostBanner post={featuredForBanner} />
      )}
      
      {/* Featured Cards in Grid (banner/carousel position) */}
      {featuredRegular.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-black text-white mb-2">
              Conteúdo em Destaque
            </h3>
            <p className="text-gray-400">Não perca esses posts selecionados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRegular.map((post) => (
              <PostCard
                key={post.documentId}
                post={post}
                featured={true}
              />
            ))}
          </div>
        </motion.section>
      )}
      
      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-black text-white mb-2">
              Todos os Posts
            </h3>
            <p className="text-gray-400">
              Descubra novos conteúdos sobre fitness e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <PostCard
                key={post.documentId}
                post={post}
              />
            ))}
          </div>
        </motion.section>
      )}
      
      {/* Empty State */}
      {posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Nenhum post encontrado
          </h3>
          <p className="text-gray-400">
            Volte em breve para acompanhar nossos conteúdos sobre fitness e bem-estar
          </p>
        </motion.div>
      )}
    </div>
  );
}

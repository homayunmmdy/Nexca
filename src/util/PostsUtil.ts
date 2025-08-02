import { PostsCashType } from '@/types/CashTypes';
import PostsCash from '@/cash/PostsCash';

/**
 * Get posts sorted by likes count in descending order
 */
export const getMostLikedPosts = (limit?: number): PostsCashType[] => {
  const sortedPosts = [...PostsCash]
    .filter(post => post.likes && post.likes > 0)
    .sort((a, b) => (b.likes || 0) - (a.likes || 0));
    
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

/**
 * Get posts with likes above a certain threshold
 */
export const getPostsWithMinLikes = (minLikes: number): PostsCashType[] => {
  return PostsCash.filter(post => (post.likes || 0) >= minLikes);
};

/**
 * Get total likes across all posts
 */
export const getTotalLikesCount = (): number => {
  return PostsCash.reduce((total, post) => total + (post.likes || 0), 0);
};

/**
 * Get average likes per post
 */
export const getAverageLikes = (): number => {
  const postsWithLikes = PostsCash.filter(post => post.likes && post.likes > 0);
  if (postsWithLikes.length === 0) return 0;
  
  const totalLikes = getTotalLikesCount();
  return Math.round(totalLikes / postsWithLikes.length);
};

/**
 * Get trending posts (posts with high likes relative to their age)
 */
export const getTrendingPosts = (limit: number = 10): PostsCashType[] => {
  const now = new Date();
  
  return [...PostsCash]
    .filter(post => post.likes && post.likes > 0)
    .map(post => {
      const createdAt = new Date(post.createdAt);
      const daysSinceCreated = Math.max(1, (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
      const trendingScore = (post.likes || 0) / Math.sqrt(daysSinceCreated);
      
      return { ...post, trendingScore };
    })
    .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
    .slice(0, limit);
};
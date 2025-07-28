/**
 * Utility functions for managing post likes
 */

const LIKES_STORAGE_KEY = 'nexca_liked_posts';

export interface LikedPost {
  id: string;
  title: string;
  likedAt: string;
}

/**
 * Get all liked posts from localStorage
 */
export const getLikedPosts = (): LikedPost[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const likedPosts = localStorage.getItem(LIKES_STORAGE_KEY);
    return likedPosts ? JSON.parse(likedPosts) : [];
  } catch (error) {
    console.error('Error getting liked posts:', error);
    return [];
  }
};

/**
 * Check if a post is liked
 */
export const isPostLiked = (postId: string): boolean => {
  const likedPosts = getLikedPosts();
  return likedPosts.some(post => post.id === postId);
};

/**
 * Add a post to liked posts
 */
export const likePost = (postId: string, title: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const likedPosts = getLikedPosts();
    
    // Check if already liked
    if (likedPosts.some(post => post.id === postId)) {
      return false;
    }
    
    const newLikedPost: LikedPost = {
      id: postId,
      title: title.slice(0, 100), // Limit title length
      likedAt: new Date().toISOString()
    };
    
    likedPosts.push(newLikedPost);
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likedPosts));
    return true;
  } catch (error) {
    console.error('Error liking post:', error);
    return false;
  }
};

/**
 * Remove a post from liked posts
 */
export const unlikePost = (postId: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const likedPosts = getLikedPosts();
    const filteredPosts = likedPosts.filter(post => post.id !== postId);
    
    if (filteredPosts.length === likedPosts.length) {
      return false; // Post was not liked
    }
    
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(filteredPosts));
    return true;
  } catch (error) {
    console.error('Error unliking post:', error);
    return false;
  }
};

/**
 * Toggle like status of a post
 */
export const togglePostLike = (postId: string, title: string): boolean => {
  if (isPostLiked(postId)) {
    unlikePost(postId);
    return false;
  } else {
    likePost(postId, title);
    return true;
  }
};

/**
 * Get count of liked posts
 */
export const getLikedPostsCount = (): number => {
  return getLikedPosts().length;
};

/**
 * Clear all liked posts
 */
export const clearAllLikedPosts = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(LIKES_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing liked posts:', error);
  }
};
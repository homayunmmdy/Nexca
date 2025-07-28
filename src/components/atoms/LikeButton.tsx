"use client";
import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { isPostLiked, togglePostLike } from '../../util/LikesUtil';

interface LikeButtonProps {
  postId: string;
  postTitle: string;
  initialLikes?: number;
  showCount?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LikeButton: React.FC<LikeButtonProps> = ({
  postId,
  postTitle,
  initialLikes = 0,
  showCount = true,
  className = '',
  size = 'md'
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsLiked(isPostLiked(postId));
  }, [postId]);

  const handleLikeToggle = () => {
    const newLikedState = togglePostLike(postId, postTitle);
    setIsLiked(newLikedState);
    
    // Update likes count optimistically
    setLikesCount(prev => newLikedState ? prev + 1 : prev - 1);
    
    // Add animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 14;
      case 'lg':
        return 20;
      default:
        return 16;
    }
  };

  return (
    <button
      onClick={handleLikeToggle}
      className={`
        flex items-center gap-1 transition-all duration-200 hover:scale-105
        ${isAnimating ? 'animate-pulse' : ''}
        ${getSizeClasses()}
        ${className}
      `}
      title={isLiked ? 'Unlike this post' : 'Like this post'}
      aria-label={isLiked ? 'Unlike this post' : 'Like this post'}
    >
      {isLiked ? (
        <FaHeart 
          size={getIconSize()} 
          className="text-red-500 transition-colors duration-200" 
        />
      ) : (
        <FaRegHeart 
          size={getIconSize()} 
          className="text-gray-500 hover:text-red-400 transition-colors duration-200" 
        />
      )}
      {showCount && (
        <span className={`font-medium ${isLiked ? 'text-red-500' : 'text-gray-600'}`}>
          {likesCount}
        </span>
      )}
    </button>
  );
};

export default LikeButton;
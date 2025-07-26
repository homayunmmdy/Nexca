"use client";
import { Button } from "@/components/atoms";
import { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

interface BookmarkButtonProps {
  postId: string;
}

const BookmarkButton = ({ postId }: BookmarkButtonProps) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (postId) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarked(bookmarks.includes(postId));
    }
  }, [postId]);

  const handleBookmark = () => {
    if (!postId) return;
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    if (bookmarks.includes(postId)) {
      bookmarks = bookmarks.filter((id: string) => id !== postId);
      setBookmarked(false);
    } else {
      bookmarks.push(postId);
      setBookmarked(true);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return (
    <Button
      className="rounded-full text-white hover:scale-105 transition-transform"
      onClick={handleBookmark}
      color="btn-primary"
      style={{ backgroundColor: '#432dd7' }}
      aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
    >
      {bookmarked ? (
        <FaBookmark className="text-white" />
      ) : (
        <FiBookmark className="text-white" />
      )}
    </Button>
  );
};

export default BookmarkButton;

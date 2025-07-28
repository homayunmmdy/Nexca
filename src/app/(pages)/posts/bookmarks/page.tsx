"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiBookmark } from "react-icons/fi";

const fetchPosts = async (ids: string[]) => {
  const results = await Promise.all(
    ids.map(async (id) => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data;
      } catch {
        return null;
      }
    })
  );
  return results.filter(Boolean);
};

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(stored);
  }, []);

  useEffect(() => {
    if (bookmarks.length > 0) {
      fetchPosts(bookmarks).then(setPosts);
    } else {
      setPosts([]);
    }
  }, [bookmarks]);

  const handleRemove = (id: string) => {
    const updated = bookmarks.filter((bid) => bid !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleView = (id: string, title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    router.push(`/posts/${id}/${slug}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FiBookmark className="text-yellow-500" /> Bookmarked Posts
      </h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No bookmarks yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex-1 cursor-pointer" onClick={() => handleView(post._id, post.title)}>
                <h2 className="text-lg font-semibold hover:underline">{post.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemove(post._id)}
                  className="text-red-500 hover:text-red-700 text-sm border px-2 py-1 rounded"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleView(post._id, post.title)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Full Page
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarksPage; 
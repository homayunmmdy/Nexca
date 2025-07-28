import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <div className="flex justify-end mb-4">
        <Link href="/posts/bookmarks" className="text-blue-600 hover:underline font-medium">
          View Bookmarks
        </Link>
      </div>
      {/* Add other post content here */}
    </div>
  );
} 
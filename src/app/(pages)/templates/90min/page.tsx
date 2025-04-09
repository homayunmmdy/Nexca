'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Define TypeScript interfaces
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const HomePage: React.FC = () => {
  // Sample data - in a real application, this would come from an API
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Mock data initialization
    setCategories([
      { id: 1, name: "Music", slug: "music" },
      { id: 2, name: "Film", slug: "film" },
      { id: 3, name: "Culture", slug: "culture" },
      { id: 4, name: "Travel", slug: "travel" },
      { id: 5, name: "Art", slug: "art" },
    ]);

    setFeaturedArticles([
      {
        id: 1,
        title: "The Beatles 50 greatest songs ranked and rated",
        excerpt:
          "Exploring the Fab Four is most influential tracks and their lasting impact on music.",
        category: "Music",
        image: "/images/beatles-featured.jpg",
        slug: "beatles-50-greatest-songs",
        date: "April 5, 2025",
      },
      {
        id: 2,
        title: "Radiohead s Thom Yorke shares haunting new solo track",
        excerpt:
          "The frontman returns with an atmospheric new composition that pushes boundaries.",
        category: "Music",
        image: "/images/thom-yorke.jpg",
        slug: "thom-yorke-new-track",
        date: "April 4, 2025",
      },
      {
        id: 3,
        title: "Martin Scorsese reveals his top 10 films of all time",
        excerpt:
          "The legendary director offers insight into the cinema that shaped his visionary approach.",
        category: "Film",
        image: "/images/scorsese.jpg",
        slug: "scorsese-top-films",
        date: "April 3, 2025",
      },
    ]);

    setLatestArticles([
      {
        id: 4,
        title: "Exploring Nick Cave s literary influences",
        excerpt:
          "How literature shaped the dark poetry of one of music is most enigmatic songwriters.",
        category: "Culture",
        image: "/images/nick-cave.jpg",
        slug: "nick-cave-literary-influences",
        date: "April 6, 2025",
      },
      {
        id: 5,
        title: "The rise of Japan s psychedelic rock scene",
        excerpt:
          "How a new generation of Japanese musicians are reinventing psych rock for the modern era.",
        category: "Music",
        image: "/images/japanese-psych.jpg",
        slug: "japan-psychedelic-rock",
        date: "April 5, 2025",
      },
      {
        id: 6,
        title: "Wes Anderson announces surprise new film project",
        excerpt:
          "The acclaimed director unveils details of his upcoming feature starring frequent collaborators.",
        category: "Film",
        image: "/images/wes-anderson.jpg",
        slug: "wes-anderson-new-film",
        date: "April 5, 2025",
      },
      {
        id: 7,
        title: "Lost David Bowie recordings discovered in archive",
        excerpt:
          "Previously unheard sessions from the Ziggy Stardust era set for special release.",
        category: "Music",
        image: "/images/bowie.jpg",
        slug: "bowie-lost-recordings",
        date: "April 4, 2025",
      },
      {
        id: 8,
        title: "Inside Berlin s underground art revolution",
        excerpt:
          "How the city is creative scenes are challenging conventions and rewriting cultural rules.",
        category: "Art",
        image: "/images/berlin-art.jpg",
        slug: "berlin-art-revolution",
        date: "April 3, 2025",
      },
      {
        id: 9,
        title: "The ultimate rock pilgrimage destinations",
        excerpt:
          "From Graceland to Abbey Road: the landmark locations every music fan should visit.",
        category: "Travel",
        image: "/images/rock-destinations.jpg",
        slug: "rock-pilgrimage-destinations",
        date: "April 2, 2025",
      },
    ]);
  }, []);

  return (
    <>
      <header className="bg-black text-white">
        {/* Top navigation bar */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Social media icons */}
            <div className="hidden md:flex space-x-3">
              <a href="#" className="hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 text-center md:text-left">
            <Link href="/">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter">
                FAR OUT
              </span>
            </Link>
          </div>

          {/* Search and menu button */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-400">
              <span className="sr-only">Search</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="md:hidden hover:text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories navigation */}
        <nav className="hidden md:block border-t border-gray-800">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center md:justify-start space-x-6 py-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`}>
                    <span className="hover:text-gray-400 font-medium">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-4">
              {categories.map((category) => (
                <Link key={category.id} href={`/category/${category.slug}`}>
                  <span className="block px-3 py-2 text-base font-medium hover:bg-gray-900">
                    {category.name}
                  </span>
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex justify-center space-x-6">
                  <a href="#" className="hover:text-gray-400">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-400">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-400">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-400">
                    <span className="sr-only">YouTube</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="bg-gray-100">
        {/* Hero section with featured article */}
        <section className="bg-black text-white">
          {featuredArticles.length > 0 && (
            <div className="relative">
              <div className="h-96 md:h-screen max-h-96 md:max-h-[70vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                {/* This would be a real image in production */}
                <div className="h-full w-full bg-gray-800 flex justify-center items-center">
                  <span className="text-gray-600 text-lg">Featured Image</span>
                </div>
              </div>
              <div className="container mx-auto px-4">
                <div className="absolute bottom-8 left-0 right-0 z-20 px-4 md:px-12">
                  <div className="max-w-3xl">
                    <Link
                      href={`/category/${featuredArticles[0].category.toLowerCase()}`}
                    >
                      <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-medium mb-3">
                        {featuredArticles[0].category}
                      </span>
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                      <Link href={`/article/${featuredArticles[0].slug}`}>
                        <span>{featuredArticles[0].title}</span>
                      </Link>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-4">
                      {featuredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{featuredArticles[0].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Secondary featured articles */}
        <section className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.slice(1, 3).map((article) => (
                <div key={article.id} className="relative">
                  <div className="h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
                    {/* This would be a real image in production */}
                    <div className="h-full w-full bg-gray-800 flex justify-center items-center">
                      <span className="text-gray-600 text-lg">
                        Article Image
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 z-20 px-4">
                    <div>
                      <Link
                        href={`/category/${article.category.toLowerCase()}`}
                      >
                        <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-medium mb-2">
                          {article.category}
                        </span>
                      </Link>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        <Link href={`/article/${article.slug}`}>
                          <span>{article.title}</span>
                        </Link>
                      </h2>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Latest Articles
              </h2>
              <Link href="/articles">
                <span className="text-red-600 hover:text-red-700 font-medium">
                  View All <span className="ml-1">→</span>
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white shadow-md overflow-hidden"
                >
                  <div className="h-48 relative overflow-hidden">
                    {/* This would be a real image in production */}
                    <div className="h-full w-full bg-gray-200 flex justify-center items-center">
                      <span className="text-gray-400 text-lg">
                        Article Image
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link href={`/category/${article.category.toLowerCase()}`}>
                      <span className="inline-block text-red-600 font-medium text-sm mb-2">
                        {article.category}
                      </span>
                    </Link>
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/article/${article.slug}`}>
                        <span className="hover:text-red-600 transition duration-200">
                          {article.title}
                        </span>
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter subscription */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-400 mb-8">
                Get the latest music news, exclusive interviews, and cultural
                insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our privacy policy and terms of
                service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

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

import { ReactQueryProvider } from "@/components";
import SiteConfig from "@/etc/config/stie";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./(etc)/components";
import Header from "./(etc)/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  publisher: SiteConfig.name,
  authors: SiteConfig.authors,
  robots: SiteConfig.robots,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
  alternates: {
    canonical: SiteConfig.siteURL,
  },
  openGraph: {
    title: SiteConfig.name,
    description: SiteConfig.description.slice(0, 150),
    siteName: SiteConfig.name,
    authors: SiteConfig.author,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      secureUrl: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      width: 1200,
      height: 630,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SiteConfig.name}`,
    description: SiteConfig.description.slice(0, 150),
    creator: `@${SiteConfig.authorID}`,
    images: {
      url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
      alt: `Preview image for ${SiteConfig.name}`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="mt-[120px]">{children}</main>
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}

import SiteConfig from "@/app/config/site";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import { Footer, Navbar } from "./components/general";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: SiteConfig.authors,
  verification: {
    google: "gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo",
  },
  alternates: {
    canonical: SiteConfig.siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
        <body className={inter.className}>
          <Navbar />
          <h1 className="hidden">{SiteConfig.name}</h1>
          <main className="bg-white">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </body>
        <Analytics />
      </html>
    </>
  );
}
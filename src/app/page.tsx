import {
  Banner,
  Companies,
  EmailList,
  FAQs,
  Features,
  Hero,
  PriceList,
  StatcsSect,
} from "@/components";
import SiteConfig from "@/config/stie";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: SiteConfig.title.slice(0, 60),
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
const Home: React.FC = () => {
  return (
    <>
      <h1 className="hidden">{SiteConfig.title}</h1>
      <Hero />
      <Features />
      <Companies />
      <StatcsSect />
      <FAQs />
      <Banner />
      <PriceList />
      <EmailList />
    </>
  );
};

export default Home;

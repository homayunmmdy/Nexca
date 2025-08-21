import SiteConfig from "@/config/site";
import { Metadata } from "next";
import React from "react";
import CTA from "./components/CTA";
import DocsHero from "./components/DocsHero";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PriceList from "./components/PriceList";
import StatsSection from "./components/StatsSection";
import TechStacks from "./components/TechStacks";

/**
 * LandingPage
 *
 * This is the main landing page of the website. It includes various sections such as Hero, Features, TechStacks, etc.
 * The page is designed to be SEO-friendly and optimized for user engagement.
 *
 * @returns {React.FC} - Returns a React Functional Component representing the landing page.
 */

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <DocsHero />
      <CTA />
      <TechStacks />
      <FAQs />
      <StatsSection />
      <PriceList />
    </>
  );
};

export default LandingPage;

/**
 * Metadata configuration for the landing page.
 * This includes SEO-friendly tags for search engines and social media platforms.
 */
export const metadata: Metadata = {
  title: SiteConfig.title.slice(0, 60),
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  authors: SiteConfig.authors,
  robots: SiteConfig.robots,

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

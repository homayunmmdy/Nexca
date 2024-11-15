import SiteConfig from "@/config/stie";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${SiteConfig.siteURL}/sitemap.xml`,
  };
}

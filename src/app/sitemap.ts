import SiteConfig from "@/config/stie";

export default function sitemap() {
  return [
    {
      url: SiteConfig.siteURL,
    },
    {
      url: `${SiteConfig.siteURL}/demo`,
    },
    {
      url: `${SiteConfig.siteURL}/services/1`,
    },
     {
      url: `${SiteConfig.siteURL}/about`,
    },
    {
      url: `${SiteConfig.siteURL}/contacts`,
    },
  ];
}

const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "Nexca",
  description: "CMS admin panel for blogger or agency",
  keywords: "blog , CMS admin , nexca , blogger",
  authors: "Nexca Team",
  siteUrl: `${API_URL}`,
  lang: "en",
  dir: "ltr",
  nav: [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: " Admin",
      link: "/admin",
    },
    {
      id: 3,
      name: " Demo",
      link: "/demo",
    },
    {
      id: 3,
      name: "Contacts",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;
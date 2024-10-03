const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "Nexca",
  title: "The Ultimate Admin Panel for Agencies and Individuals",
  description:
    "Nexca offers a robust admin panel for agencies and individuals, enabling seamless data management, content sharing, and audience engagement. Build your brand effortlessly with Nexca.",
  keywords: "Admin panel , Dashboard , Custom panel, Data Ma Data management",
  authors: [{ name: "Nexca Team", url: API_URL }],
  siteURL: `${API_URL}`,
  lang: "en",
  dir: "ltr",
  // media
  email: "homayoun763@gmail.com",
  github: "https://github.com/homayunmmdy/Nexca",
  phoneNumber: "0922 4003 487",
  linkedin: "https://www.linkedin.com/in/homayunmmdy/",
  robots: "index , follow",
  author: "Magnitify Team",
  authorID: "magnitify_Team",
  // Navbar
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

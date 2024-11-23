const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "Nexca",
  title: "The Ultimate Admin Panel for Agencies and Individuals",
  description:
    "Nexca offers a robust admin panel for agencies and individuals, enabling seamless data management, content sharing, and audience engagement.",
  keywords: "Admin panel , Dashboard , Custom panel, Data Ma Data management",
  authors: [{ name: "Nexca Team", url: API_URL }],
  siteURL: `${API_URL}`,
  lang: "en",
  dir: "ltr",
  slogan:
    "Nexca is your go-to platform for creating powerful admin panels. Manage data, share thoughts, and connect with your audience easily, whether you're an agency or an individual looking to build your brand.",
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

import { CgFeed } from "react-icons/cg";
import { FaTimeline } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { VscGraphScatter } from "react-icons/vsc";

export const adminPages = [
  { name: "Admin", href: "/admin", icon: TiHome },
  { name: "Posts", href: "/admin/posts", icon: CgFeed },
  { name: "New Post", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "Text Adv", href: "/admin/textadv", icon: RiAdvertisementLine },
  { name: "Services", href: "/admin/services", icon: SiCloudflarepages },
  { name: "Sections", href: "/admin/sections", icon: TbNewSection },
  // { name: "New book", href: "/admin/publications/new", icon: LuBookPlus},
  // { name: "books", href: "/admin/publications", icon: LuBookCopy},
  { name: "Emails", href: "/admin/emails", icon: MdOutlineMail },
  {
    name: "Contributions",
    href: "/admin/contribution/new",
    icon: VscGraphScatter,
  },
  { name: "TimeLine", href: "/admin/time/new", icon: FaTimeline },
  { name: "Tickets", href: "/admin/tickets", icon: GiTicket },
  { name: "Contacts", href: "/admin/contacts", icon: PiPhoneCallFill },
];

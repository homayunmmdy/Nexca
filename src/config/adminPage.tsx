import { CgFeed } from "react-icons/cg";
import {
  FaAdversal,
  FaComment,
  FaHome,
  FaPager,
  FaPhoneAlt,
  FaRegEdit,
  FaSitemap,
  FaTags,
} from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdLiveTv, MdOutlineMail } from "react-icons/md";
import RouteConfig from "./RouteConfig";

export const adminPages = [
  { name: "Admin", href: RouteConfig.admin.base, icon: FaHome },
  { name: "Posts", href: RouteConfig.admin.posts.base, icon: CgFeed },
  { name: "New Post", href: RouteConfig.admin.posts.new, icon: FaRegEdit },
  { name: "Text Adv", href: RouteConfig.admin.textadv.base, icon: FaAdversal },
  { name: "Sections", href: RouteConfig.admin.sections.base, icon: FaSitemap },
  { name: "Services", href: RouteConfig.admin.services.base, icon: FaPager },
  { name: "Emails", href: RouteConfig.admin.emails, icon: MdOutlineMail },
  { name: "Contacts", href: RouteConfig.admin.contacts, icon: FaPhoneAlt },
  { name: "Help", href: RouteConfig.admin.help.base, icon: FaQuestion },
];

export const EditPostPages = [
  { name: "See Live", href: "live", icon: MdLiveTv },
  { name: "Edit Post", href: "", icon: FaRegEdit },
  { name: "Comments", href: "comments", icon: FaComment },
  { name: "Categories", href: "categories", icon: FaTags },
];

export const HelpPages = [
  { name: "Admin", href: RouteConfig.admin.base, icon: FaHome },
  { name: "Help", href: RouteConfig.admin.help.base, icon: FaQuestion },
  { name: "Text Adv", href: RouteConfig.admin.help.textadv, icon: FaAdversal },
  { name: "Sections", href: RouteConfig.admin.help.sections, icon: FaSitemap },
  { name: "Services", href: RouteConfig.admin.help.services, icon: FaPager },
  { name: "Contacts", href: RouteConfig.admin.help.contacts, icon: FaPhoneAlt },
];

export const SettingsPages = [
  { name: "Admin Setting", href: RouteConfig.admin.settings.base, icon: IoMdSettings },
];

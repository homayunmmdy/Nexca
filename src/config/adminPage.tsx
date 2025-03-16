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
import { MdLiveTv, MdOutlineMail } from "react-icons/md";

export const adminPages = [
  { name: "Admin", href: "/admin", icon: FaHome },
  { name: "Posts", href: "/admin/posts", icon: CgFeed },
  { name: "New Post", href: "/admin/posts/new", icon: FaRegEdit },
  { name: "Text Adv", href: "/admin/textadv", icon: FaAdversal },
  { name: "Sections", href: "/admin/sections", icon: FaSitemap },
  { name: "Services", href: "/admin/services", icon: FaPager },
  { name: "Emails", href: "/admin/emails", icon: MdOutlineMail },
  { name: "Contacts", href: "/admin/contacts", icon: FaPhoneAlt },
  { name: "Help", href: "/admin/help", icon: FaQuestion },
];

export const EditPostPages = [
  { name: "See Live", href: "live", icon: MdLiveTv  },
  { name: "Edit Post", href: "", icon: FaRegEdit },
  { name: "Comments", href: "comments", icon: FaComment },
  { name: "Categories", href: "categories", icon: FaTags },
];


export const HelpPages = [
  { name: "Admin", href: "/admin", icon: FaHome },
  { name: "Help", href: "/admin/help", icon: FaQuestion },
  { name: "Text Adv", href: "/admin/textadv", icon: FaAdversal },
  { name: "Sections", href: "/admin/help/sections", icon: FaSitemap },
  { name: "Services", href: "/admin/help/services", icon: FaPager },
]
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgFeed } from "react-icons/cg";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";

const links = [
  { name: "Admin", href: "/admin", icon: TiHome },
  { name: "Posts", href: "/admin/posts", icon: CgFeed },
  { name: "New Post", href: "/admin/post/new", icon: MdOutlinePostAdd },
  { name: "Services", href: "/admin/services", icon: SiCloudflarepages },
  { name: "Sections", href: "/admin/sections", icon: TbNewSection },
  { name: "Emails", href: "/admin/emails", icon: MdOutlineMail },
  { name: "Contacts", href: "/admin/contacts", icon: PiPhoneCallFill }
];
const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="items-center block w-auto h-screen overflow-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 gap-2">
          {links.map((link, index) => {
            const LinkIcon = link.icon;
            return (
              <li className="mt-0.5 w-full" key={index}>
                {pathname === link.href ? (
                  <Link
                    className="py-2.7 shadow-soft-xl p-1 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-indigo-700 hover:bg-indigo-600 text-white px-4 font-semibold  transition-colors"
                    href={link.href}
                  >
                    <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="py-2.7 text-sm ease-nav-brand  p-1 my-0 flex items-center whitespace-nowrap px-4 hover:text-white hover:bg-indigo-500 transition-colors rounded-xl"
                    href={link.href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#333" />
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                      {link.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="max-w-full mt-4">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default NavLink;

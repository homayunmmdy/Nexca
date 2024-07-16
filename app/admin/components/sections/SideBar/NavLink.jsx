import { TiHome } from "react-icons/ti";
import { MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { CgFeed } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { TbNewSection } from "react-icons/tb";
import { SiCloudflarepages } from "react-icons/si";
import Link from "next/link";

const links = [
  {name: "Admin", href: "/admin", icon: TiHome },
  {name: "Posts", href: "/admin/posts", icon: CgFeed },
  {name: "New Post", href: "/admin/post/new", icon: MdOutlinePostAdd },
  {name: "Services", href: "/admin/services", icon: SiCloudflarepages },
  {name: "Sections", href: "/admin/sections", icon: TbNewSection },
  {name: "Contacts", href: "/admin/contacts", icon: PiPhoneCallFill }
];
const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 gap-2">
          {links.map((link , index) => {
            const LinkIcon = link.icon;
            return (
              <li className="mt-0.5 w-full" key={index}>
                {pathname === link.href ? (
                  <Link
                    className="py-2.7 shadow-soft-xl p-1 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-white px-4 font-semibold text-slate-700 transition-colors"
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
                    className="py-2.7 text-sm ease-nav-brand  p-1 my-0 flex items-center whitespace-nowrap px-4 transition-colors hover:bg-white rounded-xl"
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
      </div>
    </>
  );
};

export default NavLink;

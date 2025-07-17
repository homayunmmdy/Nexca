import { HeaderMenuConfigType } from "@/types/entities";
import Link from "next/link";
import HeaderServices from "./HeaderServices";
import HeaderMap from "./HeaderMap";

const HeaderMenu = ({
  pathname,
  nav,
}: {
  pathname: string;
  nav: HeaderMenuConfigType[];
}) => {
  return (
    <ul className="menu menu-horizontal p-0">
      {nav?.map((item: HeaderMenuConfigType) => {
        return (
          <li
            key={`desktop_menu_item_${item.id}`}
            className="mx-1 group static xl:px-1 py-2"
          >
            {pathname == item.link ? (
              <Link
                href={item.link}
                title={item.name}
                className="rounded-xl bg-indigo-700 text-white hover:bg-indigo-700"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                className="rounded-xl border-2 border-base-100 hover:border-blue-700 hover:bg-base-100 hover:text-indigo-700"
                href={item.link}
                title={item.name}
              >
                {item.name}
              </Link>
            )}
            {item.children && (
              <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
                {item.children.map((nav) => (
                  <li key={nav.id}>
                    <Link href={nav.href} title={nav.name}>
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
      <HeaderServices />
      <HeaderMap />
    </ul>
  );
};

export default HeaderMenu;

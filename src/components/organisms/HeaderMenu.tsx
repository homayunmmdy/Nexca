import { HeaderMenuConfigType } from "@/types/entities";
import classNames from "classnames";
import Link from "next/link";
import HeaderMap from "./HeaderMap";
import HeaderServices from "./HeaderServices";

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
            <Link
              href={item.link}
              title={item.name}
              className={classNames({
                "rounded-xl border-2 border-base-100 hover:bg-indigo-700 hover:text-white transition-colors ease-in-out":
                  true,
                "bg-indigo-700 text-white": pathname == item.link,
              })}
            >
              {item.name}
            </Link>
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

import { Button } from "@/components/atoms";
import { LogoutButton } from "@/components/molecules";
import {
  adminPages,
  EditPostPages,
  HelpPages,
  SettingsPages,
} from "@/config/adminPage";
import RouteConfig from "@/config/RouteConfig";
import { adminPagesType } from "@/types/entities";
import { getIdOfPost } from "@/util/Util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

const NavLink: React.FC = () => {
  const pathname = usePathname();
  const isNewPostRoute = pathname === RouteConfig.admin.posts.new;

  const isPostRoute =
    pathname?.startsWith(RouteConfig.admin.posts.base) &&
    !isNewPostRoute &&
    (pathname.split("/").length === 4 || pathname.split("/").length === 5);
  const isHelpRoute = pathname?.startsWith(RouteConfig.admin.help.base);
  const isSettingRoute = pathname?.startsWith(RouteConfig.admin.settings.base);

  let data: adminPagesType[];
  if (isPostRoute) {
    data = EditPostPages;
  } else if (isSettingRoute) {
    data = SettingsPages;
  } else if (isHelpRoute) {
    data = HelpPages;
  } else {
    data = adminPages;
  }
  const postId = getIdOfPost();

  return (
    <>
      <div className="block h-full w-auto grow basis-full items-center overflow-auto">
        <ul className="mb-0 flex flex-col gap-2 pl-0">
          {isPostRoute && (
            <Link
              className="py-2.7 ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl p-1 px-4 text-sm transition-colors hover:bg-indigo-500 hover:text-white"
              href={RouteConfig.admin.base}
            >
              <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-700 bg-center stroke-0 text-center xl:p-2.5">
                <FaHome size={24} color="#FFF" />
              </div>
              <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                admin
              </span>
            </Link>
          )}

          {data?.map((link, index) => {
            const LinkIcon = link.icon;
            const href = isPostRoute
              ? `${RouteConfig.admin.posts.base}/${postId}/${link.href}`
              : link.href;
            return (
              <li className="mt-0.5 w-full" key={index}>
                {pathname === href ? (
                  <Link
                    className="py-2.7 shadow-soft-xl ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-indigo-700 p-1 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
                    href={href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-gradient-to-tl from-purple-700 to-pink-500 bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="py-2.7 ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl p-1 px-4 text-sm transition-colors hover:bg-indigo-500 hover:text-white"
                    href={href}
                  >
                    <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-700 bg-center stroke-0 text-center xl:p-2.5">
                      <LinkIcon size={24} color="#FFF" />
                    </div>
                    <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                      {link.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="my-4 max-w-full">
          <LogoutButton />
        </div>
        <Link href={RouteConfig.admin.master} className="my-4 max-w-full">
          <Button
            type="button"
            color="btn-null"
            removeDefaultStyle={true}
            className="before:content[''] after:content[''] group relative h-16 w-full origin-left overflow-hidden rounded-lg border bg-neutral-800 p-3 text-left text-base font-bold text-gray-50 underline underline-offset-2 duration-500 before:absolute before:right-1 before:top-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-violet-500 before:blur-lg before:duration-500 after:absolute after:right-8 after:top-3 after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-rose-300 after:blur-lg after:duration-500 hover:border-rose-300 hover:text-rose-300 hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:-bottom-8 hover:before:right-12 hover:before:blur hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] hover:after:-right-8 group-hover:before:duration-500 group-hover:after:duration-500"
          >
            Become Master Editor
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavLink;

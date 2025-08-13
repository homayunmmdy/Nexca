"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  href: string;
}

const MenuItem = ({ name, href }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      title={name}
      className={classNames({
        "rounded-xl border-2 border-base-100 hover:bg-indigo-700 hover:text-white transition-colors ease-in-out":
          true,
        "bg-indigo-700 text-white": pathname == href,
      })}
    >
      {name}
    </Link>
  );
};

export default MenuItem;

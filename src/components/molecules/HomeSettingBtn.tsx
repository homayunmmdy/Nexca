"use client";
import RouteConfig from "@/config/RouteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Button } from "../atoms";

const HomeSettingBtn = () => {
  const pathname = usePathname();

  if (pathname === RouteConfig.admin.settings.base) {
    return (
      <Link href={RouteConfig.admin.base} title="home">
        <Button>
          <FaHome />
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={RouteConfig.admin.settings.base} title="setting">
        <Button>
          <IoMdSettings />
        </Button>
      </Link>
    );
  }
};

export default HomeSettingBtn;

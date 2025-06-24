"use client";
import React from 'react';
import RouteConfig from "../../config/RouteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Button } from "../atoms";

const HomeSettingBtn: React.FC = () => {
  const pathname = usePathname();

  if (pathname === RouteConfig.admin.settings.base) {
    return (
      <Link href={RouteConfig.admin.base} title="admin" aria-label="Link to admin page">
        <Button>
          <FaHome data-testid="homeIcon"/>
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={RouteConfig.admin.settings.base} title="setting" aria-label="Link to setting page">
        <Button>
          <IoMdSettings data-testid="settingIcon" />
        </Button>
      </Link>
    );
  }
};

export default HomeSettingBtn;

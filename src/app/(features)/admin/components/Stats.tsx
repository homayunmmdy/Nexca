"use client";
import RouteConfig from "@/config/RouteConfig";
import useGetStats from "@/hooks/useGetStats";
import Link from "next/link";
import { CgFeed } from "react-icons/cg";
import { FiServer } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { RxSection } from "react-icons/rx";
import Stat from "./Stat";

const Stats = () => {
  const data = useGetStats();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Link href={RouteConfig.admin.posts.base}>
        <Stat
          title="Available Posts"
          number={data.posts.length}
          icon={<CgFeed />}
        />
      </Link>
      <Link href={RouteConfig.admin.sections.base}>
        <Stat
          title="Available Sections"
          number={data.sections.length}
          icon={<RxSection />}
        />
      </Link>
      <Link href={RouteConfig.admin.services.base}>
        <Stat
          title="Available Services"
          number={data.services.length}
          icon={<FiServer />}
        />
      </Link>
      <Link href={RouteConfig.admin.contacts}>
        <Stat
          title="Messages"
          number={data.contacts.length}
          icon={<LuMessagesSquare />}
        />
      </Link>
    </div>
  );
};

export default Stats;

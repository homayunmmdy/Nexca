"use client";
import useCheckLogin from "@/app/(features)/admin/hooks/useCheckLogin";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import { BannerTitle } from "@/components/molecules";
import Stats from "./components/Stats";

const Admin = () => {
  useCheckLogin();
  return (
    <div>
      <title>
        The Ultimate Admin Panel Nexca Good for Agencies and Individuals
      </title>
      <Stats />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 text-center sm:px-6 lg:px-8">
        <BannerTitle />
      </div>
      <RecentPosts />
    </div>
  );
};

export default Admin;

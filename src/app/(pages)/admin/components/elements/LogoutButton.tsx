"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCheckLogin from "@/hooks/useCheckLogin";
import { Button } from "@/components";

const LogoutButton = () => {
  const router = useRouter();

  useCheckLogin();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    router.push("/");
  };

  return (
    <>
      <Button
        title="Logout"
        color="btn-error"
        onClick={handleLogout}
        style="w-full"
      />
    </>
  );
};

export default LogoutButton;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCheckLogin from "@/hooks/useCheckLogin";
import { Button } from "@/components";
import { AUTH_KEY } from "@/config/Constants";

const LogoutButton = () => {
  const router = useRouter();

  useCheckLogin();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
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

"use client";
import { Button } from "@/components";
import { AUTH_KEY } from "@/etc/config/Constants";
import useCheckLogin from "@/hooks/useCheckLogin";
import { useRouter } from "next/navigation";
import React from 'react';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  useCheckLogin();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    router.push("/");
  };

  return (
    <>
      <Button
        color="btn-error"
        onClick={handleLogout}
        style="w-full"
      >Logout</Button>
    </>
  );
};

export default LogoutButton;

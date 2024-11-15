"use client";
import { Button, Input } from "@/components";
import { AUTH_KEY } from "@/config/Constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Toast from "./components/Toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    if (isAuthenticated) {
      toast.success("you're welcome");
      router.push("/admin");
    }
  }, []);
  const handleLogin = () => {
    const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
    const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
    if (username == `${USERNAME}` && password == `${PASSWORD}`) {
      toast.success("you're welcome");
      localStorage.setItem(AUTH_KEY, "" + true);
      router.push("/admin");
    } else {
      toast.error("Invalid username or password");
    }
  };
  return (
    <>
      <Toaster />
      <Toast />
      <div className="font-poppins flex items-center justify-center">
        <div className="flex h-screen w-screen items-center justify-center dark:bg-gray-900">
          <div className="grid gap-8 p-4">
            <div className="m-4 rounded-[26px] bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="m-2 rounded-[20px] border-[20px] border-transparent bg-white shadow-lg sm:p-2 md:p-10 lg:p-10 xl:p-10 2xl:p-10 dark:bg-gray-900">
                <h1 className="cursor-default pb-6 pt-8 text-center text-5xl font-bold dark:text-gray-400">
                  Log in
                </h1>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2 text-lg dark:text-gray-400"
                    >
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style="p-3 focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-lg dark:text-gray-400"
                    >
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                      style="p-3 focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    color="btn-primary"
                    style="w-full mt-6 text-white"
                    onClick={handleLogin}
                  >
                    LOG IN
                  </Button>
                </form>

                <div className="mt-4 flex flex-col items-center text-center text-sm text-gray-500">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <Link
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/privacy_policy"
                      title="Privacy Policy"
                    >
                      <span className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                        Privacy Policy
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

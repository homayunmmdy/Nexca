"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Toast from "./components/Toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, []);
  const handleLogin = () => {
    const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
    const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
    if (username == `${USERNAME}` && password == `${PASSWORD}`) {
      //@ts-ignore
      localStorage.setItem("authenticated", true);
      router.push("/admin");
      toast.success("you're welcome");
    } else {
      toast.error("Invalid username or password");
    }
  };
  return (
    <>
      <ToastContainer />
      <Toast />
      <div className="flex font-poppins items-center justify-center">
        <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
          <div className="grid gap-8 p-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
              <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                  Log in
                </h1>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2  dark:text-gray-400 text-lg"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 dark:text-gray-400 text-lg"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    />
                  </div>

                  <button
                    className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                    onClick={handleLogin}
                  >
                    LOG IN
                  </button>
                </form>

                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default">
                    By signing in, you agree to our
                    <Link
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/privacy_policy"
                      title="Privacy Policy"
                    >
                      <span className="cursor-pointer px-1 bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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

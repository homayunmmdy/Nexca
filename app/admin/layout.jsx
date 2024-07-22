"use client";
import useCheckLogin from "../hooks/useCheckLogin";
import { Sidebar } from "./components/sections";

export default function AdminLayout({ children }) {
  useCheckLogin()
  return (
    <>
      <div className="grid grid-cols-12 bg-gray-200 p-5 gap-5">
        <aside className="col-span-12  lg:col-span-3 bg-white rounded-xl shadow-xl">
            <Sidebar />
        </aside>
        <main className="col-span-12  lg:col-span-9 bg-white rounded-xl mt-5 lg:mt-0 shadow-xl">
          <div className=" w-full h-full p-4">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

"use client";
import useCheckLogin from "../hooks/useCheckLogin";
import { Sidebar } from "./components/sections";

export default function AdminLayout({ children }) {
  useCheckLogin()
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <aside className="col-span-12  lg:col-span-3">
            <Sidebar />
        </aside>
        <main className="col-span-12  lg:col-span-9">
          <div className=" w-full h-full px-4 mt-5">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

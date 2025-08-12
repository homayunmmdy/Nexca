"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import Link from "next/link";

function HeaderServices() {
  const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);

  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static xl:px-1 py-2"
    >
      <p className="rounded-xl border-2 border-base-100 hover:border-blue-700 hover:bg-base-100 hover:text-indigo-700">
        Services
      </p>
      <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
        {loading ? (
          <>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
          </>
        ) : (
          data?.map((nav: ServicesCashType) => (
            <li key={nav._id}>
              <Link href={`/services/${nav.secid}`} title={nav.name}>
                {nav.name}
              </Link>
            </li>
          ))
        )}
        <li key="news service">
          <Link href="/admin/services/new" title="Create New Service">
            Create New Service
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default HeaderServices;

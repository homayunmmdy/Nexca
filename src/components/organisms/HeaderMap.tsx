"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import { CountriesMapData, CountriesMapDataType } from "@/config/countries";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import Link from "next/link";

function HeaderMap() {
  const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);

  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static px-1 py-2"
    >
      <p className="rounded-xl border-2 border-base-100 hover:border-blue-700 hover:bg-base-100 hover:text-indigo-700">
        Maps
      </p>
      <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
         <li key="news service">
          <Link href="/maps" title="Link to World map page">
            World Map
          </Link>
        </li>
        {loading ? (
          <>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
            <div className="skeleton h-8 w-20"></div>
          </>
        ) : (
          CountriesMapData?.map((country: CountriesMapDataType) => (
            <li key={country.secid}>
              <Link href={`/maps/${country.code.toLowerCase()}`} title={`link to map of ${country.name}`}>
                {country.name}
              </Link>
            </li>
          ))
        )}
       
      </ul>
    </li>
  );
}

export default HeaderMap;

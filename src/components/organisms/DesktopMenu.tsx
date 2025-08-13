"use client";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { CountriesMapData, CountriesMapDataType } from "@/config/countries";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import { HeaderMenuConfigType } from "@/types/entities";
import Link from "next/link";
import HorizontalMenuItem from "../atoms/horizontalMenuItem";

const DesktopMenu = ({
  pathname,
  nav,
}: {
  pathname: string;
  nav: HeaderMenuConfigType[];
}) => {
  return (
    <ul className="menu menu-horizontal p-0">
      {nav?.map((item: HeaderMenuConfigType) => {
        return (
          <li
            key={`desktop_menu_item_${item.id}`}
            className="mx-1 group static xl:px-1 py-2"
          >
            <HorizontalMenuItem name={item.name} href={item.link} />
            {item.children && (
              <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
                {item.children.map((nav) => (
                  <li key={nav.id}>
                    <Link href={nav.href} title={nav.name}>
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
      <ServicesMenu />
      <MapMenu />
    </ul>
  );
};

export default DesktopMenu;

const ServicesMenu = () => {
  const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);
  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static xl:px-1 py-2"
    >
      <HorizontalMenuItem name="Services" href="/services/1" />
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
};

const MapMenu = () => {
  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static xl:px-1 py-2"
    >
      <HorizontalMenuItem name="Maps" href="/maps" />
      <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
        <li key="news service">
          <Link href="/maps" title="Link to World map page">
            World Map
          </Link>
        </li>
        {CountriesMapData?.map((country: CountriesMapDataType) => (
          <li key={country.secid}>
            <Link
              href={`/maps/${country.code.toLowerCase()}`}
              title={`link to map of ${country.name}`}
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

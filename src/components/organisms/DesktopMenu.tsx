"use client";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { CountriesMapData, CountriesMapDataType } from "@/config/countries";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import { HeaderMenuConfigType } from "@/types/entities";
import { MenuItem } from "../atoms";
import { MenuChildren } from "../molecules";

const DesktopMenu = ({
  nav,
}: {
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
            <MenuItem name={item.name} href={item.link} />
            {item.children && <MenuChildren children={item.children} />}
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

  const serviceChildren = data?.map((nav: ServicesCashType) => ({
    name: nav.name,
    href: `/services/${nav.secid}`,
  }));

  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static xl:px-1 py-2"
    >
      <MenuItem name="Services" href="/services/1" />
      <MenuChildren children={serviceChildren} loading={loading} />
    </li>
  );
};

const MapMenu = () => {
  const countryChildren = CountriesMapData?.map(
    (country: CountriesMapDataType) => ({
      name: country.name,
      href: `/maps/${country.code.toLowerCase()}`,
    })
  );
  return (
    <li
      key={`desktop_menu_item_services`}
      className="mx-1 group static xl:px-1 py-2"
    >
      <MenuItem name="World Map" href="/maps" />
      <MenuChildren children={countryChildren} />
    </li>
  );
};

"use client";
import { CountriesMapData, CountriesMapDataType } from "@/config/countries";
import { HeaderMenuConfigType } from "@/types/entities";
import { MenuItem } from "../atoms";
import { MenuChildren } from "../molecules";
import ServicesMenu from "./ServicesMenu";

const DesktopMenu = ({ nav }: { nav: HeaderMenuConfigType[] }) => {
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
      <li
        key={`desktop_menu_item_services`}
        className="mx-1 group static xl:px-1 py-2"
      >
        <ServicesMenu />
      </li>
      <MapMenu />
    </ul>
  );
};

export default DesktopMenu;

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

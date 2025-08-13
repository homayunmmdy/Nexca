"use client";
import { CountriesMapData, CountriesMapDataType } from "@/config/countries";
import { HeaderModeType } from "@/types/entities";
import { useState } from "react";
import { MenuItem } from "../atoms";
import { MenuChildren } from "../molecules";
import classNames from "classnames";

const MapMenu = ({ type = "desktop" }: { type?: HeaderModeType }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  // this number is come from list of item in HeaderMenuConfig the last item was 4 and this is 5 is services and 6 is map
  const MapId = 6;

  const countryChildren = CountriesMapData?.map(
    (country: CountriesMapDataType) => ({
      name: country.name,
      href: `/maps/${country.code.toLowerCase()}`,
    })
  );
  return (
    <li
      key={`desktop_menu_item_maps`}
      onClick={() => countryChildren && toggleItem(MapId)}
      className={classNames({
        'mx-1 group static xl:px-1 py-2': type === 'desktop',
        'mx-1 w-3/4': type === 'mobile'
      })}
    >
      <MenuItem name="World Map" href="/maps" type={type} />
      {type === "desktop" ? (
        <MenuChildren type="desktop" >
          {countryChildren}
        </MenuChildren>
      ) : (
        <MenuChildren
          type="mobile"
          id={MapId}
          active={activeId}
        >
          {countryChildren}
        </MenuChildren>
      )}
    </li>
  );
};

export default MapMenu;

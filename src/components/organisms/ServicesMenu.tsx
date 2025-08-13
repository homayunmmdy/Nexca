"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import { HeaderModeType } from "@/types/entities";
import { useState } from "react";
import { MenuItem } from "../atoms";
import { MenuChildren } from "../molecules";

const ServicesMenu = ({ type = "desktop" }: { type?: HeaderModeType }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);

  const serviceChildren = data?.map((nav: ServicesCashType) => ({
    name: nav.name,
    href: `/services/${nav.secid}`,
  }));

  // this number is come from list of item in HeaderMenuConfig the last item was 4 and this is 5
  const serviceId = 5;

  return (
    <li
      key={`desktop_menu_item_services`}
      onClick={() => serviceChildren && toggleItem(serviceId)}
      className="mx-1 group static xl:px-1 py-2"
    >
      <MenuItem name="Services" href="/services/1" type={type} />
      {type === "desktop" ? (
        <MenuChildren
          children={serviceChildren}
          loading={loading}
          type="desktop"
        />
      ) : (
        <MenuChildren
          children={serviceChildren}
          loading={loading}
          type="mobile"
          id={serviceId}
          active={activeId}
        />
      )}
    </li>
  );
};

export default ServicesMenu;

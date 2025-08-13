import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import { HeaderModeType } from "@/types/entities";
import { MenuItem } from "../atoms";
import { MenuChildren } from "../molecules";

const ServicesMenu = ({ type = "desktop" }: { type?: HeaderModeType }) => {
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
      <MenuItem name="Services" href="/services/1" type={type} />
      <MenuChildren children={serviceChildren} loading={loading} />
    </li>
  );
};

export default ServicesMenu;

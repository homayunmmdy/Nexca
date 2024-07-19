"use client";
import { SERVICES_API_URL } from "@/app/config/apiConstants";
import { DataTable2 } from "../components/elements";
import useFetch from "@/app/hooks/useFetch";

const Services = () => {
  const { data: services } = useFetch(`${SERVICES_API_URL}`);

  return (
    <>
      <div>
        <DataTable2 data={services} path="services" />
      </div>
    </>
  );
};

export default Services;

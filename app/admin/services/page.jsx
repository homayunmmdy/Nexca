"use client";
import { SERVICES_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { DataTable } from "../components/elements";

const Services = () => {
  const { data: services } = useFetch(`${SERVICES_API_URL}`);

  return (
    <>
      <DataTable data={services} path="services" />
    </>
  );
};

export default Services;

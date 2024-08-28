"use client";
import { Spinner } from "@/app/components/elements";
import { SERVICES_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { DataTable } from "../components/elements";

const Services = () => {
  const { data: services , loading} = useFetch(`${SERVICES_API_URL}`);
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <DataTable data={services} path="services" />
    </>
  );
};

export default Services;

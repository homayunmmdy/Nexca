"use client";
import { Spinner } from "@/components";
import { SERVICES_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
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

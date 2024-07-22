"use client";
import { Spinner } from "@/app/components/elements";
import { SECTIONS_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { DataTable } from "../components/elements";

const AdminSectionPage = () => {
  const { data: sections , loading} = useFetch(`${SECTIONS_API_URL}`);
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <DataTable data={sections} path="sections" />
    </>
  );
};

export default AdminSectionPage;
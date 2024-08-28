"use client";
import { Spinner } from "@/components";
import { SECTIONS_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
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
"use client";
import { SECTIONS_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { DataTable } from "../components/elements";

const AdminSectionPage = () => {
  const { data: sections } = useFetch(`${SECTIONS_API_URL}`);

  return (
    <>
      <DataTable data={sections} path="sections" />
    </>
  );
};

export default AdminSectionPage;
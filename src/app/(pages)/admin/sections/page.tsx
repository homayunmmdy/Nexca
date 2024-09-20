"use client";
import { Spinner } from "@/components";
import { SECTIONS_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
import { DataTable } from "../components/elements";
import { MASTER_KEY } from "@/config/Constants";

const AdminSectionPage = () => {
  const { data: sections, loading } = useFetch("sections", SECTIONS_API_URL);
  if (loading) {
    return <Spinner />;
  }
  let master: boolean;
  const isMaster = localStorage.getItem(MASTER_KEY);
  if (isMaster) {
    master = true;
  } else {
    master = false;
  }
  return (
    <>
      <DataTable editor={master} data={sections} path="sections" />
    </>
  );
};

export default AdminSectionPage;

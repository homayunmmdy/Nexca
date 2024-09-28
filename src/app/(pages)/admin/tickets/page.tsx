"use client";
import { TicketCard } from "@/components";
import { TICKETS_API_URL } from "@/config/apiConstants";
import { MASTER_KEY, TICKETS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";

const AdminTicketsPage = () => {
  const { data: tickets } = useFetch(TICKETS_QUERY_KEY, TICKETS_API_URL);
  let master: boolean;
  const isMaster =
    typeof window !== "undefined" ? localStorage.getItem(MASTER_KEY) : false;
  if (isMaster) {
    master = true;
  } else {
    master = false;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* @ts-ignore */}
        {tickets?.map((ticket) => (
          <TicketCard ticket={ticket} master={master} />
        ))}
      </div>
    </>
  );
};
export default AdminTicketsPage;

"use client";
import { TicketCard } from "@/components";
import { TICKETS_API_URL } from "@/config/apiConstants";
import { TICKETS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { TicketsCashType } from "@/types/CashTypes";
import { checkMaster } from "@/util/Util";
import React from "react";

const AdminTicketsPage: React.FC = () => {
  const { data: tickets } = useFetch(TICKETS_QUERY_KEY, TICKETS_API_URL);
  let master = checkMaster();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tickets?.map((ticket: TicketsCashType) => (
          <TicketCard ticket={ticket} master={master} />
        ))}
      </div>
    </>
  );
};
export default AdminTicketsPage;

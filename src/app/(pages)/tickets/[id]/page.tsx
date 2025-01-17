import { TICKETS_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditTicketForm } from "../../admin/components";
import { FetchDataForEditPage } from "@/util/ServerUtil";

const TicketPage = async ({ params }: { params: SinglePagepParamsType }) => {
  const updateData = await FetchDataForEditPage(TICKETS_API_URL, params.id);

  return <EditTicketForm ticket={updateData} />;
};

export default TicketPage;

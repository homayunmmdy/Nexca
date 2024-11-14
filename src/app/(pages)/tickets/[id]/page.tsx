import { TICKETS_API_URL } from "@/etc/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditTicketForm } from "../../admin/components";

let updateTicketData;
const TicketPage = async ({ params }: { params: SinglePagepParamsType }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(TICKETS_API_URL, params.id);
    updateTicketData = updateTicketData.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;

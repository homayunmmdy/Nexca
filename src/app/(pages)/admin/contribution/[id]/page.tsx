import { CONTRIBUTION_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditContributionForm } from "../../components";
import { SinglePagepParamsType } from "@/types/entities";

let updateTicketData;
const SingleContributionPage = async ({ params }: {params : SinglePagepParamsType}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(CONTRIBUTION_API_URL,params.id);
    updateTicketData = updateTicketData.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditContributionForm contribute={updateTicketData} />;
};

export default SingleContributionPage;

import { CONTRIBUTION_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditContributionForm } from "../../components";

let updateTicketData;
const SingleContributionPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(CONTRIBUTION_API_URL, params.id);
    updateTicketData = updateTicketData.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditContributionForm contribute={updateTicketData} />;
};

export default SingleContributionPage;

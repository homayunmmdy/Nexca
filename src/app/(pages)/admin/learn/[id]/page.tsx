import { LEARN_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import EditLearnForm from "../../components/forms/EditLearnForm";

let updateTicketData;
const SingleLearnPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(LEARN_API_URL, params.id);
    updateTicketData = updateTicketData.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditLearnForm data={updateTicketData} />;
};

export default SingleLearnPage;

import { LEARN_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import EditLearnForm from "../../components/forms/EditLearnForm";

let updateTicketData = {};
{/* @ts-ignore */}
const SingleLearnPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(LEARN_API_URL, params.id);
    {/* @ts-ignore */}
    updateTicketData = updateTicketData.document;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditLearnForm data={updateTicketData} />;
};

export default SingleLearnPage;

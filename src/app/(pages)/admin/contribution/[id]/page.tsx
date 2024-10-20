import { CONTRIBUTION_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditContributionForm } from "../../components";

let updateData = {};
{/* @ts-ignore */}
const SingleContributionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateData = await getById(CONTRIBUTION_API_URL,params.id);
    {/* @ts-ignore */}
    updateData = updateData.document;
  } else {
    updateData = {
      _id: "new",
    };
  }

  return <EditContributionForm contribute={updateData} />;
};

export default SingleContributionPage;

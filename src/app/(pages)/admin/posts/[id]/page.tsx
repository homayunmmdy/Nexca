import { POST_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditPostForm } from "../../components";

let updateTicketData;
const SinglePostsPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(POST_API_URL, params.id);
    updateTicketData = updateTicketData?.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditPostForm post={updateTicketData} />;
};

export default SinglePostsPage;

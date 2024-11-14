import { POST_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditPostForm } from "../../components";
import { SinglePagepParamsType } from "@/types/entities";

let updateTicketData: any = {};
const SinglePostsPage = async ({ params }: {params : SinglePagepParamsType}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(POST_API_URL,params.id);
    updateTicketData = updateTicketData?.document || {};
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditPostForm post={updateTicketData} />;
};

export default SinglePostsPage;

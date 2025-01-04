import { POST_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditPostForm } from "../../components";
import { FetchDataForEditPage } from "../../components/util/Util";

const SinglePostsPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updatePostData = await FetchDataForEditPage(POST_API_URL, params.id);

  return <EditPostForm post={updatePostData} />;
};

export default SinglePostsPage;

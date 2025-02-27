'use client'
import SiteConfig from "@/config/site";
import { getIdOfPost } from "@/util/Util";

const EditLivePage = () => {
  const postId = getIdOfPost();
  console.log(postId)
  return (
    <iframe
      src={`${SiteConfig.siteURL}/posts/${postId}`}
      width="100%"
      height="100%"
    ></iframe>
  );
};

export default EditLivePage;

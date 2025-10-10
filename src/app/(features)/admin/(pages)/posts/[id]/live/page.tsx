'use client';
import SiteConfig from '@/config/site';
import { GetIdOfPost } from '@/util/Util';

const EditLivePage = () => {
   const postId = GetIdOfPost();
   console.log(postId);
   return (
      <iframe
         src={`${SiteConfig.siteURL}/posts/${postId}`}
         width="100%"
         height="100%"
      ></iframe>
   );
};

export default EditLivePage;

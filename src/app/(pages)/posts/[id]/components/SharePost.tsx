import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

const SharePost = ({POSTURL } : {POSTURL : string}) => {
    const API_URL = process.env.API_URL;
    const postLink = `${API_URL}${POSTURL}`
    
  return (
    <>
    <div className="my-3 flex items-center gap-1">
    <span className="pr-2 font-bold">Share :</span>
    <ul >
      {socialMedia.map((media: SocialMediaType) => (
        <li className="flex items-center gap-2" key={media.id}>
          <Link className="rounded-full border border-indigo-600 p-2 text-indigo-600 transition-all ease-in-out hover:bg-indigo-600 hover:text-white" target="_blank" rel="nofollow" href={`${media.link}${postLink}&title=`} title={media.name}>
            {media.icon}
          </Link>
        </li>
      ))}
    </ul>
    </div>
    </>
  );
};

interface SocialMediaType {
  id: number;
  name: string;
  icon: JSX.Element;
  link: string;
}
const socialMedia: SocialMediaType[] = [
  {
    id: 1,
    name: "Linkedin",
    icon: <FaLinkedinIn size={20} />,
    link: 'https://linkedin.com/shareArticle?mini=true&amp;url=',
  },
];

export default SharePost;

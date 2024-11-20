import { FeaturesType, FooterLinkType } from "@/types/entities";
import { AiFillHome } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaTimeline } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { LiaQuestionSolid } from "react-icons/lia";
import { MdPrivacyTip } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { VscFeedback, VscGraphScatter } from "react-icons/vsc";

export const features: FeaturesType[] = [
  {
    id: 1,
    title: "Full CRUD",
    icon: <SlEnergy color="#FFF" size={24} />,
    description:
      "With Nexca panel you can Create Read Update Delete All your posts, services , ads and more without any coding knowlege",
  },
  {
    id: 2,
    title: "Access All your posts Easily",
    icon: <BiBookContent color="#FFF" size={24} />,
    description:
      "Inside of your panel you can see all your post and be able to modifiy theme. Also you can send any post to anywhere on your site",
  },
  {
    id: 3,
    title: "FeedBack",
    icon: <VscFeedback color="#FFF" size={24} />,
    description:
      "Inside of your panel and see all the idea and feed back of other people about your website where come from contacts page",
  },
  {
    id: 4,
    title: "Services",
    icon: <CgWebsite color="#FFF" size={24} />,
    description:
      "Add Services page for your webiste from your panel and move you post into that.",
  },
];

export const FooterLinkData: FooterLinkType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    title: "FAQs",
    href: "/FAQs",
    icon: <LiaQuestionSolid />,
  },
  {
    id: 3,
    title: "privacy_policy",
    href: "/privacy_policy",
    icon: <MdPrivacyTip />,
  },
  {
    id: 4,
    title: "New Ticket",
    href: "/tickets/new",
    icon: <GiTicket />,
  },
  {
    id: 5,
    title: "Contributions",
    href: "/contribution",
    icon: <VscGraphScatter />,
  },
  {
    id: 6,
    title: "About",
    href: "/about",
    icon: <SiAboutdotme />,
  },
  {
    id: 7,
    title: "Contacts",
    href: "/contacts",
    icon: <PiPhoneCallFill />,
  },
  {
    id: 8,
    title: "Time",
    href: "/time",
    icon: <FaTimeline />,
  },
];

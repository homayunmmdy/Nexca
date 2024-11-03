import { FeaturesType } from "@/types/entities";
import { BiBookContent } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";

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

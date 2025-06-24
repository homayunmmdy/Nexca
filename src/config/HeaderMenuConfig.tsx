import RouteConfig from "@/config/RouteConfig";
import {HeaderMenuConfigType} from "@/types/entities";


const HeaderMenuConfig = () : HeaderMenuConfigType[]=> [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: " Admin",
        link: RouteConfig.admin.base,
    },
    {
        id: 3,
        name: "Templates",
        link: "/templates",
    },
    {
        id: 5,
        name: "Feed",
        link: "/feed",
    }
]

export default HeaderMenuConfig;
import {
  MdHome,
  MdOutlineCameraAlt,
  MdOutlinePermContactCalendar,
  MdInfoOutline,
  MdOutlineMailOutline,
  MdList,
} from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
export const navBarLink = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <MdHome />,
  },
  {
    id: 2,
    label: "Magazine",
    route: "magazine",
    icon: <MdOutlineCameraAlt />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <BsBoxSeam />,
  },
  {
    id: 4,
    label: "Category",
    route: "category",
    icon: <MdList />,
  },
  {
    id: 5,
    label: "Users",
    route: "users",
    icon: <TbUserCircle />,
  },
  {
    id: 6,
    label: "Contacts",
    route: "contacts",
    icon: <MdOutlinePermContactCalendar />,
  },
  {
    id: 7,
    label: "About",
    route: "",
    icon: <MdInfoOutline />,
  },
];

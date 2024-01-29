import exp from "constants";
import { IconName } from "../Icon";

type SideBarLink = {
    linkText: string;
    linkTo: string;
    iconName: IconName;
};

export type SideBarLinkGroup = {
    title: string;
    links: SideBarLink[];
};

export type SideBarLinkProps = {
    links: SideBarLinkGroup[];
    logOut: () => void;
};

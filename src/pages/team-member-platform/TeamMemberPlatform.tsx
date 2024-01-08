import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import UserImage from "../../assets/image/userImage.jpg";
const links = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Project",
                linkTo: "projects",
                iconName: "projects"
            },
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories"
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks"
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                linkText: "Settings",
                linkTo: "settings",
                iconName: "settings"
            },
            {
                linkText: "Support",
                linkTo: "support",
                iconName: "support"
            }
        ]
    }
];

const TeamMemberPlatform = () => {
    return (
        <AppLayout>
            <SideBar>
                <SideBarUser
                    details={{
                        firstName: "Farina",
                        lastName: "Yusupova",
                        imageUrl: UserImage,
                        email: "info@gmail.com"
                    }}
                />
                <SideBarLinks links={links} />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { TeamMemberPlatform };

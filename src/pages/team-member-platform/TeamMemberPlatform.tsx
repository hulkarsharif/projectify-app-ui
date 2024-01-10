import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import userImage from "../../assets/image/userImage.jpg";

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
                        firstName: "Amelia",
                        lastName: "Raven",
                        imageUrl: userImage,
                        email: "memberinfo@email.com"
                    }}
                />
                <SideBarLinks links={links} loggedOutLink="" />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { TeamMemberPlatform };

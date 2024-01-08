import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import TeamUser from "../../assets/image/TMUser.jpg";
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
            },
            {
                linkText: "Team Members",
                linkTo: "team-members",
                iconName: "members"
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
                        imageUrl: TeamUser,
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

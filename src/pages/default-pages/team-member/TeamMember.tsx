import { AppLayout } from "../../components";
import { DefaultPageWrapper } from "../../components";
import "./TeamMember.css";
import lock from "../../../assets/images/lock.jpg";

const teamMembers = [
    {
        name: "Project Management Tool",
        description:
            "A project management tool for tracking tasks, assigning team members, and monitoring project progress."
    },
    {
        name: "Bug Tracking System",
        description:
            "A system for tracking and managing software bugs, including features for bug reporting, assignment, and resolution."
    },
    {
        name: "Feature Request Tracker",
        description:
            "An application for collecting and prioritizing feature requests from users, allowing the development team to plan future releases."
    }
];

const TeamMembers = () => {
    return (
        <AppLayout>
            {!teamMembers ? (
                <DefaultPageWrapper
                    imagePath={lock}
                    pageTitle="You don't have any team members yet!"
                    btnText="Add a New Member"
                />
            ) : (
                "Hello"
            )}
        </AppLayout>
    );
};

export { TeamMembers };

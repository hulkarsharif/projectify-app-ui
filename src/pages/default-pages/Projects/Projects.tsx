import { DefaultPageWrapper } from "../../components";
import { MainLayout } from "../../components";

import "./Projects.css";
import lock from "../../../assets/images/lock.jpg";

const projects = [
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
const Projects = () => {
    return (
        <MainLayout>
            {!projects ? (
                <DefaultPageWrapper
                    imagePath={lock}
                    pageTitle="You don't have any projects yet!"
                    btnText="Add a Task"
                />
            ) : (
                "Hello"
            )}
        </MainLayout>
    );
};

export { Projects };

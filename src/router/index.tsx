import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminSignup,
    AdminSignin,
    AdminForgotPassword,
    AdminResetPassword,
    AdminPlatform,
    AdminProjects,
    AdminStories,
    AdminPersonalTasks,
    AdminTeamMembers,
    TeamMemberCreatePassword,
    TeamMemberResetPassword,
    TeamMemberForgotPassword,
    TeamMemberSignin,
    TeamMemberPlatform,
    TeamMemberPersonalTasks,
    TeamMemberProjects,
    TeamMemberStories
} from "../pages";
import { Private } from "./Private";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<AdminSignup />} />
            <Route path="/admin/sign-in" element={<AdminSignin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route
                path="/admin/platform"
                element={
                    <Private
                        component={<AdminPlatform />}
                        userType="admin"
                        to="../admin/sign-in"
                    />
                }
            >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<AdminStories />} />
                <Route path="personal-tasks" element={<AdminPersonalTasks />} />
                <Route path="team-members" element={<AdminTeamMembers />} />
            </Route>

            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route
                path="/team-member/reset-password"
                element={<TeamMemberResetPassword />}
            />
            <Route
                path="/team-member/forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route path="/team-member/sign-in" element={<TeamMemberSignin />} />
            <Route
                path="/team-member/platform"
                element={
                    <Private
                        component={<TeamMemberPlatform />}
                        userType="teamMember"
                        to="../team-member/sign-in"
                    />
                }
            >
                <Route path="projects" element={<TeamMemberProjects />} />
                <Route path="stories" element={<TeamMemberStories />} />
                <Route
                    path="personal-tasks"
                    element={<TeamMemberPersonalTasks />}
                />
            </Route>
        </>
    )
);

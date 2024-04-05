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
    AdminProjectsPage,
    AdminStories,
    AdminTasksPage,
    TeamMemberCreatePassword,
    TeamMemberSignin,
    TeamMemberPlatform,
    TeamMemberResetPassword,
    TeamMemberForgotPassword,
    TeamMemberTasksPage,
    TeamMemberProjects,
    TeamMemberStories,
    AdminTeamMembersPage
} from "../pages";
import { UserRole } from "../types";
import { Private } from "./Private";
import { Auth } from "./Auth";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route
                path="/admin/sign-up"
                element={
                    <Auth
                        component={<AdminSignup />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="/admin/sign-in"
                element={
                    <Auth
                        component={<AdminSignin />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/forgot-password"
                element={
                    <Auth
                        component={<AdminForgotPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/reset-password"
                element={
                    <Auth
                        component={<AdminResetPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="/admin/platform"
                element={
                    <Private
                        component={<AdminPlatform />}
                        userType={UserRole.admin}
                    />
                }
            >
                <Route path="projects" element={<AdminProjectsPage />} />
                <Route path="stories" element={<AdminStories />} />
                <Route path="personal-tasks" element={<AdminTasksPage />} />
                <Route path="team-members" element={<AdminTeamMembersPage />} />
            </Route>
            <Route
                path="team-member/create-password"
                element={
                    <Auth
                        component={<TeamMemberCreatePassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/sign-in"
                element={
                    <Auth
                        component={<TeamMemberSignin />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/reset-password"
                element={
                    <Auth
                        component={<TeamMemberResetPassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />

            <Route
                path="team-member/forgot-password"
                element={
                    <Auth
                        component={<TeamMemberForgotPassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />

            <Route
                path="/team-member/platform"
                element={
                    <Private
                        component={<TeamMemberPlatform />}
                        userType={UserRole.teamMember}
                    />
                }
            >
                <Route path="projects" element={<TeamMemberProjects />} />
                <Route path="stories" element={<TeamMemberStories />} />
                <Route
                    path="personal-tasks"
                    element={<TeamMemberTasksPage />}
                />
            </Route>
        </>
    )
);

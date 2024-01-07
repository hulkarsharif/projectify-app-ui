import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminSignUp,
    AdminSignin,
    AdminForgotPassword,
    AdminResetPassword,
    AdminPlatform,
    AdminProjects
} from "../pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/admin/sign-up" element={<AdminSignUp />} />
            <Route path="/admin/sign-In" element={<AdminSignin />} />
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route path="/platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<h1>AdminTasks</h1>} />
                <Route path="team-members" element={<h1>Members</h1>} />
            </Route>
        </>
    )
);

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { App } from "../App";
import {
    AdminForgotPassword,
    AdminResetPassword,
    AdminSignin,
    AdminSignUp,
    TeamMemberCreatePassword
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
            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
        </>
    )
);

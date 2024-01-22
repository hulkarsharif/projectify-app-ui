import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    useContext
} from "react";
import { StatusBadge } from "./design-system";
import { Link } from "react-router-dom";

import styled from "styled-components";

type AppContectType = {
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContectType>({
    counter: 0,
    setCounter: () => {}
});

const Form = styled.form`
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    font-size: 2rem;
`;

const App = () => {
    return (
        <Form>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Forgot password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/sign-in">Team Member Sign in</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">Team Member Stories</Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Tasks
            </Link>

            <StatusBadge status="COMPLETED" />
        </Form>
    );
};

export { App };

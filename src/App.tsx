import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    useContext
} from "react";
import { Badge, Icon } from "./design-system";
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
    .fillFlag {
        fill: red;
    }
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
            <Link to="team-member/platform">Team Member Platform</Link>
            <div>
                <Badge label="Badge" color="gray" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="gray"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="gray"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="gray"
                    status
                />
            </div>
            <div>
                <Badge label="Badge" color="orange" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="orange"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="orange"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="blue" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="blue"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="blue"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="red" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="red"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="red"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="purple" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="purple"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="purple"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="green" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="green"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="green"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="green"
                />
            </div>
        </Form>
    );
};

export { App };

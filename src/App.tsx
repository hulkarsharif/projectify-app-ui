import { Link } from "react-router-dom";
import styled from "styled-components";
import { Checkbox, LinearProgress, Switch } from "./design-system";

import { useState } from "react";

const Base = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 100px;
`;

const App = () => {
    const [value, setValue] = useState(false);
    return (
        <Base>
            <h1>Welcome </h1>

            <Link to="admin/sign-up">Admin Sign up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/sign-in">Team Member Sign in</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>
            <Link to="team-member/platform">Team Member Platform</Link>

            <div>
                <Checkbox
                    label="Hello world"
                    id="checkbox"
                    checked={value}
                    onChange={(value) => setValue(value)}
                    shape="rounded"
                />
                <Switch
                    checked={value}
                    onSwitch={(value) => setValue(value)}
                    shape="circle"
                    id="switch"
                    position="end"
                />
            </div>
            <div>
                <LinearProgress value={50} color="orange" error />
                <LinearProgress value={40} color="blue" />
                <LinearProgress value={40} color="green" />
                <LinearProgress value={40} color="red" />
                <LinearProgress
                    value={50}
                    color="orange"
                    error
                    shape="rounded"
                />
                <LinearProgress
                    value={40}
                    color="blue"
                    shape="rounded"
                    size="md"
                />
                <LinearProgress
                    value={100}
                    color="green"
                    shape="rounded"
                    size="lg"
                />
                <LinearProgress value={40} color="red" error shape="rounded" />

                <LinearProgress value={99} />
            </div>
        </Base>
    );
};

export { App };

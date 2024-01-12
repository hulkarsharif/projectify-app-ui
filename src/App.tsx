import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const useCounter = (
    startAt: number,
    incrementBy: number
): [number, () => void] => {
    const [counter, setCounter] = useState(startAt);

    const increment = () => {
        setCounter((prevCounter) => prevCounter + incrementBy);
    };

    return [counter, increment];
};

const Form = styled.form`
    font-size: 1.6rem;
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;
`;

const App = () => {
    const [counter, setCounter] = useCounter(100, 100);

    return (
        <Form>
            <div style={{ padding: "200px" }}>
                <button onClick={setCounter}>Click</button>
                <h1>{counter}</h1>
                <Link to="admin/sign-up">Admin Sign Up</Link>
                <Link to="admin/sign-in">Admin Sign in</Link>
                <Link to="admin/forgot-password">Forgot password</Link>
                <Link to="admin/reset-password">Reset Password</Link>
                <Link to="admin/platform">Admin Platform</Link>
                {/* <Link to="platform/projects">Projects</Link>
            <Link to="platform/stories">Stories</Link>
            <Link to="platform/team-members">Team Members</Link>
            <Link to="platform/personal-tasks">Personal Tasks</Link> */}

                <Link to="team-member/create-password">
                    Team Member Create Password
                </Link>
                <Link to="team-member/login">Team Member Login</Link>
                <Link to="team-member/platform/projects">
                    Team Member Projects
                </Link>
                <Link to="team-member/platform/stories">
                    Team Member Stories
                </Link>
                <Link to="team-member/platform/personal-tasks">
                    Team Member Tasks
                </Link>
            </div>
        </Form>
    );
};

export { App, useCounter };

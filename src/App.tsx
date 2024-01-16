import React, {
    useState,
    createContext,
    Dispatch,
    SetStateAction,
    useContext
} from "react";
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

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [counter, setCounter] = useState(0);
    return (
        <AppContext.Provider value={{ counter, setCounter }}>
            {children}
        </AppContext.Provider>
    );
};

const Form = styled.form`
    font-size: 1.6rem;
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;
`;

const App = () => {
    const { counter, setCounter } = useContext(AppContext);

    return (
        <Form>
            <div style={{ padding: "200px" }}>
                <h1>Welcome</h1>
                <button onClick={() => setCounter(counter + 1)}>
                    {counter}
                </button>
                <Link to="team-member/sign-in">Sign in</Link>

                <Link to="admin/sign-up">Admin Sign Up</Link>
                <Link to="admin/sign-in">Admin Sign in</Link>
                <Link to="admin/forgot-password">Forgot password</Link>
                <Link to="admin/reset-password">Reset Password</Link>
                <Link to="admin/platform">Admin Platform</Link>

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

export { App };

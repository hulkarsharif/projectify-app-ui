import { AppContent, AuthActionLink, AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState, useContext } from "react";
import { admin } from "../../../api";
import { AppContext } from "../../../App";

import samarkand from "../../../assets/image/samarkand.jpeg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;

const TeamMemberLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    // const navigate = useNavigate();
    // const [setItem, getItem] = useLocalStorage();
    const { counter, setCounter } = useContext(AppContext);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <AuthWrapper imageUrl={samarkand} pageTitle="Sign In">
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <Form onSubmit={signin}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="login-password"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login-button"
                    disabled={isFormSubmitting}
                >
                    Sign In
                </Button>
            </Form>

            <ActionLinks>
                <AuthActionLink
                    hintText="Don’t have an account?"
                    linkto="../admin/sign-up"
                    linkText="Sign Up"
                />
                <AuthActionLink
                    hintText="Forgot password? "
                    linkto="../team-member/forget-password"
                    linkText="Get Help"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };

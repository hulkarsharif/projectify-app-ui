import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";

import samarkand from "../../../assets/images/samarkand-min.jpeg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
`;
const StyledLoginEmail = styled(Input)`
    grid-column: 1/3;
`;

const StyledLoginPassword = styled(Input)`
    grid-column: 1/3;
`;

const StyledLoginButton = styled(Button)`
    grid-column: 1/3;
`;

const AdminSignin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <AuthWrapper imageUrl={samarkand} pageTitle="Projectify">
            <Form onSubmit={createAccount}>
                <StyledLoginEmail
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <StyledLoginPassword
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <StyledLoginButton color="primary" size="lg" shape="rounded">
                    Login
                </StyledLoginButton>
            </Form>
        </AuthWrapper>
    );
};

export { AdminSignin };

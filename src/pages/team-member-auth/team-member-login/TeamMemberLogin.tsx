import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";

import flatIronBuilding from "../../../assets/images/samarkand.jpeg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberLogin = () => {
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
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Projectify">
            <Form onSubmit={createAccount}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
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
                >
                    Login
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };

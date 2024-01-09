import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import { admin } from "../../../api";

import samarkand from "../../../assets/image/samarkand-min.jpeg";
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
    const [isFormSubmiting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await admin.signIn({
                email,
                password
            });
            console.log(response);

            setIsFormSubmitting(false);

            setEmail("");

            setPassword("");
        } catch (error) {}
        setIsFormSubmitting(false);
        setIsError(true);
    };

    return (
        <AuthWrapper imageUrl={samarkand} pageTitle="Sign In">
            <Form onSubmit={AdminSignin}>
                <StyledLoginEmail
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <StyledLoginPassword
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />

                <StyledLoginButton
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmiting}
                >
                    Login
                </StyledLoginButton>
            </Form>
        </AuthWrapper>
    );
};

export { AdminSignin };

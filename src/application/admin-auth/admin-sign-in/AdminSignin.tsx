import { AuthWrapper, AuthActionLink } from "../../../application/components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import toast from "react-hot-toast";
import { adminService } from "../../../api";
import samarkand from "assets/image/samarkand-min.jpeg";
import styled from "styled-components";
import { useLocalStorage } from "../../../hooks";

import { useNavigate } from "react-router-dom";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;
const Signin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
    const { setItem } = useLocalStorage();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const isformSubmittable = email && password;

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await adminService.signIn({
                email,
                password
            });

            saveAuthToken(token);
            navigate("/admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (e) {
            const error = e as Error;
            setIsFormSubmitting(false);
            toast.error(error.message);
        }
    };
    return (
        <AuthWrapper imageUrl={samarkand} pageTitle="Sign In">
            <Form onSubmit={signIn}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isformSubmittable}
                >
                    Sign In
                </Button>
            </Form>
            <ActionLinks>
                <AuthActionLink
                    hintText="Don't have an account?"
                    linkTo="../admin/sign-up"
                    linkText="Sign Up"
                />
                <AuthActionLink
                    hintText="Forgot password?"
                    linkTo="../admin/forgot-password"
                    linkText="Get Help"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { Signin as AdminSignin };

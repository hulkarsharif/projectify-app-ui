import { AuthActionLink, AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import { teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocalStorage, useStore } from "../../../hooks";

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
    align-items: center;
`;
const TeamMemberSignin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { setItem, getItem } = useLocalStorage();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const isFormSubmittable = email && password;

    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const { token } = await teamMemberService.signIn({
                email,
                password
            });
            saveAuthToken(token);
            navigate("/team-member/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);

                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={samarkand} pageTitle="Sign In">
            <Form onSubmit={signin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Sign In
                </Button>
            </Form>
            <ActionLinks>
                <AuthActionLink
                    linkText="Forgot Password?"
                    linkTo="../team-member/forgot-password"
                />
                <AuthActionLink
                    hintText="Have not created password yet?"
                    linkText="Create Password"
                    linkTo="../team-member/create-password"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};
export { TeamMemberSignin };

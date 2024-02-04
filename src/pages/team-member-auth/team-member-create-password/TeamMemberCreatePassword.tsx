import { AuthActionLink, AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import flatIronBuilding from "../../../assets/image/flatIronBuilding.jpg";
import styled from "styled-components";
import { teamMemberService } from "../../../api";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);
`;

const StyledEmailInput = styled(Input)`
    grid-column: 1/3;
`;

const StyledButton = styled(Button)`
    grid-column: 1/3;
`;
const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable = email && password && passwordConfirm;

    const createPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inviteToken = searchParams.get("inviteToken");
        try {
            setIsFormSubmitting(true);

            await teamMemberService.createPassword(
                {
                    email,
                    password,
                    passwordConfirm
                },
                inviteToken as string
            );
            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
            setPasswordConfirm("");

            navigate("/team-member/sign-in");
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper
            imageUrl={flatIronBuilding}
            pageTitle="Create Password"
            switchLayout
        >
            <Form onSubmit={createPassword} noValidate>
                <StyledEmailInput
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
                <Input
                    type="password"
                    placeholder="Confirm password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />

                <StyledButton
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Create Password
                </StyledButton>
            </Form>

            <AuthActionLink
                hintText="Already have an account?"
                linkText="Sign In"
                linkTo="../team-member/sign-in"
            />
        </AuthWrapper>
    );
};

export { TeamMemberCreatePassword };

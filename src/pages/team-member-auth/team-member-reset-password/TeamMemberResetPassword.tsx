import { useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { teamMemberService } from "../../../api";
import { AuthWrapper, AuthActionLink } from "../../components";
import { Input, Button } from "../../../design-system";
import resetPasswordImg from "../../../assets/image/resetPasswordImg.jpg";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
    margin-bottom: var(--space-40);
`;

const TeamMemberResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");
    const navigate = useNavigate();

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable = password && passwordConfirm;

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await teamMemberService.resetPassword(
                password,
                passwordConfirm,
                passwordResetToken as string
            );

            setIsFormSubmitting(false);
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/team-member/sign-in");
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper pageTitle="Update Password?" imageUrl={resetPasswordImg}>
            <Form onSubmit={resetPassword} noValidate>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Reset My Password
                </Button>
            </Form>
            <AuthActionLink
                hintText="An other email?"
                linkText="Try again"
                linkTo="../team-member/forgot-password"
            />
        </AuthWrapper>
    );
};

export { TeamMemberResetPassword };

import { Input, Button } from "../../../design-system";
import { useState } from "react";

import resetPasswordImg from "../../../assets/image/resetPasswordImg.jpg";
import { PasswordWrapper } from "../../components/password-wrapper/Password.Wrapper";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const AdminResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [searchParams] = useSearchParams();
    const resetPasswordToken = searchParams.get("resetPasswordToken");

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };
    const handleOnChangeConfirmPassword = (value: string) => {
        setConfirmPassword(value);
    };

    const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPassword, confirmPassword);
    };

    const Form = styled.form`
        width: 100%;

        display: grid;
        gap: var(--space-20);
    `;

    return (
        <PasswordWrapper pageTitle="Reset Password" imageUrl={resetPasswordImg}>
            <Form onSubmit={resetPassword} noValidate>
                <Input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleOnChangeConfirmPassword}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Reset My Password
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { AdminResetPassword };

import { useState } from "react";
import { Input, Button, Toaster } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import flatIronBuilding from "../../../assets/image/flatIronBuilding.jpg";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { admin } from "../../../api";
import toast from "react-hot-toast";
import { useCounter } from "../../../App";

const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;
const AdminResetPassword = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");
    const [counter, setCounter] = useCounter(200, 5);

    const navigate = useNavigate();

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await admin.resetPassword(
                password,
                passwordConfirm,
                passwordResetToken as string
            );

            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/admin/sign-in");
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper
                imageUrl={flatIronBuilding}
                pageTitle="Reset Password"
                switchLayout
            >
                <button onClick={setCounter}>{counter}</button>
                <Form onSubmit={resetPassword}>
                    <button onClick={setCounter}>{counter}</button>
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
                        placeholder="New Password Confirmation"
                        value={passwordConfirm}
                        onChange={handleOnChangePasswordConfirm}
                        shape="rounded"
                        size="lg"
                    />

                    <Button color="primary" size="lg" shape="rounded">
                        Reset Password
                    </Button>
                </Form>
                <AuthActionLink
                    hintText="Get Instructions"
                    linkText="Forget password"
                    linkto="../admin/forgot-password"
                />
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { AdminResetPassword };

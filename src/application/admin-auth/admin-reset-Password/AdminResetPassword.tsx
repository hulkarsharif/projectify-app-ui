import { useState } from "react";
import { Input, Button, Toaster } from "design-system";
import { AuthWrapper, AuthActionLink } from "application/components";
import flatIronBuilding from "assets/image/flatIronBuilding.jpg";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { adminService } from "../../../api";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);
    /* margin-bottom: var(--space-40); */
`;
const AdminResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
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
            const response = await adminService.resetPassword(
                password,
                passwordConfirm,
                passwordResetToken as string
            );

            setIsFormSubmitting(false);
            setPassword("");
            setPasswordConfirm("");

            const toastId = toast.success(response.message);
            setTimeout(() => {
                navigate("/admin/sign-in");
                toast.remove(toastId);
            }, 2000);
        } catch (e) {
            const error = e as Error;
            toast.error(error.message);

            setIsFormSubmitting(false);
        }
    };

    return (
        <>
            <AuthWrapper
                imageUrl={flatIronBuilding}
                pageTitle="Reset Password"
                switchLayout
            >
                <Form onSubmit={resetPassword}>
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

                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        // disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Reset Password
                    </Button>
                </Form>
                <AuthActionLink
                    hintText="Get Instructions"
                    linkText="Forget password"
                    linkTo="../admin/forgot-password"
                />
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { AdminResetPassword };

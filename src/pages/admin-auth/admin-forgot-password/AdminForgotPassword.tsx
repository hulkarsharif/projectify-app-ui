import { Input, Button, Toaster } from "../../../design-system";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

import flatIronBuilding from "../../../assets/image/flatIronBuilding.jpg";
import { adminService } from "../../../api";
import { AuthWrapper } from "../../components";

const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--space-20);
`;
const AdminForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const isFormSubmittable = email;

    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);
            const response = await adminService.forgetPassword(email);

            setIsFormSubmitting(false);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper
                imageUrl={flatIronBuilding}
                pageTitle="Forgot Password"
                switchLayout
            >
                <Form onSubmit={getInstructions}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                    />

                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Get Instructions
                    </Button>
                </Form>
            </AuthWrapper>
            <Toaster />
        </>
    );
};
export { AdminForgotPassword };

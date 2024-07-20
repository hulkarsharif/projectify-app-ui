import { Button, Input, Toaster } from "design-system";
import { useState } from "react";
import toast from "react-hot-toast";
import flatIronBuilding from "assets/image/flatIronBuilding.jpg";
import { adminService } from "api";
import { AuthActionLink, AuthWrapper } from "application/components";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);

    svg {
        color: red;
    }
`;
const StyledPreferredNameInput = styled(Input)`
    grid-column: 1 / 3;
`;
const StyledEmailInput = styled(Input)`
    grid-column: 1 / 3;
`;
const StyledButton = styled(Button)`
    grid-column: 1 / 3;
`;
const AdminSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [preferredName, setPreferredName] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };
    const handleOnChangePreferredName = (value: string) => {
        setPreferredName(value);
    };
    const handleOnChangeCompany = (value: string) => {
        setCompany(value);
    };
    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };
    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable =
        firstName &&
        lastName &&
        email &&
        password &&
        passwordConfirm &&
        company &&
        position;

    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            const response = await adminService.signUp({
                firstName,
                lastName,
                email,
                password,
                preferredName: preferredName
            });
            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setPreferredName("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");

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
                pageTitle="Sign Up"
                switchLayout={false}
            >
                <Form onSubmit={createAccount}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleOnChangeFirstName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleOnChangeLastName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />

                    <StyledPreferredNameInput
                        type="text"
                        placeholder="Preferred First Name"
                        value={preferredName}
                        onChange={handleOnChangePreferredName}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />

                    <StyledEmailInput
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
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={handleOnChangePasswordConfirm}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={handleOnChangeCompany}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={handleOnChangePosition}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                    />
                    <StyledButton
                        color="primary"
                        size="lg"
                        shape="rounded"
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Sign Up
                    </StyledButton>
                </Form>

                <AuthActionLink
                    linkText="Sign In"
                    hintText="Already have an account?"
                    linkTo="../admin/sign-in"
                />
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { AdminSignup };

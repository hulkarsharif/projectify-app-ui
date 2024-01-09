import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import flatIronBuilding from "../../../assets/image/flatIronBuilding.jpg";
import { admin } from "../../../api";
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

const StyledPreferredEmail = styled(Input)`
    grid-column: 1 / 3;
`;

const StyledButton = styled(Button)`
    grid-column: 1 / 3;
`;
const AdminSignUp = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [preferredName, setPreferredName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isFormSubmiting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };
    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };
    const handleOnChangeName = (value: string) => {
        setPreferredName(value);
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
    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
            await admin.signUp({
                firstName,
                lastName,
                email,
                password,
                preferredName: preferredName
            });

            setFirstName("");
            setLastName("");
            setEmail("");
            setPreferredName("");
            setPassword("");
            setPasswordConfirm("");
        } catch (error) {}
        setIsFormSubmitting(false);
        setIsError(true);
    };

    return (
        <AuthWrapper
            imageUrl={flatIronBuilding}
            pageTitle="Sign Up"
            switchLayout={true}
        >
            <Form onSubmit={createAccount}>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <StyledPreferredNameInput
                    type="text"
                    placeholder="Preferred First Name"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <StyledPreferredEmail
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <Input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmiting}
                />
                <StyledButton
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={isFormSubmiting}
                >
                    Sign Up
                </StyledButton>
            </Form>
        </AuthWrapper>
    );
};

export { AdminSignUp };

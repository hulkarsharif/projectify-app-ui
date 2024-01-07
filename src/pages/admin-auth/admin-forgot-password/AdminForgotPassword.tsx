import { Input, Button } from "../../../design-system";
import { useState } from "react";
import styled from "styled-components";

import lock from "../../../assets/image/lock.jpg";
import { PasswordWrapper } from "../../components/password-wrapper/Password.Wrapper";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;
const AdminForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const sendInstruction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper pageTitle="Forgot Password" imageUrl={lock}>
            <Form onSubmit={sendInstruction} noValidate>
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
                    fullWidth={true}
                >
                    Get Instructions
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { AdminForgotPassword };

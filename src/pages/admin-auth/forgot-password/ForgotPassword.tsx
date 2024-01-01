import { Input, Button } from "../../../design-system";
import { useState } from "react";
import "./ForgotPassword.css";
import lock from "../../../assets/images/lock.jpg";
import { PasswordWrapper } from "../../components/auth-wrapper/password-wrapper/Password.Wrapper";

const ForgotPassword = () => {
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
            <form
                onSubmit={sendInstruction}
                className="forgot-password"
                noValidate
            >
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
            </form>
        </PasswordWrapper>
    );
};

export { ForgotPassword };

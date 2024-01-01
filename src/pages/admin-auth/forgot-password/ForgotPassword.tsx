import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
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
        <PasswordWrapper
            pageTitle="Forgot Password"
            imagePath={lock}
            btnText="Get Instructions"
        >
            <form onSubmit={sendInstruction}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
            </form>
        </PasswordWrapper>
    );
};

export { ForgotPassword };

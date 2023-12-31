import { AuthWrapper } from "../../components";
import { Button, Input } from "../../../design-system";
import { useState } from "react";
import "./ForgotPassword.css";
import lock from "../../../assets/images/lock.jpg";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <AuthWrapper imageUrl="none" pageTitle="Forgot Password">
            <form className="forgot-password" onSubmit={createAccount}>
                <img src={lock} alt="Lock" className="lock-image" />

                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="forgot-password__email"
                />

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="instruction-button"
                >
                    Get Instructions
                </Button>
            </form>
        </AuthWrapper>
    );
};

export { ForgotPassword };

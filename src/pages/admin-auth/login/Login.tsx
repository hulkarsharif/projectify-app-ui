import { AuthWrapper } from "../../components";
import { Button, Input, Checkbox } from "../../../design-system";
import { useState } from "react";
import "./Login.css";
import flatIronBuilding from "../../../assets/images/samarkand.jpeg";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememeberMe] = useState<boolean>(false);

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };
    const handleOnChangeRememberMe = (checked: boolean) => {
        setRememeberMe(checked);
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, rememberMe);
    };

    return (
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Projectify">
            <form className="login" onSubmit={createAccount}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    className="login-password"
                />
                <Checkbox
                    label="Remember me"
                    checked={rememberMe}
                    onChange={handleOnChangeRememberMe}
                />
                <a href="/forgot-password" color="primary">
                    Forgot Password?
                </a>

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login-button"
                >
                    Login
                </Button>
            </form>
        </AuthWrapper>
    );
};

export { Login };

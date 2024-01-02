import { Input, Button } from "../../../design-system";
import { useState } from "react";
import "./UpdatePassword.css";
import updatePassword from "../../../assets/images/updatePassword.jpg";
import { PasswordWrapper } from "../../components/password-wrapper/Password.Wrapper";

const UpdatePassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };
    const handleOnChangeConfirmPassword = (value: string) => {
        setConfirmPassword(value);
    };

    const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPassword, confirmPassword);
    };

    return (
        <PasswordWrapper pageTitle="Update Password" imageUrl={updatePassword}>
            <form
                onSubmit={resetPassword}
                className="update-password"
                noValidate
            >
                <Input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={handleOnChangeConfirmPassword}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Reset My Password
                </Button>
            </form>
        </PasswordWrapper>
    );
};

export { UpdatePassword };

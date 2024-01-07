import { Link } from "react-router-dom";

// import { useState } from "react";
// import { Toggle } from "./design-system";

const App = () => {
    // const [value, setValue] = useState<boolean>(false);
    // const handleOnToggle = (value: boolean) => {
    //     setValue(value);
    // };
    // return <(
    //     <div style={{ padding: "300px" }}>
    //         <Toggle value={value} onToggle={handleOnToggle} />
    //     </div>
    // );>
    return (
        <>
            <h1>You are at Home </h1>
            <Link to="admin/sign-up">Sign Up</Link>
            <Link to="admin/sign-in">Sign n</Link>
            <Link to="admin/forgot-password">Forgot password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <Link to="platform/projects">Reset Password</Link>
        </>
    );
};

export { App };

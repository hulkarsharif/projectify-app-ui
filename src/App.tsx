import { useState, useId } from "react";

import { Button, Typography, Input, Label } from "./design-system";
const App = () => {
    const [show, setShow] = useState(false);
    const emailId = useId();

    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert("submitted")}>
                <Input
                    type="email"
                    placeholder="Email"
                    size="sm"
                    shape="rounded"
                    labelText="Email"
                    hintMessage="This is your password"
                />
                <Input
                    placeholder="About you"
                    size="lg"
                    type="textarea"
                    shape="rounded"
                    labelText="Tell us about yourself"
                />
                <Button color="primary" fullWidth>
                    Submit
                </Button>
            </form>

            {show && <p>Hello</p>}
        </div>
    );
};

<button type="submit"></button>;

export { App };

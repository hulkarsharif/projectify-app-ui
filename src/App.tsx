import { useState } from "react";

import { Button, Typography } from "./design-system";
const App = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert("submitted")}>
                <input />
                <Button>Submit</Button>
            </form>
            {show && <p>Hello</p>}
        </div>
    );
};

<button type="submit"></button>;
export { App };

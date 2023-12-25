import { Button, Typography } from "./design-system";
// import { Button } from "./design-system/Button";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>
            <Button>Test</Button>
            <Button size="md" color="primary">
                Test
            </Button>
            <Button size="lg" color="primary">
                Test
            </Button>
            <Button size="md" color="danger" shape="rounded">
                Welcome to Tyspscript1
            </Button>
            <Button size="lg" color="danger" shape="circle">
                Welcome to Tyspscript-2
            </Button>
        </div>
    );
};

export { App };

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
    LinearProgress,
    ProgressColor,
    Toaster,
    Typography
} from "design-system";
import { adminService } from "api";
import { AuthActionLink } from "application/components";

const Page = styled.main`
    height: 100vh;
    padding: var(--spacing-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    row-gap: var(--space-20);
`;

const AdminAccountActivation = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [progressColor, setProgressColor] = useState<ProgressColor>("green");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("Activating Account");
    const activationToken = searchParams.get("activationToken");

    if (!activationToken) {
        navigate("/admin/forget-password");
    }

    useEffect(() => {
        const incrementProgress = () => {
            setProgress((prev) => (prev < 100 ? prev + 1 : prev));
        };
        let interval: NodeJS.Timeout | string | number | undefined;
        interval = setInterval(incrementProgress, 75);

        let timeOutId: NodeJS.Timeout | string | number | undefined =
            setTimeout(() => {
                if (activationToken) {
                    adminService.activeAccount(activationToken)
                    .then((data) => {
                        clearInterval(interval);
                        setProgress(100);
                        setMessage("Account Activated");
                    });
                    .catch((e) => {
                        const err = e as Error;
                        setError(true);
                        clearInterval(interval);
                        setProgress(0);
                        setMessage("Account Activation Failed");
                        setProgressColor("red");
                        toast.error(err.message);
                    });
                }
            },300);
            return () => {
                clearTimeout(timeoutId);
                clearInterval(interval);
            };
        }, []);
        return (
            <Page>
                <Container>
                    <Typography variant="h6">{message}</Typography>
                    <LinearProgress
                        value={progress}
                        color={progressColor}
                        shape="rounded"
                        size="lg"
                        error={error}
                    />
                    {progress === 100 && !error && (
                        <AuthActionLink
                            hintText="Let's get things done"
                            linkText="Sign in"
                            linkTo="../admin/sign-in"
                        />
                    )}
                </Container>
                <Toaster />
            </Page>
        );
    };
    
    export { AdminAccountActivation };
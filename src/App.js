import { useEffect } from "react";
import { admin } from "./api";
import { Typography, TypographyProps } from "./design-system";

const App = () => {
    useEffect(() => {
        admin
            .forgotPassword("sharipovah01@gmail.com")
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Typography variant={TypographyProps.variant.h2}>Hello</Typography>
            <Typography variant={TypographyProps.variant.subtitleLg}>
                Hello
            </Typography>
        </>
    );
};

export default App;

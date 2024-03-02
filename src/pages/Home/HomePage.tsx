import React from "react";
import { TopNavigation } from "./Section/Navigation/Top-navigation";
import styled from "styled-components";

const Base = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    font-size: 0;
    background-color: #a3c6e4;
`;

const HomePage = () => {
    return (
        <Base>
            <h1>Get the best for your team</h1>
            <TopNavigation />
        </Base>
    );
};

export { HomePage };

import React from "react";
import { TopNavigation } from "./Section/Navigation/Top-navigation";
import styled from "styled-components";
import { Features } from "./Section/features/Features";
import SubscriptionPlans from "./subscription/subscriptionCard/SubscriptionPlans";
import Clients from "./clients/Clients";
import Footer from "./footer/footer";
import Demo from "./demo/Demo";
import Contact from "./contact/Contact";

const Base = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    font-size: 0;
`;

const HomePage = () => {
    return (
        <>
            <Base>
                <h1>Get the best for your team</h1>
                <TopNavigation />
                <Features />
                <SubscriptionPlans />
                <Clients />
                <Demo />
                <Contact />
                <Footer />
            </Base>
        </>
    );
};

export { HomePage };

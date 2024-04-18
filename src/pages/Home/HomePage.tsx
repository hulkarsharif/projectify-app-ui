import React from "react";
import { TopNavigation } from "./Section/Navigation/Top-navigation";
import styled from "styled-components";
import { Features } from "./Section/features/Features";
import SubscriptionPlans from "./subscription/subscriptionCard/SubscriptionPlans";
import Clients from "./clients/Clients";
import Footer from "./footer/footer";
import Demo from "./demo/Demo";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Brands from "./brands/Brands";

const HomePage = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Brands />
            <Features />
            <SubscriptionPlans />
            <Clients />
            <Demo />
            <Contact />
            <Footer />
        </>
    );
};

export { HomePage };

import React from "react";
import { TopNavigation } from "./Section/Navigation/Top-navigation";
import { Features } from "./Section/features/Features";
import Clients from "./clients/Clients";
import Footer from "./footer/footer";
import Demo from "./demo/Demo";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Brands from "./brands/Brands";
import { SubscriptionPlans } from "./subscribePlan/SubscriptionPlans";

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

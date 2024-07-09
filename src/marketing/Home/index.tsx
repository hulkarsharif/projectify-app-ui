import { TopNavigation } from "./Sections/Navigation/Top-navigation";
import { Hero } from "./Sections/hero/Hero";
import { Clients } from "./Sections/clients/Clients";
import { Features } from "./Sections/features/Features";
import { Pricing } from "./Sections/pricing/Pricing";

export const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Clients />
            <Features />
            <Pricing />
        </>
    );
};

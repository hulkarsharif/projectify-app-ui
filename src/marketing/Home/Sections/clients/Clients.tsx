import styled from "styled-components";
import { Container, SectionRightAndLeftPadding } from "marketing/components";

import googleLogo from "assets/logos/google.svg";
import amazonLogo from "assets/logos/amazon.svg";
import airbnbLogo from "assets/logos/airbnb.svg";
import shopifyLogo from "assets/logos/shopify.svg";
import creativeCloudLogo from "assets/logos/creative-cloud.svg";

const ClientsBase = styled.section`
    padding-top: var(--space-32);
    padding-bottom: var(--space-32);
    ${SectionRightAndLeftPadding}
`;

const ClientsLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: var(--space-48);
    padding: var(--space-32) 0;
`;

export const Clients = () => {
    return (
        <ClientsBase>
            <Container>
                <ClientsLayout>
                    <img src={googleLogo} alt="Google" />
                    <img src={airbnbLogo} alt="Airbnb" />
                    <img src={creativeCloudLogo} alt="Creative Cloud" />
                    <img src={shopifyLogo} alt="Shopify" />
                    <img src={amazonLogo} alt="Amazon" />
                </ClientsLayout>
            </Container>
        </ClientsBase>
    );
};

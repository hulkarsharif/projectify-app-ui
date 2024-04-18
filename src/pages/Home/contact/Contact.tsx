import React from "react";
import { Typography, Logo, Icon } from "../../../design-system";
import map from "../Images/map.png";
import { useEffect } from "react";
import { Container, SectionBase } from "../components";
import styled from "styled-components";

const ContactSection = styled(SectionBase)``;

const ContactSectionContainer = styled(Container)`
    display: grid;
    gap: var(--space-30);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "logo contact map";

    @media screen and (max-width: 55em) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "logo logo"
            "contact map";
    }
    @media screen and (max-width: 30em) {
        display: flex;
        flex-direction: column;
        gap: var(--space-30);
    }
`;

const ContactLeftLogoWrapper = styled.div`
    grid-area: logo;
    grid-row: 1;
    grid-column: 1 / 2;

    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 55em) {
        grid-row: 1;
        grid-column: 1 / 3;
        gap: var(--space-30);
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 30em) {
        display: flex;
        flex-direction: column;
        gap: var(--space-10);
    }
`;
const Description = styled(Typography)`
    width: 23ch;
    white-space: wrap;

    @media screen and (max-width: 55em) {
        width: 100%;
    }
`;

const ContactInfoWrapper = styled.div`
    grid-area: contact;
    grid-row: 1;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    @media screen and (max-width: 55em) {
        grid-row: 2;
        grid-column: 1 / 2;
        gap: var(--space-20);
    }

    @media screen and (max-width: 30em) {
        grid-row: 3;
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
`;

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--space-16);
    line-height: var(--space-20);

    @media screen and (max-width: 55em) {
        width: 100%;
    }
`;

const SocialMediaWrapper = styled.div`
    :not(:last-child) {
        margin-right: var(--space-20);
    }
`;

const SocialIcon = styled(Icon)`
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
`;

const MapWrapper = styled.div`
    grid-area: map;
    grid-column: 3 / 4;
    grid-row: 1;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-32);
    border: 0;

    @media screen and (max-width: 55em) {
        grid-row: 2;
        grid-column: 2 / 3;
    }

    @media screen and (max-width: 30em) {
        height: 25rem;
    }
`;

const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactSectionContainer>
                <ContactLeftLogoWrapper>
                    <Link href="#home">
                        <Logo size="sm" layout="horizontal" />
                    </Link>

                    <Description variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </Description>
                </ContactLeftLogoWrapper>
                <ContactInfoWrapper>
                    <ContactWrapper>
                        <Icon iconName="phone" />
                        <Link href="tel:+1(555) 555-11234">
                            +1 (555)555 1234
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon iconName="email-purple" />
                        <Link href="mailto:info@projectify.com">
                            info@projectify.com
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <Icon iconName="location" />
                        <Link
                            href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                            target="_blank"
                        >
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </ContactWrapper>

                    <SocialMediaWrapper>
                        <Link href="https://www.facebook.com/" target="_blank">
                            <SocialIcon iconName="facebook" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank">
                            <SocialIcon iconName="twitter" />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <SocialIcon iconName="instagram" />
                        </Link>
                    </SocialMediaWrapper>
                </ContactInfoWrapper>
                <MapWrapper>
                    {" "}
                    <img src={map} alt="Map" />
                </MapWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export default Contact;

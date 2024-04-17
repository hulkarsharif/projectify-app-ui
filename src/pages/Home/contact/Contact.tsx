import React from "react";
import { Typography, Logo, Icon } from "../../../design-system";
import map from "../Images/map.png";
import { Container, SectionBase } from "../components";
import styled from "styled-components";

const ContactSection = styled(SectionBase)``;

const ContactSectionContainer = styled(Container)`
    display: flex;
    gap: var(--space-30);
`;

const ContactLeftLogo = styled.div`
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    display: flex;
    gap: var(--space-30);
    width: calc((100% - 6rem) / 3);
`;

const ContactText = styled(Typography)`
    width: 70%;
`;

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
    width: calc((100% -6rem) / 3);
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
`;
const ContactIcon = styled(Icon)`
    width: var(--space-20);
    height: var(--space-20);
`;
const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--space-16);
    line-height: var(--space-20);
`;

const SocialMediWrapper = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const SocialIcon = styled(Icon)`
    cursor: pointer;
    width: var(--space-32);
    height: var(--space-32);
`;

const ImageWrapper = styled.div`
    width: calc((100% - 6rem) / 3);
    height: auto;
    border-radius: var(--border-radius-32);
    border: 0;
`;

const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactSectionContainer>
                <ContactLeftLogo>
                    <Link href="#home">
                        <Logo size="sm" layout="horizontal" />
                    </Link>

                    <ContactText variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </ContactText>
                </ContactLeftLogo>
                <SocialWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="phone" />
                        <Link href="tel:+1(555) 555-11234">
                            +1 (555)555 1234
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="email-purple" />
                        <Link href="mailto:info@projectify.com">
                            info@projectify.com
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="location" />
                        <Link
                            href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                            target="_blank"
                        >
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </ContactWrapper>

                    <SocialMediWrapper>
                        <Link href="https://www.facebook.com/" target="_blank">
                            <SocialIcon iconName="facebook" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank">
                            <SocialIcon iconName="twitter" />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <SocialIcon iconName="instagram" />
                        </Link>
                    </SocialMediWrapper>
                </SocialWrapper>
                <ImageWrapper>
                    {" "}
                    <img src={map} alt="Map" />
                </ImageWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export default Contact;

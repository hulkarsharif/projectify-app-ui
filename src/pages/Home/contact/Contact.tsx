import React from "react";
import { Typography, Logo, Icon } from "../../../design-system";
import map from "../Images/map.png";
import LayoutWrapper from "../components/LayoutWrapper";
import styled from "styled-components";

const ContactSection = styled(LayoutWrapper)``;

const ContactSectionBase = styled.div`
    display: flex;
    gap: var(--space-30);
    padding: var(--space-100) 0;
`;

const ContactLeft = styled.div`
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    display: flex;
    gap: var(--space-30);
    width: calc(100% - 37rem);
`;

const ContactText = styled(Typography)`
    width: 50%;
    font-weight: var(--font-weight-700);
`;

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    width: calc(100% - 37rem);
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-20);
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
    /* display: flex;
    width: calc(100% - 37rem); */
`;

const Image = styled.img`
    width: 37rem;
`;
const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactSectionBase>
                <ContactLeft>
                    <Link href="#home">
                        <Logo size="sm" layout="horizontal" />
                    </Link>

                    <ContactText variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </ContactText>
                </ContactLeft>
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
                    <Link
                        href="https://www.google.com/maps/dir/40.721471,-73.7644025/205+Allen+St,+New+York,+NY+10002/@40.7379299,-74.0472305,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2598474c10bcf:0xd62d514f22a03f04!2m2!1d-73.9890753!2d40.7227487?entry=ttu"
                        target="_blank"
                    >
                        <Image src={map} alt="office location" />
                    </Link>
                </ImageWrapper>
            </ContactSectionBase>
        </ContactSection>
    );
};

export default Contact;

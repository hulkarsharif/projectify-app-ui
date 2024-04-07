import styled from "styled-components";

import { Typography } from "../../../design-system";

const FooterSection = styled.footer`
    border: 0.1rem solid var(--jaguar-100);
    padding: 0 2rem;

    @media (min-width: 1275px) {
        padding: 0 15rem;
    }

    @media (min-width: 1720px) {
        padding: 0 37.5rem;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: var(--space-24) 0;

    @media (min-width: 850px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
const CopyrightText = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-14);

    @media (max-width: 451px) {
        font-size: var(--space-14);
    }

    @media (min-width: 850px) {
        margin-bottom: 0;
    }
`;

const NavWrapper = styled.nav``;

const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-28);

    @media (min-width: 450px) {
        gap: var(--space-48);
    }
`;

const List = styled.li`
    cursor: pointer;
    list-style-type: none;
`;
const FooterLink = styled.a`
    color: var(--primary-500);
    font-size: var(--space-16);
    line-height: var(--space-24);
    font-weight: 500;

    &:visited {
        color: var(--primary-500);
    }

    /* @media (min-width: 450px) {
        font-size: var(--space-16);
    } */
`;
const Footer = () => {
    return (
        <FooterSection id="footer">
            <FooterContainer>
                <CopyrightText variant="paragraphSM">
                    ©Projectify 2024 - All Rights Reserved
                </CopyrightText>
                <NavWrapper>
                    <UnorderedList>
                        <List>
                            <FooterLink>Careers</FooterLink>
                        </List>
                        <List>
                            <FooterLink>FAQ</FooterLink>
                        </List>
                        <FooterLink href="https://www.google.com/maps/dir/40.721471,-73.7644025/205+Allen+St,+New+York,+NY+10002/@40.7379299,-74.0472305,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2598474c10bcf:0xd62d514f22a03f04!2m2!1d-73.9890753!2d40.7227487?entry=ttu">
                            Sitemap
                        </FooterLink>
                        <List>
                            <FooterLink>Privacy Policy</FooterLink>
                        </List>
                    </UnorderedList>
                </NavWrapper>
            </FooterContainer>
        </FooterSection>
    );
};
export default Footer;

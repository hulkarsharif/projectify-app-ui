import styled from "styled-components";
import { Typography } from "../../../design-system";
import { Container } from "../../components";

const FooterSection = styled.footer`
    padding: var(--space-20) var(--space-100);
    border-top: 1px solid var(--jaguar-200);
`;

const FooterContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 50em) {
        flex-direction: column;
        gap: var(--space-12);
    }
`;
const CopyrightText = styled(Typography)`
    color: var(--jaguar-500);
    /* margin-bottom: var(--space-14); */
`;

const NavWrapper = styled.nav``;

const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-48);
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
                <CopyrightText variant="paragraph-sm">
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

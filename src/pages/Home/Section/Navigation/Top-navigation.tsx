import styled from "styled-components";
import { NavigationLink } from "./Links";
import { Button, Logo } from "../../../../design-system";
import { Container, SectionSidePadding } from "../../components";
import { MobileNavigation } from "./MobileNavigation";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import burgerIcon from "../../Images/burgerIcon.svg";
import LoginModal from "../../components/LoginModal";

const links = [
    { text: "About", link: "#about" },
    { text: "Testimonials", link: "#testimonials" },
    { text: "Contact", link: "#contact" }
];

const Base = styled.nav`
    display: flex;
    align-items: center;
    height: 7.2rem;
    padding: 0 var(--space-100);

    ${SectionSidePadding}
`;

const TopNavigationContainer = styled(Container)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLinks = styled.div`
    display: flex;
    gap: var(--space-40);

    @media screen and (max-width: 60em) {
        & {
            display: none;
        }
    }
`;

const MobileActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
`;
const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);

    @media screen and (max-width: 60em) {
        & {
            display: none;
        }
    }
`;

const LogoLink = styled(Link)``;

const MenuButton = styled(Button)`
    display: none;
    padding: 0;
    background-color: transparent;

    @media screen and (max-width: 60em) {
        & {
            display: flex;
        }
    }
    img {
        height: 3rem;
        width: 3rem;
    }
`;

const NavLink = styled.a`
    color: var(--jaguar-900);
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
    font-weight: var(--font-weight-500);
`;
const MobileButton = styled(Button)`
    margin-right: auto;
    width: 11rem;
`;

const TopNavigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const [showSignInModal, setShowSignInModal] = useState(false);

    const closeModal = () => {
        setShowMobileMenu(false);
    };

    return (
        <Base>
            <TopNavigationContainer>
                <LogoLink to="/">
                    <Logo size="sm" layout="horizontal" />
                </LogoLink>
                <NavigationLinks>
                    {links.map((link, index) => (
                        <NavLink key={index} href={link.text}>
                            {link.text}
                        </NavLink>
                    ))}
                </NavigationLinks>
                <Buttons>
                    <Button
                        variant="outlined"
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => navigate("admin/sign-up")}
                    >
                        Sign Up
                    </Button>
                    <Button
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => setShowSignInModal(true)}
                    >
                        Log In
                    </Button>
                </Buttons>
                <MenuButton
                    variant="contained"
                    size="sm"
                    onClick={() => setShowMobileMenu(true)}
                >
                    <img src={burgerIcon} alt="" />
                </MenuButton>
            </TopNavigationContainer>
            <MobileNavigation
                show={showMobileMenu}
                onClose={() => setShowMobileMenu(false)}
            >
                <MobileActions>
                    {links.map((link, index) => (
                        <NavLink key={index} href={link.link}>
                            {link.text}
                        </NavLink>
                    ))}

                    <MobileButton
                        variant="outlined"
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {
                            navigate("admin/sign-up");
                        }}
                    >
                        Sign Up
                    </MobileButton>
                    <MobileButton
                        size="md"
                        shape="rounded"
                        color="primary"
                        onClick={() => {
                            setShowSignInModal(true);
                        }}
                    >
                        Sign In
                    </MobileButton>
                </MobileActions>
            </MobileNavigation>
            <LoginModal show={showSignInModal} closeModal={closeModal} />
        </Base>
    );
};

export { TopNavigation };

import styled from "styled-components";
import { NavigationLink } from "./Links";
import { Button, Logo } from "../../../../design-system";

const links = [
    { text: "About", link: "https://google.com" },
    { text: "Testimonial", link: "https://info.com" },
    { text: "Contact Us", link: "" }
];

const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 192rem;
    padding: 1rem 15.2rem;
`;

const NavigationLinks = styled.header`
    display: flex;
    gap: var(--space-40);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const TopNavigation = () => {
    return (
        <HeaderBase>
            <Logo size="sm" layout="horizontal" />
            <NavigationLinks>
                {links.map((link, idx) => (
                    <NavigationLink
                        key={idx}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </NavigationLinks>
            <Buttons>
                <Button
                    variant="outlined"
                    shape="rounded"
                    size="md"
                    color="primary"
                    onClick={() => {}}
                >
                    Sign Up
                </Button>
                <Button
                    shape="rounded"
                    size="md"
                    color="primary"
                    onClick={() => {}}
                >
                    Sign In
                </Button>
            </Buttons>
        </HeaderBase>
    );
};

export { TopNavigation };

import styled from "styled-components";
import { Button, Typography } from "design-system";
import {
    Container,
    SectionRightAndLeftPadding,
    SectionSubHeading
} from "marketing/components";
import heroImg from "assets/images/hero.png";

const HeroBase = styled.header`
    background-color: var(--violet-12);
    ${SectionRightAndLeftPadding}
`;

const HeroContent = styled.div`
    padding-top: var(--space-88);
    display: flex;
    flex-direction: column;
    align-items: center;

    .sectionSubHeading {
        margin-bottom: var(--space-32);
        max-width: 65rem;
    }
`;

const DemoButton = styled(Button)`
    margin-bottom: var(--space-48);
`;

const HeroImg = styled.img`
    width: 100%;
`;

export const Hero = () => {
    return (
        <HeroBase>
            <Container>
                <HeroContent>
                    <Typography variant="h1" align="center">
                        Unleash the Power of Projectify
                    </Typography>
                    <SectionSubHeading>
                        Projectify is your all-in-one solution, crafted to
                        simplify your project management journey and supercharge
                        your success
                    </SectionSubHeading>
                    <DemoButton
                        color="primary"
                        variant="contained"
                        size="lg"
                        shape="circle"
                    >
                        Try a Demo
                    </DemoButton>

                    <HeroImg src={heroImg} alt="Projectify Kanban Board" />
                </HeroContent>
            </Container>
        </HeroBase>
    );
};

import styled from "styled-components";
import { Typography, Button } from "../../../design-system";
import LayoutWrapper from "../components/LayoutWrapper";

import members from "../Images/TFrame.svg";
import completed from "../Images/completed.svg";

const HeroSectionBase = styled(LayoutWrapper)``;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroHeading = styled(Typography)`
    color: var(--jaguar-900);
`;

const HeroDescription = styled(Typography)`
    width: 60%;
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
`;

const DemoButton = styled(Button)`
    max-width: 17rem;
    margin-bottom: var(--space-40);
`;

const HeroImageWrapper = styled.div`
    position: relative;
`;
const HeroImage = styled.img`
    width: 100%;
    height: auto;
`;

const GreenIcon = styled.img`
    position: absolute;
    top: 40%;
    right: 0;
`;
const Hero = () => {
    return (
        <HeroSectionBase>
            <HeroContainer>
                <HeroHeading variant="h1" align="center">
                    Unleash the Power of Projectify
                </HeroHeading>
                <HeroDescription variant="paragraphMD" align="center">
                    Projectify is your all-in-one solution, crafted to simplify
                    your project management journey and supercharge your
                    success.
                </HeroDescription>
                <DemoButton
                    size="md"
                    color="primary"
                    shape="rounded"
                    onClick={() => {}}
                >
                    Try a Demo
                </DemoButton>

                <HeroImageWrapper>
                    <HeroImage src={members} alt="Kanban Board" />
                    <GreenIcon src={completed} alt="Green" />
                </HeroImageWrapper>
            </HeroContainer>
        </HeroSectionBase>
    );
};

export default Hero;

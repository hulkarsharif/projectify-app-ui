import styled from "styled-components";
import { Typography, Button } from "../../../design-system";
import { SectionBase, Container } from "../components";

import members from "../Images/TFrame.svg";
import completed from "../Images/completed.svg";
import google from "../Images/googleImage.svg";
import march from "../Images/march.svg";
import team from "../Images/2.svg";

const HeroSectionBase = styled(SectionBase)`
    padding-bottom: 0;
`;

const HeroContainer = styled(Container)`
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

const GreenBadge = styled.img`
    position: absolute;
    top: 40%;
    right: -4%;
    width: 12.5%;
`;

const GoogleImage = styled.img`
    position: absolute;
    bottom: 2%;
    right: -8%;
    width: 27%;
    max-width: 100%;
    height: auto;
`;

const DataImage = styled.img`
    position: absolute;
    top: 18%;
    left: -3%;
    width: 11%;
`;

const Team = styled.img`
    position: absolute;
    bottom: 12%;
    left: -12%;
    width: 25%;
    height: auto;
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
                    <GreenBadge src={completed} alt="Green" />
                    <GoogleImage src={google} alt="" />
                    <DataImage src={march} alt="" />
                    <Team src={team} alt="" />
                </HeroImageWrapper>
            </HeroContainer>
        </HeroSectionBase>
    );
};

export default Hero;

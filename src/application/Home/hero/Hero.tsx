import styled from "styled-components";
import { Typography, Button } from "../../../design-system";
import { SectionBase, Container } from "../components";

import members from "../Images/HeroImage/TFrame.svg";
import completed from "../Images/HeroImage/completed.svg";
import google from "../Images/HeroImage/googleImage.svg";
import march from "../Images/HeroImage/march.svg";
import team from "../Images/HeroImage/2.svg";

const HeroSectionBase = styled(SectionBase)`
    padding-top: var(--space-100);
    padding-bottom: 0;
`;

const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroHeading = styled(Typography)`
    color: var(--jaguar-900);

    @media screen and (max-width: 70em) {
        font-size: var(--font-size-56);
        line-height: var(--line-height-64);
    }

    @media screen and (max-width: 60em) {
        font-size: var(--font-size-48);
        line-height: var(--line-height-56);
    }

    @media screen and (max-width: 50em) {
        font-size: var(--font-size-40);
        line-height: var(--line-height-48);
    }

    @media screen and (max-width: 40em) {
        font-size: var(--font-size-32);
        line-height: var(--line-height-40);
    }
`;

const HeroDescription = styled(Typography)`
    max-width: calc(var(--font-size-64) * 12);
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);

    @media screen and (max-width: 70em) {
        max-width: calc(var(--font-size-56) * 12);
    }

    @media screen and (max-width: 60em) {
        max-width: calc(var(--font-size-48) * 12);
    }

    @media screen and (max-width: 35em) {
        font-size: var(--font-size-16);
        line-height: var(--line-height-20);
    }
`;

const DemoButton = styled(Button)`
    max-width: 17rem;
    margin-bottom: var(--space-40);
    margin: 0 auto;
`;

const HeroImageWrapper = styled.div`
    position: relative;
    z-index: 2;
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

    @media (max-width: 90em) {
        top: 70%;
        right: 14%;
    }
`;

const GoogleImage = styled.img`
    position: absolute;
    bottom: 2%;
    right: -8%;
    width: 27%;
    max-width: 100%;
    height: auto;

    @media (max-width: 90em) {
        bottom: 40%;
        right: 2%;
    }
`;

const DataImage = styled.img`
    position: absolute;
    top: 18%;
    left: -3%;
    width: 11%;

    @media (max-width: 90em) {
        top: 49%;
        left: 4%;
    }
`;

const Team = styled.img`
    position: absolute;
    bottom: 12%;
    left: -12%;
    width: 25%;
    height: auto;

    @media (max-width: 90em) {
        bottom: -10%;
        left: 14%;
    }
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

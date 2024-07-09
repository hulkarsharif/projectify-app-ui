import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import { data } from "./data";
import {
    Container,
    Card,
    SectionBase,
    SectionSubHeading
} from "../../../components";
import background from "../../Images/DemoImage/bgEffect-demo.png";

const FeaturesBase = styled(SectionBase)`
    background-color: var(--white);

    .sectionHeadings {
        margin-bottom: var(--space-48);
    }
`;

const FeatureCards = styled.div`
    display: flex;
    gap: var(--space-32);
    flex-wrap: wrap;

    .featureCard {
        flex-basis: calc((100% - var(--space-64)) / 3);
    }
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-50);
    text-align: center;
`;

export const Features = () => {
    return (
        <FeaturesBase>
            <Container>
                <div className="sectionHeadings">
                    <SectionHeading>Get the best for your team</SectionHeading>
                    <SectionSubHeading>
                        Our solution provides simple yet effective project
                        management.
                    </SectionSubHeading>
                </div>

                <FeatureCards>
                    {data.map((item) => {
                        return (
                            <Card
                                iconName={item.iconName}
                                color={item.color}
                                title={item.data.title}
                                text={item.data.text}
                                className="featureCard"
                            />
                        );
                    })}
                </FeatureCards>
            </Container>
        </FeaturesBase>
    );
};

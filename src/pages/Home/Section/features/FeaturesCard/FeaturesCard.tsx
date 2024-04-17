import styled, { css } from "styled-components";
import { FeaturesIconProps } from "./data";
import { Typography, Icon } from "../../../../../design-system";

export const FeaturesCardBase = styled.div<{ $cardBackgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: var(--space-40) var(--space-8) var(--space-8);
    border-radius: var(--border-radius-24);
    box-shadow: var(--shadow-xs);
    border: none;
    border-radius: var(--space-40);
    background-color: ${(props) => props.$cardBackgroundColor};
`;

const IconWrapper = styled.div<{
    $iconWrapperBackgroundColor: string;
    $iconWrapperBorderColor: string;
}>`
    padding: var(--space-24);
    margin: var(--space-40);
    border: 1px solid ${(props) => props.$iconWrapperBorderColor};
    border-radius: var(--border-radius-32);
    background-color: ${(props) => props.$iconWrapperBackgroundColor};
`;

const FeatureIcon = styled(Icon)`
    width: 6rem;
    height: 6rem;

    @media screen and (max-width: 40em) {
        width: 4.6rem;
        height: 4.6rem;
    }
`;
const FeaturesTextWrapper = styled.div`
    padding: var(--space-24);
    border-radius: var(--border-radius-32);
    background-color: var(--white);
    height: 100%;
`;

const FeatureTitle = styled(Typography)`
    margin-bottom: var(--space-8);
`;

const FeatureDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeaturesCard: React.FC<FeaturesIconProps> = ({
    iconName,
    title,
    description,
    cardBackgroundColor,
    iconWrapperBackgroundColor,
    iconWrapperBorderColor
}) => {
    return (
        <FeaturesCardBase $cardBackgroundColor={cardBackgroundColor}>
            <IconWrapper
                $iconWrapperBackgroundColor={iconWrapperBackgroundColor}
                $iconWrapperBorderColor={iconWrapperBorderColor}
            >
                <FeatureIcon iconName={iconName} />
            </IconWrapper>
            <FeaturesTextWrapper>
                <FeatureTitle variant="paragraphLG" weight="semibold">
                    {title}
                </FeatureTitle>
                <FeatureDescription variant="subtitleLG" weight="medium">
                    {description}
                </FeatureDescription>
            </FeaturesTextWrapper>
        </FeaturesCardBase>
    );
};

export { FeaturesCard };

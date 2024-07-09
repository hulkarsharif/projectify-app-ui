import styled from "styled-components";
import {
    BaseCard,
    BaseCardColor,
    IconCard,
    IconCardColor,
    IconName,
    Typography
} from "../../design-system";

interface CardProps {
    iconName: IconName;
    color: BaseCardColor;
    title: string;
    text: string;
    className?: string;
}

const CardBase = styled(BaseCard)`
    padding: var(--space-40) var(--space-8) var(--space-8) var(--space-8);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--space-48);

    .cardTextWrapper {
        padding: var(--space-24);
        row-gap: var(--space-8);
    }
`;

export const Card: React.FC<CardProps> = ({
    iconName,
    color,
    title,
    text,
    className
}) => {
    return (
        <CardBase borderRadius="x-large" color={color} className={className}>
            <IconCard
                iconName={iconName}
                color={color as IconCardColor}
                size="lg"
                shape="rounded"
            />

            <BaseCard borderRadius="large" className="cardTextWrapper">
                <Typography variant="paragraph-lg" weight="bold">
                    {title}
                </Typography>
                <Typography
                    variant="paragraph-sm"
                    weight="normal"
                    color="neutral"
                >
                    {text}
                </Typography>
            </BaseCard>
        </CardBase>
    );
};

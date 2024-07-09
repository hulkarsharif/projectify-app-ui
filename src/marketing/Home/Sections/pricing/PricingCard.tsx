import styled from "styled-components";
import { BaseCard, Button, Icon, IconCard, Typography } from "design-system";
import { PricingCardData, BillingTermType } from "./types";

const PricingCardBase = styled(BaseCard)`
    padding: var(--space-28);
    row-gap: var(--space-24);

    &.mainCard {
        h4,
        p {
            color: var(--white);
        }
    }

    .iconCard {
        margin: 0 auto;
    }
`;

const PricingHeader = styled.div`
    .planName {
        margin-bottom: var(--space-4);
    }
`;

const Price = styled.div`
    display: flex;
    column-gap: var(--space-8);
    align-items: center;
    justify-content: center;
`;

const PlanDetails = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    margin-bottom: auto;
`;
const PlanDetail = styled.li`
    display: flex;
    align-items: center;
    column-gap: var(--space-8);

    .green {
        fill: var(--green-500);
    }

    .sunglow {
        fill: var(--sunglow-500);
    }
`;

interface PricingCardProps extends PricingCardData {
    billingTerm: BillingTermType;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    plan,
    design,
    billingTerm
}) => {
    return (
        <PricingCardBase
            hasBorder={design.mainCard.hasBorder}
            color={design.mainCard.color}
            className={design.mainCard.className}
            borderRadius="large"
        >
            <Typography variant="subtitle-sm" align="center" weight="semibold">
                FOR {plan.targetGroup.toUpperCase()}
            </Typography>
            <IconCard
                iconName={design.iconCard.iconName}
                color={design.iconCard.color}
                size="lg"
                shape="rounded"
            />
            <PricingHeader>
                <Typography
                    variant="h4"
                    weight="semibold"
                    align="center"
                    className="planName"
                >
                    {plan.planName}
                </Typography>
                <Price>
                    <Typography variant="paragraph-lg" weight="bold">
                        ${plan.pricing[billingTerm].price}
                    </Typography>
                    <Typography
                        variant="paragraph-sm"
                        weight="medium"
                        color="neutral"
                    >
                        /{plan.pricing[billingTerm].label}
                    </Typography>
                </Price>
            </PricingHeader>
            <PlanDetails>
                {plan.details.map((detail) => {
                    return (
                        <PlanDetail>
                            <Icon
                                iconName="check"
                                size={24}
                                className={design.mainCard.checkMarkColor}
                            />
                            {
                                <>
                                    <Typography
                                        variant="paragraph-sm"
                                        weight="medium"
                                    >
                                        {detail.key}
                                        {detail.value && ":"}
                                    </Typography>
                                    {detail.value && (
                                        <Typography
                                            variant="paragraph-sm"
                                            weight="bold"
                                        >
                                            {detail.value}
                                        </Typography>
                                    )}
                                </>
                            }
                        </PlanDetail>
                    );
                })}
            </PlanDetails>
            <Button
                color={design.mainCard.buttonColor}
                variant={design.mainCard.buttonVariant}
                shape="rounded"
                size="lg"
            >
                {design.mainCard.buttonText}
            </Button>
        </PricingCardBase>
    );
};

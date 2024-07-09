import { useState } from "react";
import styled from "styled-components";
import { Switch, Typography } from "design-system";
import {
    Container,
    SectionBase,
    SectionHeading,
    SectionSubHeading
} from "marketing/components";
import { BillingTermType } from "./types";
import { data } from "./data";
import { PricingCard } from "./PricingCard";

const PricingBase = styled(SectionBase)`
    background-color: var(--jaguar-25);

    .sectionHeading span {
        color: var(--violet-500);
    }
`;

const PricingCards = styled.div`
    display: flex;
    gap: var(--space-32);

    & > .baseCard {
        flex-basis: calc((100% - var(--space-64)) / 3);
    }
`;

const BillingTermSwitcher = styled.div`
    display: flex;
    column-gap: var(--space-24);
    align-items: center;
    width: max-content;
    margin: var(--space-16) auto var(--space-48) auto;
`;

const BillingTerm = styled.div`
    cursor: pointer;
`;

const billingTerms = {
    monthly: false,
    yearly: true
};

export const Pricing = () => {
    const [billingTerm, setBillingTerm] = useState<BillingTermType>("monthly");

    const handlePlanChange = (value: boolean) => {
        if (value) {
            setBillingTerm("yearly");
        } else {
            setBillingTerm("monthly");
        }
    };

    const selectBillingTerm = (term: BillingTermType) => {
        setBillingTerm(term);
    };

    return (
        <PricingBase>
            <Container>
                <SectionHeading>
                    Find the
                    <span> Right Plan </span>
                </SectionHeading>
                <SectionSubHeading>
                    Flexible pricing options for startups and big teams
                </SectionSubHeading>
                <BillingTermSwitcher>
                    <BillingTerm
                        className="billingTerm"
                        onClick={() => selectBillingTerm("monthly")}
                    >
                        <Typography
                            color={
                                billingTerm === "monthly"
                                    ? "neutral-strong"
                                    : "neutral"
                            }
                            variant="paragraph-sm"
                            weight="medium"
                        >
                            Billed monthly
                        </Typography>
                    </BillingTerm>

                    <Switch
                        checked={billingTerms[billingTerm]}
                        id="billingterm"
                        onSwitch={handlePlanChange}
                        shape="circle"
                    />
                    <BillingTerm
                        className="billingTerm"
                        onClick={() => selectBillingTerm("yearly")}
                    >
                        <Typography
                            color={
                                billingTerm === "yearly"
                                    ? "neutral-strong"
                                    : "neutral"
                            }
                            variant="paragraph-sm"
                            weight="medium"
                        >
                            Billed yearly
                        </Typography>
                    </BillingTerm>
                </BillingTermSwitcher>
                <PricingCards>
                    {data.map((plan) => {
                        return (
                            <PricingCard
                                billingTerm={billingTerm}
                                design={plan.design}
                                plan={plan.plan}
                            />
                        );
                    })}
                </PricingCards>
            </Container>
        </PricingBase>
    );
};

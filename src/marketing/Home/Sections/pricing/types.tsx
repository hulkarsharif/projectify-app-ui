import {
    BaseCardColor,
    ButtonColor,
    ButtonVariant,
    IconCardColor,
    IconName
} from "design-system";

interface PricingPlan {
    targetGroup: string;
    planName: string;
    pricing: {
        monthly: {
            label: "month";
            price: number;
        };
        yearly: {
            label: "year";
            price: number;
        };
    };
    details: { key: string; value?: number | string }[];
}

interface PricingCardDesign {
    iconCard: {
        iconName: IconName;
        color: IconCardColor;
    };

    mainCard: {
        color?: BaseCardColor;
        className?: string;
        hasBorder: boolean;
        buttonColor: ButtonColor;
        buttonVariant: ButtonVariant;
        buttonText: string;
        checkMarkColor: string;
    };
}

export interface PricingCardData {
    plan: PricingPlan;
    design: PricingCardDesign;
}

export type BillingTermType = "monthly" | "yearly";

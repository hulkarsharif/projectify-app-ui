import { PricingCardData } from "./types";

export const data: PricingCardData[] = [
    {
        plan: {
            targetGroup: "Individuals",
            planName: "Starter",
            pricing: {
                monthly: {
                    label: "month",
                    price: 9.99
                },
                yearly: {
                    label: "year",
                    price: 99.99
                }
            },
            details: [
                { key: "Projects", value: 10 },
                { key: "Users", value: 10 },
                { key: "Storage", value: "10GB" },
                { key: "Email Support" }
            ]
        },
        design: {
            iconCard: {
                iconName: "send",
                color: "primary-light"
            },
            mainCard: {
                hasBorder: true,
                buttonColor: "primary",
                buttonVariant: "contained",
                buttonText: "Try free for 7 days",
                checkMarkColor: "green"
            }
        }
    },
    {
        plan: {
            targetGroup: "Small Teams",
            planName: "Professional",
            pricing: {
                monthly: {
                    label: "month",
                    price: 29.99
                },
                yearly: {
                    label: "year",
                    price: 299.99
                }
            },
            details: [
                { key: "Projects", value: "Unlimited" },
                { key: "Users", value: 25 },
                { key: "Storage", value: "50GB" },
                { key: "Priority Email Support" },
                { key: "Advanced Analytics" }
            ]
        },
        design: {
            iconCard: {
                iconName: "plane-filled",
                color: "sunglow"
            },
            mainCard: {
                className: "mainCard",
                color: "primary",
                hasBorder: false,
                buttonColor: "primary",
                buttonVariant: "outlined",
                buttonText: "Try free for 15 days",
                checkMarkColor: "sunglow"
            }
        }
    },
    {
        plan: {
            targetGroup: "Large Teams",
            planName: "Enterprice",
            pricing: {
                monthly: {
                    label: "month",
                    price: 99.99
                },
                yearly: {
                    label: "year",
                    price: 999.99
                }
            },
            details: [
                { key: "Projects", value: "Unlimited" },
                { key: "Users", value: "Scalable" },
                { key: "Storage", value: "Scalable" },
                { key: "27/7 Priority Support" },
                { key: "Dedicated Account Manager" },
                { key: "Single Sign-On (SSO)" },
                { key: "Custom Integrations" }
            ]
        },
        design: {
            iconCard: {
                iconName: "rocket",
                color: "primary-light"
            },
            mainCard: {
                hasBorder: true,
                buttonColor: "primary",
                buttonVariant: "contained",
                buttonText: "Try free for 30 days",
                checkMarkColor: "green"
            }
        }
    }
];

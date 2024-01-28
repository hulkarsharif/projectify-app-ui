import { IconName } from "../Icon";

type BadgeColor =
    | "primary"
    | "sunglow"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "grey";

type BadgeShape = "rounded" | "circle";

type BadgeVariant = "contained" | "outlined";

type BadgePropsBase = {
    label: string;
    icon?: BadgeIcon;
    shape?: BadgeShape;
    color?: BadgeColor;
    status?: boolean;
    variant?: BadgeVariant;
    className?: string;
    iconName?: IconName;
};

type ExlusiveBadgeProps =
    | { status?: BadgePropsBase["status"]; icon?: never; iconName?: never }
    | { icon?: BadgePropsBase["icon"]; status?: never; iconName?: never }
    | { iconName?: BadgePropsBase["iconName"]; status?: never; icon?: never };

export type BadgeProps = BadgePropsBase & ExlusiveBadgeProps;

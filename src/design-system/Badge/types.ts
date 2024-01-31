import { IconName } from "../Icon";

type BadgeColors =
    | "violet"
    | "orange"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "gray";

type BadgeShape = "rounded" | "circle";

type BadgeVariant = "contained" | "outlined";

type BadgePropsBase = {
    label: string;
    icon?: React.ReactNode;
    shape?: BadgeShape;
    color?: BadgeColors;
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
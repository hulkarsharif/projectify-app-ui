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
    shape?: BadgeShape;
    color?: BadgeColors;
    status?: boolean;
    variant?: BadgeVariant;
    className?: string;
    iconName?: IconName;
};

type ExlusiveBadgeProps =
    | { status?: BadgePropsBase["status"]; iconName?: never }
    | { iconName?: BadgePropsBase["iconName"]; status?: never };

export type BadgeProps = BadgePropsBase & ExlusiveBadgeProps;

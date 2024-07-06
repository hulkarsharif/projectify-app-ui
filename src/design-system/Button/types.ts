import { To } from "react-router-dom";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rounded" | "circle";
export type ButtonColor = "primary" | "secondary" | "danger" | "success";
export type ButtonVariant = "contained" | "outlined" | "text";
export type RenderableAs = "link" | "navLink";

export type ButtonBaseProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    fullWidth?: boolean;
    color?: ButtonColor;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
};

export type ButtonProps =
    | (ButtonBaseProps & { renderAs: RenderableAs; navigateTo: To })
    | (ButtonBaseProps & { renderAs?: never; navigateTo?: never });

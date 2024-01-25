import React, { FC } from "react";
import "./Badge.css";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";

type BadgeShape = "rounded" | "circle";
type BadgeColor =
    | "primary"
    | "sunglow"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "grey";

type BadgeVariant = "light" | "stroke";
type BadgeIcon = "flag" | "check";

type BadgeProps = {
    icon?: BadgeIcon;
    shape?: BadgeShape;
    color?: BadgeColor;
    variant?: BadgeVariant;
    className?: string;
    children?: React.ReactNode;
};

const shapeClassNames = {
    rounded: "badge-rounded",
    circle: "badge-circle"
};

const colorClassNames = {
    primary: "badge-primary",
    sunglow: "badge-sunglow",
    green: "badge-green",
    blue: "badge-blue",
    red: "badge-red",
    purple: "badge-purple",
    grey: "badge-grey"
};

const iconClassNames = {
    flag: "flag",
    check: "check"
};
const variantClassNames = {
    light: "badge-light",
    stroke: "badge-stroke"
};

const Badge: FC<BadgeProps> = (props) => {
    const { shape, color, icon, variant, className, children } = props;

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const iconClassName = icon !== undefined ? iconClassNames[icon] : "";
    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = trimWhiteSpaces(
        `badge  ${colorClassName} ${iconClassName}${shapeClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return (
        <span className={trimWhiteSpaces(finalClassNames)}>
            {icon ? <Icon iconName={icon} height="1.6" width="1.6" /> : null}
            {children}
        </span>
    );
};

export { Badge };

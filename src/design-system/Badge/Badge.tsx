import React, { FC } from "react";
import "./Badge.css";
import { trimWhiteSpaces } from "../utils";

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

type BadgeProps = {
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
    primary: "bg-primary",
    sunglow: "bg-sunglow",
    green: "bg-green",
    blue: "bg-blue",
    red: "bg-red",
    purple: "bg-purple",
    grey: "bg-grey"
};

const variantClassNames = {
    light: "bg-light",
    stroke: "bg-stroke"
};

const Badge: FC<BadgeProps> = (props) => {
    const { shape, color, variant, className, children } = props;

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = trimWhiteSpaces(
        `badge  ${colorClassName} ${shapeClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return <span className={trimWhiteSpaces(finalClassNames)}>{children}</span>;
};

export { Badge };

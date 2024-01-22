import React, { FC } from "react";
import "./StatusBadge.css";
import { trimWhiteSpaces } from "../utils";

type BadgeShape = "rounded" | "circle";
type BadgeColor = "primary" | "sunglow" | "green" | "blue" | "red" | "purple";

type BadgeVariant = "no" | "light" | "stroke";
type BadgeStatus = "ACTIVE" | "INACTIVE" | "COMPLETED" | "ARCHIVED";

type BadgeProps = {
    shape?: BadgeShape;
    color?: BadgeColor;
    variant?: BadgeVariant;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    status: BadgeStatus;
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
    purple: "bg-purple"
};

const variantClassNames = {
    no: "no",
    light: "light",
    stroke: "stroke"
};

const statusClassNames = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    COMPLETED: "COMPLETED",
    ARCHIVED: "ARCHIVED"
};

const StatusBadge: FC<BadgeProps> = (props) => {
    const { shape, color, variant, status, className, children } = props;

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";
    const colorClassName = color !== undefined ? colorClassNames[color] : "";
    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";
    const statusClassName =
        status !== undefined ? statusClassNames[status] : "";

    const finalClassNames = `badge ${colorClassName} ${shapeClassName} ${variantClassName} ${statusClassName} ${
        className || ""
    }`;

    return <span className={trimWhiteSpaces(finalClassNames)}>{children}</span>;
};

export { StatusBadge };

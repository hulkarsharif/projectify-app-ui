import React from "react";
import "./Badge.css";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";
import { BadgeProps } from "./types";

const shapeClassNames = {
    rounded: "badge-rounded",
    circle: "badge-circle"
};

const colorClassNames = {
    violet: "badge-violet",
    orange: "badge-orange",
    green: "badge-green",
    blue: "badge-blue",
    red: "badge-red",
    purple: "badge-purple",
    gray: "badge-gray"
};

const variantClassNames = {
    contained: "badge-contained",
    outlined: "badge-outlined"
};

const Badge: React.FC<BadgeProps> = ({
    label,
    shape,
    color,
    status,
    icon,
    iconName,
    variant,
    className
}) => {
    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = `badge ${colorClassName}  ${shapeClassName} ${variantClassName} ${
        className || ""
    }`;

    return (
        <div className={trimWhiteSpaces(finalClassNames)}>
            {icon && !status && !iconName ? icon : null}
            {iconName && !status && !icon ? <Icon iconName={iconName} /> : null}
            {status && !icon && !iconName ? (
                <div className="badge__status" />
            ) : null}

            <span className="badge__text">{label}</span>
        </div>
    );
};

export { Badge };

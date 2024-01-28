import React, { FC } from "react";
import "./Badge.css";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";
import { BadgeProps } from "./types";

const shapeClassNames = {
    rounded: "badge-rounded",
    circle: "badge-circle"
};

const colorClassNames = {
    primary: "badge-violet",
    sunglow: "badg-orange",
    green: "badge-green",
    blue: "badge-blue",
    red: "badge-red",
    purple: "badge-purple",
    grey: "badge-grey"
};

const iconClassNames = {
    fillFlag: "flag",
    check: "check"
};
const variantClassNames = {
    contained: "badge-contained",
    outlined: "badge-outlined"
};

const Badge: FC<BadgeProps> = (props) => {
    const { label, shape, color, status, icon, iconName, variant, className } =
        props;

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const iconClassName = icon !== undefined ? iconClassNames[icon] : "";
    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = trimWhiteSpaces(
        `badge  ${colorClassName} ${iconClassName} ${shapeClassName} ${variantClassName} ${
            className || ""
        }`
    );

    return (
        <div className={trimWhiteSpaces(finalClassNames)}>
            {icon && !status && !iconName ? icon : null}
            {iconName && !status && !iconName ? (
                <Icon iconName={iconName} />
            ) : null}
            {status && !icon && !iconName ? (
                <div className="badge__status" />
            ) : null}
            <span className="badge__text">{label}</span>
        </div>
    );
};

export { Badge };

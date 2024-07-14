import React from "react";
import sprite from "./sprite.svg";
import { IconProps } from "./types";
import { trimWhiteSpaces } from "../utils";
import "./Icon.css";

const sizeClassNames = {
    20: "icon-xsmall",
    24: "icon-small",
    36: "icon-medium",
    48: "icon-large"
};

const Icon: React.FC<IconProps> = ({ iconName, className, onClick, size }) => {
    const handleOnClick = () => {
        onClick && onClick();
    };

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const finalClassName = trimWhiteSpaces(
        `icon ${sizeClassName} ${className || ""}`
    );
    return (
        <svg
            width={size ? `${size / 10}rem` : ""}
            height={size ? `${size / 10}rem` : ""}
            className={finalClassName}
            onClick={handleOnClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };

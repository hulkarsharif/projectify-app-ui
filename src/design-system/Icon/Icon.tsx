import React from "react";
import sprite from "./sprite.svg";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({
    iconName,
    className,
    onClick,
    size = 24
}) => {
    const handleOnClick = () => {
        onClick && onClick();
    };
    return (
        <svg
            width={`${size / 10}rem`}
            height={`${size / 10}rem`}
            className={className || ""}
            onClick={handleOnClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };

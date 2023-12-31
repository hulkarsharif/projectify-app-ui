import React from "react";
import sprite from "./sprite.svg";

type IconProps = {
    iconName: string;
    className?: string;
    color?: string;
};

const Icon: React.FC<IconProps> = ({ iconName, className, color }) => {
    return (
        <svg
            height="2.4rem"
            width="2.4rem"
            className={className || ""}
            color={color}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };

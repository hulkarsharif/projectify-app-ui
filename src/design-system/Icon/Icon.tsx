import React from "react";
import sprite from "./sprite.svg";

type IconProps = {
    iconName: string;
    className?: string;
    color?: string;
    height?: string;
    width?: string;
};

const Icon: React.FC<IconProps> = ({
    iconName,
    className,
    color,
    height,
    width
}) => {
    return (
        <svg
            height={height || "2.4rem"}
            width={width || "2.4rem"}
            className={className || ""}
            color={color}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };

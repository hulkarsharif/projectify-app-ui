import React, { FC } from "react";

import { trimWhiteSpaces, getFullName } from "../utils";
import "./Avatar.css";

type AvatarSize = "sm" | "md" | "lg";
type AvatarShape = "sharp" | "rounded" | "circle";
type AvatarType = "initials" | "photo";

type AvatarProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    type?: AvatarType;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    imageUrl?: string;
};

const sizeClassNames = {
    sm: "avatar-small",
    md: "avatar-medium",
    lg: "avatar-large"
};

const shapeClassNames = {
    sharp: "avatar-sharp",
    rounded: "avatar-rounded",
    circle: "avatar-circle"
};

const typeClassNames = {
    default: "avatar-default",
    initials: "avatar-initials",
    photo: "avatar-photo"
};
const Avatar: FC<AvatarProps> = (props) => {
    const {
        size,
        shape,
        type,
        className,
        disabled,
        children,
        onClick,
        imageUrl
    } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const typeClassName = type !== undefined ? typeClassNames[type] : "";
    let modiefiedChildren: React.ReactNode = children;

    if (type === "initials") {
        const initials = getFullName(children as string);
        modiefiedChildren = <span>{initials}</span>;
    } else if (type === "photo" && imageUrl) {
        modiefiedChildren = <img src={imageUrl} alt="Avatar" />;
    }
    const finalClassNames = `avatar  ${sizeClassName} ${shapeClassName}  ${typeClassName} ${
        className || ""
    }`;

    return (
        <button
            className={trimWhiteSpaces(finalClassNames)}
            disabled={disabled}
            onClick={onClick}
        >
            {modiefiedChildren}
        </button>
    );
};

export { Avatar };

import React, { FC } from "react";
import "./StatusBadge.css";
import { trimWhiteSpaces } from "../utils";

type BadgeShape = "rounded" | "circle";

type BadgeStatus = "ACTIVE" | "INACTIVE" | "COMPLETED" | "ARCHIVED";

type BadgeProps = {
    shape?: BadgeShape;

    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    status: BadgeStatus;
};

const shapeClassNames = {
    rounded: "badge-rounded",
    circle: "badge-circle"
};

const statusClassNames = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    COMPLETED: "COMPLETED",
    ARCHIVED: "ARCHIVED"
};

const StatusBadge: FC<BadgeProps> = (props) => {
    const { shape, status, className, children } = props;

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const statusClassName =
        status !== undefined ? statusClassNames[status] : "";

    const finalClassNames = `badge  ${shapeClassName} ${statusClassName} ${
        className || ""
    }`;

    return <span className={trimWhiteSpaces(finalClassNames)}>{children}</span>;
};

export { StatusBadge };

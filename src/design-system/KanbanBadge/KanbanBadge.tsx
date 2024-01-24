import React, { FC } from "react";
import { Typography } from "../Typography";

type KanbanBadgeProps = {
    status: "TODO" | "INPROGRESS" | "DONE" | "ARCHIVED";
    dueDate: string;
};

const KanbanBadge: FC<KanbanBadgeProps> = ({ status, dueDate }) => {
    return <span></span>;
};

export { KanbanBadge };

import { trimWhiteSpaces } from "design-system/utils";
import { BaseCardProps } from "./types";
import { colorMap, borderRadiusMap } from "./classnames";
import "./BaseCard.css";

const BaseCard: React.FC<BaseCardProps> = ({
    color,
    borderRadius,
    hasBorder,
    hasShadow,
    children,
    className
}) => {
    const colorClassName = color ? colorMap[color] : "";
    const borderRadiusClassName = borderRadius
        ? borderRadiusMap[borderRadius]
        : "";
    const borderClassName = hasBorder ? "baseCard-hasBorder" : "";
    const shadowClassName = hasShadow ? "baseCard-hasShadow" : "";
    const classNames = trimWhiteSpaces(
        `baseCard ${colorClassName} ${borderRadiusClassName} ${borderClassName} ${shadowClassName} ${
            className ? className : ""
        }`
    );

    return <div className={classNames}>{children}</div>;
};

export { BaseCard };

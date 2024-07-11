import { Icon, IconSize } from "../Icon";
import { trimWhiteSpaces } from "../utils";
import { IconCardProps } from "./types";
import { colorClassNames, sizeClassNames, shapeClassNames } from "./classnames";

import "./IconCard.css";

const IconCardIconSize = {
    sm: 24,
    md: 36,
    lg: 48
};

const IconCard: React.FC<IconCardProps> = ({
    color,
    size,
    iconName,
    shape,
    className
}) => {
    const sizeClassName = sizeClassNames[size];
    const colorClassName = colorClassNames[color];
    const shapeClassName = shapeClassNames[shape];

    const classNames = trimWhiteSpaces(
        `iconCard ${sizeClassName} ${colorClassName} ${shapeClassName} ${
            className ? className : ""
        }`
    );
    const iconSize = IconCardIconSize[size];

    return (
        <div className={classNames}>
            <Icon
                iconName={iconName}
                className="iconCard-icon"
                size={iconSize as IconSize}
            />
        </div>
    );
};

export { IconCard };

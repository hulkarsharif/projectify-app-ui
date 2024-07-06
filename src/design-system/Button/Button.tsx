import { FC, forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ButtonProps } from "./types";
import { trimWhiteSpaces } from "../utils";
import "./Button.css";

const sizeClassNames = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large"
};

const shapeClassNames = {
    rounded: "btn-rounded",
    circle: "btn-circle"
};

const colorClassNames = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    success: "btn-success"
};

const variantClassNames = {
    contained: "btn-contained",
    outlined: "btn-outlined",
    text: "btn-text"
};

const Button: FC<ButtonProps> = forwardRef(
    (props, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const {
            size,
            shape,
            fullWidth,
            color,
            variant,
            disabled,
            className,
            children,
            onClick,
            renderAs,
            navigateTo
        } = props;

        const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

        const shapeClassName =
            shape !== undefined ? shapeClassNames[shape] : "";

        const colorClassName =
            color !== undefined ? colorClassNames[color] : "";

        const variantClassName =
            variant !== undefined ? variantClassNames[variant] : "";
        const fullWidthClassName = fullWidth ? "btn-full-width" : "";

        const finalClassNames = trimWhiteSpaces(
            `btn ${colorClassName} ${sizeClassName} ${shapeClassName} ${fullWidthClassName} ${variantClassName} ${
                className || ""
            }`
        );

        const renderFinalElement = () => {
            if (renderAs === "link" && navigateTo) {
                return (
                    <Link className={finalClassNames} to={navigateTo}>
                        {children}
                    </Link>
                );
            } else if (renderAs === "navLink") {
                return <NavLink to={navigateTo}>{children}</NavLink>;
            }

            return (
                <button
                    className={finalClassNames}
                    disabled={disabled}
                    onClick={onClick}
                    ref={ref}
                >
                    {children}
                </button>
            );
        };

        return renderFinalElement();
    }
);

export { Button };

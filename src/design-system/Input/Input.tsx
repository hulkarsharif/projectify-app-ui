import React from "react";
import { InputProps } from "./types";

import { trimWhiteSpaces } from "../utils";
import { Label } from "../Label";
import "./Input.css";

const sizeClassNames = {
    sm: "input-small",
    md: "input-medium",
    lg: "input-large"
};

const shapeClassNames = {
    rounded: "input-rounded",
    circle: "input-circle"
};

const Input: React.FC<InputProps> = (props) => {
    const {
        type,
        error,
        disabled,
        placeholder,
        shape,
        size,
        hintMessage,
        labelText,
        className,
        id,
        onChange,
        value
    } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const errorClassName = error ? "input-error" : "";
    const textareaClassName = type === "textarea" ? "input-textarea" : "";
    const finalClassNames = trimWhiteSpaces(
        `input  ${sizeClassName} ${shapeClassName} ${errorClassName} ${textareaClassName}`
    );
    const hintMessageClass = trimWhiteSpaces(
        `hint-message ${error ? "hint-message--error" : ""}`
    );
    const handleOnChange = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-wrapper ${className || ""}`}>
            {labelText ? (
                <Label htmlFor={id} disabled={disabled} error={error}>
                    {labelText}
                </Label>
            ) : null}
            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder}
                    className={finalClassNames}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                />
            ) : (
                <input
                    className={finalClassNames}
                    type={type || "text"}
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id}
                    onChange={handleOnChange}
                    value={value}
                />
            )}

            {hintMessage ? (
                <span className={hintMessageClass}>{hintMessage}</span>
            ) : null}
        </div>
    );
};

export { Input };

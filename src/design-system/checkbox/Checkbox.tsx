import React, { FC } from "react";
import "./Checkbox.css";
import { Label } from "../Label";
import { CheckboxShape, CheckboxProps } from "./types";
import { Icon, IconName } from "../Icon";

const shapeClassNames = {
    rounded: "checkbox__custom--rounded",
    circle: "checkbox__custom--circle"
};

const iconNames: {
    [Key in CheckboxShape]: { indeterminate: IconName; checked: IconName };
} = {
    rounded: {
        indeterminate: "minus",
        checked: "check"
    },
    circle: {
        indeterminate: "minus",
        checked: "check"
    }
};

type CheckboxColor = "primary" | "danger" | "success";

type CheckboxProps = {
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    color?: CheckboxColor;
    label: React.ReactNode;
    onChange?: (checked: boolean) => void;
};

const colorClassNames = {
    primary: "btn-primary",
    danger: "btn-danger",
    success: "btn-jaguar"
};

const Checkbox: FC<CheckboxProps> = (props) => {
    const { className, color, disabled, checked, label, onChange } = props;

    const colorClassName = color !== undefined ? colorClassNames[color] : "";
    const finalClassNames = `checkbox ${colorClassName}${className || ""}`;

    const handleCheckboxChange = () => {
        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <label className={finalClassNames}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                disabled={disabled}
            />
            <span className="checkmark"></span>
            <span className="label">{label}</span>
        </label>
    );
};

export { Checkbox };

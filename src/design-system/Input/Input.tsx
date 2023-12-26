import React from "react";

type InputProps = {
    type?: "email" | "password" | "tel";
    disabled?: boolean;
    error?: boolean;
    shape?: "rounded" | "circle";
    placeholder: string;
    className?: string;
    hintMessage?: string;
};

const Input: React.FC<InputProps> = (props) => {
    const { type, placeholder } = props;

    if (type === "textarea") {
        return <textarea />;
        return <input type={type} placeholder={placeholder} />;
    }
};

export { Input };

import React from "react";
import { positionClassNames } from "./classnames";
import "./Modal.css";
import { trimWhiteSpaces } from "../utils";
import Xicon from "../../pages/Home/Images/closeIcon.svg";

interface ModalProps {
    show: boolean;
    position: "center" | "right";
    children: React.ReactNode;
    className?: string;
    closeIcon?: string;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    show,
    position,
    className,
    children,
    closeIcon,
    onClose
}) => {
    const positionClassName = positionClassNames[position];
    const finalOverlayClassNames = trimWhiteSpaces(
        `modal-overlay ${positionClassName} ${className || ""}`
    );
    return (
        <>
            {show && (
                <div className={finalOverlayClassNames}>
                    <div className="modal">
                        {closeIcon && (
                            <button onClick={onClose} className="close-btn">
                                <img
                                    className="close-icon"
                                    src={Xicon}
                                    alt="Close"
                                />
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export { Modal };

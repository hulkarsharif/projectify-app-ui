import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
};

const StyledLink = styled(Link)`
    color: var(--primary-500);
    font-weight: var(--font-weight-600);
`;

const NavigationLink: React.FC<PropsType> = ({ linkText, linkTo }) => {
    return (
        <StyledLink to={linkTo} className="paragraph-md">
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };

import { Link } from "react-router-dom";
import { Typography } from "../../../design-system";
import styled from "styled-components";
import React from "react";

type PropsType = {
    linkText: string;
    hintText?: string;
    linkTo: string;
};

const ActionLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-8);
`;

const StyledLink = styled(Link)`
    color: var(--primary-500);
    font-weight: var(--font-weight-600);
`;

const AuthActionLink: React.FC<PropsType> = ({
    hintText,
    linkText,
    linkTo
}) => {
    return (
        <ActionLinkWrapper>
            <Typography variant="paragraph-sm" weight="medium" color="neutral">
                {hintText}
            </Typography>
            <StyledLink to={linkTo} className="paragraph-sm">
                {linkText}
            </StyledLink>
        </ActionLinkWrapper>
    );
};

export { AuthActionLink };

import { Link } from "react-router-dom";
import { Typography } from "../../design-system";
import styled from "styled-components";
import React from "react";

type PropsType = {
    linkText: string;
    hintText?: string;
    linkto: string;
};

const ActionLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-8);
`;

const HintTextTypography = styled(Typography)`
    color: var(--jaguar-400);
`;
const StyledLink = styled(Link)`
    color: var(--primary-500);
`;

const AuthActionLink: React.FC<PropsType> = ({
    hintText,
    linkText,
    linkto
}) => {
    return (
        <ActionLinkWrapper>
            <HintTextTypography variant="paragraphSM" weight="medium">
                {hintText}
            </HintTextTypography>
            <StyledLink to={linkto} className="paragraph-sm">
                {linkText}
            </StyledLink>
        </ActionLinkWrapper>
    );
};

export { AuthActionLink };

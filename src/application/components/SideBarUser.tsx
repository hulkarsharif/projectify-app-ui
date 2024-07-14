import React from "react";
import styled from "styled-components";
import { Icon, Typography, Avatar } from "../../design-system";

const UserBase = styled.div`
    width: calc(100% - 1.6rem);
    margin: 0 auto;
    background-color: var(--jaguar-25);
    border-radius: var(--border-radius-16);
    padding: var(--space-12) var(--space-12) var(--space-12) var(--space-8);

    display: flex;
    align-items: center;
    gap: var(--space-12);
    cursor: pointer;

    svg {
        fill: var(--jaguar-500);
    }
`;

const UserDetails = styled.div`
    margin-right: auto;
`;

type UserDetailType = {
    firstName: string;
    lastName: string;
    imageUrl?: string;
    email: string;
};

type UserProps = {
    details: UserDetailType;
    onClick?: () => void;
};

const SideBarUser: React.FC<UserProps> = ({ details, onClick }) => {
    return (
        <UserBase onClick={onClick}>
            <Avatar
                firstName={details.firstName}
                lastName={details.lastName}
                imageUrl={details.imageUrl}
                size="lg"
                shape="rounded"
            />
            <UserDetails>
                <Typography variant="display-sm" weight="medium">
                    {details.firstName} {details.lastName}
                </Typography>
            </UserDetails>
            <Typography variant="paragraph-sm" weight="medium">
                {details.firstName}
                {details.lastName}
            </Typography>
            <Typography variant="subtitle-sm" weight="medium" color="neutral">
                {details.email}
            </Typography>
            <Icon iconName="chevron-right" />
        </UserBase>
    );
};

export { SideBarUser };

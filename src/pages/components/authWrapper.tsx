import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { Logo } from "../../design-system";

type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
    pageTitle: string;
    switchLayout?: boolean;
};

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
`;

const Authform = styled.section<{ $switchLayout?: boolean }>`
    grid-row: 1 / 2;
    grid-column: ${(props) => (props.$switchLayout ? "2 / 3" : "1 / 2")};
    padding: var(--space-50);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-50);
    align-items: center;
    flex-basis: 57rem;
`;

const AuthImageWrapper = styled.section<{ $switchLayout?: boolean }>`
    grid-column: 1 / 2;
    grid-column: ${(props) => (props.$switchLayout ? "1 / 2" : "2 / 3")};
    padding: var(--space-50);
`;
const AuthImage = styled.img.attrs({ alt: "Samarkand" })`
    height: 100%;
    width: 100%;
    border-radius: var(--space-50);
    object-fit: cover;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
`;

const AuthWrapper: FC<AuthWrapperProps> = ({
    imageUrl,
    pageTitle,
    switchLayout,
    children
}) => {
    return (
        <Wrapper>
            <Authform $switchLayout={switchLayout}>
                <AuthContent>
                    <Logo layout="vertical" size="lg" customText={pageTitle} />
                    {children}
                </AuthContent>
            </Authform>
            <AuthImageWrapper $switchLayout={switchLayout}>
                <AuthImage src={imageUrl} />
            </AuthImageWrapper>
        </Wrapper>
    );
};
export { AuthWrapper };

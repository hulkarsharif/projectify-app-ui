import styled, { css } from "styled-components";

export const SectionRightAndLeftPadding = css`
    padding-right: var(--space-64);
    padding-left: var(--space-64);
`;

const SectionTopAndBottomPadding = css`
    padding-top: var(--space-64);
    padding-bottom: var(--space-64);
`;

export const SectionBase = styled.section<{ $backgroundColor?: string }>`
    background-color: ${(props) => props.$backgroundColor};
    ${SectionRightAndLeftPadding}
    ${SectionTopAndBottomPadding}
`;

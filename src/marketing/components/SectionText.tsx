import styled from "styled-components";
import { Typography } from "./../../design-system";

const SectionSubHeadingBase = styled(Typography)`
    margin-top: var(--space-12);
`;

export const SectionHeading = (props: { children: React.ReactNode }) => {
    return (
        <Typography
            variant="h5"
            weight="bold"
            align="center"
            className="sectionHeading"
        >
            {props.children}
        </Typography>
    );
};

export const SectionSubHeading = (props: { children: React.ReactNode }) => {
    return (
        <SectionSubHeadingBase
            variant="paragraph-sm"
            weight="medium"
            align="center"
            className="sectionSubHeading"
            color="neutral"
        >
            {props.children}
        </SectionSubHeadingBase>
    );
};

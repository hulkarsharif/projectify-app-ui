import styled from "styled-components";
import { Option, OptionValue, Select } from "../../../design-system";
import React from "react";

const FiltersBase = styled.section`
    display: grid;
    grid-template-columns: 20rem 20rem 1fr 20rem;
    align-items: center;
    gap: var(--space-24);
    margin-bottom: var(--space-20);

    .filter-by-status {
        grid-column: 1 / 2;
    }

    .search {
        grid-column: 2 / 3;
    }

    .filter-by-project {
        grid-column: 4 / 5;
    }
`;
const statusOptions = [
    { label: "Active", value: "ACTIVE" },
    { label: "ARCHIEVED", value: "ARCHIEVED" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Default", value: "DEFAULT" }
];

type ProjectFiltersProps = {
    status: OptionValue | undefined;
    handleSetStatus: (value: Option) => void;
};
const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    status,
    handleSetStatus
}) => {
    return (
        <FiltersBase>
            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="By Project"
                className="filter-by-project"
            />

            <Select
                value={status}
                onSelect={handleSetStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
        </FiltersBase>
    );
};

export { ProjectFilters };

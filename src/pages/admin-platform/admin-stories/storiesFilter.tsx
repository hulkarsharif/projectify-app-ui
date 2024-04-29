import styled from "styled-components";
import { Input, Option, Select } from "../../../design-system";
import { PageFilters } from "../../components/PageFilters";

type StoriesProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
};

const Filters = styled(PageFilters)`
    .status-filter {
        margin-right: auto;
    }
`;

const statusOptions = [
    { label: "Project A", value: "project a" },
    { label: "Project B", value: "project b" },
    { label: "Project C", value: "project c" },
    { label: "Project D", value: "project d" }
];
const StoriesFilter: React.FC<StoriesProps> = ({
    selectedStatus,
    setSelectedStatus,
    searchText,
    setSearchText
}) => {
    return (
        <Filters>
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="Show"
                className="status-filter"
            />
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Search..."
                shape="rounded"
                size="md"
            />
        </Filters>
    );
};

export { StoriesFilter };

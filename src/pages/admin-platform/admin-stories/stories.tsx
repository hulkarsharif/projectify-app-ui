import { useEffect, useState } from "react";
import { NoDataPlaceholder } from "../../components";
import { Icon } from "../../../design-system";
import { StoriesFilter } from "./storiesFilter";
import { Option } from "../../../design-system";
import { PageHeader } from "../../components";
import { StoryStatus } from "../../../types";

const AdminStories = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as StoryStatus);
    };

    return (
        <>
            <PageHeader
                pageTitle="Stories"
                actionButtonText="Comban view"
                actionButtonOnClick={() => {}}
            />

            <StoriesFilter
                setSelectProject={handleSetStatusFilter}
                selectProject={statusFilter}
                searchText={searchText}
                setSearchText={setSearchText}
            />
        </>
    );
};

export { AdminStories };

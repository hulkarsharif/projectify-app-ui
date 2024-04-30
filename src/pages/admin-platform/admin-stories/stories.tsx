import { useEffect, useState } from "react";
import { NoDataPlaceholder } from "../../components";
import { Icon } from "../../../design-system";
import { StoriesFilter } from "./storiesFilter";
import { Option } from "../../../design-system";
import { PageHeader } from "../../components";
import { StoryStatus } from "../../../types";
import noStory from "../../../assets/illustrations/no-story.svg";

const AdminStories = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleSetStatusFilter = (filter: Option) => {
        setStatusFilter(filter.value as StoryStatus);
    };

    return (
        <>
            <NoDataPlaceholder
                illustrationUrl={noStory}
                text="You don't have any stories yet!"
                buttonText="Add a Story"
                buttonAction={() => {}}
            ></NoDataPlaceholder>

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

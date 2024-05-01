import { useEffect, useState } from "react";
import { NoDataPlaceholder } from "../../components";
import { Icon } from "../../../design-system";
import { StoriesFilter } from "./storiesFilter";
import { Option } from "../../../design-system";
import { PageHeader } from "../../components";
import { StoryStatus } from "../../../types";
import noStory from "../../../assets/illustrations/no-story.svg";
import { CreateStoryModal } from "./CreateStoryModal";

const AdminStories = () => {
    const [showCreateStoryMOdal, setShowCreateStoryModal] = useState(false);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);
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
                buttonAction={() => setShowCreateStoryModal(true)}
            ></NoDataPlaceholder>

            <PageHeader
                pageTitle="Stories"
                actionButtonText="Comban view"
                actionButtonOnClick={() => setShowCreateStoryModal(true)}
            />

            <StoriesFilter
                setSelectProject={handleSetStatusFilter}
                selectProject={statusFilter}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <CreateStoryModal
                show={showCreateStoryMOdal}
                closeModal={() => setShowCreateStoryModal(false)}
            />
        </>
    );
};

export { AdminStories };

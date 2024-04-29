import styled from "styled-components";
import { Input, Option, Select } from "../../../design-system";
import { PageFilters } from "../../components/PageFilters";
import { useEffect, useState } from "react";
import { projectService } from "../../../api";
import { ProjectWithContributors } from "../../../types";

type StoriesProps = {
    selectProject: string;
    setSelectProject: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
};

const Filters = styled(PageFilters)`
    .status-filter {
        margin-right: auto;
    }
`;

const StoriesFilter: React.FC<StoriesProps> = ({
    selectProject,
    setSelectProject
}) => {
    const [projectOption, setProjectOption] = useState<Option[]>([]);
    const [isProjectFetching, setIsProjectFetching] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectService.getAll();
                const projects: ProjectWithContributors[] = response.data;

                const options = projects.map((project) => ({
                    label: project.name,
                    value: project.id
                }));
                setProjectOption(options);
                setIsProjectFetching(false);
            } catch (error) {
                console.error("Error fetching projects", error);
                setIsProjectFetching(false);
            }
        };
        fetchProjects();
    }, []);

    if (isProjectFetching) return null;

    return (
        <Filters>
            <Select
                value={selectProject}
                onSelect={setSelectProject}
                options={projectOption}
                shape="rounded"
                size="md"
                headerPlaceholder="Show"
                className="status-filter"
            />
        </Filters>
    );
};

export { StoriesFilter };
